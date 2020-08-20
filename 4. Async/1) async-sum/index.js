function asyncSum(a, b) {
   return  new Promise(function (resolve, reject) {
       setTimeout(() =>{
        if (typeof a === "number" && typeof b === "number") {
            resolve(a + b);
        }
        reject("error");
    }, 1000);
});
}

window.asyncSum = asyncSum;

export default asyncSum;
