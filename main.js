import {registerElements, RenderJS} from "render-core";
import studio from "./studio/studio";

registerElements("onload",function (){
    const app = new RenderJS()
    app.addTag(studio);
    app.run()
})