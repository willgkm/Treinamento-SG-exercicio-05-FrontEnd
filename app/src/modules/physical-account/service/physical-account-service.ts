class physicalAccountService {

	constructor(
		public $state,
		public $http
	) { }

	getPhysicalAccount() {
		return this.$http.get("http://localhost:8081/contas-fisicas")
	}

	postPhysicalAccount(contaFisica) {
		return this.$http.post("http://localhost:8081/contas-fisicas/cadastrar", contaFisica)
	}

}

physicalAccountService['$inject'] = [
	'$state',
	'$http'
]


export default physicalAccountService;