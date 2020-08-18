function factorial(n) {
    if (n !== 1) {
        n = n * factorial(n - 1)
    } else {
        n = 1;
    }
    return n;
}

window.factorial = factorial;

export default factorial;
