import { Generic } from "./generic";

export class Docente implements Generic {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    createAt: string;
    //fotoHashCode: number;
}
