/**
 * Esta función retorna el valor numérico de una carta
 * @param {String} carta
 * @returns {Integer} Retorna el valor de la carta
 */
export const valorCarta = (carta) => {
  if (!carta) throw new Error("Carta es requerida!");

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
