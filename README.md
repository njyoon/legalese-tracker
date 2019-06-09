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
... and repeated the process with the next batch of cases until I'd gotten all the cases.
```javascript
 if (data.next != null) {  

    caselawAPI = data.next;  

    fetch(caselawAPI) 
      .then(parseAsJSON)
      .then(convertJSON)
      .catch(handleError);

} else { 
    console.log(resultsArray);  
}
```
Finally, I saved the resulting array into a [javascript file](https://github.com/njyoon/legalese-tracker/blob/master/js/cases.js) I could refer to in the website.

## Step 2: Rendering the Map
After finding a great, open-source javascript map library/plugin in [JVectorMap](http://jvectormap.com/), I set up [an array of "state" objects](https://github.com/njyoon/legalese-tracker/blob/master/js/states.js) with properties that would let me link the states on the map to the jurisdictions from the cases.

```javascript
var states = [
    {
        "slug": "ala",
        "name_long": "Alabama",
        "count": 0,
        "corpus": 9476,
        "opinions": [],
        "code": "US-AL"
    },
    {
        "slug": "alaska",
        "name_long": "Alaska",
        "count": 0,
        "corpus": 1116,
        "opinions": [],
        "code": "US-AK"
    },
    // ... and so on
```

In [app.js](https://github.com/njyoon/legalese-tracker/blob/master/js/app.js), I populated the "count" and "opinions" properties of the "states" array with the cases I'd fetched earlier in Step 1.
```javascript
CASES.forEach((opinion) => {
    states.forEach((state) => {
        if (opinion.jurisdiction.slug == state.slug) {
            state.count++;
            state.opinions.push(opinion);
        }
    });
});
```

By dividing the count (i.e., the number of cases in each state since 2010 containing the word "heretofore") by the corpus (i.e., the total number of cases in each state since 2010), I could get the frequency for each state.
```javascript
var stateData = {
    "US-AL": (states[0].count * 100 / states[0].corpus),
    "US-AK": (states[1].count * 100 / states[1].corpus),
    "US-AZ": (states[2].count * 100 / states[2].corpus),
    "US-AR": (states[3].count * 100 / states[3].corpus),
    // ... and so on
```
With this data, I could render the map using the jVectorMap library.
```javascript
$(function(){
    $('#map').vectorMap({

        map: 'us_aea',

        series: {
            regions: [{
              values: stateData,
              scale: ['#e6eeff', '#002b80'], 
              normalizeFunction: 'linear',
            }]
        },
```

## Step 3: Rendering the Card
To populate the left-hand card initially, I sorted the states by frequency and used HTML DOM to add the information to the card.
```javascript
arr.sort((a,b) => {return (b.count / b.corpus) - (a.count / a.corpus)});

arr.forEach((state) => {
    var node = document.createElement("li");
    node.classList.add("py-2");
    node.classList.add("pl-2");
    node.classList.add("pr-3");

    node.textContent = state.name_long + " | " + (state.count * 100 / state.corpus).toFixed(2) + "%";
    list.appendChild(node);
});
```
Using a listener function from jVectorQuery, I set up the card to provide individual case data and a link to the specific cases if a user clicked on a state on the map.
```javascript
        onRegionClick: function(e, code) {  
            states.forEach((state) => {  

                if (state.code==code) {  
                    title.textContent = state.name_long;  
                    subtitle.textContent = state.count + ' cases out of ' + state.corpus +'  ('+stateData[code].toFixed(2)+'%)';  
                    // ...

                    state.opinions.forEach((opinion) => {

                        var node = document.createElement("li");
                        node.classList.add("py-2");
                        node.classList.add("pl-2");
                        node.classList.add("pr-3");

                        var a = document.createElement("a");
                        a.textContent = opinion.name_abbreviation + ', ' + opinion.citations[0].cite + ' (' + opinion.decision_date.substring(0,4) + ')';
                        a.setAttribute("href", opinion.frontend_url);
                        a.setAttribute("target", "_blank");
                        node.appendChild(a);
                        list.appendChild(node);

                    });
                    // ...
```