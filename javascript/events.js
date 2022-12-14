//header all
let BtnBuscados = document.querySelector('.btn-mais-buscados');
let containerHiden = document.querySelector('.buscados-hiden');
BtnBuscados.addEventListener('click', () => {
    containerHiden.classList.toggle('visibile');
})

//filter

let BtnAtivaFilter = document.querySelector('.btn-ativa');
let hiden = document.querySelector('.gender-none');



BtnAtivaFilter.addEventListener('click', () => {
    hiden.classList.toggle('active');
})

//category

let BtnAtivaCategory = document.querySelector('.btn-category');
let category = document.querySelector('.category-none');


BtnAtivaCategory.addEventListener('click', () => {
    category.classList.toggle('active');
})

//tamanho
let BtnAtivaTamanho = document.querySelector('.btn-tamanho');
let tamanho = document.querySelector('.input-tamanhos');


BtnAtivaTamanho.addEventListener('click', () => {
    tamanho.classList.toggle('active');
})
//colors
let BtnAtivColors = document.querySelector('.btn-colors');
let colors = document.querySelector('.colors');


BtnAtivColors.addEventListener('click', () => {
    colors.classList.toggle('active');
})