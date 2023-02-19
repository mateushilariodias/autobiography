CSS (Cascading Style Sheet) = beleza

  COMENTÁRIOS
    /* comentário */

  ANATOMIA DAS TAGS
    Selector {
              Properties: Property Value; == Declaration;
             }
    pode existir várias Declarations dentro do Selector

  SELETORES
    global selector: *
    element/type selector: h(1 ao 6), p, div
    id selector: #NomeDoId
    class selector: .NomeDaClasse
    Atribute selector, pseudo-class, pseudo-element, ...
    para agrupar seletores e aplicar as mesmas propriedades, colooca uma vírgula

  BOX MODEL
    cada elemento html é caixa retangular, em 2D; possui:
	largura e altura          width | height
	conteúdo                  content
	bordas                    border
	preenchimento interno     padding
	espaços fora da caixa     margin

  ORIGEM DO CSS
    4 formas de adicionar css:
    InLine = atributo style dentro do elemento html, 
    <style> = tag html que irá conter o css, no head
    <link> = arquivo css externo (melhores práticas)
    @import = arquivo css externo, escolher o que importar com o @import, e usar o
    que foi importado, como Property Value

  A CASCATA
    escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento
    estilo é lido de cima para baixo
    levado em consideração, três fatores:
    origem do estilo = inline > tag style > tag link
    especificidade = cálculo matemático, onde, cada tipo de seletor e origem de estilo,
    possuem valores a serem considerados
    0. universal selector, combinators e negation pseudo-class (:not())
    1. element type selector e pseudo-elements (::before, ::after)
    10. classes e atribute selectors ((type="radio"))
    100. ID selector
    1000. InLine

  A REGRA IMOPORTANT
    evitar uso, pois não é considerado uma boa prática
    quebra o fluxo natural da cascata, já que sobrescreve tudo, roubando a força de tudo
    usar apenas quando não se consegue de forma alguma modificar uma biblioteca de alguém
    que você está usando

  AT NULES
    relacuonado ao comportamento do css, e começa com o sinal de @ seguido do identificador
    e valor
    @import = incluir um css externo
    @media = regras condicionais para dispositivos
    @font-face = fontes externas
    @keyframes = animation
   

  SHORTHAND
    junção de propriedades
    não ira considerar propriedades anteriores
    valores não especificados irão assumir o valor padrão
    geralmente, a ordem de escrita não importa, mas, se houver  muitas propriedades
    com valores semelhantes, poderemos encontrar problemas
    @import = arquivo css externo, escolher o que importar com o @import, e usar o
    que foi importado, como Property Value

  FUNÇÕES
    name que recebe argumentos dentro de parentesis, e retorna valor   

  DEVTOOLS
    F12 abre o DevTools, que mostra todo css dos elementos em determinada página web
    servirá para estudar html, css, js, arquivos externos, rede de tráfego de dados, 
    performace da aplicvação, ...
    
  CUIDADOS COM A ESCRITA
    o editor já ajuda a formatar o código, mas, mesmo assim, ficar atento aos detalhes
    
  VENDOR PREFIXES
    permite que browsers adicione 'features', a fim de colocar em uso alguma novidade que
    vemos no css, em determinado navegador, já que algumas novidades ou features, não 
    chegam de uma vez em todos
   
/*[http://ireade.github.io/which-vendor-prefix/]*/
/*[http://caniuse.com]*/

  VALORES E UNIDADES DE MEDIDAS
    <values> <data types> == para estudar na documentação da MDN
	tipos numéricos:
	  <integer> == número inteiro
	  <number> == número decima
	  <dimension> == é um <number> com uma unidade junto: deg, s, px
	  <percentagem> == representa a fração de um número: %
	unidades comum
	  <length> == representa um valor de distância: px, em, vv
	  <angle> == representa um ângulo: deg == graus, rad == radianos, turn == giro completo
	  <time> == representa um tempo: s, ms
	  <resolution> == representa resolution para dispositivos: dpi

  DISTÂNCIAS ABSOLUTOS E RELATIVAS
    absolutas == fixas e não alteram seu valor
	unidade   nome                equiivalências
	cm       centimetros           1cm = 96px/2.54
	in       inches (polegadas)    1in = 2.54cm = 96px
	px       pixels                1px = 1/96th of lin
	mais comum e utilizado é o px: todas telas tem tamanho de pixels:
	tela full hd:  1920px de largura por 1080px de altura
	tela hd:  1280px de largura por 720px de altura
	não recomendado usar cm, esperando que as outras telas tenham x, y ou z centimetros
	relativas == relativas a algum valor: pode ser o elemento pai, ou root, ou o tamanho de tela
	maior adaptação aos diferentes tipos de tela
	unidade    relativo a
	em         tamanho da font do pai
	rem        tamanho da font do elememnto raiz == (root/html  == definido como 16px, mas
	pode ser mudado, criando um ':root' ou html no css e alterando a font-size para o value desejado)
	vw         1% da viewport width==largura
	vh         1% da viewport height==altura
	
  PORCENTAGENS
	em muitos casos é tratado da mesma maneira que as distâncias <length>
	sempre será relativo a algum valor
	cada aplicação da porcentagem é relativa ao pai
	
  POSITION
    conjunto de coordenadas 2D: top, right, bottom, left e center
	usados para algum tipo de propriedades
	não confundir com a propriedade 'position'
	
  FUNÇÕES
    causar reaproveitamento de código:
	rgb() e hsl() fazem o cálculo de cor, url() faz a estratégia de ir até um site, 
	buscar algo e calc() efetua cálculo para ser utilizado como valor
	
