import {
  chuckAray,
  duplicatesFinder,
  filterActiveUser,
  findDupllicates,
  incrementArray,
  sortArray,
  User,
} from "./array";

// arr of string
const arrStr = ["zebra", "lion", "tiger", "cheeta"];

// arr of number
const arrNum = [
  5, 3, 6, 9, 0, 1, 3, 4, 5, 2, 6, 7, 8, 9, 3, 66, 78, 346, 123, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 0,
];

const arrInc = [1, 2, 3, 4];

// arr of userObject
const arrUser: User[] = [
  {
    name: "sonu",
    isActive: false,
  },
  {
    name: "tarun",
    isActive: true,
  },
  {
    name: "shubham",
    isActive: false,
  },
  {
    name: "rahul",
    isActive: true,
  },
  {
    name: "riya",
    isActive: true,
  },
];

console.table({
  increment: incrementArray(arrInc),
  duplicates: duplicatesFinder(arrNum),
  findDupllicates: findDupllicates(arrNum),
  filterActiveUser: filterActiveUser(arrUser),
  sortArray: sortArray(arrStr),
  chunk: chuckAray(arrNum, 2),
});
