for ( let num = 100; num <= 200; num++){
  // multiple of both 3 and 4
  if (num % 3 === 0 && num % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0){
    console.log("Loopy");
  } else if (num % 4 === 0){
    console.log("Lighthouse");
  } else{
    console.log(num)
  }
}