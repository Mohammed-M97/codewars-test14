function getUsersIds(str){
    let arr = str.split("");
    let clear = arr.filter((el) => el !== "#" && el !== "/" && el !== "[" && el !== "]" && el !== "'").join("");
    let reg = 'uid';
    return clear.replace(reg, "").toLowerCase();
}

console.log(getUsersIds('[\'12345\']'));