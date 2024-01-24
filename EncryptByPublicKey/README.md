<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proyecto de Ejemplo - Integración de Funciones Criptográficas y Obtención de IP</title>
</head>
<body>

  <h1>Proyecto de Ejemplo - Integración de Funciones Criptográficas y Obtención de IP</h1>

  <p>Este proyecto de ejemplo demuestra la integración de funciones criptográficas y la obtención de la dirección IP pública utilizando Angular y servicios web externos.</p>

  <h2>Descripción General</h2>

  <p>El código proporcionado está diseñado para realizar las siguientes tareas:</p>

  <ol>
    <li><strong>Obtención de la Dirección IP Pública:</strong>
      <ul>
        <li>Utiliza el servicio web IPify para obtener la dirección IP pública del cliente.</li>
      </ul>
    </li>
    <li><strong>Obtención de Clave Pública:</strong>
      <ul>
        <li>Realiza una solicitud a una API externa (<code>urlBase/api/v2.0/convergent/key/public</code>) para obtener una clave pública.</li>
      </ul>
    </li>
    <li><strong>Encriptación de Datos:</strong>
      <ul>
        <li>Utiliza la clave pública obtenida para encriptar un conjunto de datos específicos usando RSA-OAEP con SHA-256.</li>
      </ul>
    </li>
    <li><strong>Envío de Datos Encriptados:</strong>
      <ul>
        <li>Realiza una solicitud POST a la misma API externa (<code>urlBase</code>) para enviar los datos encriptados.</li>
      </ul>
    </li>
    <li><strong>Procesamiento de la Respuesta:</strong>
      <ul>
        <li>Analiza la respuesta del servidor para determinar si la operación fue exitosa o si se produjo algún error.</li>
      </ul>
    </li>
  </ol>

  <h2>Detalles del Código</h2>

  <h3>Funciones Documentadas</h3>

  <ol>
    <li><strong><code>encryptWithPublicKey</code></strong>
      <ul>
        <li><strong>Descripción:</strong> Encripta un texto utilizando una clave pública RSA.</li>
        <li><strong>Parámetros:</strong>
          <ul>
            <li><code>text</code> (string): Texto a encriptar.</li>
            <li><code>publicKey</code> (string): Clave pública en formato PEM.</li>
          </ul>
        </li>
        <li><strong>Valor de Retorno:</strong> Texto encriptado en formato base64.</li>
        <li><strong>Excepciones:</strong> Lanza un error si hay algún problema durante el proceso de encriptación.</li>
      </ul>
    </li>
    <li><strong><code>decodeKey</code></strong>
      <ul>
        <li><strong>Descripción:</strong> Decodifica una clave codificada en formato base64.</li>
        <li><strong>Parámetros:</strong>
          <ul>
            <li><code>keyEncode</code> (string): Clave codificada en formato base64.</li>
          </ul>
        </li>
        <li><strong>Valor de Retorno:</strong> Clave decodificada en formato ASCII.</li>
        <li><strong>Excepciones:</strong> Lanza un error si hay algún problema durante el proceso de decodificación.</li>
      </ul>
    </li>
    <li><strong><code>publicIP</code></strong>
      <ul>
        <li><strong>Descripción:</strong> Obtiene la dirección IP pública del cliente utilizando el servicio IPify.</li>
        <li><strong>Valor de Retorno:</strong> Una promesa que resuelve en la respuesta de la solicitud de la dirección IP.</li>
        <li><strong>Excepciones:</strong> Lanza un error si hay algún problema durante la solicitud de la dirección IP.</li>
      </ul>
    </li>
  </ol>

  <h3>Función Principal - <code>fetchData</code></h3>

  <p>La función principal <code>fetchData</code> realiza el flujo completo de obtener la dirección IP pública, la clave pública, encriptar datos y enviarlos al servidor. Además, maneja las respuestas y posibles errores durante este proceso.</p>

  <h3>Componente Angular - <code>AppComponent</code></h3>

  <p>El componente Angular <code>AppComponent</code> inicia el flujo llamando a la función principal <code>fetchData</code> en su constructor.</p>

  <h2>Uso</h2>

  <ol>
    <li>Clona este repositorio: <code>git clone https://github.com/tu-usuario/ejemplo-angular-crypto.git</code>.</li>
    <li>Instala las dependencias: <code>npm install</code>.</li>
    <li>Ejecuta la aplicación: <code>ng serve</code>.</li>
    <li>Abre tu navegador y visita <code>http://localhost:4200/</code>.</li>
  </ol>

  <p>¡Este proyecto te brinda una base para comprender y aplicar funciones criptográficas y servicios web en una aplicación Angular! Asegúrate de reemplazar las URLs y claves de ejemplo con valores válidos en tu implementación real.</p>

</body>
</html>
