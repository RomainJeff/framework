describe('[FRAMEWORK][HTTP]', function () {
    var HttpInstance = new Http({hash: '/'});

    it('Test HTTP.getURI()', function () {
        expect(HttpInstance.getURI()).toBe('/');
    });

    it('Test HTTP.setURI()', function () {
        HttpInstance.setURI('/test');
        expect(HttpInstance.getURI()).toBe('/test');
    });
});
