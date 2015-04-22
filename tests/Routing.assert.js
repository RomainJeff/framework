describe('[FRAMEWORK][ROUTING]', function () {
    var HttpInterface = new HttpResponse({ hash: '/world' });
    var RoutingMatcher = new RoutesMatcher(HttpInterface.getURI(), {});
    var RoutingDecoder = new RouteDecoder({
        path: '/{username}',
        datas: {username: '([a-z]+)'},
        callback: function () { return "OK"; }
    });

    it('Test de RouteDecoder.formatRoutePath', function() {
        expect(RoutingDecoder.getDecodedPath()).toBe('/([a-z]+)');
    });

    it('Test de RoutesMatcher.isMatching', function() {
        expect(RoutingMatcher.isMatching('/([a-z]+)')).toEqual(jasmine.any(Array));
    });

    it('Test de !RoutesMatcher.isMatching', function() {
        expect(RoutingMatcher.isMatching('/hello')).not.toEqual(jasmine.any(Array));
    });

    it('Test de RouteDecoder.getParameters', function() {
        var rawParams = RoutingMatcher.isMatching('/([a-z]+)');
        expect(RoutingDecoder.getParameters(rawParams).username).toBe('world');
    });

    it('Test de RouteDecoder.getCallback', function() {
        expect(RoutingDecoder.getCallback()).toBe('OK');
    });
});
