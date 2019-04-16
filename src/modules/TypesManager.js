const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/types/{id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/types`).then(e => e.json())
    }
}