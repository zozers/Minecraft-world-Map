var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1585464623",
        "controls": {
            "overlays": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true
        }
    },
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker": "icons/marker_home.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "queryMarker": "icons/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "name": "Overviewer Render (lighting)",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "north_direction": 0,
            "maxZoom": 8,
            "zoomLevels": 8,
            "world": "world",
            "center": [
                10,
                80,
                13
            ],
            "showlocationmarker": true,
            "path": "world-lighting",
            "last_rendertime": 1585463258,
            "spawn": [
                10,
                80,
                13
            ],
            "defaultZoom": 1,
            "poititle": "Markers",
            "minZoom": 0
        }
    ],
    "worlds": [
        "world"
    ]
};
