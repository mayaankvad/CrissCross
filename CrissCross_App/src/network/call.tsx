
export async function networkCall(endpoint: string, data: object) {
    try {
        let response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        response = await response.json()

        return response
    }
    catch (err) {
        console.warn(`@ERROR::NETWORK::CALL endpoint: ${endpoint} ; data: ${data}`)
        throw err
    }
}
