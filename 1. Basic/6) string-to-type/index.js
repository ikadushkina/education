function stringToType(str) {
    if (str === "") str = '';
    else {
        if (str === "true") str = true;
        else {
            if (str === "false") str = false;
            else {
                if (str === "null") str = null;
                else {
                    if (str === "undefined") str = undefined;
                    else {
                        if (!isNaN(Number(str))) str = Number(str);
                    }
                }
            }
        }
    }
    return str;

}

window.stringToType = stringToType;

export default stringToType;
