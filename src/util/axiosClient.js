import axios from 'axios';
const axiosClient=axios.create({
    baseURL:'https://fakestoreapi.com/',
    timeout:1000
});
export default axiosClient;