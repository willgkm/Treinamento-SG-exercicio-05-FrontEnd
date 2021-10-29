import './money-movement-takeoff.scss'

class moneyMovementTakeoffController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  // createLegalAccount = (contaJuridica) => {
  //   console.log(contaJuridica)
  // }

}

moneyMovementTakeoffController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]

export default moneyMovementTakeoffController;