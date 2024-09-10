function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa (não utilizado no código fornecido)
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
if ( campoPesquisa == "") {
    section.innerHTML = "<p>nada foi encontrado</p>"
   return
}
    // Inicializa a string que armazenará os resultados da pesquisa
    let resultados = "";

    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        // se titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa) || dado.
        descricao.includes(campoPesquisa) ) {
 // cria um novo elemento HTML para cada resultado
 resultados += `
 <div class="item-resultado">
     <h2>
         <a href="#" target="_blank">${dado.titulo}
         </a>
     </h2>
     <p class="descricao-meta">${dado.descricao}</p>
     <a href="${dado.link}" target="_blank">mais informações</a>
 </div>
`;
}
   }
    // Atualiza o conteúdo da seção de resultados com o HTML construído
    section.innerHTML = resultados;
}


