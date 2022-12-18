/// <reference types="cypress"/>
import 'cypress-plugin-api';

function deletaRecurso() {
    return cy.api({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1', 
        form: true, 
        body: {
        },
    })
}

export { deletaRecurso }