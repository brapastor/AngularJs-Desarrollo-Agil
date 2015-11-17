(function() {
  'use strict';
  // Aqui ira la funcionalidad
  angular.module('blog', ['ngRoute', 'blog.controllers']);

  function config($locationProvider, $routeProvider) {
    // es importante, ya que permite que las URLs no lleven el caracter # al
    // inicio de ellas, como utiliza por defecto Angular.
    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });

    $routeProvider
      .when('/', {
        templateUrl: '/view/post-list.tpl.html',
        controller: 'PostListCtrl',
        controllerAs: 'postlist'
      })
      .when('/post/:postId', {
        templateUrl: '/view/post-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      })

    .when('/new', {
      templateUrl: '/view/post-create.tpl.html',
      controller: 'PostCreateCtrl',
      controllerAs: 'postcreate'
    });
  }

  angular
    .module('blog')
    .config(config);
})();
