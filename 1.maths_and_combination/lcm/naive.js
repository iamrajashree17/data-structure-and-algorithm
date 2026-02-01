function lcm(a, b) {
    let g = Math.max(a, b);

    let s = Math.min(a, b);

    for(let i = g; i<= a*b; i+= g) {
        if(i % s === 0) return i;
    }

    return a*b;
}


console.log(lcm(10, 5))

// node naive.js