class physicalClientService{

    constructor(
      public $scope,
      public $state,
      public $http
    ) { }

    getPhysicalClient(){
      return this.$http.get("http://localhost:8081/pessoas-fisicas")
    }
  
    postPhysicalClient(){
      return this.$http.post("http://localhost:8081/pessoas-fisicas")
    }
    
  }

  physicalClientService['$inject'] = [
    '$scope',
    '$state',
    '$http'  
  ]
  
  
  export default physicalClientService; 