/// <reference types="cypress"/>
import 'cypress-plugin-api';

function atualizaRecurso() {
    return cy.api({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        form: true,
        body: {
            "title": "foo",
            "body": "bar",
            "userId": 1
        },
    })
}

var resBody = {
    "title": "foo",
    "body": "bar",
    "userId": '1',
    "id": 1
}

export { atualizaRecurso, resBody }