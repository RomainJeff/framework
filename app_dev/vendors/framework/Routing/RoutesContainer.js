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
    add(callback, optns) {
        this.routes.push({
            options: optns,
            callback: callback
        });
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
