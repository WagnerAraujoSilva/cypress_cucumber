/// <reference types="cypress"/>
import 'cypress-plugin-api';

function criarRecurso() {
    return cy.api({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
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
    "userId": 1,
    "id": 101
}

export { criarRecurso, resBody }