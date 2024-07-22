function sortUserName(users) {
  users.sort((a, b) => {
    const nameA = a.firstName + a.lastName + a.customerID
    const nameB = b.firstName + b.lastName + b.customerID
    console.log({nameA, nameB})
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  return users
}

function sortByType(users) {
    const professionOrder = {
      systemAnalytics: 5,
      engineer: 4,
      productOwner: 3,
      freelancer: 2,
      student: 1,
    };
    users.sort((a, b) => {
        return professionOrder[b.profession] - professionOrder[a.profession]
    })
    return users
}