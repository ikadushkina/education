function queryToObject(query) {
     if (!query.length || query === "?") return {};
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
