describe('[FRAMEWORK][HTTP]', function () {
    var HttpInstance = new Http({
        pathname: '/'
    });

    it('Test HTTP.getURI()', function () {
        expect(HttpInstance.getURI()).toBe('/');
    });

    it('Test HTTP.set()', function () {
        HttpInstance.set('pathname', '/test');
        expect(HttpInstance.getURI()).toBe('/test');
    });
});