/* body não tem uma altura definida por padrão, precisando então, de colocar uma,
caso algo dependa disso
    
  STRING E IDENTIFICADORES
    string: texto envolto em aspas. identificadores: nomes dos valores;

  BOX SIZING
    cálculo do tamanho total da caixa é feito pelo content-box
	para fazer pela borda: box-sizing: border-box;
	por padrão, muitos já atribui isso para tudo de uma vez só: uso do '*'
	
  DISPLAY-BLOCK-INLINE 
    como as caixas se comportam externamente em relação as outras caixas
	block                         inline
	ocupa toda a linha,           elememnto ao
	colocando o próximo           lado do outro
    elememnto abaixo desse	      
    width e height são            width e height
	respeitados                   não funcionam
	padding, margin, border,      funciona apenas
	irão funcionar normalmente    valores horizontais
                                  de nargin, padding e border
	conteúdos de padrão:
	block: '<p> <div> <section>', todos os headings '<h1><h2>...'
    inline: '<a> <strong> <span> <em>'
	
  MARGIN
    espaços entre os elememntos
	propriedades: top, right, bottom e left
	valores: <length> <percentage> auto
    geraalmente, aplicamos o shorthand:
	top, right, bottom, left - 4
	top, right e left, bottom - 3
	top e bottom, right e left - 2
	todas laterais - 1
    cuidado com a margin collapsing (top se ajunta ao bottom, pegando 
	o maior número; e no inline, somaos valores das laterais horizontais) - 2 elememntos
	o navergador já aplica no body: 8px de margim - é padrão do chrome
	costumam colocar todos os elementos, por  padrão, com  margim 0;
	auto sozinho só cálcula as laterais horizontais, então, geraalmente, usa-se 
	o 0 auto; ou coloca-se valor para as laterais verticais, e auto para as 
	laterais horizontais

  PADDING
    preenchimento interno da caixa
	propriedades: top, right, bottom e left
	valores: <length> <percentage> auto
    geraalmente, aplicamos o shorthand:
	top, right, bottom, left - 4
	top, right e left, bottom - 3
	top e bottom, right e left - 2
	todas laterais - 1
	padding poderá causar diferença na largura de um elememnto - pode resolver com box-sizing
    
  BORDER-OUTLINE
    as bordas da caixa:
	value: <border-style> <border-width> <border-color>
	style: solid, dotted, dashed, double, groove, ridge, inset, outset
	width: <length>
	color: <color>
    geraalmente, aplicamos o shorthand:
	border: todos os valores, cada valor usado sendo separado por um espaço;
	border-(NameDaLateral): apenas uma lateral terá borda
	usar o box-sizing, para evitar que a largura da borda e a da caixa se somem
	para colocar nenhuma, coloca-se o none
	outline difere da borda em 4 sentidos:
	não modifica o tamanho da caixa, pois não é parte do Box Model
	poderá ser diferente de retangular
	não permite ajustes individuais
	mais usado pelo user agent para acessibilidade, principalmente em imputs
	
  CORES
    tipos:
	background-color (para caixas)
	color (para textos)
	border-color (para caixas)
	outros...
	podemos definir os valores por:
	palavra-chave (NomeDaCor, transparent)
	hexadecimal (#HexadecimalQueRepresentaACor)
	funções: rgb, rgba, hsl, hsla
	
  KEYWORD NAMED VALUES
    color: keyword; ex: color: currentcolor; == cor do momento, que também é a mesma 
	coisa de não colocar a cor
	color: NameOfValue; ex: color: tan;
	
  HEXADECIMAL
    color: #090; são agrupamentos de valores red, green e blue, que da a cor secundária
	pode fazer com 3, 4 ou 6 valores
	0 a 9 e A a F
	color: #009900;
	color: #090a; quando tem o quarto elemento, estamos trabalhando o alpha, que
	seria a transparência dessa cor
	color: #009900aa;
	
  RGB
    color: rgb = red, green e blue
	0 a  255 = de super preto a maior incidência da cor do momento
	
  HSL
    Hue Saturation Lumiance
	trabalha em graus
	color: hsl(cor saturação luz transparência)
	
  GLOBAL VALUES
    valor de herança, então se herda o valor do elememnto anterior==(valor que ele começou)
	color: inherit; herda cor do anterior
	color: intial; volta a cor inicial, resete cores e deixa mais original possivel
	color: unset; pega a cor do contexto que ele está tammbém
	
  BACKGROUND
    defini o fundo do elememnto, atua na caixa toda e, por padrão, é transparente
	background-color: AlgumValueDaCor;
	
  BACKGROUND-IMAGE-REPEAT
    para aplicar um background de imagem:
    background-image: url(UrlDaImagem)
	o padrão do background é que a imagem comece a se repetir em todos os eixos, 
	e para mudar isso, usa-se:
	background-repeat: no-repeat;
	pode se repetir apenas no eixo x ou y, usando: repeat-EixoDesejado
	
  BACKGROUND-POSITION
    para mudar a posição da imagem, usa-se:
	background-position: Nome(s)Da(s)Posição(ões);
	
  BACKGROUND-SIZE
    para alterar o tamanho da imagem, usa-se:
	background-size: or contain (imagem ficar dentro) or cover (imagem se estica e cobre 
	todo background da caixa) or porcentagem (se apenas um valor, se aplicará para 
	a largura e a alltura ficará automática, se tiver o segundo valor, o mesmo ficará
	com a altura) or em, or px;
	
  BACKGROUND-ORIGIN-CLIP
    o background-color e a imagem podem começar de 3 opções:
	background-origin: or border-box (começa a partir da borda) or content-box (já 
	é o padrão, e começa apartir do conteúdo) or border-padding (começa a partir
	do padding)
	background-clip: UmaDas3Opções; muda a cor e imagem, nesse, o border-box é o padrão
	
  BACKGROUND-ATTACHMENT
    no ato de rolar a página, a imagem pode movimentar-se ou não, então decidimos aqui:
    background-attachment: or scroll (padrão, é o que faz movimentar) or fixed (para
	ficar fixa);
	
  SHORTHAND
    background: PropriedadesDoBackground; um espaço entre cada uma, colocar '/' antes
	de começar o background-size

  GRADIENT
    mudar de uma cor até a outra, de maneira suave, e se faz assim:
	linear=começa de cima para baixo
	radial=é circular
	background: limearOrradial-gradient (AngulaçãoEmDeg, CorDeInicio,
	OutraCor, CorDeFim, rgba);
	
  MULTIPLOS VALORES
    para usar multiplos backgrounds, coloca-se uma virgula no que seria o próximo 
	background, para separa-lôs

  LAYOUTS
    história do css:
    tables = elementos ao lado do outro, era o único layout no html, antigamente
	floats = para deixar os elememntos flutuantes
	clear = para os elementos pararem de flutuar e não afetarem os próximos elememntos
	frameworks = traziam ideia de grid systems
	grid systems = pegava a tela, e a "dividia", podendo colocar elementos dentro dos
	espaçamentos, sendo apenas um espaço para cada elememnto
	fixebox
	grid
	
  POSITION
    controlar na página, onde o elemento irá ficar, alterando o fluxo normal dos
	elementos
    fluxo normal dos elementos é um abaixo do outro, a não ser que eles sejam inline
	nome: position
	value: static, relative, absolute, fixed
	5 propriedades:
	top, right, bottom, left, z-index
	
  STATIC
    o padrão de todos elementos é static, ou seja, seguem o fluxo normal
	
  RELATIVE
	movimenta na página, mas mantém o fluxo normal para os outros elememntos
	
  ABSOLUTE
	movimenta na página, e os outros elementos se posicionam de forma adaptativa, na
	ausência dele
	ele pode estar absoluto em relação a página ou abdoluto em relação ao seu pai, caso
	haja
	
  FIXED
    o elememnto fica fixo na página, os outros elementos passam por trás dele
	
  ELEMENTO STACKING
    stacking=empilhamento
	z-index determina a ordem da posição do elememnto, quanto maior, mais acima
	o elememnto vai aparecer, ou senão, o último elemento terá mais força
	
  FLEX
    flexbox nos permite posicionar os elememntos dentro da caixa, controla em 
	dimensões (horizontal ou vertical), alinhamento, direcionamento, ordenar
	e tamanhos
	display: flex
	flex-direction: direção do flex: (horizontal ou vertical), row, column
	o padrão de direcionamento é vertical no css
	alinhamento: justify-content (justificar conteúdo, com algum valor) or
	align-items (alinhamento de itens)
	
  GRID
    posicionamento dos elememntos dentro da caixa, posicionamento horizontal e
	vertical ao mesmo tempo, pode ser flex ou fixo, cria espaços para os elememntos 
	filhos habitarem
	display:grid
	grid-template-areas: definir áreas
	"prim prim"
	"seg ter quar"
    "qui sex" cada uma das áreas entre aspas significam uma linha, e
	dentro delas se define as colunas, de acordo com os seus nomes
	colocar o grid-area: name; onde cada um irá habitar
	definir tamanho das linhas: 
	grid-template-rows: 30px ifr (segunda linha seja flexivel e, ele pega
	uma fração, preenche tudo da viewport, até onde achar a próxima linha) 45px;
	definir tamanho das colunas:
	grid-template-columns: ifr 70px ifr;
	
  GRID OU FLEXBOX
    pode usá-los juntos, só que não no mesmo elememnto
	flexbox para apenas uma linha e grid para 2 ou mais linhas
	
  INTRODUÇÃO FONT-PROPERTIES
    tipografia transmite mensagem: negrito, tamanho, estilo
	basic font-properties: font-family, font-weight, font-style e font-size
	
  FONT-FAMILY
    tipo de fonte de um elemento, lista de fontes e ordem de prioridade, inclui 
	fallback=(alguma fonte ou alguma coisa que vamos colocar no lugar, caso
    aquela não dê certo) font
	font-family: "FonteDesejada", fallback, serif (linhas em baixo de algumas 
	letras) or sans-serif (não tem essas linhas e faz um caminho retinho);
	
  FONT-WEIGHT
    peso da fonte
	font-weight: valor (normal, bold, bolder, lighter, 100, 200,...,900);
	Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

/* https://www.w3.org/TR/css-fonts-3/ */

  FONT-STYLE
    estilo da fonte
	font-style: valor (normal, italic, oblique);
	os valores que podem ser aplicados dependem da fonte usada
	
  FONT-SIZE
    tamanho da fonte
	font-size: valor (é comum de se usar o px ou em);
	
  WEB-FONTS
    fontes do sistema: fontes instaladas em minha máquina, e nem sempre vai estar
	instalada na máquina do cliente
	precisamos transformar as fontes para a web
	fontes da web: como usá-las:
	@font-face (fontes da nossa máquina para serem usdadas na internet), @import, link
	
	
