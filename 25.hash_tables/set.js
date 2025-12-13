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

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
}


let hashTable = new HashTable();

hashTable.set("hello world", "goodbye!");
hashTable.set("dogs", " are cool");
hashTable.set("cats", "are fine");
hashTable.set("i love", "pizza");
hashTable.set("hi", "bye");
hashTable.set("Hi", "Hello");
hashTable.set("french", "fries");
console.log(hashTable.keyMap);

// node set.js