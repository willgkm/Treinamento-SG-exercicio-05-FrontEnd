import './money-movement-transfer.scss'

class moneyMovementDepositController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  // createLegalAccount = (contaJuridica) => {
  //   console.log(contaJuridica)
  // }

}

moneyMovementDepositController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]

export default moneyMovementDepositController;