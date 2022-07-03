import axios from 'axios'

const base_url = 'http://127.0.0.1:8000'

async function get_recent(limit) {
    return (await axios.get(`${base_url}/writeups/${limit}`)).data;
}

async function get_all() {
    return (await axios.get(`${base_url}/writeups`)).data;

}

async function get_one(title) {
    return (await axios.get(`${base_url}/writeup/${title}/contents`)).data;
}


export default { get_recent, get_all, get_one }