import * as angular from 'angular'

import physicalAccountCreateTemplate from './physical-account-create/physical-account-create.html'
import physicalAccountCreateController from './physical-account-create/physical-account-create'
import accountModule from '../physical-client'

// import AccountService from ''

const physicalAccountModule = angular.module('app.physicalAccount', [])
  // .service('accountService', AccountService)
  .config(['$stateProvider', ($stateProvider) => {
    // console.log($routeParams)
    $stateProvider
      .state('app.physicalAccount', {
        url: '^/physical-account',
        abstract: true,
      })
      .state('app.physicalAccount.create', {
        url: '/create',
        templateUrl: physicalAccountCreateTemplate,
        controller: physicalAccountCreateController,
        controllerAs: '$ctrl',
      })

  }])
export default physicalAccountModule