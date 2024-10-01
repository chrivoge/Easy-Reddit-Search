// Get the form element and add a submit event listener
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
  
    // Get the value of the search input field
    var searchField = document.querySelector("input[name='search']");
    var timeSelector = document.querySelector("select[name='time']");
    var query = searchField.value;
    var time = timeSelector.value;
  
    // Construct the search URL
    var searchUrl = 'https://www.google.com/search?q=' + query + '+site:www.reddit.com' + '&tbs=qdr:' + time;
  
    // Redirect the user to the search URL
    chrome.tabs.create({url: searchUrl});
  });
  