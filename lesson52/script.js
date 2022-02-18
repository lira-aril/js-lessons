var domain = "https://api.telegram.org/bot"
var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"

document.addEventListener("DOMContentLoaded", () => {

    fetch(`${domain}${token}/getUpdates`)
    .then(response => response.json())
    .then(data => {
        let results = data.result
        // let messages = []
        for(let i = 0; i < results.length; i++) {
            // messages.push(results[i].message.text)
            addMessage(results[i].message.text)
        }
        console.log(messages)
    })

    document.querySelector("form").addEventListener("submit", () => {
        text = document.getElementById("message").value
        sendMessage(text)
        return false

    })
})

function sendMessage (text) {
    let url = `${domain}${token}/sendMessage?chat_id=270623373&text=${text}`
    fetch(url)
}

// sendMessage("test from js")

function addMessage (text) {
    const messagesDiv = document.getElementById("messages")
    messagesDiv.innerHTML += `<div>User: ${text}</div>`
}