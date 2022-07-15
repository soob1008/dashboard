import { HttpRequest } from '../http/HttpRequest';
import axios from 'axios';

const BASE_URL: string = '';

export const dataService = axios.create({ baseURL: BASE_URL });

export const dataRequest = new HttpRequest(dataService);
