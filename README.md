# legalese-tracker
This website tracks the frequency of court opinions containing the word "heretofore" since 2010.  I wanted to create this map after seeing [a similar usage map](https://case.law/gallery/witchcraft) tracking the appearance of the word "witchcraft" in the Gallery section of the Caselaw Access Project.  I was curious to see if I could create something similar using the CAP API with my limited programming skills.

After polling law librarians on "legalese" terms they disliked, I decided on "heretofore" because of its common usage in legal case opinions and because it was a simple concept that could be expressed in much simpler words (e.g., "until now", "up to this point", "previously").

## Step 1: Fetching the Cases
While it's possible to fetch the cases in real time, this would cause the user frustration given the thousands of cases being retrieved and given that the API for case.law only allows for a maximum of 100 results per query request.  

I wrote [casefetch.js](https://github.com/njyoon/legalese-tracker/blob/master/js/casefetch.js) to download the JSON data.

I limited the scope to 2010-2018, which was a large enough data set to get meaningful frequency percentages and only penalized states for using the term in the last decade.  

With these parameters, I grabbed the relevant correct API endpoint...
```javascript
var caselawAPI =
    "https://api.case.law/v1/cases/?decision_date_min=2010-01-01&search='heretofore'";
```
... fetched the data ...
```javascript
  fetch(caselawAPI)
    .then(parseAsJSON)
    .then(convertJSON)
    .catch(handleError);
```
... saved each case into an array ...
```javascript
  data.results.forEach((opinion) => {resultsArray.push(opinion)});
```
... and repeated the process until I'd gotten all the cases.
```javascript
 if (data.next != null) {  // If there are more results

    caselawAPI = data.next;  // Change the API endpoint to the next batch of 100 results

    fetch(caselawAPI)  // Repeat process
      .then(parseAsJSON)
      .then(convertJSON)
      .catch(handleError);

} else {  // If there aren't more results
    console.log(resultsArray);  // Output the array to console so I can save the fetched results.  
}
```




