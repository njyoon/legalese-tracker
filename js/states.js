// Stores array of states with slugs, full names, counts, sample sizes (corpus), case opinions, and map codes

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
    {
        "slug": "ariz",
        "name_long": "Arizona",
        "count": 0,
        "corpus": 1660,
        "opinions": [],
        "code": "US-AZ"
    },
    {
        "slug": "ark",
        "name_long": "Arkansas",
        "count": 0,
        "corpus": 3645,
        "opinions": [],
        "code": "US-AR"
    },
    {
        "slug": "cal",
        "name_long": "California",
        "count": 0,
        "corpus": 5779,
        "opinions": [],
        "code": "US-CA"
    },
    {
        "slug": "colo",
        "name_long": "Colorado",
        "count": 0,
        "corpus": 1865,
        "opinions": [],
        "code": "US-CO"
    },
    {
        "slug": "conn",
        "name_long": "Connecticut",
        "count": 0,
        "corpus": 3472,
        "opinions": [],
        "code": "US-CT"
    },
    {
        "slug": "dc",
        "name_long": "District of Columbia",
        "count": 0,
        "corpus": 3313,
        "opinions": [],
        "code": "US-DC"
    },
    {
        "slug": "del",
        "name_long": "Delaware",
        "count": 0,
        "corpus": 1998,
        "opinions": [],
        "code": "US-DE"
    },
    {
        "slug": "fla",
        "name_long": "Florida",
        "count": 0,
        "corpus": 46691,
        "opinions": [],
        "code": "US-FL"
    },
    {
        "slug": "ga",
        "name_long": "Georgia",
        "count": 0,
        "corpus": 8779,
        "opinions": [],
        "code": "US-GA"
    },
    {
        "slug": "haw",
        "name_long": "Hawaii",
        "count": 0,
        "corpus": 2903,
        "opinions": [],
        "code": "US-HI"
    },
    {
        "slug": "idaho",
        "name_long": "Idaho",
        "count": 0,
        "corpus": 1613,
        "opinions": [],
        "code": "US-ID"
    },    
    {
        "slug": "ill",
        "name_long": "Illinois",
        "count": 0,
        "corpus": 1152,
        "opinions": [],
        "code": "US-IL"
    },    
    {
        "slug": "ind",
        "name_long": "Indiana",
        "count": 0,
        "corpus": 7415,
        "opinions": [],
        "code": "US-IN"
    },    
    {
        "slug": "iowa",
        "name_long": "Iowa",
        "count": 0,
        "corpus": 1903,
        "opinions": [],
        "code": "US-IA"
    },    
    {
        "slug": "kan",
        "name_long": "Kansas",
        "count": 0,
        "corpus": 3576,
        "opinions": [],
        "code": "US-KS"
    },    
    {
        "slug": "ky",
        "name_long": "Kentucky",
        "count": 0,
        "corpus": 2392,
        "opinions": [],
        "code": "US-KY"
    },    
    {
        "slug": "la",
        "name_long": "Louisiana",
        "count": 0,
        "corpus": 33102,
        "opinions": [],
        "code": "US-LA"
    },    
    {
        "slug": "mass",
        "name_long": "Massachusetts",
        "count": 0,
        "corpus": 4220,
        "opinions": [],
        "code": "US-MA"
    },    
    {
        "slug": "md",
        "name_long": "Maryland",
        "count": 0,
        "corpus": 3845,
        "opinions": [],
        "code": "US-MD"
    },    
    {
        "slug": "me",
        "name_long": "Maine",
        "count": 0,
        "corpus": 1284,
        "opinions": [],
        "code": "US-ME"
    },    
    {
        "slug": "mich",
        "name_long": "Michigan",
        "count": 0,
        "corpus": 2087,
        "opinions": [],
        "code": "US-MI"
    },    
    {
        "slug": "minn",
        "name_long": "Minnesota",
        "count": 0,
        "corpus": 2321,
        "opinions": [],
        "code": "US-MN"
    },    
    {
        "slug": "miss",
        "name_long": "Mississippi",
        "count": 0,
        "corpus": 5578,
        "opinions": [],
        "code": "US-MS"
    },    
    {
        "slug": "mo",
        "name_long": "Missouri",
        "count": 0,
        "corpus": 11915,
        "opinions": [],
        "code": "US-MO"
    },    
    {
        "slug": "mont",
        "name_long": "Montana",
        "count": 0,
        "corpus": 1845,
        "opinions": [],
        "code": "US-MT"
    },    
    {
        "slug": "nc",
        "name_long": "North Carolina",
        "count": 0,
        "corpus": 7091,
        "opinions": [],
        "code": "US-NC"
    },    
    {
        "slug": "nd",
        "name_long": "North Dakota",
        "count": 0,
        "corpus": 1637,
        "opinions": [],
        "code": "US-ND"
    },    
    {
        "slug": "neb",
        "name_long": "Nebraska",
        "count": 0,
        "corpus": 0,
        "opinions": [],
        "code": "US-NE"
    },    
    {
        "slug": "nev",
        "name_long": "Nevada",
        "count": 0,
        "corpus": 315,
        "opinions": [],
        "code": "US-NV"
    },    
    {
        "slug": "nh",
        "name_long": "New Hampshire",
        "count": 0,
        "corpus": 763,
        "opinions": [],
        "code": "US-NH"
    },    
    {
        "slug": "nj",
        "name_long": "New Jersey",
        "count": 0,
        "corpus": 5277,
        "opinions": [],
        "code": "US-NJ"
    },
    {
        "slug": "nm",
        "name_long": "New Mexico",
        "count": 0,
        "corpus": 1080,
        "opinions": [],
        "code": "US-NM"
    },
    {
        "slug": "ny",
        "name_long": "New York",
        "count": 0,
        "corpus": 96737,
        "opinions": [],
        "code": "US-NY"
    },
    {
        "slug": "ohio",
        "name_long": "Ohio",
        "count": 0,
        "corpus": 9758,
        "opinions": [],
        "code": "US-OH"
    },
    {
        "slug": "okla",
        "name_long": "Oklahoma",
        "count": 0,
        "corpus": 1646,
        "opinions": [],
        "code": "US-OK"
    },
    {
        "slug": "or",
        "name_long": "Oregon",
        "count": 0,
        "corpus": 5128,
        "opinions": [],
        "code": "US-OR"
    },
    {
        "slug": "pa",
        "name_long": "Pennsylvania",
        "count": 0,
        "corpus": 26150,
        "opinions": [],
        "code": "US-PA"
    },
    {
        "slug": "ri",
        "name_long": "Rhode Island",
        "count": 0,
        "corpus": 1103,
        "opinions": [],
        "code": "US-RI"
    },
    {
        "slug": "sc",
        "name_long": "South Carolina",
        "count": 0,
        "corpus": 2299,
        "opinions": [],
        "code": "US-SC"
    },
    {
        "slug": "sd",
        "name_long": "South Dakota",
        "count": 0,
        "corpus": 882,
        "opinions": [],
        "code": "US-SD"
    },
    {
        "slug": "tenn",
        "name_long": "Tennessee",
        "count": 0,
        "corpus": 970,
        "opinions": [],
        "code": "US-TN"
    },
    {
        "slug": "tex",
        "name_long": "Texas",
        "count": 0,
        "corpus": 10231,
        "opinions": [],
        "code": "US-TX"
    },
    {
        "slug": "utah",
        "name_long": "Utah",
        "count": 0,
        "corpus": 2993,
        "opinions": [],
        "code": "US-UT"
    },
    {
        "slug": "va",
        "name_long": "Virginia",
        "count": 0,
        "corpus": 1808,
        "opinions": [],
        "code": "US-VA"
    },
    {
        "slug": "vt",
        "name_long": "Vermont",
        "count": 0,
        "corpus": 688,
        "opinions": [],
        "code": "US-VT"
    },
    {
        "slug": "wash",
        "name_long": "Washington",
        "count": 0,
        "corpus": 11011,
        "opinions": [],
        "code": "US-WA"
    },
    {
        "slug": "wis",
        "name_long": "Wisconsin",
        "count": 0,
        "corpus": 2544,
        "opinions": [],
        "code": "US-WI"
    },
    {
        "slug": "w-va",
        "name_long": "West Virginia",
        "count": 0,
        "corpus": 1140,
        "opinions": [],
        "code": "US-WV"
    },
    {
        "slug": "wyo",
        "name_long": "Wyoming",
        "count": 0,
        "corpus": 1284,
        "opinions": [],
        "code": "US-WY"
    },
]