angular.module("ExtentX")
    .controller("NavigationController", ["$scope", "$rootScope", "$http", "$window", function($scope, $rootScope, $http, $window) {
        $scope.states = {};
        $scope.states.activeItem = 'item1';
        
        $scope.items = [{
            id: "item1",
            target: "#/",
            title: "分析结果"/** "Analysis" **/,
            icon: "dashboard"
        }, {
            id: "item2",
            target: "#/report-list",
            title: "报告列表"/** "Reports" **/,
            icon: "folder_open"
        }, {
            id: "item3",
            target: "#/category-summary",
            title: "分类" /** "Category" **/,
            icon: "local_offer"
        }, {
            id: "item4",
            target: "#/author-summary",
            title: "作者" /** "Author" **/,
            icon: "person"
        }, /**{
            id: "item5",
            target: "#/exception-summary",
            title: "异常"/** "Exception" ,
            icon: "bug_report"
    }, **/
        {
            id: "item6",
            target: "#/search",
            title: "搜索"/** "Search" **/,
            icon: "search"
        }];

        $scope.setTheme = function(theme) {
            var req = {
                method: 'POST',
                url: '/setTheme',
                data: {
                    theme: theme
                }
            };

            $http.defaults.headers.post['X-CSRF-Token'] = $rootScope._csrf;

            $http(req).
                success(function(response) {
                    $window.location.reload();
                }).
                error(function(response) {
                    console.log(response);
                });
        };

    }]);