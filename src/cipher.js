window.cipher = {
  encode: (posicion, textarea) => {
    let posicionvalu = '';
    for (let i = 0; i < textarea.length; i += 1) {
      const codigo = textarea.charCodeAt(i);
      if (codigo >= 65 && codigo <= 90) {
        posicionvalu += String.fromCharCode(((codigo - 65 + parseInt(posicion, 0)) % 26) + 65);
      } else if (codigo >= 97 && codigo <= 122) {
        posicionvalu += String.fromCharCode(((codigo - 97 + parseInt(posicion, 0)) % 26) + 97);
      } else if (codigo >= 48 && codigo <= 57) {
        posicionvalu += String.fromCharCode(((codigo - 48 + parseInt(posicion, 0)) % 10) + 48);
      } else if (codigo === 32) {
        posicionvalu += ' ';
      } else {
        posicionvalu += String.fromCharCode(codigo);
      }
    }
    return posicionvalu;
  },
  decode: (posicion1, textarea1) => {
    let posicionvalu1 = '';
    for (let i = 0; i < textarea1.length; i += 1) {
      const codigo1 = textarea1.charCodeAt(i);
      if (codigo1 >= 65 && codigo1 <= 90) {
        posicionvalu1 += String.fromCharCode(((codigo1 - 90 - parseInt(posicion1, 0)) % 26) + 90);
      } else if (codigo1 >= 97 && codigo1 <= 122) {
        posicionvalu1 += String.fromCharCode(((codigo1 - 122 - parseInt(posicion1, 0)) % 26) + 122);
      } else if (codigo1 >= 48 && codigo1 <= 57) {
        posicionvalu1 += String.fromCharCode(((codigo1 - 57 - parseInt(posicion1, 0)) % 10) + 57);
      } else if (codigo1 === 32) {
        posicionvalu1 += ' ';
      } else {
        posicionvalu1 += String.fromCharCode(codigo1);
      }
    }
    return posicionvalu1;
  },
};
