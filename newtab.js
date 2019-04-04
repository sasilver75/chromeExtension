// Add an event listener to the drawCard button
document.getElementById('drawCard').addEventListener('click', function (e) {
  console.log("clicked!");
  // Grab a new Key-Value from the local storage
  // Create a new HTML flip-card-inner from that info
  // Set the innerHTML of flipCard to be our new element
});


// Make a request to the quotes endpoint and populate the DOM
axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback')
  .then(function (response) {
    console.log(response.data);
  });

//https://quotesondesign.com/api-v4-0/