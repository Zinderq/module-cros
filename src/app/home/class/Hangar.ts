import { IInfo } from "../interface/IInfo";
import { Base } from "./Base";

export class Hangar extends Base implements IInfo{
    constructor (override capacity:number){
        super();
        this.type = "Ангар";
    }
    info(){
        return "Тип " + this.type + " місткість "+ this.capacity;
    }
}