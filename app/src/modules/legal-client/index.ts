import * as angular from 'angular'

import legalClientCreateTemplate from './legal-client-create/legal-cliente-create.html'
import LegalClienteController from './legal-client-create/legal-cliente-create'

// import AccountService from ''

const accountModule = angular.module('app.legalClient', [])
  // .service('accountService', AccountService)
  .config(['$stateProvider', ($stateProvider) => {
    // console.log($routeParams)
    $stateProvider
      .state('app.legalClient', {
        url: '^/legal-cliente',
        abstract: true,
      })
      .state('app.legalClient.create', {
        url: '/create',
        templateUrl: legalClientCreateTemplate,
        controller: LegalClienteController,
        controllerAs: '$ctrl',
      })

  }])
export default accountModule