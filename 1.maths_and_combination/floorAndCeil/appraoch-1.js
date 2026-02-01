function floorAndCeil(a, b) {

    function findFloor(a, b) {
        let q = Math.trunc(a/b);

        console.log(q, a, b ,a ^ b, a%b)
        if((a ^ b) < 0 && a%b !==0) q--;

        return q;
    }

    function findCeil(a, b) {
        let q = Math.trunc(a/b);

        if((a ^ b) > 0 && a%b !==0) q++;

        return q
    }

    let floor = findFloor(a,b);
    let ceil = findCeil(a,b);

    return [floor, ceil];
}

console.log(floorAndCeil(5, 3)) // [1, 2]

// node appraoch-1.js
console.log(floorAndCeil(-5, 3)) // [-2, -1]