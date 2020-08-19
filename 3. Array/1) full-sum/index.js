function fullSum(...args) {
    if (!args.length) return 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (args.every(elem => typeof elem === "number")) {
        return args.reduce(reducer);
    }
    throw new Error("Wrong Argument Type");
}
window.fullSum = fullSum;

export default fullSum;
