import axios from 'axios';

const API_URL = 'https://api.le-systeme-solaire.net/rest/bodies/';

export const fetchBodies = () => axios.get(API_URL);
export const fetchBodyById = (id) => axios.get(API_URL + id);