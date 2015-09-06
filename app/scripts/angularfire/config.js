angular.module('firebase.config', [])
  .constant('FBURL', 'https://tmregfire.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['anonymous'])

  .constant('loginRedirectPath', '/login');
