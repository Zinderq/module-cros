import { IInfo } from "../interface/IInfo";
import { Base } from "./Base";

export class Carrier extends Base implements IInfo{
    constructor (override capacity:number,public runway_length:number){
        super();
        this.type = "Авіаносець";
    }
    info(){
        return "Тип " + this.type + " місткість "+ this.capacity+ " довжина взлітної полоси: "+ this.runway_length;
    }
}