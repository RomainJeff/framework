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
        var routesMatcher = new RoutesMatcher(this.HTTP.getURI(), routesContainer.get());

        routesMatcher.check();

        this.HTTP.onURIChange(function () {
            this.run(routesContainer);
        }.bind(this));
    }
}
