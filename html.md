HTML (Hypertext Markup Language) = estrutura

  COMENTÁRIOS
    <!-- comentário -->

  ANATOMIA DAS TAGS
    <tag> comnteúdo </tag> == elemento
	
    pode existir elememntos sem fechamento, ou seja, vazios

  ATRUBUTOS
    elementos possuem atributos, como é o caso da img, eles podem significar 
    <img src="imagem" alt="acessibilidade ou não disponivel">
    informações extras ou configurações
    atributos boleanos não necessitam de conteúdo
    Usar aspas duplas quando puder

  ATRIBUTOS GLOBAIS
    pode ser usado em todas tags
    class="NameOfClass" -> aplicar styles css e acessar no js, determinados conteúdos,
	ou seja, usar em 2 ou mais elementos a mesma classe
    contenteditable="bolean" -> editar ou não editar conteúdo
    data-QualquerNomeAqui -> para fazer lógiicas com js
    hidden -> esconder uma tag
    id="NameOfId" -> aplicar styles css e acessar no js, determinado conteúdo, ou seja,
    usar em apenas um elemento o mesmo id
    style="CoisasDeCss" -> aplicar estilos no html no próprio html
    tabindex="OrdemDeTag" -> Mostra a verdadeira ordem dos elementos
    title="title" -> definir um titúlo

<!--developer.mozilla.org-->

  ALINHAMENTO HIERARQUIA
    abrir e fechar tag no local onde se precisa dela, por conta da hierarquia
    fechar a tag que está dentro de outra tag, antes de fechar a tag em que essa 
    está inserida
    tags como arvore geneológica: tag pai, tag filho(s)... cada uma dentro da outra
    existem tags que quebram linha e outras não, o <br> quebra em tags que não quebram

  CARACTERES RESERVADOS
    &nbsp; -> coloca espaços no texto
    &lt; == <
    &gt; == >
    &amp; == &
    &quot; == "
    &apos; == '

  ANATOMIA DOCUMENTO
    <!DOCTYPE html> -> navegadores identificarem que estamos trabalhando com html 5
    <html>
      <html lang="en"> -> traduzir o site (en == inglês pt == portugês)
        <head>
            <meta charset="UTF-8"> -> meta representa vários metadados, esse diz que
            aceita o maior número de caracteres possível
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> ->
            name especifica o que é a meta e content fala o comnteúdo dela
            viewport é toda a parte visivel do navegador
            portabilidade para dispositivos móveis
            <link rel="icon" href="UrlDeOndeEstaOIcone>
            favicon faz os pequenos icones que ficam ao lado dos titulos da páginas
            rel é relacionamento, e vai conter um icone
            relacionamentos e referências especificas para alguns dispositivos e gereções
            sendo assim, usa-se framework para cria-lôs
            meta SEO -> otimuização do conteúdo para os motores de busca: as duas metas 
            anteriores fazem parte; essas também:
            <meta name="author" content="NameOfAuthor"> -> autor da página, para mostrar
            propriedade
            <meta name="description" content="texto para ser mostrado na hora da 
            pesquisa">
            <meta name="robots" content="noindex, nofollow"> -> definoir o que o robô do
            google deve fazer, as duas definições colocadas abaixo, já é padrão, então
            só se usa essa meta para modificar essas:
            index indexa a página e follow segue os links da página
            configurações que o usuário não vê (cabeça - configuração)
        </head>
