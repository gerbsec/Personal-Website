import axios from 'axios'

const base_url = 'http://127.0.0.1:8000'
// const options = {
//     method: 'GET',
//     mode: 'no-cors'
// }

async function get_recent(limit) {
    // return (await fetch(`${base_url}/writeups/${limit}`, options)).json()
    return (await axios.get(`${base_url}/writeups/${limit}`)).data; 
}
// fetch(request, {mode: 'cors'});
async function get_all() {
    // return (await fetch(`${base_url}/writeups`, options)).json()
    return (await axios.get(`${base_url}/writeups`)).data; 

}

async function get_one(title) {
    // return (await fetch(`${base_url}/writeup/${title}`, options)).json()
    return (await axios.get(`${base_url}/writeup/${title}`)).data; 
}


export default { get_recent, get_all, get_one }