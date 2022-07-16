import {StudentRepositoryInterface} from '../domain/student.repository'
export class ListStudentUseCase{
    constructor(private repository:StudentRepositoryInterface){}
    async execute():Promise<StudentOutput>{
        const AllStudents = await this.repository.getAll();
        return AllStudents.map(student=>student.toJSON());
    }
}

type StudentOutput = {
    id:string;
    nome:string;
    cpf:string;
}[];