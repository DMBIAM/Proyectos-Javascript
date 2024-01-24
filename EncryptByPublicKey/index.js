import { Component } from '@angular/core';
import encryptWithPublicKey from 'encrypt';
import decodeKey from 'decodeKey';
import publicIP from 'publicIP';
import axios from 'axios';

async function fetchData() {
  const urlBase = 'example.com';

  // Fetch public IP
  const publicIPResponse = await publicIP();
  const { ip } = await publicIPResponse.json();
  const publicIPData = ip ?? '127.0.0.1';

  // Construct key URL
  const keyUrl = `${urlBase}/api/v2.0/convergent/key/public?_format=json`;

  // Data for the request
  const dataTC = {
    tokenId: '',
    customerIpAddress: publicIPData,
  };

  try {
    // Fetch public key
    const { data: response } = await axios.get(keyUrl);
    const decodedKey = decodeKey(response.key);

    // Encrypt data with the public key
    const encryptedText = encryptWithPublicKey(JSON.stringify(dataTC), decodedKey);

    // Prepare data for POST request
    const postData = {
      CipherTextBlob: encryptedText,
    };

    // Make the POST request
    const postResponse = await axios.post(urlBase, postData);

    // Process the response
    const { data } = postResponse;

    if (data?.data?.status?.value === 'success') {
      console.log('Success');
    } else if (data?.data?.status?.value === 'error') {
      console.log('Error');
    }
  } catch (error) {
    console.error('Error: ', error);
  } finally {
    // Additional cleanup or logic if needed
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    fetchData();
  }
}
