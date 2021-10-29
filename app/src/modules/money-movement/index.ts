import * as angular from 'angular'

import moneyMovementDepositTemplate from './money-movement-deposit/money-movement-deposit.html'
import moneyMovementDepositController from './money-movement-deposit/money-movement-deposit'

import moneyMovementTakeoffTemplate from './money-movement-takeoff/money-movement-takeoff.html'
import moneyMovementTakeoffController from './money-movement-takeoff/money-movement-takeoff'

import moneyMovementTransferTemplete from './money-movement-transfer/money-movement-transfer.html'
import moneyMovementTransferController from './money-movement-transfer/money-movement-transfer'


const depositModule = angular.module('app.moneyMovement', [])
  // .service('accountService', AccountService)
  .config(['$stateProvider', ($stateProvider) => {
    // console.log($routeParams)
    $stateProvider
      .state('app.moneyMovement', {
        url: '^/money-movement',
        abstract: true,
      })
      .state('app.moneyMovement.deposit', {
        url: '/deposit',
        templateUrl: moneyMovementDepositTemplate,
        controller: moneyMovementDepositController,
        controllerAs: '$ctrl',
      })
      .state('app.moneyMovement.takeoff', {
        url: '/takeoff',
        templateUrl: moneyMovementTakeoffTemplate,
        controller: moneyMovementTakeoffController,
        controllerAs: '$ctrl',
      })
      .state('app.moneyMovement.transfer', {
        url: '/transfer',
        templateUrl: moneyMovementTransferTemplete,
        controller: moneyMovementTransferController,
        controllerAs: '$ctrl',
      })

  }])

export default depositModule