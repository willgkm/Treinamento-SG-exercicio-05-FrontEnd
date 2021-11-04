
class physiscalAccountConsultController {

  private contasFisicas: [] = [

  ]

  constructor(
    public $scope,
    public $state,
    public $interval,
    public physicalAccountService
  ) { }
  
  $onInit = () => {
    this.loadPhysicalAccounts()
  }

  loadPhysicalAccounts = () => {
    this.physicalAccountService.getPhysicalAccount().then(response => {
      this.contasFisicas = response.data;
    })
  }

}

physiscalAccountConsultController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
  'physicalAccountService'
]


export default physiscalAccountConsultController;