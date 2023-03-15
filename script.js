const nextQuote = document.querySelector(".next");
const Quote = document.querySelector(".quote");
const autor = document.querySelector(".autor");
const copyBtn = document.querySelector(".copybtn");
const soundBtn = document.querySelector(".soundbtn");
const twitterBtn = document.querySelector(".twitterbtn");

randomQuote();

// -------------------------------------------------------------------
function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      Quote.textContent = result.content;
      autor.textContent = "-  " + result.author;
    });
}

// ------------------------------------------------------------------------------
copyBtn.addEventListener("click", function () {
  console.log("copy");
  let copyText = document.querySelector(".quote");
  navigator.clipboard.writeText(copyText.innerText);
});

nextQuote.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
// Let’s look at a code breakdown to understand what's going on:
// With const synth = window.speechSynthesis we declare the synth variable to be an instance of the SpeechSynthesis object, which is the entry to point to using JavaScript's Web Speech API. The speak method of this object is what ultimately converts text into speech.
// let ourText = “Hey there what’s up!!!!” defines the ourText variable which holds the string of text that we want to be uttered.
// const utterThis = new SpeechSynthesisUtterance(ourText) defines the utterThis variable to be a SpeechSynthesisUtterance object, into which we pass ourText.
// Putting it all together, we call synth.speak(utterThis), which utters the string inside ourText.

  const synth = window.speechSynthesis
  let utterance = new SpeechSynthesisUtterance(`${Quote.innerText} by ${autor.innerText}`);
  synth.speak(utterance);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${Quote.innerText}`;
    window.open(tweetUrl, "_blank");
  
});
