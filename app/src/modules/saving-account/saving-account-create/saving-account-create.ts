import './saving-account-create.scss'

class physiscalAccountCreateController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  createSavingAccount = (contaFisica) => {
    console.log(contaFisica)
  }


}

physiscalAccountCreateController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]


export default physiscalAccountCreateController;