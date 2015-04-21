class RoutesContainer {
    
    constructor() {
        this.routes = [];
    }

    add(path, callback) {
        this.routes[path] = callback;
    }

    get(path) {
        return this.routes[path];
    }
}
