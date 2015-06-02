class Router {
    
    /**
     *
     * Init the router
     *
     ***********
     * EXAMPLE
     ***********
     * var Routing = new Router(new HTTP(location));
     *
     */
    constructor(HTTP) {
        this.HTTP = HTTP;
    }


    /**
     *
     * Launch the router
     * @param RoutesContainer routesContainer
     *
     ***********
     * EXAMPLE
     ***********
     * var routesContainer = new RoutesContainer();
     * routesContainer.add('/home', myController.myMethod);
     *
     * Routing.run(routesContainer);
     *
     */
    run(routesContainer) {
        var HTTP = this.HTTP;

        window.onhashchange = function () {
            var routesMatcher = new RoutesMatcher(HTTP.getURI(), routesContainer.get());
            routesMatcher.check();
        };

        window.onhashchange();
    }
}
