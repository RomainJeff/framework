class HttpResponse {

    setURI(uri, params) {
        this.set('hash', uri);
    }

    getURI() {
        var uri = this.get('hash').replace('#', '');

        if (uri == "")
            uri = "/";

        return uri;
    }

    onURIChange(callback) {
        window.addEventListener('haschange', callback);
    }

    get(key) {
        return location[key];
    }

    set(key, value) {
        location[key] = value;
    }
}
