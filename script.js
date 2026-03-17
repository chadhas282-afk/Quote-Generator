const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
copyBtn = document.querySelector(".copy")

function randomQuote(){
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
         authorName.innerText = result.author;
    }
}