const countTotalSalary = function(employees) {
    'use strict';
    // Write code under this line
    let total = 0;
    const noSalary = 0;
    
    const values = Object.values(employees);
    console.log (values);
    
    for (const value of values) {
        total += value;
      }
     
    if (values.length === 0) {
        return noSalary;
    }
    return total;
};
  
  // Объекты и ожидаемый результат
  const developers = {
      mango: 300,
      poly: 250,
      alfred: 450,
  };
  console.log(countTotalSalary(developers));
  // 1000
  
  const supports = {
    kiwi: 200,
    lux: 150,
    chelsy: 150,
  }
  console.log(countTotalSalary(supports));
  // 500
  