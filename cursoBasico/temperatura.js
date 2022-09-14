




function computeClosestToZero(ts) {
    debugger
    if (!ts.length) {
        return 0
    }
    let closest = 0
    for (let i = 0; i < ts.length; i++) {
        if (closest===0) {
            closest = ts[i]
        }
        else if (ts[i] > 0 && ts[i] <= Math.abs(closest)) {
            closest = ts[i]
        }
        else if (ts[i] < 0 && -ts[i] < Math.abs(closest)) {
            closest = ts[i]
            
        }
        console.log(closest,`close`);
        console.log(-ts[i], `ts`);
    }
    console.log(closest, `return`);
    return closest
    
}

const ts = [1 ,-2, -8, 4, 5]

computeClosestToZero(ts)