describe('[FRAMEWORK][HTTP]', function () {
    var HttpInstance = new Http();
    HttpInstance.set('pathname', '/');

    it('Test HTTP.getURI()', function () {
        expect(HttpInstance.getURI()).toBe('/');
    });
});
