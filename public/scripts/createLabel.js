async function postLabel(labelData) {
    let response
    try {
        response = await fetch('/api/labels', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(labelData)
        })
    } catch (error) {
        console.log('Fetch Error :-S', error)
        response.error = error
    }
    return response.json()
}


(function () {
    let labelForm = document.getElementById('create-label-form')
    labelForm.onsubmit = async (event) => {
        event.preventDefault()

        let labelData = {}
        labelData.content = labelForm.querySelector('input').value

        // test if it's ok to add.

        let response = await postLabel(labelData)
        console.log(response)
        labelForm.querySelector('input').value = ""

    }

})();