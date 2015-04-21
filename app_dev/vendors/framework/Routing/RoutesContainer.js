class RoutesContainer {
    
    constructor() {
        this.routes = [];
    }

    /**
     *
     * Add a route
     * @param string path
     * @param function callback
     *
     */
    add(path, callback) {
        this.routes[path] = callback;
    }

    /**
     *
     * Get the routes
     * @return array
     *
     */
    get() {
        return this.routes;
    }
}
