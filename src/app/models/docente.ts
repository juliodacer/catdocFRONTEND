export class Docente {
    id?: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    createAt: string;
    //fotoHashCode: number;

    constructor(name: string, surname: string,email: string, password: string){
        this.name= name;
        this.surname=surname;
        this.email=email;
        this.password=password;
    }

}
