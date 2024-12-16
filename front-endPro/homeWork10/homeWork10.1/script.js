const user = {
  name: "Ivan",
  age: 30,
  location: "Kharkiv",
  occupation: "Developer",

  displayInfo: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Location: ${this.location}`);
    console.log(`Occupation: ${this.occupation}`);
  },
};

user.displayInfo();
 