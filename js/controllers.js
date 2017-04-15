angular.module('app-controllers',[])

.controller("playerCtrl",function($scope, $cordovaScreenshot, $cordovaSocialSharing, AppConfig){
    $scope.channel1 = false;
    $scope.channel2 = false;
    $scope.defaultCover = true;
    
    $scope.play = function(url,kanali){
      document.getElementById("audio-player").src = url;
      document.getElementById("audio-player").play();
      console.log(kanali);
     
      
      if (kanali == "1"){
          $scope.channel1 = true;
          $scope.channel2 = false;
          $scope.defaultCover = false;
          
        //   streamUrl_2.stop();
        //   streamUrl_1.play();
          
          //console.log("1st if ID");
      } else if (kanali == "2"){
          $scope.channel1 = false;
          $scope.channel2 = true;
          $scope.defaultCover = false;
          
        //   streamUrl_1.stop();
        //   streamUrl_2.play();
         // console.log("2nd if");
      }
    }
    
    
    $scope.stop = function(){
        document.getElementById("audio-player").pause();
        document.getElementById("audio-player").src = "";
        
        // streamUrl_1.stop();
        // streamUrl_2.stop();
    }
    
    $scope.takeScreenshot = function(){
    //     $cordovaScreenshot.capture().then(function(res){
    //         alert("Screenshot triggered successfully");
    //       $scope.screenshot = res;
    //       //post on facebook (image & link can be null)
          
    //     //   $cordovaSocialSharing
    //     //     .shareViaFacebook("Duke degjuar Radio Pendimin...Shkarkoje aplikacionin edhe ti!", res, "Link to share")
    //     //           .then(function(result) {
    //     //                 //do something on post success or ignore it...
    //     //            }, function(err) {
    //     //                 console.log("there was an error sharing!");
    //     //            });
       
    //    $cordovaSocialSharing.share("Duke degjuar Radio Pendimin...Shkarkoje aplikacionin edhe ti!", "Radio Pendimi mobile", res, "http://radio-pendimi.com");
        
    //    }, function(err) {
    //      console.log("there was an error taking a a screenshot!");
    //     }, function(err){
    //         alert("Error while taking screenshot");
    //     }
        
    //     );
    }


   

   
})

/*
=====================================
    Emisionet
=====================================
 */
.controller('emisioneCtrl',function($scope,$http,$state){
    //$scope.resp = 'test';
    var headers = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

    $http.post('http://radio-pendimi.com/webfaqe/wp-content/themes/radiopendimi/webAPI.php',{
          'komanda': 'emisione'
    },headers).then(function(resp){
        console.log(resp);
        $scope.resp = resp.data;
    });

    $scope.goForDetails = function(title,thumbnail,link){
        $state.go('app.emisioneDetails',{
            title: title,
            thumbnail: thumbnail,
            link:link
        });
        // alert(thumbnail);
    }
})

.controller('emisioneDetailsCtrl',function($scope,$stateParams){
    $scope.title = $stateParams.title;
    $scope.thumbnail = $stateParams.thumbnail;
    $scope.link = $stateParams.link;
    
})

/*
=====================================
    Lajmet
=====================================
 */
.controller('lajmeCtrl',function($scope,$http,$state){
    //$scope.resp = 'test';
    var headers = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

    $http.post('http://radio-pendimi.com/webfaqe/wp-content/themes/radiopendimi/webAPI.php',{
          'komanda': 'lajme'
    },headers).then(function(resp){
        console.log(resp);
        $scope.resp = resp.data;
    });

    $scope.goForDetails = function(title,thumbnail,link,content){
        $state.go('app.lajmeDetails',{
            title: title,
            thumbnail: thumbnail,
            link:link,
            content:content
        });
        // alert(thumbnail);
    }
})

.controller('lajmeDetailsCtrl',function($scope,$stateParams){
    $scope.title = $stateParams.title;
    $scope.thumbnail = $stateParams.thumbnail;
    $scope.link = $stateParams.link;
    $scope.content = $stateParams.content;
    
})

/*
=====================================
    Artikujt
=====================================
 */
.controller('artikujCtrl',function($scope,$http,$state){
    //$scope.resp = 'test';
    var headers = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

    $http.post('http://radio-pendimi.com/webfaqe/wp-content/themes/radiopendimi/webAPI.php',{
          'komanda': 'artikuj'
    },headers).then(function(resp){
        console.log(resp);
        $scope.resp = resp.data;
    });

    $scope.goForDetails = function(title,thumbnail,link,content){
        $state.go('app.artikujDetails',{
            title: title,
            thumbnail: thumbnail,
            link:link,
            content:content
        });
        // alert(thumbnail);
    }
})

.controller('artikujDetailsCtrl',function($scope,$stateParams){
    $scope.title = $stateParams.title;
    $scope.thumbnail = $stateParams.thumbnail;
    $scope.link = $stateParams.link;
    $scope.content = $stateParams.content;
    
})

/*
=====================================
    Preferences
=====================================
 */
.controller('preferencesCtrl', function($scope){
    $scope.categories = [
    {
      id:"1",
      name: "lajme",
      checked: true,
    },
    {
      id:"2",
      name: "artikuj",
      checked: true,
    },
    {
      id:"3",
      name: "sport",
      checked: false,
    },
    {
      id:"4",
      name: "shendetesi",
      checked: true,
    },
    {
      id:"5",
      name: "teknologji",
      checked: false,
    }
  ];
  
  $scope.savePreferences = function(){
    $scope.catList= [];
  
    for (var i=0; i<$scope.categories.length; i++){
      var temp = $scope.categories[i].checked;

      if (temp == true){
        $scope.catList.push($scope.categories[i].name);
      }
    }
  }
  
  $scope.savePreferences();
})