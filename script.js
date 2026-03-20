const quoteText = document.querySelector(".quote"),
      quoteBtn = document.querySelector("button"),
      authorName = document.querySelector(".name"),
      copyBtn = document.querySelector(".copy");

function randomQuote() {
    quoteBtn.innerText = "Loading..."; 
    fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = "New Quote";
        })
        .catch(() => {
            quoteText.innerText = "Something went wrong. Check your connection!";
            quoteBtn.innerText = "New Quote";
        });
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteText.innerText} — ${authorName.innerText}`);
    alert("Quote copied to clipboard!");
});

quoteBtn.addEventListener("click", randomQuote);