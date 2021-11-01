
class physicalClientUpdateController {

  constructor(
    public $scope,
    public $state,
    public $interval,
  ) { }


}

physicalClientUpdateController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]


export default physicalClientUpdateController;