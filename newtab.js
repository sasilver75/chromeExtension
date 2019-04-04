//When document is ready, run:
$(document).ready(function () {
  console.log("Script now running");
  getRandomCard(); // replaces the card body with new key/value

  // Add an event listener to the drawCard button
  document.getElementById('drawCard').addEventListener('click', function (e) {
    // console.log("clicked!");
    getRandomCard();
  });

  // Helper function for random quote
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  //Get a random quote and time and replace in the DOM
  // Make a request to the quotes endpoint and populate the DOM
  axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(function (response) {
      // console.log(response.data[0]);
      let quoteText = decodeHtml(response.data[0].content);
      let quoteText1 = quoteText.substring(3);
      let quoteText2 = quoteText1.substring(0, quoteText1.length - 5);
      console.log(quoteText);
      let quoteAuthor = decodeHtml(response.data[0].title);
      let currentTime = new Date().toLocaleTimeString();

      let markdown = `
      <div id="time">${currentTime}</div>
      <p id="greeting"><span id="quoteText">${quoteText2}</span><br>
      <span id="quoteAuthor">-
        ${quoteAuthor}</span></p>
      `
      document.querySelector('#extraInfo').innerHTML = markdown;
    });
});


// Get a random key:value and populate the innerHTML of the appropriate domElement

function getRandomCard() {
  const arrOfKeys = [];
  const defKeys = ["setItem", "getItem", "removeItem", "length", "key", "clear"]
  for (let key in localStorage) {
    if (!defKeys.includes(key)) {
      arrOfKeys.push(key)
    }
  }

  function randomizer(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let retrievedKey = randomizer(arrOfKeys);
  let retrievedValue = localStorage.getItem(retrievedKey)


  let constructedMarkdown = `
  <div class="flip-card-inner">
        <div class="flip-card-front">
  
          <div id="card">
            <!-- <h1 class="promptTitle">Prompt</h1> -->
            <p id="frontLabel">Hover to Flip</p>
            <div id="promptText">${retrievedKey}</div>
          </div>
        </div>
        <div class="flip-card-back">
          <!-- <h1 class="answerTitle">Answer</h1> -->
          <p id="backLabel">Description</p>
          <p class="answerText">${retrievedValue}</p>
        </div>
      </div>
  `;

  document.querySelector(".flip-card").innerHTML = constructedMarkdown;
}