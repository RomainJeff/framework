class Http {
    
    constructor(loc) {
        this.location = loc;
    }

    getURI() {
        return this.location.pathname;
    }

    set(key, value) {
        this.location[key] = value;
    }
}
