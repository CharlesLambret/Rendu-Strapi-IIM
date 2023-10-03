import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api', // Remplacez par l'URL de votre API Strapi
});

const apiToken = '42b35e226afb366de69cbe5bb2e4c962aaee83caf2d7577967b5929bdcd60246a70b80789e47599d90f4587595f0d443a1815588f9aec0e9454f1e53ea434b1983df03f653f55bb58c678782b53dce4a09d972e2c114c119bb4a95e0d1ebb9c9712911d7ac16bafc0abea2e466fa39f91079027f2165028cccc05d45386049a1';

api.defaults.headers.common['Nom-De-L-En-Tete-Du-Token'] = apiToken;

export default api;
