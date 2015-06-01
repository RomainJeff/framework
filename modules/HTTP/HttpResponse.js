class HttpResponse {

    constructor(loc) {
        this.location = loc;
        this.onURIChange = function () {};
    }
    
    setURI(uri, params) {
        this.set('hash', uri);

        // Call an event listener on URIChange (with params I want to pass)
        this.onURIChange();
    }

    getURI() {
        return this.get('hash');
    }

    onURIChange(callback) {
        this.onURIChange = callback;
    }

    get(key) {
        return this.location[key];
    }

    set(key, value) {
        this.location[key] = value;
    }
}
