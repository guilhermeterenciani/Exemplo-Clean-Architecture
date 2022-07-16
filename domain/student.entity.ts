import crypto from "crypto";
export type StudentProps = {
    nome:string;
    cpf:string;
};

export class Student{
    public props: Required<StudentProps>;
    public readonly id:string;
    constructor(props:StudentProps,id?:string){
        this.id = id || crypto.randomUUID();
        this.props = props;
    }
    get nome(){
        return this.props.nome;
    }
    get cpf(){
        return this.props.cpf;
    }
    toJSON() {
        return{
            id: this.id,
            ...this.props,
        }
    }
};