const findTheOldest = function(people) {
  let oldest = people[0];
  people.map((person) => {
    const age = getAge(person);
    const oldestAge = getAge(oldest);
    if (age > oldestAge) {
      oldest = person;
    }
  });
  return oldest;
};

const getAge = function(person) {
  if (person.yearOfDeath === undefined) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
