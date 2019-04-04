chrome.tabs.executeScript({
  code: "window.getSelection().toString();"
}, function (selection) {
  // alert(selection);
  // console.log("SELECTION IS: ", selection);
  document.getElementById("key").innerHTML = selection;
});



document.getElementById("submit").addEventListener('click', function () {
  let newCard = {};
  newCard[document.getElementById("key").value] = document.getElementById("value").value;
  // console.log(newCard);

  // Insert into Storage

  //chrome.storage SET of (key, values)
  chrome.storage.sync.set(newCard, function () {
    console.log("Card added to your deck!");
  });

  // Update Button Text
  document.getElementById("submit").style.backgroundColor = "green";
  document.getElementById("submit").innerText = "Submitted!"

  // Clear the text fields
  document.getElementById("key").value = '';
  document.getElementById("value").value = '';

  // Set a timeout, then set the button back to normal after two seconds
  setTimeout(function () {
    document.getElementById("submit").style.backgroundColor = "red";
    document.getElementById("submit").innerText = "Create Flashcard"

  }, 2000);
});