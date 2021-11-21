const data = [{
   name: "John",
   age: 24,
   position: "senior",
   isActive: false,
}, {
   name: "Peter",
   age: 33,
   position: "middle",
   isActive: false,
}, {
   name: "Sam",
   age: 29,
   position: "junior",
   isActive: true,
}, {
   name: "Mary",
   age: 24,
   position: "middle",
   isActive: false,
}, {
   name: "Steve",
   age: 23,
   position: "middle",
   isActive: true,
}, {
   name: "Kate",
   age: 31,
   position: "middle",
   isActive: false,
}, {
   name: "Sally",
   age: 19,
   position: "junior",
   isActive: false,
}, {
   name: "Jack",
   age: 19,
   position: "middle",
   isActive: true,
}, ];

function filterData(data, filterBy) {
   return data.filter((item) => {
      return Object.entries(filterBy).every(([key, value]) => {
         return item[key] === value;
      });
   });
}

console.log(filterData(data, {
   age: 19,
   position: "junior"
}));