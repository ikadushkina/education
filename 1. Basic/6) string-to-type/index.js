function stringToType(str) {
    switch (str) {
        case "":
            return "";
        case "true":
            return true;
        case "false":
            return false;
        case "null":
            return null;
        case "undefined":
            return undefined;
        default: {
            if (!isNaN(Number(str))) return Number(str);
            else return str;
        }
    }
}
window.stringToType = stringToType;

export default stringToType;
