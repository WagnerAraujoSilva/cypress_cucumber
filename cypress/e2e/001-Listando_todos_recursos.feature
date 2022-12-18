Feature: Listar Todos Recursos

   Como desenvolvedor, desejo listar dos os recursos desa request

Scenario: Listar Recursos
  Given que possuo os dados da requisicao
  When que chamo o metodo GET para obter uma listar
  Then deve ser retornado uma lista com todos os recursos
  And retorna o status 200 