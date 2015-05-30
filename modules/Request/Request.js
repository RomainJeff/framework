class Request {
    
    /**
     * Constructor
     * @param string url
     */
    constructor(url) {
        this.url = url;
        this.datas = {};
        this.headers = {};
        this.success = function () {};
    }

    /**
     * Set a data to pass through request
     * @param string key
     * @param mixed value
     */
    data(key, value) {
        if (!value) {
            this.datas = key;
        } else {
            this.datas[key] = value;
        }

        return this;
    }

    /**
     * Set a header to pass through request
     * @param string key
     * @param mixed value
     */
    header(key, value) {
        if (!value) {
            this.headers = key;
        } else {
            this.headers[key] = value;
        }

        return this;
    }

    /**
     * Define the success callback
     * @param string url
     */
    success(callback) {
        this.success = callback;
    }

    /**
     * Execute the request
     * @param string method
     */
    execute(method) {
        fetch(this.url, {
            method: method,
            headers: this.headers,
            body: JSON.stringify(this.datas)
        })
        .then(function (response) {
            this.callback(new RequestResponse(response));
        }.bind(this))
        .catch(function (error) {
            RequestErrorHandler.onError(error);
        });
    }



    /**
     * Execute the request with GET method
     */
    get() {
        this.execute('GET');
    }

    /**
     * Execute the request with POST method
     */
    post() {
        this.execute('POST');
    }

    /**
     * Execute the request with DELETE method
     */
    delete() {
        this.execute('DELETE');
    }

    /**
     * Execute the request with PUT method
     */
    put() {
        this.execute('PUT');
    }
}
