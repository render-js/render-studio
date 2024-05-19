import {registerElements, RenderJS} from "render-core";
import studio from "./studio/studio";
import mk from "./studio/mk";

registerElements("onload",function (){
    const app = new RenderJS()
    app.addTag(studio);
    app.addTag(mk)
    app.run()
})