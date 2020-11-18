import { Component } from "@angular/core";

@Component({
    selector:'calc',
    templateUrl:'calc.component.html',
    styleUrls:['calc.component.css']
})

export class calcComponent{
    public number1 : number;
    public number2 : number;
    public result : number;
 
    public add(){
        this.result = this.number1 + this.number2;
       // alert(this.number1);
       // alert(this.number2);
        //alert(this.result);
    }
}