import { IInfo } from "../interface/IInfo";
import { Transport} from "./Transport";

export class Helicopter extends Transport implements IInfo{
    constructor (override name: string,override speed:number){
        super();
        this.type = "Гелікоптер";
    }
    info(){
        return "Тип " + this.type + " Назва "+ this.name + " Швидкість: "+ this.speed;
    }
}