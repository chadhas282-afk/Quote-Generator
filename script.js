const quoteText = document.querySelector(".quote"),
      quoteBtn = document.querySelector("button"),
      copyBtn = document.querySelector(".copy");

function randomQuote() {
    quoteBtn.innerText = "Loading..."; 
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(result => {
            quoteText.innerText = result.slip.advice;
            quoteBtn.innerText = "New Quote";
        })
        .catch(() => {
            quoteText.innerText = "The service is a bit busy. Try again in a moment!";
            quoteBtn.innerText = "New Quote";
        });
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteText.innerText}`);
    alert("Quote copied to clipboard!");
});

quoteBtn.addEventListener("click", randomQuote);