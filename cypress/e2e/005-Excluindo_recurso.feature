Feature: Excluindo um recurso

   Como desenvolvedor, desejo excluindo um recursos 

Scenario: Excluindo recurso
  Given que possuo os dados da requisicao
  When  chamo o metodo DELETE para deletar um recurso
  Then deve ser retornado um objeto vazio
  And retorna o status 200