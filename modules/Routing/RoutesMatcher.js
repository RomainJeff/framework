class RoutesMatcher {

    /**
     *
     * Init the RoutesMatcher
     * @param string uri
     * @param array routes
     *
     */
    constructor(uri, routes) {
        this.uri = uri;
        this.routes = routes;
        this.defaultPage = function () {};
    }


    /**
     *
     * Verify if any route matchs the current path
     * @param string routePath
     *
     */
    isMatching(routePath) {
        return this.uri.match('^'+ routePath +'$');
    }


    /**
     *
     * Define the default page
     * @param function callback
     *
     */
    setDefaultPage(callback) {
        this.defaultPage = callback;
    }


    /**
     *
     * Coords the routing system
     * @return function
     *
     */
    check() {
        for (var route in this.routes) {
            var currentRoute = new RouteDecoder(this.routes[route]);
            var matching = this.isMatching(currentRoute.getDecodedPath());

            if (matching) {
                currentRoute.getCallback(currentRoute.getParameters());
                return;
            }
        }

        this.defaultPage();
        return;
    }
}
