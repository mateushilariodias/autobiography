JavaScript Core (core = núcleos)
    Linguagem de programação que roda nos navegadores dos usuários (front-end)
	Exemplos: janelas que aparecem após um clique de botão, ou seja, a alteração 
	do site ou aplicativo, conforme a interação do usuário
	Roda também no computador (back-end)
	Com o JavaScript podemos criar aplicações web, mobile com React Native 
	(framework), e desktop com Electron (biblioteca)
	
  SINTAXE
    Escrever textos de maneira correta, toda linguagem tem, para uma boa 
	comunicação
	Tudo no lugar correto
	  
  MANEIRAS DE EXECUTAR O JAVASCRIPT
    A primeira maneira é pelo navegador, clicando na tecla F12 em qualquer website 
	o menu do DevTools, que são ferramentas para desenvolvedores, na aba console 
    podemos executar código JavaScript. A segunda forma é pela aplicação web 
    CodePen, abrindo o endereço codepen.io/pen você encontra um ambiente que se 
    pode utilizar codigo HTML, CSS e JavaScript. Também pode-se usar o Visual 
    Studio Code, criando um arquivo HTML com a tag <script> e colocando o código 
	dentro
	
  ADICIONANDO ARQUIVOS JS
    Uma outra maneira de organizar o código JavaScript é criando um arquivo com um 
	final ".js" no diretório junto ao arquivo HTML, de preferência evitando usar 
	caracteres especiais como letras acentuadas e espaços. Para conectar este 
	arquivo JS ao HTML, pode-se usar a linha de código <script src="./nomedoarquivo.js">
	</script> no body, agora abrindo este arquivo HTML o código será executado
	
  COMENTÁRIOS
    //Comentário em linha ou código
    /* Para várias linhas */
	
  INTRODUÇÃO A TIPOS DE DADOS
    Gramática: elememntos da linguagem e suas combinações, a arte de falar e escrever 
	corretamente
	Vocabulário: conjunto de termos e expressões, agrupamento de palavras
	
  STRING
    Cadeia de caracteres, com aspas duplas ou aspas simples ou crases: template 
	literals ou template strings, as crases permitem multilinhas, e colocar 
	expressões de linguagem com $(expressão) = interpolação
	
  NUMBER
    Números:
	inteiros = positivos ou negativos
	reais = float = decimais (com ponto)
	NaN = Not a Number
	Infinity = infinito
	
  BOOLEAN
    Boleano, somente 2 valores: 
	true = verdadeiro
	false = falso
	
  UNDEFINED VS NULL
    undefined = indefinido (não existe)
	null = nulo, objeto que não possui nada dentro (existe, mas não tem nada dentro)
	
  OBJECT
    Objeto, que cria uma estrutura, possui propriedades, atributos, funcionalidades 
	e métodos
	{propriedade: "valor"}
	colocasse uma ',' para mais atributos e métodos
	
  ARRAY
    Vetores: agrupamento de dados, como se fosse uma lista
	['posição']
	colocasse uma ',' para mais atributos e métodos
	
  TIPOS DE DADOS
    Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) 
	temos 9 tipos de dados organizados em: 
	4 categorias: Primitive, Primitive Value, Structural e Structural Primitive
	Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt 
	(não sofrem alterações, ou seja, os valores são imutaveis)
	Os estruturais são: Object (Array, Map, Set, Date, ...) e Function
	Além destes, temos o primitivo estrutural que consiste apenas no dado null
	
  CONHECENDO AS VARIÁVEIS
    Nomes simbólicos para receber algum valor, atalhos de código, identificadores = 
	identifiers
	3 palavras reservadas para criar uma variável:
	var
	let 
	const 
	