<!--meta social (meta para redes sociais): open graph foi criado pelo facebook, para 
um conteúdo especial quando for compartilhar o link da página lá
<meta property="og:NameDoAtributo" content="ConteúdoDoAtributo">
tem para imagem, descrição, titulo...
para o twitter: <meta name="twitter:NameDoAtributo" content="ConteúdoDoAtributo">-->
        <body>
            o que de fato o usuário vê na página (corpo - conteúdo)
        </body>
    </html>

  SEMÂNTICA
    influência na forma como o site é indexado nas páginas de pesquisas, acessibilidade...

  TITULOS E PARÁGRAFOS
    <h1> titulos </h1> -> de 1 a 6. 
    <p> parágrafo </p> -> parágrafo, que quebra linha
    lorem traz um texto aleatório

  LISTAS
    <li> lista </li>
    li*NúmeroDeliDesejado
    li's dentro do <ol> deixa a lista ordenada </ol>
    li's dentro do <ul> deixa a lista não ordenada -> pontinhos </ul>
    sempre deixar com ol ou ul

  CITAÇÕES
    avisar que o texto é de fora, para dar os créditos
    <blockquote cite="url que está a citação"> text...<code>&lt;blockquote&gt;</code>
    text...</blockquote> -> deixar bem grande o que foi falado; a tag code deixa com uma 
    cor diferente, avisando que é um bloco de código
    text...url <cite> TextForTheUrl </cite>
    text...<code>&lt;q&gt;</code> text <q cite="url"> text </q> -- <a href="url">
    <cite> TextForTheUrl </cite></a> -> citações curtas

  ABREVIAÇÕES
    explicar o que significa a abreviação de uma palavra/frase grande
    <abbr title="não abreviação"> abreviaçao </abbr>

  DETALHES DE CONTATO
    detalhes de contato da pessoa que escreveu o documento html
    <address> detalhes de contato </address>
    <a href="mailto:e-mail>e-mail</a>
    <a href="tel:PhoneNumber">PhoneNumber</a>

  LISTA DE DESCRIÇÃO
    marcar um conjunto de itens e sua descrição
    <dl> <dt> conceito </dt> <dd> explicação </dd> </dl></a> -> e repete o dt e dl a cada
    novo conceito e explicação

  REPRESENTAÇÃO DE CÓDIGO
    <code> código pequeno </code>
    <pre> <code> código grande e com a formatação </code> </pre>
    <pre> <code> &lt;pre>&lt;/pre> </code> </pre>

  ELEMENTOS GENÉRICOS
    div agrupa conteúdos (geraalmente usa com atributos) e span agrupa textos
    <div> cria bloco </div>
    <span> cria linha </span>
    <div atributo> cria bloco <span> cria linha </span> </div>

  CONHECENDO E UTILIZANDO A TAG ÂNCORA
    hiperlinks: ligação entre diversas páginas
    <a href="OndeSeVai"> conteúdo </a> -> href é a referência, pode conter: url completa
    fragmento, e-mail, telefone... , da para se fazer download ao invês de ir para a 
    página, targent diz qual é o alvo do disparo e um dos mais usados é o blank, que
    faz com que abra uma nova tab com o novo conteúdo, não perdendo a página anterior
    <a href="OndeSeVai" download="ComoVaiSalvar"> conteúdo </a>
    <a href="OndeSeVai" targent="_blank"> conteúdo </a>
    para receber fragmento:
    <a href="NameOfId"> titulo do fragmento </a>
    <h1 id="NameOfId"> titulo do fragmento </h1>

  CONTEÚDO DENTRO DE ELEMENTO A
    Funciona quando o mouse está descansando em cima
    <a href="url" title="ir para a url"> 
    <h1> titulo da url </h1>
    <p> qualquer texto </p>
    <img src="https://source.unsplash.com/random" alt=""> </a>
    random traz qualquer imagem

  CAMINHOS E URL
    quando se está dentro do diretório:
    <a href="FileNome"> abrir FileName do mesmo diretório </a>
    Para navegar entre os diretórios
    <a href="DrectoryName/FileNome"> abrir FileName de outro DirectoryName </a>
    Para sair de diretórios
    <a href="../DrectoryName/FileNome"> abrir FileName de DirectoryName anterior ou
    em outra pasta dentro do DirectoryName </a>
    Para o diretório raiz
    <a href="./DrectoryName/FileNome"> abrir FileName de diretório raiz </a>

  CAMINHOS ABSOLUTOS VS RELATIVOS
    <a href="urlIncompleta" ir para a url > </a> -> relativo: está dentro do documento
    <a href="urlCompleta" ir para a url > </a> -> absoluta: não está dentro do documento,
    pois incluirá todo protocolo
    <h1> titulo da url </h1>
    <p> qualquer texto </p>
    <img src="https://source.unsplash.com/random" alt=""> </a>
    random traz qualquer imagem

  TABELAS
    não usar para criar layout 

  TABELA BÁSICA
    <table>
        <tr>
            <th> cabeçalho </th>
        </tr>
        <tr>
            <td> conteúdo </td>
        </tr>
    </table>

  ORGANIZANDO TABELAS
    <table>
      <caption> descreve o que a tabela está fazendo </caption>
      <thead>
        <tr>
            <th> cabeçalho </th>
        </tr> 
      </thead>
      <tbody>
        <tr>
            <td> conteúdo </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
            <td> rodapé </td>
        </tr>
      </tfoot>
    </table>

  TABELA COMPLEXA
    <table>
      <caption> quantidade de alunos em cada grau de formação por homens 
      e mulheres </caption>
      <colgroup>
          agrupa colunas, facilitando o uso de estilos
          <col>
          <col span="2" style="background-color: red">
          <col span="2" style="background-color: blue;">
      </colgroup>
      <thead>
        <tr>
            <th rowspan="2"> </th>
            <th colspan="2" scope="colgroup"> Uni-facef </th>
            <th colspan="2" scope="colgroup"> Unifran </th>
        </tr>
        <tr>
            <th scope="col"> Graduação </th>
            <th scope="col"> Pós-graduação </th>
            <th scope="col"> Graduação </th>
            <th scope="col"> Pós-graduação </th>
        </tr> 
      </thead>
      <tbody>
        <tr>
            <th scope="row"> homens </th>
            <td> 3000 </td>
            <td> 230 </td>
            <td> 12678 </td>
            <td> 690 </td>
        </tr>
        <tr>
            <th scope="row"> mulheres </th>
            <td> 2407 </td>
            <td> 145 </td>
            <td> 22390 </td>
            <td> 1201 </td>
        </tr>
      </tbody>
    </table>

  VIDEO
    <video src="CaminhoSemelhanteAoDoFile" controls
	width="largura" height="altura" (não precisa colocar px, pois já se entende que
	é assim) autoplay (começa tocando o video, mas depende do navegador, já que uns gostam
	de fazer uma certa privacidade) preload="auto" or (começa a fazer a leitura do video, 
	ou seja, baixar, de maneira automatizada, antes do usuário clicar) preload="metadata"
	(só carrega o que for básico para se entender o que tem no video) or preload="none"
	(não faça preload de nada, apenas quando se clicar lá) loop (se chegar no final do
	video, ele vai tocar o video novamente, mas depende do navegador) muted (se o video deve 
	começar mutado) poster="LinkDeIconeOuImagem" (imagem de fundo para o video, antes dele
	começar)> (em alguns navegadores pode 
	não funcionar) <p> este browser não suporta video, baixe-o <a href="Link
    DoVideo>aqui</a> </p> </video>
    se não, podemos também:
	<video controls> 
	<source src="CaminhoSemelhanteAoDoFile" type="video/container>
	<p> este browser não suporta video</p> </video>
	pois, talvez o container(onde o video está guardado, ex: mp4,...) 
	não funcione naquele browser
	da para colocar mais de um link no source, mas devem serem colocados em ordem
    dessas formas diretas de colocar o video, gasta banda do servidor, já que toda
	vez que alguém da play, ele é baixado
	
  AÚDIO
    a tag audio é muito semelhante a tag video, até os atributos, apenas o poster, 
	width e height que não funcionam
    <audio controls> 
	<source src="CaminhoSemelhanteAoDoFile" type="audio/container>
	<source src="CaminhoSemelhanteAoDoFileParaOutroAudio" type="audio/container>
	<p> este browser não suporta audio</p> </audio>
	
  IFRAME
    traz videos e audios de fora, para não hospedar tudo no nosso servidor, e consumir 
	nossos recursos
	verificar as politicas de privacidade
	quando estamos montando, utilizamos os atributos:
	src, height, width, title (acessibilidade), allow (permitindo 
	configurações especificas da onde estamos indo buscar o conteúdo), alowfullscreen 
    (permite deixar o iframe em tela cheia)	e frameborder (borda)
	share e, depois (compartilhar e incorporar), embed -> iframe que o youtube e google 
	mapas disponibiliza para cada video e localização
	<iframe src="LinkDoCointeúdo" frameborder="0"></iframe>
	
  IMAGENS
    <img src="LinkDaImagem" alt="AlgoSobreAImagem" (acessibilidade ou quando a 
    imagem não puder abrir)	title="TituloNaImagem" (aparecerá quando o mouse descansar
	em cima da imagem) width="largura" heightpx="alturapx" (as vexes não é bom colocar 
	altura e largura juntas, se não souber as dimensões da imagem, pois pode ficar estranha,
	então, é melhor escolher um deles) >
	para abrir um link ao clicar na imagem, basta colocar o img dentro do a:
	<a href="LinkParaIrQuandoOMosuseClicar">
	    <img (todos os atributos que estão dentro dela)>
	</a>
	
  BACKGROUND-IMAGE
    outro jeito de adicionar imagem no html é via css, usando a tag style:
	<p style="background-image: url(CaminhoDaImagem)">imagem</p>
	usado para estilização especifica na página
	
  FIGURES
    fazer titulos visiveis para as imagens:
	<a href="LinkParaIrQuandoOMosuseClicar">
	  <figure>
	    <img (todos os atributos que estão dentro dela)>
	    <figcaption> titulo da imagem </figcaption>
	  </figure>
	 </a>
	 o link pode abrir se clicar na imagem ou no titulo
	 
  INTRO DE SVG
    marcação, estilo html, para imagens e não textos
	possui elementos para gerar formas
	imagem rasterizada: construindo imagens via pixels
	imagem vetorizada: construindo imagens via algoritmos, apresenta beneficios
	e desvantagens:
	beneficios: mais leve, mais detalhada, maior acessibilidade e SEO, pode ser
	editada via css e atributos
	desvantagens: pode ser mais complicado de trabalhar; quanto mais complexa a 
	imagem, mais trabalho para o navegador, navegadores mais antigos não possuem
	suporte a essa tag
	para fotografias, ainda prefira ser imagens rasterizadas ( extensões: 
	.png, .jpg, .jpeg)
	
  SVG NA PRÁTICA
    iremos fazer isso em programas especificos (ex: figma -> só fazer a forma e 
	depois, pegar o código, já pronto), pois é pouco inviavel fazer no html, mas no 
	html é assim:
	<svg width="largura" height="altura">
	<FormaDesejada width="largura" height="altura" fill="CorDePreenchimento 
	stroke="CorDaBorda stroke-width="LarguraDaBorda" e maisoutras propriedades, 
	sendo algumas especificas da forma e outras gerais />
	</svg>
	pontos positivos de fazer pelo html: diminui as chamadas http, da para usar o 
	atributo global style para colocar mais propriedades e valores na forma
	canva: espaço de trabalho, ou seja, o width e height	
	pontos negativos de fazer pelo html: se tiver que ficar repitindo tudo isso,
	para se fazer várias daquela forma, o código fica poluido, pode não ter a 
	possibilidadedo que o cache faz: guardar em memória para pegar mais tarde
	para usar svg de fora
	<img src="LinkDaImagemSvg" alt="">
	pontos positivos: sintaxe familiar, browser trabalhando mais rápido, com o cache
	guardando-a
	pontos negativos: não conseguiremos manipular a imagem, nem com css
	
  FORM
    <form> é o elemento que definirá um formulário
	é container estilo <section> <footer>
	atributos básicos:
	action -> para onde o formulário será submetido, quando vazio, ele é enviado 
	para a mesma página
	method -> defini um verbo: GET (jeito que os dados são recebidos na url e, dados 
	aparecem na url), POST (jeito que os dados são recebidos na url, mas os dados não 
	aparecem na url), por padrão é GET
	não podemos criar um form dentro de outro form
	
  FIELDSET LEGEND
    <fieldset> faz um agrupamento de campos com o mesmo propósito, deixando o html mais
	semântico e com maior acessibilidade
	atributos especiais:
	disabled -> desabilita todos os elementos internos, não serão enviados ao submeter 
	o formulário
	form -> o id de um formulário ao qual esse fieldset pertence, não precisa estar 
	dentro do formulário
	name -> nome do grupo (não aparece na tela)
	<legend> é o nome do agrupamento que de fato aparecerá na tela, e é o primeiro 
	elememnto dentro do fieldset
	
  LABEL
    <label> associa e identifica uma (ou mais) tag de entrada de dados, deixa com maior 
	acessibilidade, poderá clicar para mudar o foco da entrada de dados
	atributos: 
	for -> para fazer a conexão entre este label e a tag de entrada de dados, é feita 
	via id do input, só funciona com elememntos especificos (button, input (not hidden), 
	meter, output, progress, select, textarea)
	
  BUTTON
    <button> representa um botão, usado para enviar formulários, é estilizado pelo 
	user agent (é o navegador), dá para usar o css
	atributos comuns: type (submit (enviar, e é o padrão), reset (resetar), button 
	(alguns navegadores entendem como enviar )), autofocus (especifica que um 
	elememnto deve receber automaticamente o foco quando a página carrega, não deve 
	haver mais de um na página), 
	disabled (não da para ser editado), name (receber o valor dentro name), value 
	(o que é inserido), form (linkar por meio do id)
	
  DATALIST
    datalist é uma lista de valores como sugestão a uma tag <input>, valores
	sugestivos e não obrigatórios, usuário poderão selecionar um dos valores, 
	ou colocar um valor diferente da sugestão
	list -> recebe como valor o id de um <datalist> residente no mesmo documento
	tipos de input suportados: text, search, url, tel, email, date, month, week, 
	time, datetime-local, number, range e color
	valores de datalist que não são compatíveis com o tipo do <input> não serão 
	apresentados
	tipos de input não suportados (conforme especificação): hidden, password, checkbox, 
	radio, file, ou qualquer tipo de button
	user agent: verificar a compatibilidade com o browser http://caniuse.com
	<input type=tipo list="NameOfList">
	<datalist id="NameOfList">
	<option>opção</option>
	</datalist>
	
  INPUT
    <input> é uma das mais usadas em formulários, aceita os mais diversos tipos
	de dados, elevado número de combinações
	atributos: type, name, id
	
  INPUT ATRIBUTOS
    atributos comuns do input:
	autocomplete (autocompletar de acordo com o tipo escolhido), autofocus (bolean, 
	cursor já estará em um campo especifico ao carregar a página, e é só um por página), 
	disabled (bolean, desabilita, não podendo fazer nada naquele campo, sendo opaco), 
	readonly (bolean, semelhante ao disabled, só muda o aspecto, dando sensação de que 
	dá para mecher nele), value (informação já contida ali dentro), form (linkar 
	formulário por meio do id, name (para enviar dados e depois resgatar), required (bolean, 
	mostra que o preenchimento desse campo é obrigatório, ao tentar enviar o formulário), 
	placeholder (mostra do que é aquele campo dentro do campo, mas sai quando começa 
	a inserir algo nele)
	servem para quase todos campos: readonly, form, required, placeholder
	
  PASSWORD
    colocar uma senha de maneira segura, escondendo o que está sendo digitado no campo
	o estilo da apresentação do campo, depende do user agent
	atributos:
	minlength / maxlength -> número muinimo e/ou máximo de caracteres para esse campo
	size -> o número aceitável de caracteres que esse campo deverá conter, já mostrando 
	com o tamanho do campo, que se adequa ao número
	pattern -> expressão regular para validar o que está sendo digitado no campo, 
	altamente recomendado o uso de um padrão de segurança altas de senhas, exemplo: 
    queremos que a senha contenha caracteres hexadecimais com o limite de um mínimo 
	4 e no máximo 8 caracteres = pattern="0-9a-fA-F{4,8}"
    placeholder -> mostra um exemplo de texto a ser digitado no campo
    readonly / disabled -> atributo boleano indicando se o campo está habilitado ou 	
	não
	title -> digitamos a mensagem de orientação de como o campo deve ser preenchido, 
	para aparecer após identificar um erro, ao tentar enviar
	required -> o campo será obrigatório
	inputmode -> poderá alterar o uso do teclados em smartphones, exemplo: queremos 
	que o cliente só adicione números = inputmode="numeric"
	autocomplete -> on: permite a sugestão de: new-password ou current-password, off: 
	desabilita a opção de autocompletar, new-password: o navegador poderá sugerir uma 
	nova senha
	primeiro o navegador verifica se tem uma current-password, se não, ele sugere a 
	new-password, caso não esteja no off
	
  EMAIL
    espera que o usuário digite um email, e irá validar se o valor digitado é um
	email
	atributos:
	placeholder -> mostra um exemplo de texto a ser digitado no campo
    readonly / disabled -> atributo boleano indicando se o campo está habilitado ou 	
	não
	required -> o campo será obrigatório
	multiple -> bolean, o campo irá receber um ou mais emais, separado por virgulas
	minlength / maxlength -> o mínimo e/ou máximo valor que o campo irá conter
	size -> o número aceitável de caracteres que esse campo deverá conter, já mostrando 
	com o tamanho do campo, que se adequa ao número
	pattern -> expressão regular para validar o que está sendo digitado no campo,
	exemplo: o usuário só poderá colocar email do domínio gmail.com.br
	pattern=".+@gmail\.com\.br"
	title -> digitamos a mensagem de orientação de como o campo deve ser preenchido, 
	para aparecer após identificar um erro, ao tentar enviar
	list -> o id de uma tag <datalist> que está no mesmo documento, <datalist> irá 
	conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores 
	estão disponiveis; os valores do <datalist> que não forem compatíveis com o campo 
	não serão apresentados como sugestão
	
  URL
    espera que o usuário digite uma url, irá validar se o valor digitado é uma
	url
	atributos:
	placeholder -> mostra um exemplo de texto a ser digitado no campo
    readonly / disabled -> atributo boleano indicando se o campo está habilitado ou 	
	não
	value -> valor pré definido
	required -> o campo será obrigatório
	minlength / maxlength -> o mínimo e/ou máximo valor que o campo irá conter
	size -> o número aceitável de caracteres que esse campo deverá conter, já mostrando 
	com o tamanho do campo, que se adequa ao número
	pattern -> expressão regular para validar o que está sendo digitado no campo,
	exemplo: o usuário só poderá colocar domínio .com.br
	pattern=".*\.com\.br.*"
	title -> digitamos a mensagem de orientação de como o campo deve ser preenchido, 
	para aparecer após identificar um erro, ao tentar enviar
	list -> o id de uma tag <datalist> que está no mesmo documento, <datalist> irá 
	conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores 
	estão disponiveis; os valores do <datalist> que não forem compatíveis com o campo 
	não serão apresentados como sugestão
	spellcheck -> habilita a verificação ortográfica para este input
	
  FILE
    usuário poderá escolher um ou mais arquivos para enviar no formulário
	atributos:
	value -> contém o arquivo a ser enviado
	accept -> descreve que tipos de arquivos serão aceitos
	exemplo: .doc, .docx, .pdf, .audio/*, image/png, .png
	files -> a lista de arquivo ou arquivos
	multiple -> permite o envio de múltiplos arquivos
	envio de arquivos: para enviar os arquivos o formulário deverá utilizar o 
	método POST e o atributo enctype como "multipart/form-data"
	
  COLOR	
	interface para selecionar cor, color picker == pegar um pedaço de uma cor
	atributos:
	value -> RGB; se inválido, o preto será exibido
	list -> o id de uma tag <datalist> que está no mesmo documento, <datalist> irá 
	conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores 
	estão disponiveis; os valores do <datalist> que não forem compatíveis com o campo 
	não serão apresentados como sugestão
	
  CHECKBOX
    caixas que podem ser marcadas, selecionar um valor para ser enviado; se não 
    selecionado, não será enviado nenhum dados
	atributos:
	globais
	value -> valor que aquele campo contém; se não estiver presente, o padrão é 'on'
	checked -> bolean, para deixar o campo marcado por padrão
	marcar múltiplos valores -> usamos o atributo 'name' comn o mesmo nome para os 
	diversos campos
	
  HIDDEN
    invisivel ao usuário, será enviado com o formulário, não receberá foco, leitores 
	de tela não perecbem esse campo
	exemplo: horário que o formulário está sendo enviado
	
  RADIO
    projetado para selecionar uma única opção de um grupo de opções
	atributos essenciais:
    checked -> indica que o campo foi marcado
	value -> valor que aquele campo contém
	
  TEXTAREA
    para colocar textos com mais de uma linha, útil para textos longos
	atributos:
	id, name, rows e cols, maxlength e minlength, wrap (bolean, deica o texto 
	embrulhado na caixa, aparecendo tudo, em várias linhas, off =  todo texto na mesma 
	linha, com o espaço atribuido, soft = padão, com quebras de limha, hard = como eu 
	vou enviar o texto para o backend), ... outros comuns aos <input>s ..., = 
	autocomplete, autofocus, disabled, placeholder, readonly, form, required
	
  SELECT
    controle que oferece um menu de opções
	<option> -> contém as opções a serem selecionadas, value é um atributo necessário
	atributos únicos -> multiple = habilita multiplas opções, size = quando opções 
	visiveis eu quero ver, em um espaço limitado, só podendo ver as outras, rolando 
	para baixo	
  
  OPTGROUP
    funcionará dentro de um select, agrupando os options, seguido da propriedade 
	label, para fazer sentido
	
  SEARCH
    para campos de busca
	é igual ao campo do tipo 'text', mas podera ser um pouco diferente dependendo do 
	user agent
	atributos:
	list/<datalist> = lista de opções de termos para a pesquisa, pattern, aria-label = 
	opção para quando não temos o label, serve para a acessibilidade, chegando lá, o 
	leitor de tela lerá o que está escrito lá
	
  NUMBER
	entrada de números
	atributos:
	minlength/maxlength = conforme o máximo, se altera a visão do campo
	step = pula os números de quanto em quanto
	placeholder, value, disabled, readonly e list/datalist
	
  RANGE
	controle para selecionar o valor numérico, slider ou dial control
	atributos:
	minlength/maxlength, step = tamanho dos passos
	padrão horizontal, mas tem o vertical, embora seja mais complicado de mudar, devido 
	a aceitação de cada browser
	
  DATA E HORA
    não tem um ótimo suporte para todos os navegadores
	date com value="yyyy-mm-dd"
	datetime-local = além do dia, mês e ano, trás a hora e minuto
	month = seleciona o mês e ano
	time = seleciona a hora e minuto
	week  = seleciona a semana e ano
	
  DESENHANDO 	
	pensar nos requisitos, ajudar a definir as necessidades
	dicas:
	simples e focado
	somente dados necessários
	verifique o que te agrada
	
  WEB SEMÂNTICA
	Adicionar significado a uma linguagem, conteúdo.
	Melhor estrutura para user agent.
	Relevante para acessibilidade.
	Ajuda motores de busca
	
  IMPORTÂNCIA DAS TAGS HTML SEMÂNTICAS
	Algumas tags tem significados especificos e orientações onde cada conteúdo deve 
	ficar ba página.
	
  SEÇÕES COMUNS
	Cabeçalho <header>
	navegação <nav>
	conteúdo principal <main>
	barra lateral <aside>
	rodapé <footer>
	
  HEADER
	Usar no inicio da página
	é global
	Pode ser usado dentro de elememntos semânticos como article, seection.
	Multiplos headers
	Sem atriburos especificos
	
  NAV
	Geralmente vai dentro do header
	Nem todos links vão dentro dela
	Tem links mais importantes
	multiplos navs
	sem atributos especificos
	
  MAIN
	Uma vez por página
	Logo após do body, para o conteúdo/finalidade principal.
	sem atributos especificos
	
  ARTICLE
	Bolocos de conteúdos relacionados
	Faz sentido ver de forma independente
	sem atributos especificos

  ASIDE
	Conteúdos da parte principal de maneira curta:
	explicações, glossários, links extras, biografia do autor, informações de perfil
	sem atributos especificos
	
  FOOTER
	Geralmente no final da página
	informações do autor, copyright, contato, sitemap, voltar ao topo
	sem atributos especificos
  
  SECTION
	Sessões na página.
	sem atributos especificos
	
  ELEMENTOS NÃO SEMÂNTICOS, PARA USO GENÉRICO
	Div para bloco semântico
	Span para texto semântico
	