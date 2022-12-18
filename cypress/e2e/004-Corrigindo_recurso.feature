Feature: Corrigindo um recurso

   Como desenvolvedor, desejo corrigindo um recursos 

Scenario: Corrigindo recurso
  Given que possuo os dados da requisicao
  When  chamo o metodo PATCH para corrigindo um recurso
  Then deve ser retornado um objeto com os dados do recurso corrigindo
  And retorna o status 200