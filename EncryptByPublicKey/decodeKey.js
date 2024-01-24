import { Buffer } from 'buffer';

/**
 * Decodifica una clave codificada en formato base64.
 *
 * @param {string} keyEncode - La clave codificada en formato base64.
 * @returns {string} - La clave decodificada en formato ASCII.
 * @throws {Error} - Se lanza si hay algún problema durante el proceso de decodificación.
 *
 * @example
 * // Ejemplo de cómo utilizar la función:
 * const keyEncoded = 'SOME_BASE64_ENCODED_KEY';
 * const decodedKey = decodeKey(keyEncoded);
 * console.log(decodedKey);
 */
const decodeKey = (keyEncode) => {
  try {
    // Decodifica la clave base64 y la convierte a formato ASCII
    const keyDecode = Buffer.from(keyEncode, 'base64').toString('ascii');
    return keyDecode;
  } catch (error) {
    // Captura y relanza cualquier error ocurrido durante el proceso de decodificación
    throw new Error(`Error during decoding: ${error.message}`);
  }
}

export default decodeKey;
