import { Component } from "render-core/class/component/component";
import template from "./studio.html";
import {BarrageBroker} from "render-barrage/broker/BarrageBroker";

export default new Component({
    name:"studio",
    template:template,
    mode: "insert",
    methods:{
        send(){
            let message = this.$refs.get("content").value;
            broker.send({data:message,color:"black"},true);
            this.$refs.get("content").value = "";
        }
    },
    afterRender(){
        Reflect.set(window,"broker",new BarrageBroker(this.$refs.get("h"),40));
    }
})