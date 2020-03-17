var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "icons/marker_home_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "icons/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "icons/marker_location.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "icons/marker_location_2x.png"
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "north_direction": 0,
            "path": "world-lighting",
            "minZoom": 0,
            "isOverlay": false,
            "world": "world",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "last_rendertime": 1584428763,
            "spawn": [
                10,
                80,
                13
            ],
            "base": "",
            "center": [
                10,
                80,
                13
            ],
            "name": "Overviewer Render (lighting)",
            "maxZoom": 8,
            "defaultZoom": 1
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1584432686",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "spawn": true
        }
    }
};
