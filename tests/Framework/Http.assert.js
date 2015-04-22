describe('[FRAMEWORK][HTTP]', function () {
    var HttpInstance = new Http();
    location.pathname = '/';

    it('Test HTTP.getURI()', function () {
        expect(HttpInstance.getURI()).toBe('/');
    });
});
