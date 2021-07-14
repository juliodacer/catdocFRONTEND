import { Puntaje } from "./puntaje";

export class Evaluacion {
    id: number;
    tipo: string;
    createAt: string;
    puntajes: Puntaje[] = []
}
