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
    "classes": [
        {
            "regions": [
                {"id" : 11,"name" : "Ile de France"}
            ]
        },
        {
            "regions": [
                {"id" : 27,"name" : "Bourgogne-Franche-Comté"},
                {"id" : 28,"name" : "Normandie"},
            ]
        },
        {
            "regions": [
                {"id" : 32,"name" : "Nord-Pas-de-Calais-Picardie"},
            ]
        }
    ]
})


