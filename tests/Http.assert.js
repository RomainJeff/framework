describe('[FRAMEWORK][HTTPRESPONSE]', function () {
    var HttpResponseInstance = new HttpResponse({hash: '/'});

    it('Test HttpResponse.getURI()', function () {
        expect(HttpResponseInstance.getURI()).toBe('/');
    });

    it('Test HttpResponse.setURI()', function () {
        HttpResponseInstance.setURI('/test');
        expect(HttpResponseInstance.getURI()).toBe('/test');
    });
});
