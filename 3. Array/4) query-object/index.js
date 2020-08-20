function queryToObject(query) {
     if (!query.length || query === "?") return {};
    // var result = {};
    // var a = "a=true&b=false&c=123&d=0".split('&').map(i => i.split("="))
    // console.log(a)
    // a.forEach((item) => {
    //     result[item[0]]= item[1]
    // })
    // console.log('result', result)
    //
    // let result = query.split("").map((item) => {
    //     if (item === '?') return '';
    //     if (item === "=") return ":"
    //     if (item === "&") return ","
    //     return item;
    // })
    let arr = query.split("");
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "?") {
            arr[i] = "";
            string += arr[i];
        } else if (arr[i] === "=") {
            arr[i] = "\":\"";
            string += arr[i];
        } else if (arr[i] === "&") {
            arr[i] = "\",\"";
            string += arr[i];
        } else string += arr[i];
    }

    let obj = JSON.parse('{ "' + string + '"}');
     console.log(obj);
    for(let key in obj) {
        switch (obj[key]) {
            case "":
                obj[key] = "";
                break;
            case "true":
                obj[key] = true;
                break;
            case "false":
                obj[key] = false;
                break;
            case "null":
                obj[key] = null;
                break;
            case "undefined":
                obj[key] = undefined;
                break;
            default: {
                if (!isNaN(Number(obj[key]))) obj[key] = Number(obj[key]);
            }
        }
    }
    return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;
