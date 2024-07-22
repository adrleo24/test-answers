// interface is used to define the structure of an object. It is specifically used in TypeScript. Example:
interface User {
  firstName: string
  lastName: string
  customerID: string
  note?: string
  profession:
    | "student"
    | "freelancer"
    | "productOwner"
    | "engineer"
    | "systemAnalytics"
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  customerID: "123",
  profession: "engineer",
}


// Enums allow a developer to define a set of named constants.
enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: DayOfWeek = DayOfWeek.Wednesday;