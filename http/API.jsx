import axios from 'axios';
const excludeUrls = [];
const excludeUrlsResponse = [];
const api = "http://localhost:8000"

const interceptMethods = ['post', 'put', 'patch', 'delete', 'get'];
const API = axios.create({
// @ts-ignore
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
    timeout: 30000,
    timeoutErrorMessage: 'Tempo de conexão excedida, tente novamente mais tarde',
});

API.defaults.withCredentials = true;
API.defaults.withXSRFToken = true;

API.interceptors.request.use((config) => {

    return config;
});

API.interceptors.request.use((request) => {
    // @ts-ignore
    if (import.meta.env.VITE_PAYLOAD_IN_HEADER) {
        // @ts-ignore
        if (excludeUrls.indexOf(request.url) < 0 && interceptMethods.indexOf(request.method) >= 0) {
            if (request.data) {
                request.headers['payload'] = JSON.stringify(request.headers);
            }
        }
    }

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
});

API.interceptors.response.use(
    (res) => {
        return Promise.resolve(res.data);
    },

    (error) => {
        if (error?.response?.data.message == 'Unauthenticated.') {
            localStorage.removeItem('accessToken')
            console.log("Unauthenticated")
            // window.location.reload()
            return Promise.reject(
                error?.response
            );
        } else {
            // localStorage.removeItem('access_token')
            return Promise.reject(
                error?.response?.data ??
                new Error('Ops, parece que você está sem acesso à internet ou nosso sistema está fora do ar. Por favor tente novamente em alguns minutos. Caso o erro persista entre em contato pelos nossos canais de atendimento.')
            );
        }

    }
);

export default API;