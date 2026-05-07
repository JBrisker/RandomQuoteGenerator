//listen for click of button

document.getElementById("submit").addEventListener("click", () => getQuote());

async function getQuote() {
  try {
    const response = await fetch(
      `https://quotesapi.prayushadhikari.com.np/api/quotes/random`,
    );
    if (!response.ok) {
      throw new Error("Network response failure");
    }
    //parse response to Json
    const data = await response.json();

    // set span text to retrieved data
    const quoteSpan = document.getElementById("quote");
    quoteSpan.innerHTML = data.data[0].quote;
    const authorSpan = document.getElementById("author");
    authorSpan.innerHTML = "- " + data.data[0].author;
  } catch (e) {
    //catch any errors that occur during fetch
    console.error("Error:", e.message);
  }
}
