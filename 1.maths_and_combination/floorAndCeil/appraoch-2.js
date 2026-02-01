function floorAndCeil(a, b) {

    function findFloor(a, b) {
        return Math.floor(a / b);
    }

    function findCeil(a, b) {
        return Math.ceil(a / b);
    }

    let floor = findFloor(a,b);
    let ceil = findCeil(a,b);

    return [floor, ceil];
}

console.log(floorAndCeil(5, 3)) // [1, 2]

// node appraoch-2.js
console.log(floorAndCeil(-5, 3)) // [-2, -1]


