
angular.module("myapp", [])
    .controller("ImagesController", function($scope, $http) {

        $scope.tags = "";

        jsonFlickrFeed = function (data) {
            // var allImages = [];
            // $.each(data.items, function(i, item){
            //     // var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");
            //     var sourceSquare = item.media.m;
            //     allImages.push({
            //         title: item.title,
            //         link: sourceSquare,
            //         description: item.description
            //     });
            //     $scope.$apply(function(){
            //         $scope.images = allImages;
            //     })
            // });

            // Immutable way of setting all the images
            $scope.images = data.items.map(function(item) {
                return {
                    title: item.title,
                    link: item.media.m,
                    description: item.description
                };
            });
            $scope.$apply();

        };

        // Run a search to the given URL
        $scope.search = function() {
        	var url = "https://api.flickr.com/services/feeds/photos_public.gne";

            $.ajax({
                data: {format: "json", tags: $scope.tags},
                dataType: "jsonp",
                url: url
            });
        }

    });