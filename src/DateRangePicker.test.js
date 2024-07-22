import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateRangePicker from './DateRangePicker'

// Helper function to get a date string
const getDateString = (date) => date.toDateString()

describe('DateRangePicker Component', () => {
  test('renders the component with current month and year', () => {
    render(<DateRangePicker />)
    const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
    expect(screen.getByText(currentMonth)).toBeInTheDocument()
  })

  test('clicking a day sets start date', () => {
    render(<DateRangePicker />)
    const dayButton = screen.getByText('15') // Select a specific day to click
    fireEvent.click(dayButton)
    expect(dayButton).toHaveClass('active')
  })

  test('clicking two days sets start and end dates', () => {
    render(<DateRangePicker />)
    const dayButton1 = screen.getByText('10') // Select the start date
    const dayButton2 = screen.getByText('20') // Select the end date
    fireEvent.click(dayButton1)
    fireEvent.click(dayButton2)
    expect(dayButton1).toHaveClass('active')
    expect(dayButton2).toHaveClass('active')
  })

  test('days within the range are also active', () => {
    render(<DateRangePicker />)
    const dayButton1 = screen.getByText('10') // Select the start date
    const dayButton2 = screen.getByText('20') // Select the end date
    fireEvent.click(dayButton1)
    fireEvent.click(dayButton2)
    for (let day = 11; day < 20; day++) {
      const dayButton = screen.getByText(day.toString())
      expect(dayButton).toHaveClass('active')
    }
  })

  test('previous and next month buttons work correctly', () => {
    render(<DateRangePicker />)
    const currentMonth = new Date()
    const previousMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1).toLocaleString('default', { month: 'long', year: 'numeric' })
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1).toLocaleString('default', { month: 'long', year: 'numeric' })

    // Test previous month button
    const prevButton = screen.getByText('‹')
    fireEvent.click(prevButton)
    expect(screen.getByText(previousMonth)).toBeInTheDocument()

    // Test next month button
    const nextButton = screen.getByText('›')
    fireEvent.click(nextButton) // Back to current month
    fireEvent.click(nextButton) // Forward to next month
    expect(screen.getByText(nextMonth)).toBeInTheDocument()
  })
})
