import { corrigeRecurso, resBody, } from "../request/004-Req_Corrigindo_recurso";
const { Given, When, Then, } = require("@badeball/cypress-cucumber-preprocessor");

try {
	Given(/^que possuo os dados da requisicao$/, () => {
		corrigeRecurso();
	});

	When(/^chamo o metodo PATCH para corrigindo um recurso$/, () => {
		corrigeRecurso();
	});

	Then(/^deve ser retornado um objeto com os dados do recurso corrigindo$/, () => {
		corrigeRecurso().then((res) => {
			expect(res.body).to.have.property('userId', resBody.userId);
			expect(res.body).to.have.property('id', resBody.id);
			expect(res.body).to.have.property('title', resBody.title);
			expect(res.body).to.have.property('body', resBody.body);
		});
	});

	Then(/^retorna o status 200$/, () => {
		corrigeRecurso().then((res) => {
			expect(res.status).to.eq(200);
		});
	});
} catch (error) {
	console.log(error);
}


