const ip = '192.168.0.248:8080';
const url = 'http://' + ip;

export const saveToDynamo = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/upload?databaseType=DYNAMODB&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromDynamo = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=DYNAMODB&queryType=DELETE_ALL`, options);
}

export const queryDynamo = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${url}/database/query?databaseType=DYNAMODB&queryType=${encodeURIComponent(method)}`, options);
}