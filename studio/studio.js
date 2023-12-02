import { Component } from "render-core/class/component/component";
import template from "./studio.html";
import {changeApplicationTheme, changeSessionTheme} from "render-core/func/Theme";

export default new Component({
    name:"studio",
    template:template,
    data:{
      change: true
    },
    mode: "box",
    methods:{
        raw_show() {
            if (!this.change){
                changeSessionTheme("show");
                this.change = true
            }else {
                changeSessionTheme("default");
                this.change = false
            }
        },
        tk(){
          changeApplicationTheme("default")
        }
    }
})