class Http {
    
    construct () {
        this.location = location;
    }

    getURI() {
        return this.location.pathname;
    }

    set(key, value) {
        this.location[key] = value;
        location = this.location;
    }
}
