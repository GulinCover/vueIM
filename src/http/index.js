import axios from "axios"

let GET = (url, params, headers)=>{
    let instance = axios.create({
        headers: {
            ...headers
        }
    })
    return  instance.get(url, params)
}

let POST = (url, data, headers)=>{
    let instance = axios.create({
        headers: {
            ...headers
        }
    })
    return  instance.post(url, data)
}

export {
    GET,
    POST,
}