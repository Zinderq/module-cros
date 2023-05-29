import { IType } from "../interface/IType";

export abstract class Base implements IType{
    type!:string;
    capacity!:number;
    abstract info():any;
}