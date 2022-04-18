function getResult(x, y) {
    let result = 0;
    let degree = (x ** y) + '';
    for (let i = 0; i < degree.length; i++) {
        result =  result + Number(degree[i]);
    }

    return result;
  }
  
  console.log(getResult(4, 8));