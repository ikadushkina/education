function searchString(obj) {
    let result = '?';
    for ( let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') result += key + '=' + obj[key] + "&";
    }
    if (result === "?") result = "";
    else  result = result.substr(0,result.length-1);
    return result;
}

window.searchString = searchString;

export default searchString;