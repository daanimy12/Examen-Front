import axios from 'axios'
const baseUrl = 'https://eshop-deve.herokuapp.com/api/v2'
export async function getProducts() {
    try {
        const conf = {
            url: `${baseUrl}/orders`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA'
            }
        }
        const responde = await axios(conf)
        return responde;
    } catch (error) {
        console.log(error)
    }
}

export async function getProductsId(id) {
    try {
        const conf = {
            url: `${baseUrl}/orders/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA'
            }
        }
        const responde = await axios(conf)
        return responde;
    } catch (error) {
        console.log(error)
    }
}
export async function postProducts(data) {
    try {
        const conf = {
            url: `${baseUrl}/orders`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA'
            },data : data
        }
        const responde = await axios(conf)
        return responde;
    } catch (error) {
        console.log(error)
    }
}