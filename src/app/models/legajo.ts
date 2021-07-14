import { Docente } from "./docente";
import { Evaluacion } from "./evaluacion";

export class Legajo {
    id: number;
    nombre: string;
    createAt: string;
    docentes: Docente[] = [];
    evaluaciones: Evaluacion[] = [];
}
