import axios from 'axios';
import HelloApi from './hello';

const get = async (path) => {
    const result = await axios({
        method: 'get',
        url: path,
    }).catch(error => console.log(error));
    return result;
}

const post = async (path, body) => {
    const result = await axios({
        method: 'post',
        url: path,
        data: body
    }).catch(error => console.log(error));
    return result;
}

const helloApi = new HelloApi({ post, get });

export default {
    helloApi,
}