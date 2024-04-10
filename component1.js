import { LightningElement, api } from 'lwc';


export default class Component1 extends LightningElement {
    @api var1;
    changefn(event){
        this.var1=event.target.value;
    }
}