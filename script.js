let inputNumero1 = document.querySelector('#numero1');
let inputNumero2 = document.querySelector('#numero2');
let botao = document.querySelector('#somar');
let resultado = document.querySelector('#resultado');

botao.addEventListener('click', () => {
   resultado.textContent = +inputNumero1.value + +inputNumero2.value;
   inputNumero1.value = '';
   inputNumero2.value = '';
});
