const ip = '192.168.0.248:8080';
const url = 'http://' + ip;

export const saveToCassandra = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/upload?databaseType=CASSANDRA&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromCassandra = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=CASSANDRA&queryType=DELETE_ALL`, options);
}


export const queryCassandra = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=CASSANDRA&queryType=${encodeURIComponent(method)}`, options);
}