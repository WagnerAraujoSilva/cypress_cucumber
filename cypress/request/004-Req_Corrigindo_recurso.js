/// <reference types="cypress"/>
import 'cypress-plugin-api';

function corrigeRecurso() {
    return cy.api({
        method: 'PATCH',
        url: 'https://jsonplaceholder.typicode.com/posts/1', 
        form: true, 
        body: {
            "title":"foo",
        },
    })
}

var resBody = {
    "userId": 1,
    "id": 1,
    "title": "foo",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

export { corrigeRecurso, resBody }