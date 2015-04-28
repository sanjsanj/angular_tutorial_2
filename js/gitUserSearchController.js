githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users?access_token=f44ddb06692b6fab2bf2d1ef692c0da31c1faad2');

  // var searchResource = $resource('https://api.github.com/search/users');

  var self = this;

  self.doSearch = function(){
    console.log(self.searchTerm);
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);
