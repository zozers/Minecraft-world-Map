var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Zoe_Server_Overworld - overworld",
        "Zoe_Server_Nether - nether",
        "Zoe_Server_End - end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1615804821",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Zoe's Server",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Zoe_Server_Overworld - overworld",
            "last_rendertime": 1615804501,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                10,
                80,
                13
            ],
            "minZoom": 0,
            "spawn": [
                10,
                80,
                13
            ],
            "north_direction": 0
        },
        {
            "name": "Zoe's Server",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Zoe_Server_Nether - nether",
            "last_rendertime": 1615804502,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Zoe's Server",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "end",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Zoe_Server_End - end",
            "last_rendertime": 1615804502,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
