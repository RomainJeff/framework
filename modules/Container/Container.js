class Container {

    /**
     *
     * Add an instance to the Container
     * @param string key
     * @param object instance
     * @return object
     *
     */
    add(key, instance) {
        this.__defineGetter__(key, instance);

        return this;
    }
}
