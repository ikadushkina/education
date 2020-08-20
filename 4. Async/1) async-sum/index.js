function asyncSum(a, b) {
  return  new Promise(function (resolve, reject){
        if ( typeof a === "number" && typeof b === "number")
            resolve (a + b);
        else reject("error");
    });
}

window.asyncSum = asyncSum;

export default asyncSum;
