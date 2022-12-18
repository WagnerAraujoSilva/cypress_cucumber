import { listarRecursos } from '../request/001-Req_Listando_todos_recursos';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

try {
    Given(/^que possuo os dados da requisicao$/, () => {
        listarRecursos();
    });

    When(/^que chamo o metodo GET para obter uma listar$/, () => {
        listarRecursos();
    });

    Then(/^deve ser retornado uma lista com todos os recursos$/, () => {
        listarRecursos()
            .then((res) => {
                expect(res.body).to.not.be.empty;
            });
    });

    Then(/^retorna o status 200$/, () => {
        listarRecursos()
            .then((res) => {
                expect(res.status).to.eq(200);
                expect(res.body).to.not.be.empty;
            });
    });

} catch (error) {
    console.log(error);
}
