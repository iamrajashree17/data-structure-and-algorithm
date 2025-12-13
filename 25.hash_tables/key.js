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

            return (total * prime + value) % this.keyMap.length;
        }
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            let values = this.keyMap[index];
            for(let i = 0; i < values.length; i++) {
                if(values[i][0] === key) {
                    return values[i][1];
                }
            }
        }
        return undefined;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    keys() {
        let keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j =0; j< this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }
}


let hashTable = new HashTable();

hashTable.set("hello world", "goodbye!");
hashTable.set("dogs", " are cool");
hashTable.set("cats", "are fine");
hashTable.set("i love", "pizza");
hashTable.set("hi", "bye");
hashTable.set("french", "fries");
hashTable.set("french", "fry");

console.log(hashTable.keys());

hashTable.keys().forEach(element => {
    console.log(hashTable.get(element));
});

// node key.js