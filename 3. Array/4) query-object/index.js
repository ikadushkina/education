function queryToObject(query) {
let str;
    if (query.length !==    1) {
        for (let i = 1; i <= query.length; i++)
            str = query[i];
    }
    else  if (query === "" || query === "?") return {};
    return JSON.parse(str);
}

window.queryToObject = queryToObject;

export default queryToObject;