/* https://fonts.google.com/ and https://css-tricks.com/snippets/css/using-font-face-in-css/ */

  FONT-VARIANT E FONT-STRETCH
    font-variant faz variações na apresentação da fonte
	font-variant: valor (uma das mais usadas é small-caps);
	font-stretch trabalha com o alargamento ou encolhimento da fonte, aceita 
	palavras-chaves como: expanded, condensed, normal, aceita porcentagens de 
	50% a 200%, essa propriedade não vai funcionar em todas as fontes
	font-stretch: valor;
	
  LETTER E WORD-SPACING
    letter spacing: espaço entre caracteres
	letter-spacing: valor (px pr em);
	word spacing: espaço entre palavras
	word-spacing: valor (px or em);
	
  LINE-HEIGH E TEXT-TRANSFORM
    Line height define os espaços entre linhas, pode ser com unidades ou sem unidades
	de medida, valores comuns: 1.5 ou 2
	line-height: valor;
	Text transform é uma transformação do texto
    Valores podem ser: none (nenhuma tranformação de texto), capitalize (as letras 
	iniciais ficam maiusculas), uppercase (todas letras ficam maiusculas), lowercase 
	(todas letras ficam minusculas), full-width, full-size-kana
	text-transform: valor;
	
  TEXT-DECORATION
    Text decoration é a aparência decorativa de um texto
	line: underline (linha que fica abaixo), overline (linha que fica acima), 
	line-through (linha que fica no meio)
    podemos aplicar mais de 1 valor
    style: wavy (ondulado), dotted (pontinhos), double, dashed, solid (padrão)
    color: <color> values
	é um shorthand, mas dá para separar
	
  TEXT-ALIGN
    text-align é para o alinhamento de um texto
	Valores: start, end, left, right, center, justify, match-parent
	text-align: valor;
	
  TEXT-SHADOW
    Text shadow aplica uma sombra a um texto e permite multiplos valores
	text-shadow: offset-x  offset-y  blur-radius  color 
	
  SHORTHAND
    Podemos usar o shorthand font para determinar os seguintes valores: font-style, 
	font-variant, font-weight, font-stretch, font-size, line-height e font-family
	apenas separando com um espaço
	o size e o line-height sempre vão ser separados pela barra '/'
	