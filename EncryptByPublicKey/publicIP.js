/**
 * Obtiene la dirección IP pública del cliente utilizando el servicio IPify.
 *
 * @returns {Promise<Response>} - Una promesa que resuelve en la respuesta de la solicitud de la dirección IP.
 * @throws {Error} - Se lanza si hay algún problema durante la solicitud de la dirección IP.
 *
 * @example
 * // Ejemplo de cómo utilizar la función:
 * publicIP()
 *   .then((response) => response.json())
 *   .then((data) => console.log(data.ip))
 *   .catch((error) => console.error(`Error: ${error.message}`));
 */
const publicIP = () => {
  try {
    // Realiza una solicitud a la API IPify para obtener la dirección IP pública
    return fetch('https://api.ipify.org/?format=json');
  } catch (error) {
    // Captura y relanza cualquier error ocurrido durante la solicitud
    throw new Error(`Error during IP retrieval: ${error.message}`);
  }
}

export default publicIP;
