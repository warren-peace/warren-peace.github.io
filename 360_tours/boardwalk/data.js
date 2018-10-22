var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4964509725461035,
        "pitch": 0.12387963657140943,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.2161601980606367,
          "pitch": -0.24467607775934574,
          "rotation": 3.141592653589793,
          "target": "1-balcony"
        },
        {
          "yaw": -0.2836375593869782,
          "pitch": -0.09079950337125808,
          "rotation": 3.141592653589793,
          "target": "2-bridge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2493560270601538,
          "pitch": 0.5390850032349217,
          "title": "Note",
          "text": "Entrance fee of 50 Php at 8:00am - 5:00pm<br>"
        }
      ]
    },
    {
      "id": "1-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2242573099323124,
          "pitch": -0.11141311638590246,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": -0.8078744581123996,
          "pitch": -0.1358960538889491,
          "rotation": 1.5707963267948966,
          "target": "2-bridge"
        },
        {
          "yaw": -0.35792597262748416,
          "pitch": -0.1322280848945745,
          "rotation": 2.356194490192345,
          "target": "3-surf-boards"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bridge",
      "name": "Bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.296544189323381,
          "pitch": -0.10742557607370529,
          "rotation": 3.141592653589793,
          "target": "1-balcony"
        },
        {
          "yaw": 1.6377275025151947,
          "pitch": -0.1656807773468305,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-surf-boards",
      "name": "Surf boards",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6715842633851068,
          "pitch": -0.08340724598169835,
          "rotation": 3.141592653589793,
          "target": "2-bridge"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Boardwalk",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
