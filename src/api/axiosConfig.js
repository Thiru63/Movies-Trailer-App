import axios from 'axios';

export default axios.create({
    baseURL:'https://javamoviesapp.azurewebsites.net/',
    headers: {"ngrok-skip-browser-warning": "true"}
});