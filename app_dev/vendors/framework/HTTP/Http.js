class Http {
    
    constructor(loc) {
        this.location = loc;
    }

    getURI() {
        return this.get('pathname');
    }

    set(key, value) {
        this.location[key] = value;
    }

    get(key) {
        return this.location[key];
    }
}
