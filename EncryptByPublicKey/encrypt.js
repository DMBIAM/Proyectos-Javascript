import * as forge from 'node-forge';

/**
 * Encripta un texto utilizando una clave pública RSA.
 *
 * @param {string} text - El texto que se va a encriptar.
 * @param {string} publicKey - La clave pública en formato PEM.
 * @returns {string} - El texto encriptado en formato base64.
 * @throws {Error} - Se lanza si hay algún problema durante el proceso de encriptación.
 *
 * @example
 * // Ejemplo de cómo utilizar la función:
 * const publicKey = '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...';
 * const encryptedText = encryptWithPublicKey('Hola, mundo!', publicKey);
 * console.log(encryptedText);
 */
const encryptWithPublicKey = (text, publicKey) => {
  try {
    // Convierte la clave pública de PEM a un objeto de clave pública
    const key = forge.pki.publicKeyFromPem(publicKey);

    // Encripta el texto usando RSA-OAEP con SHA-256
    const encrypted = key.encrypt(text, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha256.create(),
      },
    });

    // Codifica el resultado en base64
    const encryptedText = forge.util.encode64(encrypted);

    return encryptedText;
  } catch (error) {
    // Captura y relanza cualquier error ocurrido durante el proceso de encriptación
    throw new Error(`Error during encryption: ${error.message}`);
  }
};

export default encryptWithPublicKey;
