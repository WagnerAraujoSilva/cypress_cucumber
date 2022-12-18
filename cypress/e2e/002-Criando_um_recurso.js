import { criarRecurso } from "../request/002-Req_Criando_um_recurso";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

try {
	Given(/^que possuo os dados da requisicao$/, () => {
		criarRecurso();
	});

	When(/^chamo o metodo POST para criar um recurso$/, () => {
		criarRecurso();
	});

	Then(/^deve ser retornado um objeto com os dados do recurso criado$/, () => {
		criarRecurso().then((res) => {
			expect(res.body).to.have.property('title');
			expect(res.body).to.have.property('body');
			expect(res.body).to.have.property('userId');
			expect(res.body).to.have.property('id');
		});
	});

	Then(/^retorna o status 201$/, () => {
		criarRecurso().then((res) => {
			expect(res.status).to.eq(201);
		});
	});

} catch (error) {
	console.log(error);
}