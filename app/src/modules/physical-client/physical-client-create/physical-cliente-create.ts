import './physical-cliente-create.scss'

class physicalClientController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  createPhysiscalClient = (clienteFisico) => {
    console.log(clienteFisico)
  }


}

physicalClientController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]


export default physicalClientController;