function stringToType(str) {
 /*   if (str === "") str = "";
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
   */
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

   }
   switch (!isNaN(Number(str))){
        case true: return Number(str);
        default: return str;
    }

}

window.stringToType = stringToType;

export default stringToType;
