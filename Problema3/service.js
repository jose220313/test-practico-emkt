const apiKey = "$2b$10$d0DpI7LaviJDl9JTt9BLjOo6/5EqJmF6P5fccx0Rqc.CFpTBaFoMi"

const getMenu = async () => {
    const data = await fetch('https://api.jsonbin.io/b/608ad954fa483b12b9e014ec/1', {
        method: 'GET',
        mode: "cors",
        headers: {
            'secret-key': apiKey
        }
    }).then((response) => {
        if(response.ok) return response.json()
        return Promise.reject(response)
    }).then((data) => {
        document.getElementById('jsonData').innerHTML = `${JSON.stringify(data, undefined, 2)}`
    }).catch((error) => console.log(error))

    return data
}


getMenu()


