let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, employee) => {
      if (employee.salary) {
        return total + employee.salary;
      } else {
        return total + sumSalaries(employee);
      }
    }, 0);
  } else {
    let total = 0;
    for (let subDep in department) {
      total += sumSalaries(department[subDep]);
    }
    return total;
  }
}

console.log(sumSalaries(company));
