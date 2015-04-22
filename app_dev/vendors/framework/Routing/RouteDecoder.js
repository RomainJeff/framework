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
        var routeToParse = this.route.path;
        var datas = this.route.datas;

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

        for (var data in this.route.datas) {
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
     * @param object parameters
     * @return mixed
     *
     */
    getCallback(parameters) {
        return this.route.callback(parameters);
    }
}
