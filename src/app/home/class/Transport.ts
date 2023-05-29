import { IType } from "../interface/IType";

export abstract class Transport implements IType{
    type!:string;
    name!:string;
    speed!:number;
    abstract info():any;
}