import './physical-cliente-create.scss'

class physicalClientCreateController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }

  createPhysiscalClient = (clienteFisico) => {
    console.log(clienteFisico)
  }


}

physicalClientCreateController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]


export default physicalClientCreateController;