
document.getElementById('segunda').style.display = 'none';
document.getElementById('tercera').style.display = 'none';
document.getElementById('cuarta').style.display = 'none';

const ingresar = document.getElementById('ingresar');
ingresar.addEventListener('click', () => {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('tercera').style.display = 'none';
  document.getElementById('cuarta').style.display = 'none';
  document.getElementById('segunda').style.display = 'block';
});
const cifrado = document.getElementById('cifrado');
cifrado.addEventListener('click', () => {
  const textarea = document.getElementById('texto').value;
  const posicion = document.getElementById('posicion').value;
  document.getElementById('resultado').value = window.cipher.encode(posicion, textarea);
});
const decifrado = document.getElementById('decifrado');
decifrado.addEventListener('click', () => {
  const textarea1 = document.getElementById('texto1').value;
  const posicion1 = document.getElementById('posicion1').value;
  document.getElementById('resultado1').value = window.cipher.decode(posicion1, textarea1);
});
const regresar = document.getElementById('regresar');
regresar.addEventListener('click', () => {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('tercera').style.display = 'none';
  document.getElementById('cuarta').style.display = 'none';
  document.getElementById('segunda').style.display = 'block';
});
const regresar1 = document.getElementById('regresar1');
regresar1.addEventListener('click', () => {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('tercera').style.display = 'none';
  document.getElementById('cuarta').style.display = 'none';
  document.getElementById('segunda').style.display = 'block';
});
const cifrar = document.getElementById('cifrar');
cifrar.addEventListener('click', () => {
  document.getElementById('segunda').style.display = 'none';
  document.getElementById('tercera').style.display = 'block';
});
const decifrar = document.getElementById('decifrar');
decifrar.addEventListener('click', () => {
  document.getElementById('segunda').style.display = 'none';
  document.getElementById('cuarta').style.display = 'block';
});
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', () => {
  document.getElementById('texto').value = '';
  document.getElementById('resultado').value = '';
  document.getElementById('posicion').value = '';
});
const limpiar1 = document.getElementById('limpiar1');
limpiar1.addEventListener('click', () => {
  document.getElementById('texto1').value = '';
  document.getElementById('resultado1').value = '';
  document.getElementById('posicion1').value = '';
});
