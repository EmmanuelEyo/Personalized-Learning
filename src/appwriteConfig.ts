import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('664a50d3002e84e3237c');

export const account = new Account(client);
export const databases = new Databases(client)

export default client