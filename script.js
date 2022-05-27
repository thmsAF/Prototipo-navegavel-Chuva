/* A function that is called when the button "Leia Mais" is clicked. It is used to show more text. */
function leiamais(){
    var pontos = document.getElementById("pontos");
    var maistexto = document.getElementById("mais");
    var buttonleiamais = document.getElementById("buttonleiamais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maistexto.style.display = "none";
        buttonleiamais.innerHTML = "Leia Mais";
    } else {
        pontos.style.display = "none";
        maistexto.style.display = "inline";
        buttonleiamais.innerHTML = "Leia Menos";
    }
}

/**
 * If the div with the id "novo-topico" is not displayed, then display it and hide the div with the id
 * "discussoes-content" and the button with the id "buttoncriartopico". If the div with the id
 * "novo-topico" is displayed, then hide it and display the div with the id "discussoes-content".
 */
function criartopico(){
    var discussoes_content = document.getElementById("discussoes-content");
    var novo_topico = document.getElementById("novo-topico");
    var criar_topico=document.getElementById("buttoncriartopico");

if (novo_topico.style.display==="none"){
    novo_topico.style.display="block";
    discussoes_content.style.display = "none";
    criar_topico.style.display = "none";
} else {
    novo_topico.style.display = "none";
    discussoes_content.display="flex";
}
}


















/**
 * It takes the text that is selected in the textarea and wraps it in the tag that is passed to the
 * function
 * @param tag - The tag you want to add.
 */
function addTag(tag)
{
var textrange = document.selection.createRange();
var string = textrange.text;

document.form1.field1.focus();

textrange.text = "<" + tag + ">" + string + "</" + tag + ">";
}