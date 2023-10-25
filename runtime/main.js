import { RenderJS } from "render-core";
import studio from "../workspace/studio";

const app = new RenderJS()
app.addTag(studio);
app.run()