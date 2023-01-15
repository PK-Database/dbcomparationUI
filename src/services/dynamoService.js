export const saveToDynamo = (jsonSize) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/upload?databaseType=DYNAMODB&jsonSize=${encodeURIComponent(jsonSize)}`, options);
}

export const deleteAllFromDynamo = () => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=DYNAMODB&queryType=DELETE_ALL`, options);
}

export const queryDynamo = (method) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:8080/database/query?databaseType=DYNAMODB&queryType=${encodeURIComponent(method)}`, options);
}