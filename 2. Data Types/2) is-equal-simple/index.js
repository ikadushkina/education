function isEqual(a, b) {
    let a1 = "", b1 = "";
    if (a && b !== null) {
        for (let key in a) {
            a1 += key + ":" + a[key];
        }

        for (let key in b)
            b1 += key + ":" + b[key];
        return a1 === b1;
    } else return false;
}

window.isEqual = isEqual;

export default isEqual;
