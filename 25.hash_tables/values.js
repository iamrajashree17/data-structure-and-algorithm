class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;

            return Math.abs((total * prime + value) % this.keyMap.length);
        }
    }

    set (key, value) {
        let index = this._hash(key);
        console.log(index);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            let values = this.keyMap[index];
            for (let i = 0; i < values.length; i++) {
                if(values[i][0] === key) {
                    return values[i][1];
                }
            }
        }
        return undefined;
    }

    values() {
        let values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (this.keyMap[i][j][1]) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return values;
    }
}

let hashTable = new HashTable();
hashTable.set("Hi", "Hello");
hashTable.set("French", "Fries");
hashTable.set("Hi", "Bye");

console.log(hashTable.keyMap);
console.log(hashTable.values());

//  node values.js