// Declare DOM elements for card
    var title = document.getElementById("info-title");  
    var subtitle = document.getElementById("info-subtitle");  
    var list = document.getElementById("info-list");  

// Declare array to sort by frequency
    var arr = [];

// Add case opinion results for each state and provides a count
CASES.forEach((opinion) => {
    states.forEach((state) => {
        if (opinion.jurisdiction.slug == state.slug) {
            state.count++;
            state.opinions.push(opinion);
        }
    });
});

// Sort opinions within each state by date
states.forEach((state) => {

    // Sort opinions by date
    state.opinions.sort((case1, case2) => {return new Date(case2.decision_date) - new Date(case1.decision_date)});
    
    // Push all states but Nebraska to frequency array
    if (state.code!='US-NE') {
        arr.push(state)  
    }
});

// Sort states by frequency
arr.sort((a,b) => {return (b.count / b.corpus) - (a.count / a.corpus)});

// Display list of states by frequency
arr.forEach((state) => {
    var node = document.createElement("li");
    node.classList.add("py-2");
    node.classList.add("pl-2");
    node.classList.add("pr-3");

    node.textContent = state.name_long + " | " + (state.count * 100 / state.corpus).toFixed(2) + "%";
    list.appendChild(node);
});

// Displays Nebraska exception
var nebraska = document.createElement("li");
nebraska.classList.add("py-2");
nebraska.classList.add("pl-2");
nebraska.classList.add("pr-3");
nebraska.textContent = "Nebraska | N/A";
list.appendChild(nebraska)


// Declare frequency data to feed into choropleth map
var stateData = {
    "US-AL": (states[0].count * 100 / states[0].corpus),
    "US-AK": (states[1].count * 100 / states[1].corpus),
    "US-AZ": (states[2].count * 100 / states[2].corpus),
    "US-AR": (states[3].count * 100 / states[3].corpus),
    "US-CA": (states[4].count * 100 / states[4].corpus),
    "US-CO": (states[5].count * 100 / states[5].corpus),
    "US-CT": (states[6].count * 100 / states[6].corpus),
    "US-DC": (states[7].count * 100 / states[7].corpus),
    "US-DE": (states[8].count * 100 / states[8].corpus),
    "US-FL": (states[9].count * 100 / states[9].corpus),
    "US-GA": (states[10].count * 100 / states[10].corpus),
    "US-HI": (states[11].count * 100 / states[11].corpus),
    "US-ID": (states[12].count * 100 / states[12].corpus),
    "US-IL": (states[13].count * 100 / states[13].corpus),
    "US-IN": (states[14].count * 100 / states[14].corpus),
    "US-IA": (states[15].count * 100 / states[15].corpus),
    "US-KS": (states[16].count * 100 / states[16].corpus),
    "US-KY": (states[17].count * 100 / states[17].corpus),
    "US-LA": (states[18].count * 100 / states[18].corpus),
    "US-MA": (states[19].count * 100 / states[19].corpus),
    "US-MD": (states[20].count * 100 / states[20].corpus),
    "US-ME": (states[21].count * 100 / states[21].corpus),
    "US-MI": (states[22].count * 100 / states[22].corpus),
    "US-MN": (states[23].count * 100 / states[23].corpus),
    "US-MS": (states[24].count * 100 / states[24].corpus),
    "US-MO": (states[25].count * 100 / states[25].corpus),
    "US-MT": (states[26].count * 100 / states[26].corpus),
    "US-NC": (states[27].count * 100 / states[27].corpus),
    "US-ND": (states[28].count * 100 / states[28].corpus),
    "US-NE": 0,
    "US-NV": (states[30].count * 100 / states[30].corpus),
    "US-NH": (states[31].count * 100 / states[31].corpus),
    "US-NJ": (states[32].count * 100 / states[32].corpus),
    "US-NM": (states[33].count * 100 / states[33].corpus),
    "US-NY": (states[34].count * 100 / states[34].corpus),
    "US-OH": (states[35].count * 100 / states[35].corpus),
    "US-OK": (states[36].count * 100 / states[36].corpus),
    "US-OR": (states[37].count * 100 / states[37].corpus),
    "US-PA": (states[38].count * 100 / states[38].corpus),
    "US-RI": (states[39].count * 100 / states[39].corpus),
    "US-SC": (states[40].count * 100 / states[40].corpus),
    "US-SD": (states[41].count * 100 / states[41].corpus),
    "US-TN": (states[42].count * 100 / states[42].corpus),
    "US-TX": (states[43].count * 100 / states[43].corpus),
    "US-UT": (states[44].count * 100 / states[44].corpus),
    "US-VA": (states[45].count * 100 / states[45].corpus),
    "US-VT": (states[46].count * 100 / states[46].corpus),
    "US-WA": (states[47].count * 100 / states[47].corpus),
    "US-WI": (states[48].count * 100 / states[48].corpus),
    "US-WV": (states[49].count * 100 / states[49].corpus),
    "US-WY": (states[50].count * 100 / states[50].corpus),    
};

// Renders map
$(function(){
    $('#map').vectorMap({

        map: 'us_aea',

        series: {
            regions: [{
              values: stateData,
              scale: ['#e6eeff', '#002b80'],  // Sets gradient colors for map
              normalizeFunction: 'linear',
            }]
        },

        backgroundColor: "",  // Sets map background to transparent

        onRegionClick: function(e, code) {  // Listens for click on map
            
            states.forEach((state) => {  
                if (state.code==code) {  

                    // Set card title to state name
                    title.textContent = state.name_long;  

                    // Set card subtitle to frequency info
                    subtitle.textContent = state.count + ' cases out of ' + state.corpus +'  ('+stateData[code].toFixed(2)+'%)';  

                    // Clear card list
                    while (list.lastChild) {
                        list.removeChild(list.lastChild);
                    }

                    // Add case opinions and links
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

                    // Explain Nebraska exception
                    if (state.code=='US-NE') {
                        var psa = document.createElement("h5");
                        psa.classList.add("pt-4");
                        psa.classList.add("pr-3");
                        psa.textContent = "Note: The Caselaw Access Project does not appear to have any Nebraska cases since 2010.";
                        list.appendChild(psa);
                    }
                    
                    // Fix scrolling problem
                    list.scrollTop = 0;
                }

            });
       
        },
    });
  });