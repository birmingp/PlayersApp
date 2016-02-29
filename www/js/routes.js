angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('iRFUPlayersApp', {
      url: '/index.html',
      templateUrl: 'templates/iRFUPlayersApp.html'
    })
        
      
    
      
        
    .state('login', {
      url: '/page3',
      templateUrl: 'templates/login.html'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page4',
      templateUrl: 'templates/signup.html'
    })
        
      
    
      
        
    .state('menu.playerProgress', {
      url: '/page5',
      views: {
        'side-menu22': {
          templateUrl: 'templates/playerProgress.html'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu22',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.yourTeams', {
      url: '/page6',
      views: {
        'side-menu22': {
          templateUrl: 'templates/yourTeams.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.addMatch', {
      url: '/page7',
      views: {
        'side-menu22': {
          templateUrl: 'templates/addMatch.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.addInjury', {
      url: '/page8',
      views: {
        'side-menu22': {
          templateUrl: 'templates/addInjury.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.nutrition', {
      url: '/page9',
      views: {
        'side-menu22': {
          templateUrl: 'templates/nutrition.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.addTraining', {
      url: '/page10',
      views: {
        'side-menu22': {
          templateUrl: 'templates/addTraining.html'
        }
      }
    })
        
      
    
      
        
    .state('notifyUs', {
      url: '/page14',
      templateUrl: 'templates/notifyUs.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/index.html');
  

  

});