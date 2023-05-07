import { Game, Types } from "phaser";

import LoadingScene from "./scenes/loading";

const gameConfig : Types.Core.GameConfig = {
    title: "Hello Phaser, by DW",
    parent: "game",
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: window.innerWidth,
        height: window.innerHeight
    }, 
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    render: {
        antialiasGL: false,
        pixelArt: true
    },
    callbacks: {
        postBoot: () => {
            //window.sizeChanged()
        }
    },
    canvasStyle: "display: block; width: 100%; height: 100%;",
    autoFocus: true,
    audio: {
        disableWebAudio: false
    },
    backgroundColor: "#dadada",
    scene: [
        LoadingScene
    ]
}

const theGame = new Game(gameConfig);