// API endpoint for JSON response
var caselawAPI =
  "https://api.case.law/v1/cases/?decision_date_min=2010-01-01&search='heretofore'";

// Empty array variable to contain the JSON response
var resultsArray = [];

// Parse the JSON response
function parseAsJSON(response) {
  return response.json();
}

// Error handler
function handleError(err) {
  console.error(err);
  alert(err.message);
}

// Convert JSON to array
function convertJSON(data) {

  // For each case in the fetched JSON batch, push to array
  data.results.forEach((opinion) => {resultsArray.push(opinion)});

  // The case.law API only allows you to fetch 100 cases at once, and uses a cursor system to fetch the next 100
  // in the results.  This code snippet repeats the code for the next 100 results.

  if (data.next != null) {  // If there are more results

    caselawAPI = data.next;  // Change the API endpoint to the next batch of 100 results

    fetch(caselawAPI)  // Repeat process
      .then(parseAsJSON)
      .then(convertJSON)
      .catch(handleError);

  } else {  // If there aren't more results
    console.log(resultsArray);  // Output the array to console so I can save the fetched results.  
  }

}


// Fetch the API datasource, parse JSON, conver to array, and handle errors
  fetch(caselawAPI)
    .then(parseAsJSON)
    .then(convertJSON)
    .catch(handleError);