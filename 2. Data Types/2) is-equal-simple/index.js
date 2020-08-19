function isEqual(a, b) {
    if (!a || !b) return  false;

    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            if (a[key] !== b[key] || !b.hasOwnProperty(key)) {
                return false;
            }
        }
    }
    for (let key in b) {
        if (b.hasOwnProperty(key)) {
            if (a[key] !== b[key] || !a.hasOwnProperty(key)) {
                return false;
            }
        }
    }

    return true;
}

window.isEqual = isEqual;

export default isEqual;
