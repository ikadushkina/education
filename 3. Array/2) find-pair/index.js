function findPair(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                x = arr[i];
        }
    }
    if (x !== 0) return x;
    else return null;
}

window.findPair = findPair;

export default findPair;
