class Template {

    /**
     * Constructor
     * @param string templatePath
     */
    constructor(templatePath) {
        this.path = templatePath;
        this.vars = {};
    }

    /**
     * Load a template
     * @param string template
     * @param function callback
     */
    load(template, callback) {
        var templateRequest = new Request(this.path + template)
            .success(callback)
            .GET();
    }

    /**
     * Set a variable
     * @param mixed key
     * @param string value
     */
    set(key, value) {
        if (!value) {
            this.vars = key;
        } else {
            this.vars[key] = value;
        }

        return this;
    }

    /**
     * Get a template
     * @param string template
     * @param function callback
     */
    get(template, callback) {
        this.load(template, function (res) {
            var template = Handlebars.compile(res);
            callback(template(this.vars));
            
            this.flush();
        }.bind(this));
    }

    /**
     * Flush variables
     */
    flush() {
        this.vars = {};
    }
}
