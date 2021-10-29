import './money-movement-deposit.scss'

class moneyMovementDepositController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  onDeposit = (deposito) => {
    console.log(deposito)
  }

}

moneyMovementDepositController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]

export default moneyMovementDepositController;