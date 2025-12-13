class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        
        for(let i = 0; i< Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }
}


let hashTable = new HashTable();
console.log(hashTable._hash("cyan"));
console.log(hashTable._hash("pink"));



// node hash.js