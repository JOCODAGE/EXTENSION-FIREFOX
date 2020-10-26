/* creation de la bordure*/
document.body.style.border = "20px solid red"
/* changement de couleur des H1*/
var elementh1 = document.getElementsByTagName('h1');
console.log(elementh1);
for (var i = 0; i <elementh1.length; i++) {
  elementh1[i].style.color ="yellow";
}
/* creation d'une bordure des images*/
var elementimg = document.getElementsByTagName("img");
console.log(elementimg);
for (var i = 0; i <elementimg.length; i++) {
  elementimg[i].style.borderColor="red";
}
/* changement de la font*/
var elementbody = document.getElementsByTagName("body");
console.log(elementbody);
for (var i = 0; i <elementbody.length; i++) {
  elementbody[i].style.fontFamily="cursive";
}
/* changement des images du site*/
var elementimg = document.getElementsByTagName("img");
console.log(elementimg);
for (var i = 0; i <elementimg.length; i++) {
  elementimg[i].src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-facebook-png-icon-png-image_3562028.jpg";
}