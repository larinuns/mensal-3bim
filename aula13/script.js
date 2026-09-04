// lista de exercícios - arrays

 // 1 - uma array com 5 números inteiros, uma com os meses do ano e uma contendo strings, numbers, booleanos e um objeto

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const numerosInteiros = [10, 20, 30, 40, 50];
    const tiposDiversos = ["Texto", 100, true, { id: 1 }];

 // 2 - mostrar no console a primeira fruta, a última fruta e a quantidade de frutas

    const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
    console.log('a) primeira fruta:', frutas[0]);
    console.log('b) ultima fruta:', frutas[frutas.length - 1]);
    console.log('c) quant de frutas:', frutas.length);

 // 3 - trocar o valor de um elemento do array e mostrar o resultado no console

    const carros = ["Ford", "Fiat", "Honda"];
    console.log('a) trocar fiat por toyota:', carros[2] = 'toyota');
    console.log('b) resultado: ', carros);

 // 4 - push e pop

    const compras = [];
    compras.push("Alface", "Batata", "Café", "Açúcar", "Pitaya");
    compras.pop();
    console.log('resultado do pop e do push: ', compras);

 // 5 - shift e unshift

    const fila = ["Carlos", "Ana", "Pedro"];
    fila.shift(0);
    fila.unshift("Mariana");
    console.log('nova fila: ', fila);

 // 6 - splice

    const letras = ["A", "B", "C", "D", "E"];
    letras.splice(2,2,'x', 'y');
    console.log('resultado do splice: ', letras);

 // 7 - loop for 

    const numeros = [];
    for (let i = 0; i < numeros.length; i++) {
        console.log("For:", numeros[i]);
    } 
    
 // 8 - loop for of

    for (const numero of numeros) {
        console.log("For of:", numero);
    }

 // 9 - const forEach

    const cidades = ["São Paulo", "Rio", "Curitiba", "Manaus"];
    cidades.forEach((cidade, index) => {
        console.log(`Cidade ${index + 1}: ${cidade}`);
    });

 // 10 - meudeus cansei (includes)

    
    frutas.includes("Banana");
    if (frutas.includes("Banana")) {
        console.log("contém banana na lista");
    }
    else {
        console.log("não contém banana na lista.");
    }

 // 11 - indexOf

    const index = frutas.indexOf("Laranja");
    console.log("Índice da laranja:", index);

 // 12 - find
 
    const pessoas = [
    {nome: "Ana", idade: 18},
    {nome: "Carlos", idade: 25},
    {nome: "João", idade: 30}
];
    const encontrarPessoa = pessoas.find(pessoa => pessoa.nome === "Carlos");
    console.log("Pessoa encontrada:", encontrarPessoa); 

 // 13 - map

    const numerosMap = [1, 2, 3, 4, 5];
    const numerosDobrados = numerosMap.map(n => n * 2);
    console.log("Números dobrados:", numerosDobrados);

 // 14 - filter

    const misturaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = misturaNumeros.filter(n => n % 2 === 0);
    console.log("Apenas pares:", pares);

 // 15 - reduce

    const valores = [1, 2, 3, 4, 5];
    const somaTotal = valores.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log("Soma Total:", somaTotal);

 // 16 - sort

    const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
    nomes.sort();
    console.log("Nomes ordenados:", nomes);
    
 // 17 - reverse

    nomes.reverse();
    console.log("Nomes invertidos:", nomes);

 // 18 - sort

    const numerosDesordenados = [5, 2, 8, 1, 9];
    numerosDesordenados.sort((a, b) => a - b);
    console.log("Números em ordem crescente:", numerosDesordenados);

 // 19 - join

    const cidadesString = cidades.join(" - ");
    console.log("Cidades em string:", cidadesString);