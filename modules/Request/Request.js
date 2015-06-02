class Request {
    
    /**
     * Constructor
     * @param string url
     */
    constructor(url) {
        this.url = url;
        this.datas = {};
        this.headers = {
            'Content-type': 'application/x-www-form-urlencoded'
        };
        this.response = {};
        this.callback = function () {};
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
     * @param function callback
     */
    success(callback) {
        this.callback = callback;

        return this;
    }

    /**
     * Execute the request
     * @param string method
     */
    execute(method) {
        var options = {
            method: method,
            headers: this.headers
        };
        
        if (method != 'GET')
            options.body = this.formatBody(this.datas);

        fetch(this.url, options)
            .then((response) => {
                if (response.ok === true)
                    return response.text();

                RequestErrorHandler.onError();
                throw new Error(response.statusText);
            })
            .then(this.callback);
    }

    /**
     * Format the body
     * @param array body
     * @return string
     */
    formatBody(body) {
        var formattedBody = '';

        for (var key in body) {
            formattedBody += key + '=' + body[key] +'&';
        }

        return formattedBody;
    }



    /**
     * Execute the request with GET method
     */
    GET() {
        this.execute('GET');
    }

    /**
     * Execute the request with POST method
     */
    POST() {
        this.execute('POST');
    }

    /**
     * Execute the request with DELETE method
     */
    DELETE() {
        this.execute('DELETE');
    }

    /**
     * Execute the request with PUT method
     */
    PUT() {
        this.execute('PUT');
    }
}
