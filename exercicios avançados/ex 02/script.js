function addItem(event) {
    // Verifica se a tecla pressionada foi "Enter" (código 13)
    if (event.keyCode === 13) {
        // Obtém o valor digitado no campo de entrada
        var inputValue = document.getElementById("myInput").value;

        // Cria um novo elemento <li> com o valor digitado
        var newItem = document.createElement("li");
        var textNode = document.createTextNode(inputValue);
        newItem.appendChild(textNode);

        // Adiciona o novo <li> à <ul>
        document.getElementById("myList").appendChild(newItem);

        // Limpa o campo de entrada
        document.getElementById("myInput").value = "";
    }
}
