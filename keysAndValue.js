var user = {
    name : "John",
    profession : "👨‍⚕️",
    salary  : 10000
}
; // ["name", "profession", "salary"]
; // ["John", "👨‍⚕️", 10000]
Object.entries(user);
console.log(Object.entries(user).forEach(([key, value]) => {
console.log(`${key} = ${value}`);
}))