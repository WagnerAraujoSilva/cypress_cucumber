Feature: Criando um recurso

   Como desenvolvedor, desejo criar um recursos 

Scenario: Criando recurso
  Given que possuo os dados da requisicao
  When  chamo o metodo POST para criar um recurso
  Then deve ser retornado um objeto com os dados do recurso criado 
  And retorna o status 201