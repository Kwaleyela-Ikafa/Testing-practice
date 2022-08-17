const stringLength = (string) => {
    if(string.length > 1 && string.length < 10) {
        return string.length;
    }else {
        throw Error ("Error")
    }
};

const reverseString = (str) => {
    str = str.split("").reverse().join("");
    return str;
};

const capitalizeString = (string) => {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

// module.exports = stringLength;
module.exports ={ 
    method1:stringLength,
    method2:reverseString,
    method3:capitalizeString};
