
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
    console.log(this.contasFisicas)
  }

  loadPhysicalAccounts = () => {
    this.physicalAccountService.getPhysicalAccount().then(response => {
      this.contasFisicas = response.data;
      console.log(this.contasFisicas)
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