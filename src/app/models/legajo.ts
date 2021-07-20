import { Docente } from "./docente";
import { Evaluacion } from "./evaluacion";
import { Generic } from "./generic";

export class Legajo implements Generic{
    id: number;
    nombre: string;
    documentos: string;
    createAt: string;
}
