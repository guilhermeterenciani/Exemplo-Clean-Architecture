import {Student} from '../domain/student.entity'
import {StudentRepositoryInterface} from '../domain/student.repository'
export class CreateStudentUseCase{
    constructor(private repository:StudentRepositoryInterface){}
    
    async execute(input:StudentEntry){
        const student = new Student(input);
        await this.repository.insert(student);
        return student.toJSON();
    }
}

type StudentEntry = {
    id?:string;
    cpf:string;
    nome:string;
}
