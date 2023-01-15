const ip = '192.168.0.248:8080';
const url = 'http://' + ip;

export const saveToPostgresql = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/upload?databaseType=POSTGRESQL&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromPostgresql = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=POSTGRESQL&queryType=DELETE_ALL`, options);
}

export const queryPostgresql = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=POSTGRESQL&queryType=${encodeURIComponent(method)}`, options);
}