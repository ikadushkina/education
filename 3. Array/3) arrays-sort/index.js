function arraysSort(arr) {
    let max = arr => {
        let elemMax = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > elemMax) elemMax = arr[i];
        }
        return elemMax;
    }
    let sort = (a, b) => {
        if (max(a) > max(b)) return 1;
        if (max(a) < max(b)) return -1;
        return 0;
    }
    let newArr = [...arr]
    return newArr.sort(sort);
}

window.arraysSort = arraysSort;

export default arraysSort;
