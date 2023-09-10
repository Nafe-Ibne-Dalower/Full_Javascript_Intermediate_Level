console.log("Hello World😉😉😉");

// Loop under loop...
// Practice - 01
p = 5;
for (i = 0; i <= p; i++) {
  res = " ";
  for (j = 0; j < i; j++) {
    res += j + " ";
  }
  console.log(res + i);
}

// Practice - 02

n = 10
for (i = 1; i <= n; i++){
    res = ''
    for (j = 1; j <= n; j++) {
      res += "* ";
    }
    console.log(res);
}

// Infinity Loop
v = 5
for(;;){
  while(v == 5){
    console.log("I am running...")
    v++
  }

  while(v != 5){
    console.log("I am terminating...")
    break
  }
  break
}
/**************** End ****************/