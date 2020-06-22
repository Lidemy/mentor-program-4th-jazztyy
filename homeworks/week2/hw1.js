function printStars(n) {
  if(1 <= n && n <= 30){
    for (let i = 0; i < n ; i++){
      console.log("*");
    }
  }else{
    console.log('n need to between 1 and 30');
  }
}

printStars(5);
