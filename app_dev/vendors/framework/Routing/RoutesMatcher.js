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
     * Format the URL to test with the current PATH
     * @param object route
     * @return string
     *
     */
    formatRoutePath(route) {
        var routeToParse = route.path;
        var datas = route.datas;

        for (var data in datas) {
            routeToParse = routeToParse.replace("{"+ data +"}", datas[data]);
        }

        return routeToParse;
    }


    /**
     *
     * Get datas associated with the keys
     * @param object routeDatas
     * @param object matchedDatas
     * @return object
     *
     */
    getDatasToInject(routeDatas, matchedDatas) {
        var i = 1;
        var datasToInject = {};

        for (var data in routeDatas) {
            datasToInject[data] = matchedDatas[i];
            i++;
        }

        return datasToInject;
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
     * @return boolean
     *
     */
    check() {
        for (var route in this.routes) {
            var currentRoute = this.routes[route];
            var routePath = this.formatRoutePath(currentRoute);
            var matching = this.isMatching(routePath);

            if (matching) {
                var routeDatas = this.routes[route].datas;

                currentRoute.callback(this.getDatasToInject(routeDatas, matching));
                return true;
            }
        }

        this.defaultPage();
        return false;
    }
}
