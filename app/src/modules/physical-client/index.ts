import * as angular from 'angular'

import physicalClientCreateTemplate from './physical-client-create/physical-cliente-create.html'
import PhysicalClienteCreateController from './physical-client-create/physical-cliente-create'

import physicalClientConsultTemplate from './physical-client-consult/physical-cliente-consult.html'
import PhysicalClienteConsultController from './physical-client-consult/physical-cliente-consult'

// import AccountService from ''

const physicalClientModule = angular.module('app.physicalClient', [])
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
        controller: PhysicalClienteCreateController,
        controllerAs: '$ctrl',
      })
      .state('app.physicalClient.consult', {
        url: '/consult',
        templateUrl: physicalClientConsultTemplate,
        controller: PhysicalClienteConsultController,
        controllerAs: '$ctrl',
      })

  }])
export default physicalClientModule