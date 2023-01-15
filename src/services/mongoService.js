const ip = '192.168.0.248:8080';
const url = 'http://' + ip;

export const saveToMongo = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/upload?databaseType=MONGODB&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromMongo = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=MONGODB&queryType=DELETE_ALL`, options);
}

export const queryMongo = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=MONGODB&queryType=${encodeURIComponent(method)}`, options);
}