// Array Manipulation
function incrementArray(arr: number[]) {
  return arr.map((num) => num + 1);
}

// Filtering and reducing
export interface User {
  name: string;
  isActive: boolean;
}

function filterActiveUser(user: User[]) {
  return user.filter((user) => user.isActive);
}

// Array sorting
function sortArray(arr: string[]) {
  return arr.sort();
}

// Finding duplicates
function duplicatesFinder(arr: number[]) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

function findDupllicates(arr: number[]) {
  const seen = new Set();

  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return [...duplicates];
}

// Chunking Arrays
function chuckAray<T>(arr: T[], size: number) {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export {
  incrementArray,
  chuckAray,
  duplicatesFinder,
  filterActiveUser,
  sortArray,
  findDupllicates,
};
