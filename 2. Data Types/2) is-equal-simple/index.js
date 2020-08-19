function isEqual(a, b) {
    let newA = "", newB = "";
    if (a && b) {
        for (let key in a) {
            newA += `${key}:${a[key]}`;
        }

        for (let key in b)
            newB += `${key}:${b[key]}`;;
        return newA === newB;
    } else return false;
}

window.isEqual = isEqual;

export default isEqual;
