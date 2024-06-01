function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    let factor = 1;
    for (let i = 2; i <= num; i++) {
        factor *= i;
    }
    return factor;
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040