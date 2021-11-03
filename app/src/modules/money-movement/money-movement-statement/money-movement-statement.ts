import './money-movement-statement.scss'

class moneyMovementTakeoffController {

  private extrato: [] = [

  ]

  constructor(
    public $scope,
    public $state,
    public $interval,
    public moneyMovementService,
  ) { }
  
  $onInit = () => {
    console.log(this.extrato)
  }

  LoadStatement = (ExtratoDTO) => {
    console.log(ExtratoDTO);
    this.moneyMovementService.statement(ExtratoDTO).then(response => {
      this.extrato = response.data;
      console.log(this.extrato);
        
      
    })
  }


}

moneyMovementTakeoffController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
  'moneyMovementService'
]

export default moneyMovementTakeoffController;