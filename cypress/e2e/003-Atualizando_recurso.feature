Feature: Atualizar um recurso

   Como desenvolvedor, desejo atualizar um recursos 

Scenario: Atualizar recurso
  Given que possuo os dados da requisicao
  When  chamo o metodo PUT para atualizar um recurso
  Then deve ser retornado um objeto com os dados do recurso atualizados
  And retorna o status 200