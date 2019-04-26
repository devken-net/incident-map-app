FORMAT: 1A

# JSON Schema
Every request and response can have a schema. Below you will find examples
using [JSON Schema](http://json-schema.org/) to describe the format of request
and response body content.

## API Blueprint

# Incidents [/api/incidents]

+ Parameters

    + id: abc123 (required) - Unique identifier for a note

## Get incidents [GET]
Gets the lists of incidents.

+ Response 200 (application/json)

    + Schema

            [{
                "type": "array-object",
                "properties": {
                    "id": {
                        "type": "number",
                        "description": "Unique identity of the incident."
                    },
                    "type": {
                        "type": "string",
                        "description": "Incident type. The values are numbers in 1 – 3 range, where values indicate in sequence:",
                        "options": [1: a traffic jam, 2: hazardous conditions, 3: lane closed]
                    },
                    "point": {
                        "type": "object",
                        "description": "The point representing the position/coordinates where the incident occurs."
                        "properties": {
                          "x": {
                            "type": "float"
                          },
                          "y": {
                            "type": "float"
                          }
                        }
                    },
                    "from": {
                        "type": "string",
                        "description": "Name of the location where the incident starts.",
                    },
                    "to": {
                        "type": "string",
                        "description": "Name of the location where the incident ends.",
                    },
                    "details": {
                      "type": "string",
                      "description": "Description of the incident."
                    },
                    "delay": {
                      "type": "number",
                      description: "Traffic delay caused by this incident in seconds."
                    },
                    "magnitude": {
                      "type": "number",
                      "description": "Incident delay importance. The values are numbers in 1-4 range, where values indicate in sequence:",
                      "options": [0: unknown, 1: minor, 2: moderate, 3: major ]
                    }
                }
            }]

    + Body

            [{
                "id": "europe_HD_DE_TTL6000",
                "type": 1,
                "point": {
                    "x": 13.072789,
                    "y": 52.388527
                },
                "from": "Am Buchhorst (Arthur-Scheunert-Allee/L78)",
                "to": "Potsdam-Brauhausberg - Friedrich-Engels-Straße (Heinrich-Mann-Allee/L78)",
                "details": "stationary traffic",
                "delay": 232,
                "magnitude": 2
            }, {
                "id": "europe_HD_DE_TTL1211",
                "type": 2,
                "point": {
                    "x": 13.045512,
                    "y": 52.395312
                },
                "from": "Breite Straße - Feuerbachstraße (Zeppelinstraße/B2)",
                "to": "Schopenhauerstraße (Hegelallee/B2)",
                "details": "broken down vehicle",
                "delay": 135,
                "magnitude": 1
            }, {
                "id": "europe_HD_DE_TTL5231",
                "type": 1,
                "point": {
                    "x": 13.57957,
                    "y": 52.462065
                },
                "from": "Gehsenerstraße - Mittelheide (Mahlsdorfer Straße/L1152)",
                "to": "Seelenbinderstraße (Bahnhofstraße/L1152)",
                "details": "stationary traffic",
                "delay": 166,
                "magnitude": 1
            }, {
                "id": "europe_HD_DE_TTL4451",
                "type": 1,
                "point": {
                    "x": 13.347768,
                    "y": 52.435064
                },
                "from": "Paul-Schneider-Straße - Leonorenstraße (Kaiser-Wilhelm-Straße/L1092)",
                "to": "Paul-Schneider-Straße - Leonorenstraße (Kaiser-Wilhelm-Straße/L1092)",
                "details": "queuing traffic",
                "delay": 876,
                "magnitude": 3
            }, {
                "id": "europe_HD_DE_TTL2451",
                "type": 3,
                "point": {
                    "x": 13.498329,
                    "y": 52.481859
                },
                "from": "Blockdammweg (Rummelsburger Landstraße/L1075)",
                "to": "Treskowallee - Edisonstraße (Rummelsburger Straße/L1075)",
                "details": "carriageway reduced to one lane",
                "delay": 190,
                "magnitude": 1
            }]

