const name = "John Doe";
const age = 30;

function getUserName() {
  const fullname = "Jane Doe";
  return fullname;
}

function calculateAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

function calculateUserAge(user) {
  const currentYear = calculateAge(user.yearOfBirth);
  return currentYear - user.yearOfBirth;
}

function unsafeFunction(userInput) {
  return userInput;
}

console.log(getUserName());
console.log(calculateAge(1990));
console.log(calculateUserAge({ yearOfBirth: 1990 }));
console.log(unsafeFunction("2 + 2")); // Potencial problema de seguridad

export default {
  unsafeFunction,
};
