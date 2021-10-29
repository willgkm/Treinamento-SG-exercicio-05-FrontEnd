import './physical-account-create.scss'

class physiscalAccountCreateController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  createPhysicalAccount = (contaFisica) => {
    console.log(contaFisica)
  }


}

physiscalAccountCreateController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]


export default physiscalAccountCreateController;