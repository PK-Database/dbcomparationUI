export const saveToMongo = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/upload?databaseType=MONGODB&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromMongo = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=MONGODB&queryType=DELETE_ALL`, options);
}

export const queryMongo = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=MONGODB&queryType=${encodeURIComponent(method)}`, options);
}