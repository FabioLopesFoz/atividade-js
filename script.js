let elementoH1 = document.getElementById("titulo");
let elementoA = document.querySelector("a");
let elementoUl = document.getElementById("lista-nao-ordenada");
let elementoOl = document.getElementById("lista-ordenada");
elementoH1.innerText = "Novo Título";
elementoA.innerText = "Proz";
elementoUl.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`
elementoOl.innerHTML = `
<li><a href="https://www.google.com.br">Link 1</a></li>
<li><a href="https://www.uol.com.br/">Link 2</a></li>
<li><a href="https://www.terra.com.br/">Link 3</a></li>
`