const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec(`2022-08-07`);
const idk = match[0]
const year= match[1]
const month = match[2];
const day = match[3]

console.log(`Hoy es ${year}, mes ${month} y dia ${day}`);

console.log(idk);