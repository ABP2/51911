import analizadorListener from "./generated/analizadorListener.js";

export class CustomanalizadorListener extends analizadorListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}