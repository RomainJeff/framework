class RequestResponse {

    /**
     * Constructor
     * @param object response
     */
    constructor(response) {
        this.response = response;
    }

    /**
     * Get the status code
     * @return int
     */
    getStatusCode() {
        return this.response.status;
    }

    /**
     * Get the status text
     * @return string
     */
    getStatusText() {
        return this.response.statusText;
    }

    /**
     * Get the url
     * @return string
     */
    getUrl() {
        return this.response.url;
    }

    /**
     * Get the response body
     * @return string
     */
    getBody() {
        return this.response.body;
    }

    /**
     * Get the json parsed response body
     * @return object
     */
    getDatas() {
        return JSON.parse(this.getBody()).result;
    }

    /**
     * Get the response headers
     * @return object
     */
    getHeaders() {
        return this.response.headers;
    }
}
