class Router {
    
    /**
     *
     * Init the router
     *
     ***********
     * EXAMPLE
     ***********
     * var Routing = new Router(new HTTP());
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
        var routesMatcher = new RoutesMatcher(location.pathname, routesContainer.get());

        routesMatcher.check();
        routesMatcher.listen();
    }
}
