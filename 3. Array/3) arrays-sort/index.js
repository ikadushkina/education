function arraysSort(arr) {
    let max = arr => {
        let elemMax = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > elemMax) elemMax = arr[i];
        }
        return elemMax;
    }
    let sort = (a, b) => {
        return max(a) - max(b)
}
    const newArr = [...arr]
    return newArr.sort(sort);
}

window.arraysSort = arraysSort;

export default arraysSort;
