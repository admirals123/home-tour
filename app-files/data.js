var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-hall-entrance",
      "name": "1-Hall-entrance",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.107939804630071,
          "pitch": 0.2675833100677423,
          "rotation": 0,
          "target": "3-4-kitchen-entrance"
        },
        {
          "yaw": -1.3139013724623396,
          "pitch": 0.349597500667457,
          "rotation": 0,
          "target": "1-2-hall-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-hall-middle",
      "name": "2-Hall-middle",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.8052274600170852,
        "pitch": 0.1171555514749798,
        "fov": 1.2739945160662665
      },
      "linkHotspots": [
        {
          "yaw": -1.2879666146364812,
          "pitch": 0.2543804813654038,
          "rotation": 0,
          "target": "2-3-hall-window"
        },
        {
          "yaw": 1.8786242160287951,
          "pitch": 0.32472688625354706,
          "rotation": 6.283185307179586,
          "target": "0-1-hall-entrance"
        },
        {
          "yaw": -2.922328052814942,
          "pitch": 0.4214658410739549,
          "rotation": 0,
          "target": "5-6-bedroom-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-hall-window",
      "name": "3-Hall-window",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.7700477994545523,
        "pitch": -0.028150451377966235,
        "fov": 1.2739945160662665
      },
      "linkHotspots": [
        {
          "yaw": 2.939171248150089,
          "pitch": 0.20229366308322128,
          "rotation": 0,
          "target": "0-1-hall-entrance"
        },
        {
          "yaw": -2.859692554238052,
          "pitch": 0.37805811300017567,
          "rotation": 1.5707963267948966,
          "target": "5-6-bedroom-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-kitchen-entrance",
      "name": "4-kitchen-entrance",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.21630306487813478,
        "pitch": 0.13268329112415955,
        "fov": 1.2739945160662665
      },
      "linkHotspots": [
        {
          "yaw": -0.489345513122144,
          "pitch": 0.4478893579313574,
          "rotation": 0,
          "target": "4-5-kitchen-stove"
        },
        {
          "yaw": 1.15460263071191,
          "pitch": 0.46677371596064177,
          "rotation": 0,
          "target": "0-1-hall-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5-kitchen-stove",
      "name": "5-kitchen-stove",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5698255103559617,
          "pitch": 0.49684037223550703,
          "rotation": 0,
          "target": "3-4-kitchen-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6-bedroom-entrance",
      "name": "6-Bedroom-entrance",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.43684317544798823,
          "pitch": 0.44110585704906136,
          "rotation": 0,
          "target": "6-7-bedroom-window"
        },
        {
          "yaw": 1.1632926807393602,
          "pitch": 0.4511162299694398,
          "rotation": 0,
          "target": "1-2-hall-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7-bedroom-window",
      "name": "7-Bedroom-Window",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.305677931023892,
          "pitch": 0.505754480938819,
          "rotation": 0,
          "target": "5-6-bedroom-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
