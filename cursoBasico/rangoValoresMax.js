
const data = [-1, 9, 0, 8, -5, 6, -24];

function maxProfit(data) {
    let suma = null
    var max = null
    rango = [];
    for (let i = 0; i < data.length; i++) {
        suma += data[i]
        console.log(suma);
        
        if (suma > max) {
            max = suma;
            // console.log(max);
            rango.push(i)
            // console.log(i,data[i]);
        }
        
        
    }
    
    
    return [rango[0], rango[rango.length-1]]
}



// for (let i = 0; i < 10; i++) {
    
//     let element = Math.floor(Math.random() * (1000 - 0 + 1) + 0)
//     let azar = Math.random() < 0.5 ? -1 : 1;
    

    
//     data.push(element*azar)
    
// }

console.log(maxProfit(data));






