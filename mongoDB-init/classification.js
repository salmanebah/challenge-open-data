use cod
db.classifications.insert(
{
    "criteria": {
        "crime": 0,
        "education": 0,
        "employment" : 1,
        "APB" : 1,
        "population" : 0
    },
    "year" : 2015,
	"score" : 0.765
    "classes": [
        {
			"medoid": {
        		"id": 11,
        		"name": "Nord-Pas-de-Calais-Picardie",
        		"unemployment": 7.775,
        		"GDP":1165173
      		}

            "regions": [
                {"id" : 11,"name" : "Ile de France"}
            ]
        },
        {
			"medoid": {
        		"id": 28,
        		"name": "Nord-Pas-de-Calais-Picardie",
        		"unemployment": 8.775,
        		"GDP": 65112
      		}

            "regions": [
                {"id" : 27,"name" : "Bourgogne-Franche-Comté"},
                {"id" : 28,"name" : "Normandie"},
            ]
        },
        {
			"medoid": {
        		"id": 32,
        		"name": "Nord-Pas-de-Calais-Picardie",
        		"unemployment": 9.775,
        		"GDP": 65173
      		}
            "regions": [
                {"id" : 32,"name" : "Nord-Pas-de-Calais-Picardie"},
            ]
        }
    ]
})


