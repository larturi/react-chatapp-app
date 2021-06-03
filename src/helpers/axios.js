const axios = require('axios');
const baseURL = process.env.REACT_APP_API_URL;

export const fetchSinToken = async(endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') {

        const resp = await axios.get(url)
        return await resp.data;

    } else {

        const resp = await axios({
            method,
            url,
            data,
            headers: {
                'Context-type': 'application/json'
            }
        });

        return await resp.data;
    }
};
