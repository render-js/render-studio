import { Component } from "render-core/class/component/component";
import template from "./studio.html";

export default new Component({
    name:"studio",
    template:template,
    data:{
        change: true,
        hello: "color:red",
        ok: "hello world",
        person:{
            name:"liuzhang",
            age:23,
            sex:"male",
            position:[
                "one","two","three"
            ]
        },
        table:{
            header:["name","age","sex"],
            rows:[
                ["liuzhang",23,"male"],
                ["mutian",24,"female"],
                ["huangting",24,"female"]
            ]
        },
        haha:[
            ["liuzhang",23,"male"],
            ["mutian",24,"female"],
            ["huangting",24,"female"]
        ]
    },
    mode: "box"
})