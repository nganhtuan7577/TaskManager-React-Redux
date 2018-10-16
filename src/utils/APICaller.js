import axios from 'axios';
import * as config from '../constants/APIConfig';

export default function APICaller(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${config.BASE_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}