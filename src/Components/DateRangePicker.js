import React, { useState } from "react"
import "./DateRangePicker.css"

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const handleDateClick = (date) => {
    if (!startDate || date < startDate) {
      setStartDate(date)
      setEndDate(null)
    } else {
      setEndDate(date)
    }
  }

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    )
  }

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const renderDays = () => {
    const days = []
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const daysInCurrentMonth = getDaysInMonth(month, year)
    const daysInPreviousMonth = getDaysInMonth(month - 1, year)
    let isRange = false
    if(startDate !== null && endDate !== null){
      isRange = true
    }

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPreviousMonth - i
      days.push(
        <div key={`prev-${day}`} className="day-button non-current-month">
          {day}
        </div>
      )
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const date = new Date(year, month, day)
      let className = "day-button"
      if (date.toDateString() === new Date().toDateString()) {
        className += " today"
      }
      if (startDate && date.toDateString() === startDate.toDateString()) {
        className += " active"
      }
      if (endDate && date.toDateString() === endDate.toDateString()) {
        className += " active"
      }
      if(isRange && date > startDate && date < endDate){
        className += " active"
      }
      days.push(
        <div
          key={`current-${day}`}
          className={className}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      )
    }

    const totalDays = firstDayOfMonth + daysInCurrentMonth;
    const daysToAdd = totalDays <= 35 ? 35 - totalDays : 42 - totalDays;
    for (let day = 1; day <= daysToAdd; day++) {
      days.push(
        <div key={`next-${day}`} className="day-button non-current-month">
          {day}
        </div>
      )
    }

    return days
  }

  return (
    <div className="date-range-picker">
      <div className="header">
        <button onClick={handlePreviousMonth} className="month-nav">
          ‹
        </button>
        <span>
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={handleNextMonth} className="month-nav">
          ›
        </button>
      </div>
      <div className="days-container">{renderDays()}</div>
      <div>
        Date Range:{" "}
        {startDate !== null ? startDate.toDateString() : ""}
        ~
        {endDate !== null ? endDate.toDateString() : ""}
      </div>

      {/* {console.log(startDate)} */}
      {/* <div>selected days: {startDate.toDateString() ?? ''}  {endDate.toDateString() ?? ''} </div> */}
    </div>
  );
};

export default DateRangePicker
