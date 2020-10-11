const findBestEmployee = function (employees) {
    'use strict';
    
    const values = Object.values(employees);
    console.log (values);

    const maxValue = Math.max(...values);
    console.log (maxValue);

    const indexOfBest = values.indexOf(maxValue);
    console.log(indexOfBest);

    const keys = Object.keys(employees);
    console.log (keys);

    const bestEmployee = keys[indexOfBest];

    if (keys.length == 0) {
      return '';
    }

    return bestEmployee;
}


  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
 console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  