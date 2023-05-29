import { IInfo } from "../interface/IInfo";
import { Transport} from "./Transport";

export class Plane extends Transport implements IInfo{
    constructor (override name: string,override speed:number){
        super();
        this.type = "Літак";
    }
    info(){
        return "Тип " + this.type + " Назва "+ this.name + " Швидкість: "+ this.speed;
    }
}