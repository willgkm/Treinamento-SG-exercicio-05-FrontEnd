import * as angular from 'angular'

import physicalAccountCreateTemplate from './physical-accout-create/physical-account-create.html'
import physicalAccountCreateController from './physical-accout-create/physical-account-create'

// import AccountService from ''

const accountModule = angular.module('app.physicalAccont', [])
  // .service('accountService', AccountService)
  .config(['$stateProvider', ($stateProvider) => {
    // console.log($routeParams)
    $stateProvider
      .state('app.physicalAccont', {
        url: '^/physical-account',
        abstract: true,
      })
      .state('app.physicalAccont.create', {
        url: '/create',
        templateUrl: physicalAccountCreateTemplate,
        controller: physicalAccountCreateController,
        controllerAs: '$ctrl',
      })

  }])
export default accountModule