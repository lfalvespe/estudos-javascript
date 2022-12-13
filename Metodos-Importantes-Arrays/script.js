const usuarios = [
	{nome: 'Maria', idade: 25, profissao: 'professora', trabalhando:true},
	{nome: 'José', idade: 55, profissao: 'engenheiro', trabalhando:false},
	{nome: 'Pedro', idade: 32, profissao: 'mecânico', trabalhando:true},
	{nome: 'Olga', idade: 20, profissao: 'estudante', trabalhando:false},
	{nome: 'Tereza', idade: 44, profissao: 'arquiteta', trabalhando:true}
];

const numeros= [12, 14, 23, 56, 0, 88];


// reverse()  find() findIndex() includes() some() every() Map() filter() forEach() reduce()  
const container = document.querySelector('#container');


// 1 - find()

const tereza = usuarios.find((user) => user.nome == 'Tereza');
const find = document.createElement('div');
find.setAttribute('id', 'find');
find.setAttribute('class', 'bloco');
find.innerHTML = '1 - find() <br><br> Tereza = ' + JSON.stringify(tereza);

container.appendChild(find);

// 2 - findIndex()

const indiceMecanico = usuarios.findIndex((user) => user.profissao == 'mecânico');
const findIndex = document.createElement('div');
findIndex.setAttribute('id', 'findIndex');
findIndex.setAttribute('class', 'bloco');
findIndex.innerHTML = '2 - findIndex() <br><br> Índice do mecânico = '+ JSON.stringify(indiceMecanico);

container.appendChild(findIndex);

// 3 - includes()

const includes = document.createElement('div');
includes.setAttribute('id', 'includes');
includes.setAttribute('class', 'bloco');
includes.innerHTML = '3 - includes() <br><br> tem 55? ==> ' + numeros.includes(56);

container.appendChild(includes);

// 4 - some()

const menor30 = usuarios.some((user) => user.idade < 30);

const some = document.createElement('div')
some.setAttribute('id', 'some');
some.setAttribute('class', 'bloco');
some.innerHTML = '4 - some() <br><br> Tem alguém com idade menor que 30 anos? ==> ' + menor30;

container.appendChild(some);

// 5 - every()

const todos_Maior21 = usuarios.every((user) => user.idade > 21);
const every = document.createElement('div');
every.setAttribute('id','every');
every.setAttribute('class', 'bloco');
every.innerHTML = '5 - every() <br><br>Todos maiores de 21? ==> ' + todos_Maior21;

container.appendChild(every);

// 6 - map()

const addNacionalidade = usuarios.map((user) => user.nacionalidade = 'Brasil');
const map = document.createElement('div');
map.setAttribute('id', 'map');
map.setAttribute('class', 'bloco');
map.innerHTML = '6 - map()<br><br> Adicionando propriedade nacionalidade a todos os itens: <br><br>' + JSON.stringify(usuarios);

container.appendChild(map);

// 7 - filter()
const todosTrabalham = usuarios.filter((user) => user.trabalhando);
const filter = document.createElement('div');
filter.setAttribute('id', 'filter');
filter.setAttribute('class', 'bloco');
filter.innerHTML = '6 - filter <br><br> Usuários trabalhando: <br><br>' + JSON.stringify(todosTrabalham);

container.appendChild(filter);

// 8 - foreach()

const foreach = document.createElement('div');
foreach.setAttribute('id', 'foreach');
foreach.setAttribute('class', 'bloco');
foreach.innerHTML = '8 - forEach()<br><br> Mostrar os nomes: ';

const nomes = usuarios.forEach((user) => foreach.innerHTML += ' ' + user.nome)

container.appendChild(foreach);


// 9 - reduce()
const somaIdades = usuarios.reduce((totIdade, user) => (totIdade +=  user.idade), 0);
const reduce = document.createElement('div');
reduce.setAttribute('id', 'reduce');
reduce.setAttribute('class', 'bloco');
reduce.innerHTML = '9 - reduce() <br><br> Soma das idades: <br><br>' + somaIdades;

container.appendChild(reduce);
