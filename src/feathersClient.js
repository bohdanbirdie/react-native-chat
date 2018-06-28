import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import {AsyncStorage} from 'react-native';


const socket = io('http://localhost:3030');
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication({
  storage: AsyncStorage,
}));

export default client;