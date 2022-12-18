import { atualizaRecurso, resBody, } from "../request/003-Req_Atualizando_recurso";
const { Given, When, Then, } = require("@badeball/cypress-cucumber-preprocessor");

try {
    Given(/^que possuo os dados da requisicao$/, () => {
        atualizaRecurso();
    });

    When(/^chamo o metodo PUT para atualizar um recurso$/, () => {
        atualizaRecurso();
    });

    Then(/^deve ser retornado um objeto com os dados do recurso atualizados$/, () => {
        atualizaRecurso().then((res) => {
            expect(res.body).to.have.property('title', resBody.title);
            expect(res.body).to.have.property('body', resBody.body);
            expect(res.body).to.have.property('userId', resBody.userId);
            expect(res.body).to.have.property('id', resBody.id);
        });
    });

    Then(/^retorna o status 200$/, () => {
        atualizaRecurso().then((res) => {
            expect(res.status).to.eq(200);
        });
    });

} catch (error) {
    console.log(error);
}

