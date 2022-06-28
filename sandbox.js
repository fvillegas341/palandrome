function isPalandrome (str){
    const regex = /[^A-Za-z0-9]/g;
    const cleanedStr = str.replace(regex,'').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');

    if (reversedStr == cleanedStr) {
        return ('It is a palandrome')
    } else {
        return ('It is not a palandrome')
    };

}

console.log(isPalandrome("Dont nod"));