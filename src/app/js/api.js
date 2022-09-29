import { API_URL } from "./constants.js"

export const get = (path) => fetch(`${API_URL}/${path}`)

export const post = (path, data) => fetch(`${API_URL}/${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})

export const put = (path) => fetch(`${API_URL}/${path}`, {
    method: 'PUT'
})

export const del = (path) => fetch(`${API_URL}/${path}`, {
    method: 'DELETE'
})
