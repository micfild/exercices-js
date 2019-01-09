/*
                //////ex1//////
var $ex1 = document.querySelectorAll("div.info");
console.log($ex1);
*/
/*
                //////ex2//////
var $ex2 = document.querySelectorAll("div#div-1 div.info");
console.log($ex2);
*/
/*
                //////ex3//////
var $ex3 = document.querySelectorAll("div#div-1 div.info");
$ex3.forEach(function(elem, index) {
    elem.innerHTML = 'Bonjour ma Div' + index;
});
*/
/*
                //////ex4//////
var $ex4 = document.querySelector("div#div-2");
console.log($ex4);
*/

                //////ex5//////
/*
//version avec boucle

var $newDiv = document.createElement('div');
var nb = parseInt(prompt('how many p?'));

for (var i = 0; i < nb; i++) {
    var $p = document.createElement('p');
    $p.innerHTML = 'BLAblabla' + i;
    
    $newDiv.appendChild($p);
}

var $body = document.querySelector('body').appendChild($newDiv);
*/
/*
//version sans boucle
var $newDiv = document.createElement('div');
var $pOne = document.createElement('p');
var $pTwo = document.createElement('p');

$newDiv.id = 'ma-div';
$pOne.innerHTML = 'texte 1';
$pTwo.innerHTML = 'texte 2';

$newDiv.appendChild($pOne);
$newDiv.appendChild($pTwo);

var $body = document.querySelector('body');

$body.appendChild($newDiv);
*/
/*
                //////ex6//////
//version 1
var $nwDiv = document.createElement('div');
$nwDiv.id = 'form';
document.querySelector('div#div-2').appendChild($nwDiv);

var $nwForm = document.createElement('input');
$nwForm.type = 'text';
document.querySelector('div#div-2 div#form').appendChild($nwForm);

var $nwBtn = document.createElement('button');
var $nwBtntxt = document.createTextNode('envoyer');
$nwBtn.appendChild($nwBtntxt);
document.querySelector('div#div-2 div#form').appendChild($nwBtn);
*/
/*
//version 2
var $nwDiv = document.createElement('div');
document.querySelector('div#div-2').appendChild($nwDiv);

var $nwForm = document.createElement('input');
$nwForm.type = 'text';
document.querySelector("#div-2 > div:last-child").appendChild($nwForm);

var $nwBtn = document.createElement('button');
var $nwBtntxt = document.createTextNode('envoyer');
$nwBtn.appendChild($nwBtntxt);
document.querySelector('#div-2 > div:last-child').appendChild($nwBtn);
*/
/*
//version 3
var $nwDiv = document.createElement('div');
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
var $nwBtn = document.createElement('button');
var $nwBtntxt = document.createTextNode('envoyer');
$nwBtn.appendChild($nwBtntxt);

$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

document.querySelector('div#div-2').appendChild($nwDiv);
*/

                //////ex7//////

/*
var $nwDiv = document.createElement('div');
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
var $nwBtn = document.createElement('button');
var $nwBtntxt = document.createTextNode('envoyer');
$nwBtn.appendChild($nwBtntxt);

$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

document.querySelector('div#div-2').appendChild($nwDiv);

$nwBtn.onclick = function () {
    console.log('Blabla');
}
*/

/*
// evenements de souris
var $myP = document.querySelector('#div-2 p');

$myP.onmouseover = function () {
    $myP.style = 'background-color: #0F0;';
    $myP.innerHTML = 'OVER';
}

$myP.onmouseout = function (event) {
    $myP.style = 'background-color: transparent;';
    $myP.innerHTML = 'NOT OVER';
}
*/
/*
// pos de la souris temps reel

var $myP = document.querySelector('#div-2 p');
$myP.onmousemove = function (event) {
    $myP.innerHTML = 'Pos X:' + event.clientX + ' ' + 'Pos Y:' + event.clientY;
}
*/
/*

var $nwDiv = document.createElement('div');
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
var $nwBtn = document.createElement('button');
$nwBtn.id = 'btn';
$nwBtn.innerHTML = 'Envoyer';

$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

document.querySelector('div#div-2').appendChild($nwDiv);

var $evBtn = document.querySelector('button#btn');
$evBtn.onclick = function() {
    alert("Reçu");
}
*/


                //////ex8//////
/*
var $nwDiv = document.createElement('div');
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
var $nwBtn = document.createElement('button');
$nwBtn.id = 'btn';
$nwBtn.innerHTML = 'Envoyer';

$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

document.querySelector('div#div-2').appendChild($nwDiv);

var $evBtn = document.querySelector('button#btn');
$evBtn.onclick = function() {
    var $nwFdata = document.querySelector('input').value;
    console.log($nwFdata);
    console.log("Reçu");
}
*/

                //////ex9//////
/*
var $nwDiv = document.createElement('div');
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
var $nwBtn = document.createElement('button');
$nwBtn.id = 'btn';
$nwBtn.innerHTML = 'Envoyer';

$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

document.querySelector('div#div-2').appendChild($nwDiv);

var $evBtn = document.querySelector('button#btn');
$evBtn.onclick = function() {
    var $nwFdata = document.querySelector('input').value;
    var $divex2 = document.querySelectorAll("div#div-1 div.info");
    
    $divex2.forEach(function(elem, index) {
    elem.innerHTML = $nwFdata + index;
    })
}
*/

                //////ex10//////

/*
//je cree ma div
var $nwDiv = document.createElement('div');
//je cree mon input de type text
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
//je cree mon bouton id btn et j'ecris envoyer dans le btn
var $nwBtn = document.createElement('button');
$nwBtn.id = 'btn';
$nwBtn.innerHTML = 'Envoyer';

// je met mon input dans ma div, puis le bouton
$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

//j'insere la div dans la page, dans la div d'id div-2
document.querySelector('div#div-2').appendChild($nwDiv);

//evenement onclick sur le bouton
var $evBtn = document.querySelector('button#btn');
$evBtn.onclick = function() {
    //je crée une balise p
    var $p = document.createElement('p');    
    //j'insère dans le paragraphe la valeur de l'input
    $p.innerHTML = document.querySelector('input').value;
    //j'insere le paragraphe a la suite dans div id div-2
    document.querySelector('div#div-2').appendChild($p);
}
*/
/*
var $nwDiv = document.createElement('div');
var $nwForm = document.createElement('input');
$nwForm.type = 'text';
var $nwBtn = document.createElement('button');
$nwBtn.id = 'btn';
$nwBtn.innerHTML = 'Envoyer';

$nwDiv.appendChild($nwForm);
$nwDiv.appendChild($nwBtn);

document.querySelector('div#div-2').appendChild($nwDiv);

$nwBtn.onclick = function() {
    var $p = document.createElement('p');    
    $p.innerHTML = $nwForm.value;
    $nwDiv.appendChild($p);
}
*/

///// exo11 //////

var $myinput = document.querySelector('input');
var $mybutton = document.querySelector('button');
var mytab = [];

$mybutton.onclick = function () {
    mytab.push($myinput.value);
    console.log(mytab);
}