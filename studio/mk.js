import {Component} from "render-core/class/component/component";
import template from "./mk.html"
import style from "./mk.css"

export default new Component({
    name:"mk",
    template: template,
    boxStyle: style,
    props:{
        "data":"array"
    },
    data:{
        haode: [
            {
                name:"liuzhang",
                age:12,
                sex:"male"
            },
            {
                name:"huangting",
                age:12,
                sex:"female"
            }
        ],
        test:{
            name:"liuzhang",
            friends:["u","k","f"],
            tk:{
                h:"no",
                f:"yes"
            }
        }
    },
    methods:{
        change(theme){
            window.changeTheme("ok");
        }
    },
    beforeRender(){
    }
})