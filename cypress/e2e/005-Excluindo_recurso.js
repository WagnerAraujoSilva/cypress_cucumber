import {deletaRecurso} from"../request/005-Req_Excluindo_recurso";
const { Given, When, Then, } = require("@badeball/cypress-cucumber-preprocessor");


try {
	Given(/^que possuo os dados da requisicao$/, () => {
		deletaRecurso();
	});

	When(/^chamo o metodo DELETE para deletar um recurso$/, () => {
		deletaRecurso();
	});

	Then(/^deve ser retornado um objeto vazio$/, () => {
		deletaRecurso().then((res) => {
			expect(res.body).to.have.empty;
		  });
	});

	Then(/^retorna o status 200$/, () => {
		deletaRecurso().then((res) => {
			expect(res.status).to.eq(200);
		});
	});

} catch (error) {
	console.error(error)
}

