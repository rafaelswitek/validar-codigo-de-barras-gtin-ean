# Validar Codigo de Barras GTIN EAN

Função para validação do Código de Barras(GTIN/EAN).

GTIN significa Número Global do Item Comercial. Se trata de um padrão criado e administrado pela GS1. É ele que aparece abaixo dos códigos de barras, amplamente utilizados no varejo físico para identificação de produtos. Sua forma mais comum é de 13 dígitos, podendo também ser formado por 8, 12 ou 14 dígitos. No mundo virtual, os canais digitais usam esses identificadores únicos para estabelecer a singularidade de um produto.

FONTE: https://www.gs1br.org/codigos-e-padroes/chaves-de-identificacao/gtin

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Validar Codigo de Barras GTIN EAN**
| :label: Tecnologias | JavaScript
| :rocket: URL         |

## Detalhes do projeto

### Conceitos estudados e aplicados

* Seleção de Elementos do DOM: O código usa document.querySelector para selecionar o elemento HTML com o ID "codigo_barras".
* Event Listeners: Utiliza addEventListener para anexar um ouvinte de evento ao campo de entrada. O código responde ao evento "change", que é acionado quando o valor do campo é alterado.
* Validação de Entrada de Usuário: Verifica se o valor inserido no campo é um número e se não está vazio. Isso envolve o uso de condicionais (if) e a função isNaN para validar se o valor é um número.
* Manipulação de Strings: Usa métodos de manipulação de strings, como padStart para garantir que o código de barras tenha 18 caracteres e slice para remover o dígito verificador.
* Laço de Repetição: Utiliza um loop for para calcular a soma ponderada dos dígitos do código de barras. O loop executa uma operação de repetição em uma série de elementos.
* Expressões Aritméticas: Calcula a soma ponderada, o múltiplo mais próximo de 10 (MMC), e o dígito de verificação. Isso envolve operações matemáticas, como multiplicação, divisão e subtração.
* Exibição de Alertas: Exibe mensagens de alerta ao usuário com base na validação do código de barras usando a função alert.
* Boas Práticas: O código também segue algumas boas práticas, como verificar se o elemento alvo existe antes de adicionar o ouvinte de evento e usar variáveis bem nomeadas para tornar o código mais legível.