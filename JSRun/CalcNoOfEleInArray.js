const arr = [1, 2, 3, 3, 4, 4, 4, 2, 5,'6'];

const count = arr.reduce((counts, item)=> {
  if (counts[item])
    counts[item]++;
  else counts[item] = 1;

  return counts;
}, {});

console.log(count);
//
const people = [
  {
  name: "pramod", age: 28
},
  {
    name: "prem", age: 30
  },
  {
    name: "nani", age: 30
  },
  {
    name: "ram", age: 28
  },
  {
    name: "hanu", age: 28
  },
];
const result = people.reduce((grouped, person)=> {
  const age = person.age;
  if (grouped[age] == null) grouped[age] = [];
  grouped[age].push(person);
  return grouped;
}, {});
console.log(result);