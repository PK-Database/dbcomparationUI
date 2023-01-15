export const saveToPostgresql = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/upload?databaseType=POSTGRESQL&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromPostgresql = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=POSTGRESQL&queryType=DELETE_ALL`, options);
}

export const queryPostgresql = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=POSTGRESQL&queryType=${encodeURIComponent(method)}`, options);
}