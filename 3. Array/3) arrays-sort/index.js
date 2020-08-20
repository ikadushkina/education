function arraysSort(arr) {
    let sortArr;
        let sort = (a, b) => {
            if (a[1] > b[1]) return 1;
            else if (a[1] < b[1]) return -1;
            else return 0;
        }
    sortArr = arr.sort(sort);
    return sortArr;

    // let elemMax = -Infinity;
    // let sortArr = [[]];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[i][j] > elemMax) {
    //             elemMax = arr[i];
    //             sortArr.push(arr[i]);
    //         }
    //     }
    // }
    // return sortArr;
}

window.arraysSort = arraysSort;

export default arraysSort;
