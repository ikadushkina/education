function basicCalc(operation, a, b) {
    let c;
    switch (operation) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case '/':
            c = a / b;
            break;
        case '*':
            c = a * b;
            break;
    }
    return c;
}

window.basicCalc = basicCalc;

export default basicCalc;
