class Http {
    
    constructor(loc) {
        this.location = loc;
    }

    setURI(uri, params) {
        this.set('hash', uri);

        // Call an event listener on URIChange (with params I want to pass)
    }

    getURI() {
        return this.get('hash');
    }

    set(key, value) {
        this.location[key] = value;
    }

    get(key) {
        return this.location[key];
    }
}
