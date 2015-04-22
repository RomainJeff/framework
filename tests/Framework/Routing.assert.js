describe('[FRAMEWORK][ROUTING]', function () {
    var route = {
        path: '/{username}',
        datas: {username: '([a-z]+)'}
    };
    var HttpInterface = new Http({ pathname: '/world' });
    var RoutingMatcher = new RoutesMatcher(HttpInterface.getURI(), {});


    it('Test de RoutesMatcher.formatRoutePath', function() {
        expect(RoutingMatcher.formatRoutePath(route)).toBe('/([a-z]+)');
    });

    it('Test de RoutesMatcher.isMatching', function() {
        expect(RoutingMatcher.isMatching('/([a-z]+)')).toEqual(jasmine.any(Array));
    });

    it('Test de !RoutesMatcher.isMatching', function() {
        expect(RoutingMatcher.isMatching('/hello')).not.toEqual(jasmine.any(Array));
    });

    it('Test de RoutesMatcher.getDatasToInject', function() {
        var datas = RoutingMatcher.isMatching('/([a-z]+)');
        expect(RoutingMatcher.getDatasToInject(route.datas, datas).username).toBe('world');
    });
});
