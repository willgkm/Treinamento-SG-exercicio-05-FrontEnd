import * as angular from 'angular'

import physicalClientCreateTemplate from './physical-client-create/physical-cliente-create.html'
import PhysicalClienteController from './physical-client-create/physical-cliente-create'

// import AccountService from ''

const accountModule = angular.module('app.physicalClient', [])
  // .service('accountService', AccountService)
  .config(['$stateProvider', ($stateProvider) => {
    // console.log($routeParams)
    $stateProvider
      .state('app.physicalClient', {
        url: '^/physical-cliente',
        abstract: true,
      })
      .state('app.physicalClient.create', {
        url: '/create',
        templateUrl: physicalClientCreateTemplate,
        controller: PhysicalClienteController,
        controllerAs: '$ctrl',
      })

  }])
export default accountModule