document.addEventListener("DOMContentLoaded", () => {
    
    if (!localStorage.getItem("answeredMessages")) {
        localStorage.setItem("answeredMessages") = []
    }

    fetch ("https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates")
    .then(response => response.json())
    .then(data => {
        let results = data.result
        for(let i = 0; i < results.length; i++) {
            let fromUser = results[i].message.from.first_name
            let text = results[i].message.text
            addMessages(fromUser, text)
        }
    })

    document.querySelector("form").addEventListener("submit", () => {
       text = document.getElementById("message").value
       sendMessages(text) 
       return false
    })

    setInterval(() => {
        fetch ("https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates")
        .then(response => response.json())
        .then(data => {
            res = data.result
            for(let i = 0; i < res.length; i++) {
                let updateId = res[i].update_id
                let answered = localStorage.getItem("answeredMessages")
                if (!answered.includes(updateId)) {
                    sendMessages("welcome")
                    answered.push(updateId)
                    localStorage.setItem("answeredMessages", answered)
                }   
            }
        })
    }, 3000)
})
 
var domain = "https://api.telegram.org/bot"
var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"
 
function sendMessages (text) {
    let url = `${domain}${token}/sendMessage?chat_id=270623373&text=${text}`
    fetch(url)
}

function addMessages (fromUser, text) {
    const messagesDiv = document.getElementById("messages")
    messagesDiv.innerHTML += `<div>User: ${text}</div>`
}

function getMessages () {
    fetch ("https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates")
    .then(response => response.json())
    .then(data => {
    return data.result 
    })
}

// в коде есть баг и исправили в lesson54