// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'app-controllers' ,'ngCordova', 'defaultConf'])

.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('app',{
        url: '/app',
        abstract:true,
        templateUrl: 'templates/app.html'
    })

    .state('app.player',{
        url:'/player',
        views:{
            'appContent':{
                templateUrl: 'templates/player.html',
                controller: 'playerCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    .state('app.emisione',{
        url:'/emisione',
        views:{
            'appContent':{
                templateUrl:'templates/emisione.html',
                controller: 'emisioneCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    .state('app.emisioneDetails',{
        url:'/emisione/:title/:thumbnail/:link',
        views:{
            'appContent':{
                templateUrl:'templates/emisioneDetails.html',
                controller: 'emisioneDetailsCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    .state('app.lajme',{
        url:'/lajme',
        views:{
            'appContent':{
                templateUrl:'templates/lajme.html',
                controller: 'lajmeCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    .state('app.lajmeDetails',{
        url:'/lajme/:title/:thumbnail/:link/:content',
        views:{
            'appContent':{
                templateUrl:'templates/lajmeDetails.html',
                controller: 'lajmeDetailsCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    .state('app.artikuj',{
        url:'/artikuj',
        views:{
            'appContent':{
                templateUrl:'templates/artikuj.html',
                controller: 'artikujCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    .state('app.artikujDetails',{
        url:'/artikuj/:title/:thumbnail/:link/:content',
        views:{
            'appContent':{
                templateUrl:'templates/artikujDetails.html',
                controller: 'artikujDetailsCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })

    /*
        modalPreferencat
     */
    .state('app.preferences',{
        url: '/preferences',
        views:{
            'appContent':{
                templateUrl: 'templates/modalPreferences.html',
                controller: 'preferencesCtrl'
            },
            'sideMenu':{
                templateUrl: 'templates/sideMenu.html'
            }
        }
    })
    
    $urlRouterProvider.otherwise("/app/player");
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //OneSignal installation

    //  var notificationOpenedCallback = function(jsonData) {
    //     console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
    //     alert('Notification opened :)');

    // };

    // window.plugins.OneSignal.init("07d39910-6c50-11e5-a83d-2bbe28e2b3f6",
    //                                 {googleProjectNumber: "331014447688"},
    //                                 notificationOpenedCallback);
    
    // // Show an alert box if a notification comes in when the user is in your app.
    // window.plugins.OneSignal.enableInAppAlertNotification(true);
    
  });

  
})


.service('$cordovaScreenshot', ['$q', function($q) {
    return {
        capture: function(filename, extension, quality) {
            extension = extension || 'jpg';
            quality = quality || '100';

            var defer = $q.defer();

            navigator.screenshot.save(function(error, res) {
                if (error) {
                    console.error(error);
                    defer.reject(error);
                } else {
                    console.log('screenshot saved in: ', res.filePath);
                    defer.resolve(res.filePath);
                }
            }, extension, quality, filename);

            return defer.promise;
        }
    };
}])
