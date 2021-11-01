import './physical-cliente-consult.scss'


class physicalClientCreateController {
  

  private pessoasFisicas: object[] = [

  ]

  constructor(
    public $scope,
    public $state,
    public $interval,
    public physicalClientService,
  ) { }

  loadPhysicalClients = () => {
    this.physicalClientService.getPhysiscalClients().then(response => {
      this.pessoasFisicas = response.data;
      console.log(response.data)
    })
  }

  
}


physicalClientCreateController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
  // 'physicalClientService',
]

export default physicalClientCreateController;