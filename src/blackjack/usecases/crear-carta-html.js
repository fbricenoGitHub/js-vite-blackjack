/**
 * Crea un nuevo elemento con la imagen de la carta suministrada
 * @param {String} carta
 * @returns {HTMLImageElement} Imagen HTML para ser mostrada en la pantalla
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("No ha suministrado una carta");

  const imgCarta = document.createElement("img");
  imgCarta.src = `public/assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
