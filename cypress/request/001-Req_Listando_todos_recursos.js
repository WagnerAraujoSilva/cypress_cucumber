/// <reference types="cypress"/>
import 'cypress-plugin-api';

function listarRecursos() {
    return cy.api({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts', 
        form: true, 
        body: {
        },
    })
}

export { listarRecursos }