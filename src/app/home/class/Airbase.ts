import { IInfo } from "../interface/IInfo";
import { Base } from "./Base";

export class Airbase extends Base implements IInfo{
    constructor (override capacity:number,public runway_length:number){
        super();
        this.type = "Авіабаза";
    }
    info(){
        return "Тип " + this.type + " місткість "+ this.capacity+ " довжина взлітної полоси: "+ this.runway_length;
    }
}