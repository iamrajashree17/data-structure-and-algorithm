function floorSqrt(n) {
    let res = 1;

    while (res * res <= n) {
        res++;
    }

    return res - 1;
}

console.log(floorSqrt(4));
// console.log(floorSqrt(16));
