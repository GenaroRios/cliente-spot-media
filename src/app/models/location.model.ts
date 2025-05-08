import { Servicio } from "./servicio.model";

export interface Location{
    id: number;
    name: string;
    products: Servicio[]; 
}