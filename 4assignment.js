function findSmallestNum(arr) {
    let small = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < small){
            small = arr[i]
        }
    }
    return small;
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5