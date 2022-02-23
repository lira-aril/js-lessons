document.addEventListener("DOMContentLoaded", () => {
    let messages = []

    fetch ("https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates")
    .then(response => response.json())
    .then(data => {
        let results = data.result
        for(let i = 0; i < results.length; i++) {
            addMessages(results[i].message.text)
            // messages.push(results[i].message.text)  // перенесли вверх
        }
        // console.log(messages) // все сооб. которые отправил user отображается в консоли
    })

    document.querySelector("form").addEventListener("submit", () => {
       let text = document.getElementById("message").value
       sendMessages(text) 
    })
})
 
var domain = "https://api.telegram.org/bot"
var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"
 
function sendMessages (text) {
    let url = `${domain}${token}/sendMessage?chat_id=270623373&text=${text}`
    fetch(url)
}

// sendMessages("test from js")  // сообщения от бота

function addMessages (text) {
    const messagesDiv = document.getElementById("messages")
    messagesDiv.innerHTML += `<div>User: ${text}</div>`
}
