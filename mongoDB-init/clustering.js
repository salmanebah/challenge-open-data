use cod;
db.classifications.drop()
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.5753,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 506787,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 63284,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 67817,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.5753,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "GDP": 506787,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "GDP": 63284,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.85,
                "GDP": 67817,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 1990,
    "score": 0.5276,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 24.6077,
                "0à19ans": 2913287,
                "20à39ans": 3577232,
                "40à59ans": 2565582,
                "60à74ans": 1011774,
                "75ansetplus": 576790
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 29.7442,
                "0à19ans": 654608,
                "20à39ans": 688176,
                "40à59ans": 531798,
                "60à74ans": 307733,
                "75ansetplus": 187493
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 29.1274,
                "0à19ans": 754131,
                "20à39ans": 782586,
                "40à59ans": 611625,
                "60à74ans": 351688,
                "75ansetplus": 205796
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 1999,
    "score": 0.5537,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 16.9862,
                "0à19ans": 2879710,
                "20à39ans": 3479466,
                "40à59ans": 2846776,
                "60à74ans": 1154587,
                "75ansetplus": 585473
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 20.9678,
                "0à19ans": 611626,
                "20à39ans": 654052,
                "40à59ans": 623671,
                "60à74ans": 353191,
                "75ansetplus": 197755
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 20.7479,
                "0à19ans": 685741,
                "20à39ans": 730445,
                "40à59ans": 699026,
                "60à74ans": 398342,
                "75ansetplus": 214532
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.575,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.572,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 18.0266,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 17.4522,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 17.6713,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.575,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.85,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.572,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 8.325,
                "diploma": 18.0266,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.025,
                "diploma": 17.4522,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.2875,
                "diploma": 17.6713,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2000,
    "score": 0.5753,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 411083,
                "0à19ans": 2895932,
                "20à39ans": 3477197,
                "40à59ans": 2891492,
                "60à74ans": 1156772,
                "75ansetplus": 598598
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 52166,
                "0à19ans": 611871,
                "20à39ans": 647088,
                "40à59ans": 635580,
                "60à74ans": 352400,
                "75ansetplus": 203182
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 57503,
                "0à19ans": 683212,
                "20à39ans": 722201,
                "40à59ans": 710889,
                "60à74ans": 397804,
                "75ansetplus": 220224
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2001,
    "score": 0.5774,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 423811,
                "0à19ans": 2911377,
                "20à39ans": 3482811,
                "40à59ans": 2937813,
                "60à74ans": 1157090,
                "75ansetplus": 613733
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 54183,
                "0à19ans": 611906,
                "20à39ans": 642433,
                "40à59ans": 648636,
                "60à74ans": 349728,
                "75ansetplus": 209075
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 59223,
                "0à19ans": 679814,
                "20à39ans": 716667,
                "40à59ans": 724210,
                "60à74ans": 394768,
                "75ansetplus": 226887
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2002,
    "score": 0.5797,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 441315,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 55698,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 60734,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2003,
    "score": 0.5811,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 455615,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 57566,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 61366,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2004,
    "score": 0.5814,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 466588,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 59396,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 64260,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2005,
    "score": 0.5827,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 488509,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 60921,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 65468,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.5837,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 506787,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 63284,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 67817,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2007,
    "score": 0.5852,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 541536,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 66142,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 71110,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2008,
    "score": 0.5823,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 557974,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 67170,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 72321,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2009,
    "score": 0.5801,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 552052,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 65173,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "GDP": 69888,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2000,
    "score": 0.5576,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.7,
                "GDP": 411083,
                "0à19ans": 2895932,
                "20à39ans": 3477197,
                "40à59ans": 2891492,
                "60à74ans": 1156772,
                "75ansetplus": 598598
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.7,
                "GDP": 52166,
                "0à19ans": 611871,
                "20à39ans": 647088,
                "40à59ans": 635580,
                "60à74ans": 352400,
                "75ansetplus": 203182
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.2875,
                "GDP": 57503,
                "0à19ans": 683212,
                "20à39ans": 722201,
                "40à59ans": 710889,
                "60à74ans": 397804,
                "75ansetplus": 220224
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2001,
    "score": 0.5609,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.025,
                "GDP": 423811,
                "0à19ans": 2911377,
                "20à39ans": 3482811,
                "40à59ans": 2937813,
                "60à74ans": 1157090,
                "75ansetplus": 613733
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.175,
                "GDP": 54183,
                "0à19ans": 611906,
                "20à39ans": 642433,
                "40à59ans": 648636,
                "60à74ans": 349728,
                "75ansetplus": 209075
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 6.5875,
                "GDP": 59223,
                "0à19ans": 679814,
                "20à39ans": 716667,
                "40à59ans": 724210,
                "60à74ans": 394768,
                "75ansetplus": 226887
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2002,
    "score": 0.5642,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 5.975,
                "GDP": 441315,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.15,
                "GDP": 55698,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.05,
                "GDP": 60734,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2003,
    "score": 0.5673,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.5,
                "GDP": 455615,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.825,
                "GDP": 57566,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.8,
                "GDP": 61366,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2004,
    "score": 0.5699,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.975,
                "GDP": 466588,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.275,
                "GDP": 59396,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.0875,
                "GDP": 64260,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2005,
    "score": 0.5726,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.025,
                "GDP": 488509,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.425,
                "GDP": 60921,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8,
                "GDP": 65468,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.5753,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "GDP": 506787,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "GDP": 63284,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.85,
                "GDP": 67817,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2007,
    "score": 0.5784,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.575,
                "GDP": 541536,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.5,
                "GDP": 66142,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.1375,
                "GDP": 71110,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2008,
    "score": 0.577,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.225,
                "GDP": 557974,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 7.975,
                "GDP": 67170,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 6.4125,
                "GDP": 72321,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2009,
    "score": 0.5749,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.95,
                "GDP": 552052,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.775,
                "GDP": 65173,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.875,
                "GDP": 69888,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1990,
    "score": 0.5654,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2913287,
                "20à39ans": 3577232,
                "40à59ans": 2565582,
                "60à74ans": 1011774,
                "75ansetplus": 576790
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 654608,
                "20à39ans": 688176,
                "40à59ans": 531798,
                "60à74ans": 307733,
                "75ansetplus": 187493
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 754131,
                "20à39ans": 782586,
                "40à59ans": 611625,
                "60à74ans": 351688,
                "75ansetplus": 205796
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1991,
    "score": 0.5665,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2909951,
                "20à39ans": 3568426,
                "40à59ans": 2603517,
                "60à74ans": 1047162,
                "75ansetplus": 566500
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 648649,
                "20à39ans": 686118,
                "40à59ans": 542920,
                "60à74ans": 318963,
                "75ansetplus": 184757
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 744195,
                "20à39ans": 778460,
                "40à59ans": 621675,
                "60à74ans": 364363,
                "75ansetplus": 201847
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1992,
    "score": 0.5671,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2904011,
                "20à39ans": 3578354,
                "40à59ans": 2635604,
                "60à74ans": 1084582,
                "75ansetplus": 550725
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 641747,
                "20à39ans": 686977,
                "40à59ans": 552720,
                "60à74ans": 331409,
                "75ansetplus": 180190
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 733571,
                "20à39ans": 777094,
                "40à59ans": 630510,
                "60à74ans": 378394,
                "75ansetplus": 196022
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1993,
    "score": 0.567,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2890356,
                "20à39ans": 3582401,
                "40à59ans": 2664352,
                "60à74ans": 1117652,
                "75ansetplus": 538653
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 633489,
                "20à39ans": 687166,
                "40à59ans": 563195,
                "60à74ans": 343178,
                "75ansetplus": 176459
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 722432,
                "20à39ans": 775703,
                "40à59ans": 639534,
                "60à74ans": 391235,
                "75ansetplus": 191112
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1994,
    "score": 0.5669,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2878368,
                "20à39ans": 3586068,
                "40à59ans": 2695464,
                "60à74ans": 1143409,
                "75ansetplus": 529914
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 625130,
                "20à39ans": 686706,
                "40à59ans": 572863,
                "60à74ans": 352163,
                "75ansetplus": 173532
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 711720,
                "20à39ans": 773582,
                "40à59ans": 649239,
                "60à74ans": 401172,
                "75ansetplus": 187234
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1995,
    "score": 0.5679,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2872214,
                "20à39ans": 3572230,
                "40à59ans": 2723589,
                "60à74ans": 1164004,
                "75ansetplus": 526938
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 620157,
                "20à39ans": 682457,
                "40à59ans": 582591,
                "60à74ans": 360623,
                "75ansetplus": 172487
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 703961,
                "20à39ans": 767783,
                "40à59ans": 659494,
                "60à74ans": 409610,
                "75ansetplus": 186201
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1996,
    "score": 0.5686,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2874575,
                "20à39ans": 3550979,
                "40à59ans": 2753625,
                "60à74ans": 1159229,
                "75ansetplus": 545440
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 617617,
                "20à39ans": 675511,
                "40à59ans": 592824,
                "60à74ans": 358610,
                "75ansetplus": 179764
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 699157,
                "20à39ans": 758886,
                "40à59ans": 669778,
                "60à74ans": 406725,
                "75ansetplus": 194125
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1997,
    "score": 0.5688,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2877286,
                "20à39ans": 3521075,
                "40à59ans": 2780433,
                "60à74ans": 1155884,
                "75ansetplus": 560749
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 616422,
                "20à39ans": 668382,
                "40à59ans": 603618,
                "60à74ans": 356918,
                "75ansetplus": 186694
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 695415,
                "20à39ans": 748846,
                "40à59ans": 679784,
                "60à74ans": 403775,
                "75ansetplus": 201300
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1998,
    "score": 0.5687,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2874177,
                "20à39ans": 3498549,
                "40à59ans": 2811580,
                "60à74ans": 1154060,
                "75ansetplus": 574256
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 614097,
                "20à39ans": 661759,
                "40à59ans": 614529,
                "60à74ans": 355350,
                "75ansetplus": 192470
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 689991,
                "20à39ans": 740012,
                "40à59ans": 690298,
                "60à74ans": 400723,
                "75ansetplus": 208123
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 1999,
    "score": 0.5683,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2879710,
                "20à39ans": 3479466,
                "40à59ans": 2846776,
                "60à74ans": 1154587,
                "75ansetplus": 585473
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 611626,
                "20à39ans": 654052,
                "40à59ans": 623671,
                "60à74ans": 353191,
                "75ansetplus": 197755
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 685741,
                "20à39ans": 730445,
                "40à59ans": 699026,
                "60à74ans": 398342,
                "75ansetplus": 214532
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2000,
    "score": 0.5694,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2895932,
                "20à39ans": 3477197,
                "40à59ans": 2891492,
                "60à74ans": 1156772,
                "75ansetplus": 598598
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 611871,
                "20à39ans": 647088,
                "40à59ans": 635580,
                "60à74ans": 352400,
                "75ansetplus": 203182
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 683212,
                "20à39ans": 722201,
                "40à59ans": 710889,
                "60à74ans": 397804,
                "75ansetplus": 220224
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2001,
    "score": 0.571,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2911377,
                "20à39ans": 3482811,
                "40à59ans": 2937813,
                "60à74ans": 1157090,
                "75ansetplus": 613733
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 611906,
                "20à39ans": 642433,
                "40à59ans": 648636,
                "60à74ans": 349728,
                "75ansetplus": 209075
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 679814,
                "20à39ans": 716667,
                "40à59ans": 724210,
                "60à74ans": 394768,
                "75ansetplus": 226887
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2002,
    "score": 0.5727,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2003,
    "score": 0.5741,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2004,
    "score": 0.5747,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2005,
    "score": 0.5756,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.5766,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2007,
    "score": 0.5781,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2008,
    "score": 0.5767,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2009,
    "score": 0.5746,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2010,
    "score": 0.5725,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3056145,
                "20à39ans": 3502425,
                "40à59ans": 3125251,
                "60à74ans": 1341662,
                "75ansetplus": 760751
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 613259,
                "20à39ans": 598568,
                "40à59ans": 697229,
                "60à74ans": 381820,
                "75ansetplus": 257189
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 664539,
                "20à39ans": 663528,
                "40à59ans": 772034,
                "60à74ans": 429899,
                "75ansetplus": 283878
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.572,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2012,
    "score": 0.5712,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3081236,
                "20à39ans": 3479822,
                "40à59ans": 3146380,
                "60à74ans": 1412777,
                "75ansetplus": 778287
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 613375,
                "20à39ans": 585790,
                "40à59ans": 695537,
                "60à74ans": 403526,
                "75ansetplus": 265358
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 658268,
                "20à39ans": 647566,
                "40à59ans": 766511,
                "60à74ans": 453444,
                "75ansetplus": 291025
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2013,
    "score": 0.57,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3093352,
                "20à39ans": 3463237,
                "40à59ans": 3164711,
                "60à74ans": 1450189,
                "75ansetplus": 788318
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 614810,
                "20à39ans": 577670,
                "40à59ans": 695917,
                "60à74ans": 414502,
                "75ansetplus": 267649
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 658595,
                "20à39ans": 637923,
                "40à59ans": 764425,
                "60à74ans": 465309,
                "75ansetplus": 293531
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2014,
    "score": 0.5688,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3111581,
                "20à39ans": 3444464,
                "40à59ans": 3182813,
                "60à74ans": 1478019,
                "75ansetplus": 797937
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 617134,
                "20à39ans": 568765,
                "40à59ans": 695932,
                "60à74ans": 424440,
                "75ansetplus": 269925
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 658269,
                "20à39ans": 628252,
                "40à59ans": 762059,
                "60à74ans": 475408,
                "75ansetplus": 296316
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2015,
    "score": 0.5675,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "0à19ans": 3133357,
                "20à39ans": 3430843,
                "40à59ans": 3193560,
                "60à74ans": 1507433,
                "75ansetplus": 808721
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "0à19ans": 619140,
                "20à39ans": 561988,
                "40à59ans": 693920,
                "60à74ans": 434807,
                "75ansetplus": 272519
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "0à19ans": 658303,
                "20à39ans": 620303,
                "40à59ans": 757087,
                "60à74ans": 486132,
                "75ansetplus": 299217
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2000,
    "score": 0.5574,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.7,
                "0à19ans": 2895932,
                "20à39ans": 3477197,
                "40à59ans": 2891492,
                "60à74ans": 1156772,
                "75ansetplus": 598598
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.7,
                "0à19ans": 611871,
                "20à39ans": 647088,
                "40à59ans": 635580,
                "60à74ans": 352400,
                "75ansetplus": 203182
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.2875,
                "0à19ans": 683212,
                "20à39ans": 722201,
                "40à59ans": 710889,
                "60à74ans": 397804,
                "75ansetplus": 220224
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2001,
    "score": 0.5607,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.025,
                "0à19ans": 2911377,
                "20à39ans": 3482811,
                "40à59ans": 2937813,
                "60à74ans": 1157090,
                "75ansetplus": 613733
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.175,
                "0à19ans": 611906,
                "20à39ans": 642433,
                "40à59ans": 648636,
                "60à74ans": 349728,
                "75ansetplus": 209075
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 6.5875,
                "0à19ans": 679814,
                "20à39ans": 716667,
                "40à59ans": 724210,
                "60à74ans": 394768,
                "75ansetplus": 226887
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2002,
    "score": 0.564,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 5.975,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.15,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.05,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2003,
    "score": 0.5671,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.5,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.825,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.8,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2004,
    "score": 0.5697,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.975,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.275,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.0875,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2005,
    "score": 0.5723,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.025,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.425,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.575,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.85,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2007,
    "score": 0.5781,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.575,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.5,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.1375,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2008,
    "score": 0.5767,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.225,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 7.975,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 6.4125,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2009,
    "score": 0.5746,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.95,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.775,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.875,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2010,
    "score": 0.5725,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 8.2,
                "0à19ans": 3056145,
                "20à39ans": 3502425,
                "40à59ans": 3125251,
                "60à74ans": 1341662,
                "75ansetplus": 760751
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.525,
                "0à19ans": 613259,
                "20à39ans": 598568,
                "40à59ans": 697229,
                "60à74ans": 381820,
                "75ansetplus": 257189
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.15,
                "0à19ans": 664539,
                "20à39ans": 663528,
                "40à59ans": 772034,
                "60à74ans": 429899,
                "75ansetplus": 283878
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.572,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 8.325,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.025,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.2875,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 1,
        "employment": 1
    },
    "clusters": [
        {
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                }
            ]
        },
        {
            "regions": [
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.5771,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "GDP": 506787,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "GDP": 63284,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "GDP": 67817,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.5771,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "GDP": 506787,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "GDP": 63284,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85,
                "GDP": 67817,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.577,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.5738,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "diploma": 18.0266,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "diploma": 17.4522,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "diploma": 17.6713,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.577,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "diploma": 16.7,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "diploma": 14.1,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85,
                "diploma": 14,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.5738,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "unemployment": 8.325,
                "diploma": 18.0266,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "unemployment": 9.025,
                "diploma": 17.4522,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "unemployment": 8.2875,
                "diploma": 17.6713,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2002,
    "score": 0.5865,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "GDP": 441315,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "GDP": 55698,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 135772,
                "GDP": 60734,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2003,
    "score": 0.5875,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "GDP": 455615,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "GDP": 57566,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 129671,
                "GDP": 61366,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2004,
    "score": 0.5874,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "GDP": 466588,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "GDP": 59396,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 127271,
                "GDP": 64260,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2005,
    "score": 0.5888,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "GDP": 488509,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "GDP": 60921,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 121979,
                "GDP": 65468,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.5893,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "GDP": 506787,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "GDP": 63284,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "GDP": 67817,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2007,
    "score": 0.5902,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "GDP": 541536,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "GDP": 66142,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110550,
                "GDP": 71110,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2008,
    "score": 0.5872,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "GDP": 557974,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "GDP": 67170,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 113002,
                "GDP": 72321,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2009,
    "score": 0.5863,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "GDP": 552052,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "GDP": 65173,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638,
                "GDP": 69888,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2002,
    "score": 0.5668,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "unemployment": 5.975,
                "GDP": 441315,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "unemployment": 8.15,
                "GDP": 55698,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 135772,
                "unemployment": 7.05,
                "GDP": 60734,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2003,
    "score": 0.5697,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "unemployment": 6.5,
                "GDP": 455615,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "unemployment": 8.825,
                "GDP": 57566,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 129671,
                "unemployment": 7.8,
                "GDP": 61366,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2004,
    "score": 0.5721,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "unemployment": 6.975,
                "GDP": 466588,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "unemployment": 9.275,
                "GDP": 59396,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 127271,
                "unemployment": 8.0875,
                "GDP": 64260,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2005,
    "score": 0.5747,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "unemployment": 7.025,
                "GDP": 488509,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "unemployment": 9.425,
                "GDP": 60921,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 121979,
                "unemployment": 8,
                "GDP": 65468,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.5771,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "GDP": 506787,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "GDP": 63284,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85,
                "GDP": 67817,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2007,
    "score": 0.5799,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "unemployment": 6.575,
                "GDP": 541536,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "unemployment": 8.5,
                "GDP": 66142,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110550,
                "unemployment": 7.1375,
                "GDP": 71110,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2008,
    "score": 0.5785,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "unemployment": 6.225,
                "GDP": 557974,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "unemployment": 7.975,
                "GDP": 67170,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 113002,
                "unemployment": 6.4125,
                "GDP": 72321,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2009,
    "score": 0.5768,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "unemployment": 7.95,
                "GDP": 552052,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "unemployment": 9.775,
                "GDP": 65173,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638,
                "unemployment": 7.875,
                "GDP": 69888,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2002,
    "score": 0.5846,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 135772,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2003,
    "score": 0.5853,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 129671,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2004,
    "score": 0.585,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 127271,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2005,
    "score": 0.5862,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 121979,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.5864,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2007,
    "score": 0.5881,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110550,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2008,
    "score": 0.5845,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 113002,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2009,
    "score": 0.5832,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2010,
    "score": 0.5803,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 895989,
                "0à19ans": 3056145,
                "20à39ans": 3502425,
                "40à59ans": 3125251,
                "60à74ans": 1341662,
                "75ansetplus": 760751
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108871,
                "0à19ans": 613259,
                "20à39ans": 598568,
                "40à59ans": 697229,
                "60à74ans": 381820,
                "75ansetplus": 257189
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 109310,
                "0à19ans": 664539,
                "20à39ans": 663528,
                "40à59ans": 772034,
                "60à74ans": 429899,
                "75ansetplus": 283878
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.5788,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2012,
    "score": 0.5769,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 75729,
                "0à19ans": 3081236,
                "20à39ans": 3479822,
                "40à59ans": 3146380,
                "60à74ans": 1412777,
                "75ansetplus": 778287
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 9270,
                "0à19ans": 613375,
                "20à39ans": 585790,
                "40à59ans": 695537,
                "60à74ans": 403526,
                "75ansetplus": 265358
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 9560,
                "0à19ans": 658268,
                "20à39ans": 647566,
                "40à59ans": 766511,
                "60à74ans": 453444,
                "75ansetplus": 291025
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2002,
    "score": 0.5668,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "unemployment": 5.975,
                "0à19ans": 2929778,
                "20à39ans": 3489442,
                "40à59ans": 2984877,
                "60à74ans": 1152852,
                "75ansetplus": 628614
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "unemployment": 8.15,
                "0à19ans": 610826,
                "20à39ans": 639213,
                "40à59ans": 662333,
                "60à74ans": 345707,
                "75ansetplus": 214899
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 135772,
                "unemployment": 7.05,
                "0à19ans": 675688,
                "20à39ans": 711320,
                "40à59ans": 739652,
                "60à74ans": 389397,
                "75ansetplus": 233835
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2003,
    "score": 0.5697,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "unemployment": 6.5,
                "0à19ans": 2948556,
                "20à39ans": 3495681,
                "40à59ans": 3024520,
                "60à74ans": 1157717,
                "75ansetplus": 643600
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "unemployment": 8.825,
                "0à19ans": 609826,
                "20à39ans": 636571,
                "40à59ans": 673633,
                "60à74ans": 344023,
                "75ansetplus": 220235
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 129671,
                "unemployment": 7.8,
                "0à19ans": 671881,
                "20à39ans": 706571,
                "40à59ans": 750937,
                "60à74ans": 386958,
                "75ansetplus": 240392
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2004,
    "score": 0.572,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "unemployment": 6.975,
                "0à19ans": 2970969,
                "20à39ans": 3493848,
                "40à59ans": 3063842,
                "60à74ans": 1166374,
                "75ansetplus": 655257
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "unemployment": 9.275,
                "0à19ans": 611099,
                "20à39ans": 630863,
                "40à59ans": 683741,
                "60à74ans": 343506,
                "75ansetplus": 225070
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 127271,
                "unemployment": 8.0875,
                "0à19ans": 670547,
                "20à39ans": 698182,
                "40à59ans": 762494,
                "60à74ans": 385540,
                "75ansetplus": 246171
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2005,
    "score": 0.5746,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "unemployment": 7.025,
                "0à19ans": 2992114,
                "20à39ans": 3495447,
                "40à59ans": 3100720,
                "60à74ans": 1179194,
                "75ansetplus": 674668
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "unemployment": 9.425,
                "0à19ans": 612106,
                "20à39ans": 625734,
                "40à59ans": 693564,
                "60à74ans": 344110,
                "75ansetplus": 231732
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 121979,
                "unemployment": 8,
                "0à19ans": 669148,
                "20à39ans": 690591,
                "40à59ans": 772870,
                "60à74ans": 385658,
                "75ansetplus": 253667
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.577,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "0à19ans": 3008457,
                "20à39ans": 3508802,
                "40à59ans": 3133960,
                "60à74ans": 1189412,
                "75ansetplus": 691767
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "0à19ans": 613729,
                "20à39ans": 621338,
                "40à59ans": 703346,
                "60à74ans": 343532,
                "75ansetplus": 237622
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85,
                "0à19ans": 667163,
                "20à39ans": 683759,
                "40à59ans": 781639,
                "60à74ans": 385513,
                "75ansetplus": 261387
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2007,
    "score": 0.5799,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "unemployment": 6.575,
                "0à19ans": 3021977,
                "20à39ans": 3503295,
                "40à59ans": 3138930,
                "60à74ans": 1224134,
                "75ansetplus": 710530
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "unemployment": 8.5,
                "0à19ans": 611847,
                "20à39ans": 618194,
                "40à59ans": 703135,
                "60à74ans": 351462,
                "75ansetplus": 242281
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110550,
                "unemployment": 7.1375,
                "0à19ans": 666993,
                "20à39ans": 679569,
                "40à59ans": 782879,
                "60à74ans": 395246,
                "75ansetplus": 267875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2008,
    "score": 0.5783,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "unemployment": 6.225,
                "0à19ans": 3029354,
                "20à39ans": 3499434,
                "40à59ans": 3132036,
                "60à74ans": 1265663,
                "75ansetplus": 732773
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "unemployment": 7.975,
                "0à19ans": 608808,
                "20à39ans": 612741,
                "40à59ans": 701550,
                "60à74ans": 360106,
                "75ansetplus": 248383
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 113002,
                "unemployment": 6.4125,
                "0à19ans": 666861,
                "20à39ans": 674815,
                "40à59ans": 780035,
                "60à74ans": 406292,
                "75ansetplus": 274516
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2009,
    "score": 0.5765,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "unemployment": 7.95,
                "0à19ans": 3042263,
                "20à39ans": 3503403,
                "40à59ans": 3130128,
                "60à74ans": 1306358,
                "75ansetplus": 746088
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "unemployment": 9.775,
                "0à19ans": 609882,
                "20à39ans": 606762,
                "40à59ans": 698131,
                "60à74ans": 371274,
                "75ansetplus": 252541
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638,
                "unemployment": 7.875,
                "0à19ans": 666218,
                "20à39ans": 669196,
                "40à59ans": 776489,
                "60à74ans": 418880,
                "75ansetplus": 279865
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2010,
    "score": 0.5743,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 895989,
                "unemployment": 8.2,
                "0à19ans": 3056145,
                "20à39ans": 3502425,
                "40à59ans": 3125251,
                "60à74ans": 1341662,
                "75ansetplus": 760751
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108871,
                "unemployment": 9.525,
                "0à19ans": 613259,
                "20à39ans": 598568,
                "40à59ans": 697229,
                "60à74ans": 381820,
                "75ansetplus": 257189
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 109310,
                "unemployment": 8.15,
                "0à19ans": 664539,
                "20à39ans": 663528,
                "40à59ans": 772034,
                "60à74ans": 429899,
                "75ansetplus": 283878
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 1,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.5738,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "unemployment": 8.325,
                "0à19ans": 3071017,
                "20à39ans": 3493039,
                "40à59ans": 3131223,
                "60à74ans": 1383699,
                "75ansetplus": 773873
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "unemployment": 9.025,
                "0à19ans": 614629,
                "20à39ans": 592449,
                "40à59ans": 695479,
                "60à74ans": 392862,
                "75ansetplus": 261416
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "unemployment": 8.2875,
                "0à19ans": 662023,
                "20à39ans": 656055,
                "40à59ans": 767482,
                "60à74ans": 442588,
                "75ansetplus": 288026
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 1,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.6256,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "GDP": 506787,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "GDP": 63284,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 1,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.6215,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "GDP": 506787,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "GDP": 63284,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85,
                "GDP": 67817,
                "diploma": 14
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.6481,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "diploma": 14
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 162376,
                "diploma": 13.5
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 357215,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 280714,
                "diploma": 14
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 156219,
                "diploma": 14.9
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.7248,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "diploma": 18.0266
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "diploma": 17.4522
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "diploma": 17.6713
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 142525,
                "diploma": 20.1263
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 330585,
                "diploma": 20.2585
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 245816,
                "diploma": 19.4555
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 147330,
                "diploma": 16.063
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.6481,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85,
                "diploma": 14
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 162376,
                "unemployment": 9.9875,
                "diploma": 13.5
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 357215,
                "unemployment": 9.8125,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 280714,
                "unemployment": 8.8875,
                "diploma": 14
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 156219,
                "unemployment": 7.575,
                "diploma": 14.9
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.7248,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "unemployment": 8.325,
                "diploma": 18.0266
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "unemployment": 9.025,
                "diploma": 17.4522
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "unemployment": 8.2875,
                "diploma": 17.6713
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 142525,
                "unemployment": 10.125,
                "diploma": 20.1263
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 330585,
                "unemployment": 11.2125,
                "diploma": 20.2585
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 245816,
                "unemployment": 9.025,
                "diploma": 19.4555
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 147330,
                "unemployment": 7.9,
                "diploma": 16.063
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2002,
    "score": 0.7528,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "GDP": 441315
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "GDP": 55698
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2003,
    "score": 0.753,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "GDP": 455615
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "GDP": 57566
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2004,
    "score": 0.7488,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "GDP": 466588
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "GDP": 59396
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2005,
    "score": 0.7482,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "GDP": 488509
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "GDP": 60921
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.6215,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "GDP": 506787
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "GDP": 63284
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "GDP": 67817
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2007,
    "score": 0.6203,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "GDP": 541536
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "GDP": 66142
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110550,
                "GDP": 71110
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2008,
    "score": 0.749,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "GDP": 557974
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "GDP": 67170
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2009,
    "score": 0.7513,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "GDP": 552052
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "GDP": 65173
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2002,
    "score": 0.6376,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "unemployment": 5.975,
                "GDP": 441315
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "unemployment": 8.15,
                "GDP": 55698
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2003,
    "score": 0.6412,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "unemployment": 6.5,
                "GDP": 455615
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "unemployment": 8.825,
                "GDP": 57566
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2004,
    "score": 0.6378,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "unemployment": 6.975,
                "GDP": 466588
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "unemployment": 9.275,
                "GDP": 59396
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2005,
    "score": 0.6357,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "unemployment": 7.025,
                "GDP": 488509
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "unemployment": 9.425,
                "GDP": 60921
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.6301,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175,
                "GDP": 506787
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6,
                "GDP": 63284
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2007,
    "score": 0.6287,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "unemployment": 6.575,
                "GDP": 541536
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "unemployment": 8.5,
                "GDP": 66142
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2008,
    "score": 0.6206,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "unemployment": 6.225,
                "GDP": 557974
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "unemployment": 7.975,
                "GDP": 67170
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2009,
    "score": 0.6265,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "unemployment": 7.95,
                "GDP": 552052
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "unemployment": 9.775,
                "GDP": 65173
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638,
                "unemployment": 7.875,
                "GDP": 69888
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2002,
    "score": 0.7227,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2003,
    "score": 0.7222,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2004,
    "score": 0.6422,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 127271
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 170470
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 360871
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 292180
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 163271
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2005,
    "score": 0.6447,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 121979
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 166537
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.6481,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 162376
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 357215
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 280714
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 156219
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2007,
    "score": 0.7222,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2008,
    "score": 0.7077,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 113002
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 155075
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 346629
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 263131
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 151792
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2009,
    "score": 0.7015,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 151505
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 340384
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 258643
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 147976
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2010,
    "score": 0.7287,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 895989
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108871
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 109310
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 146024
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 332807
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 248594
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 146502
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.7248,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 142525
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 330585
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 245816
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 147330
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 0
    },
    "year": 2012,
    "score": 0.7294,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 75729
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 9270
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2002,
    "score": 0.7227,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1057220,
                "unemployment": 5.975
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 140188,
                "unemployment": 8.15
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2003,
    "score": 0.7222,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 1021741,
                "unemployment": 6.5
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 130471,
                "unemployment": 8.825
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2004,
    "score": 0.6422,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 975590,
                "unemployment": 6.975
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 126510,
                "unemployment": 9.275
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 127271,
                "unemployment": 8.0875
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 170470,
                "unemployment": 10
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 360871,
                "unemployment": 9.6625
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 292180,
                "unemployment": 8.7
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 163271,
                "unemployment": 7.575
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2005,
    "score": 0.6447,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 961855,
                "unemployment": 7.025
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118883,
                "unemployment": 9.425
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 121979,
                "unemployment": 8
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 166537,
                "unemployment": 10
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.6481,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 962872,
                "unemployment": 7.175
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 118954,
                "unemployment": 9.6
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 117863,
                "unemployment": 7.85
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 162376,
                "unemployment": 9.9875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 357215,
                "unemployment": 9.8125
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 280714,
                "unemployment": 8.8875
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 156219,
                "unemployment": 7.575
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2007,
    "score": 0.7222,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 935397,
                "unemployment": 6.575
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111812,
                "unemployment": 8.5
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2008,
    "score": 0.7077,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 914021,
                "unemployment": 6.225
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 111973,
                "unemployment": 7.975
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 113002,
                "unemployment": 6.4125
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 155075,
                "unemployment": 8.5875
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 346629,
                "unemployment": 8.3625
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 263131,
                "unemployment": 7.275
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 151792,
                "unemployment": 6.2
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2009,
    "score": 0.7015,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 908417,
                "unemployment": 7.95
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108181,
                "unemployment": 9.775
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110638,
                "unemployment": 7.875
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 151505,
                "unemployment": 10.425
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 340384,
                "unemployment": 10.575
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 258643,
                "unemployment": 8.6375
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 147976,
                "unemployment": 8.275
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2010,
    "score": 0.7287,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 895989,
                "unemployment": 8.2
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 108871,
                "unemployment": 9.525
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 109310,
                "unemployment": 8.15
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 146024,
                "unemployment": 10.65
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 332807,
                "unemployment": 10.7375
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 248594,
                "unemployment": 8.9625
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 146502,
                "unemployment": 8.275
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 1,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.7248,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "crime": 888586,
                "unemployment": 8.325
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "crime": 110196,
                "unemployment": 9.025
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "crime": 110936,
                "unemployment": 8.2875
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "crime": 142525,
                "unemployment": 10.125
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "crime": 330585,
                "unemployment": 11.2125
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 44,
                "name": "Alsace,Champagne-ArdenneetLorraine",
                "crime": 245816,
                "unemployment": 9.025
            },
            "regions": [
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 52,
                "name": "PaysdelaLoire",
                "crime": 147330,
                "unemployment": 7.9
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.7855,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "GDP": 506787,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "GDP": 63284,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.7855,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "GDP": 506787,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "GDP": 63284,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 1990,
    "score": 0.6753,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 24.6077
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 29.7442
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 1999,
    "score": 0.6358,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 16.9862
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 20.9678
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 20.7479
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2006,
    "score": 0.6748,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 14
            },
            "regions": [
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "diploma": 13.5
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 0
    },
    "year": 2011,
    "score": 0.6158,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "diploma": 18.0266
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "diploma": 17.4522
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "diploma": 17.6713
            },
            "regions": [
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "diploma": 20.1263
            },
            "regions": [
                {
                    "id": 53,
                    "name": "Bretagne"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "diploma": 20.2585
            },
            "regions": [
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.4021,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "diploma": 16.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "diploma": 14.1
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 1,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.4532,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 8.325,
                "diploma": 18.0266
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.025,
                "diploma": 17.4522
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2000,
    "score": 0.7886,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 411083
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 52166
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2001,
    "score": 0.7876,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 423811
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 54183
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2002,
    "score": 0.7899,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 441315
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 55698
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2003,
    "score": 0.7908,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 455615
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 57566
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2004,
    "score": 0.7864,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 466588
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 59396
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2005,
    "score": 0.7884,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 488509
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 60921
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2006,
    "score": 0.7855,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 506787
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 63284
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2007,
    "score": 0.79,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 541536
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 66142
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2008,
    "score": 0.7907,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 557974
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 67170
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 0
    },
    "year": 2009,
    "score": 0.7934,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "gdp": 552052
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "gdp": 65173
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2000,
    "score": 0.7886,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.7,
                "GDP": 411083
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.7,
                "GDP": 52166
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2001,
    "score": 0.7876,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.025,
                "GDP": 423811
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.175,
                "GDP": 54183
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2002,
    "score": 0.7899,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 5.975,
                "GDP": 441315
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.15,
                "GDP": 55698
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2003,
    "score": 0.7908,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.5,
                "GDP": 455615
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.825,
                "GDP": 57566
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2004,
    "score": 0.7864,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.975,
                "GDP": 466588
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.275,
                "GDP": 59396
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2005,
    "score": 0.7884,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.025,
                "GDP": 488509
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.425,
                "GDP": 60921
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2006,
    "score": 0.7855,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175,
                "GDP": 506787
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6,
                "GDP": 63284
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2007,
    "score": 0.79,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.575,
                "GDP": 541536
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.5,
                "GDP": 66142
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2008,
    "score": 0.7907,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.225,
                "GDP": 557974
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 7.975,
                "GDP": 67170
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 1,
        "employment": 1
    },
    "year": 2009,
    "score": 0.7934,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.95,
                "GDP": 552052
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.775,
                "GDP": 65173
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2000,
    "score": 0.5359,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.7
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.7
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2001,
    "score": 0.5723,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.025
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.175
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2002,
    "score": 0.5822,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 5.975
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.15
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2003,
    "score": 0.5943,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.5
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.825
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.8
            },
            "regions": [
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "unemployment": 9.825
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "unemployment": 9.175
            },
            "regions": [
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2004,
    "score": 0.6223,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.975
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.275
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2005,
    "score": 0.6136,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.025
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.425
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2006,
    "score": 0.6869,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.175
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.6
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.85
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2007,
    "score": 0.6048,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.575
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 8.5
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2008,
    "score": 0.6842,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 6.225
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 7.975
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 6.4125
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2009,
    "score": 0.6858,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 7.95
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.775
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 7.875
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "unemployment": 10.425
            },
            "regions": [
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                }
            ]
        },
        {
            "medoid": {
                "id": 32,
                "name": "Nord-Pas-de-CalaisetPicardie",
                "unemployment": 10.575
            },
            "regions": [
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2010,
    "score": 0.7379,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 8.2
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.525
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.15
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
db.classifications.insert({
    "criteria": {
        "crime": 0,
        "population": 0,
        "education": 0,
        "gdp": 0,
        "employment": 1
    },
    "year": 2011,
    "score": 0.8586,
    "clusters": [
        {
            "medoid": {
                "id": 11,
                "name": "Île-de-France",
                "unemployment": 8.325
            },
            "regions": [
                {
                    "id": 11,
                    "name": "Île-de-France"
                },
                {
                    "id": 27,
                    "name": "BourgogneetFranche-Comté"
                },
                {
                    "id": 52,
                    "name": "PaysdelaLoire"
                },
                {
                    "id": 53,
                    "name": "Bretagne"
                },
                {
                    "id": 84,
                    "name": "AuvergneetRhône-Alpes"
                }
            ]
        },
        {
            "medoid": {
                "id": 24,
                "name": "Centre-ValdeLoire",
                "unemployment": 9.025
            },
            "regions": [
                {
                    "id": 24,
                    "name": "Centre-ValdeLoire"
                },
                {
                    "id": 44,
                    "name": "Alsace,Champagne-ArdenneetLorraine"
                },
                {
                    "id": 75,
                    "name": "Aquitaine,LimousinetPoitou-Charentes"
                },
                {
                    "id": 94,
                    "name": "Corse"
                }
            ]
        },
        {
            "medoid": {
                "id": 27,
                "name": "BourgogneetFranche-Comté",
                "unemployment": 8.2875
            },
            "regions": [
                {
                    "id": 28,
                    "name": "Normandie"
                },
                {
                    "id": 76,
                    "name": "Languedoc-RoussillonetMidi-Pyrénées"
                }
            ]
        },
        {
            "medoid": {
                "id": 28,
                "name": "Normandie",
                "unemployment": 10.125
            },
            "regions": [
                {
                    "id": 32,
                    "name": "Nord-Pas-de-CalaisetPicardie"
                },
                {
                    "id": 93,
                    "name": "Provence-Alpes-Côted'Azur"
                }
            ]
        }
    ]
})
