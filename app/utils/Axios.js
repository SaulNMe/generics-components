import axios from 'axios';

const saekoApiAxios = axios.create();
const saekoAuthAxios = axios.create();

saekoApiAxios.defaults.headers.common['Content-Type'] = 'application/json';
saekoAuthAxios.defaults.headers.common['Content-Type'] = 'application/json';
//Allow the use of array parameter with key value


export { saekoApiAxios, saekoAuthAxios };
