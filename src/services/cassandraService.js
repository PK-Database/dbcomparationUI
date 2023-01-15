export const saveToCassandra = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/upload?databaseType=CASSANDRA&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromCassandra = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=CASSANDRA&queryType=DELETE_ALL`, options);
}


export const queryCassandra = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=CASSANDRA&queryType=${encodeURIComponent(method)}`, options);
}