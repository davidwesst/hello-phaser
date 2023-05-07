import { Scene, GameObjects } from "phaser";
export default class LoadingScene extends Scene {

    private dw : GameObjects.Sprite;

    constructor() {
        super("scene/loading");
    }

    preload() : void {
        this.load.image("dw-icon", "assets/dw-icon.png");
    }

    create() : void {
        console.log("Loading scene was created!");
        this.dw = this.add.sprite(550, 550, 'dw-icon');
    }
}