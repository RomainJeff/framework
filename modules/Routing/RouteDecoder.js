class RouteDecoder {
    
    /**
     *
     * Init the RouteDecoder
     * @param object route
     *
     */
    constructor(route) {
        this.route = route;
    }


    /**
     *
     * Format the URL to test with the current PATH
     * @return string
     *
     */
    formatRoutePath() {
        var routeToParse = this.route.options.path;
        var datas = this.route.options.datas;

        if (!datas)
            return routeToParse;

        for (var data in datas) {
            routeToParse = routeToParse.replace("{"+ data +"}", datas[data]);
        }

        return routeToParse;
    }


    /**
     *
     * Get datas associated with the keys
     * @param object matchedDatas
     * @return object
     *
     */
    getParameters(matchedDatas) {
        var i = 1;
        var datasToInject = {};

        for (var data in this.route.options.datas) {
            datasToInject[data] = matchedDatas[i];
            i++;
        }

        return datasToInject;
    }


    /**
     *
     * Return formatted route path
     * @return string
     *
     */
    getDecodedPath() {
        return this.formatRoutePath();
    }


    /**
     *
     * Recupere le callback
     * @return mixed
     *
     */
    getCallback() {
        return this.route.callback;
    }

    /**
     *
     * Execute le callback
     * @param object parameters
     * @return mixed
     *
     */
    execCallback() {
        return this.route.callback(parameters);
    }

    /**
     *
     * Recupere le middleware
     * @parameters 
     * @return mixed
     */
    getMiddleware(parameters) {
        return this.route.options.middleware(this.getCallback(), parameters);
    }

    /**
     *
     * Check si la route a un middleware
     * @return boolean
     *
     */
    hasMiddleware() {
        if (this.route.options.middleware)
            return true;

        return false;
    }
}
