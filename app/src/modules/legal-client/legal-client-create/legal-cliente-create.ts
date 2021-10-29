import './legal-cliente-create.scss'

class legalClientController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  createLegalClient = (clienteJuridico) => {
    console.log(clienteJuridico)
  }


}

legalClientController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]


export default legalClientController;