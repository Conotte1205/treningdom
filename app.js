/*
const  villes= document.querySelector('ul');
villes.style.color= "red";
setTimeout(()=> {
    villes.style.fontSize= 25;
    villes.insertAdjacentHTML("beforeend", "<li>Nantes</li>");
},3000);
*/
const tab= ['<li>Londres</li>', '<li>Berlin</li>', '<li>Rome</li>'];
const villes= document.querySelector('ul');
tab.forEach((tab) => {
villes.insertAdjacentHTML("beforeend", tab );
});
