import {CreateStudentUseCase} from './create-student.use-case';
import {InMemoryRepository} from '../infra/db/student-in-memory.repository';

describe('Should create a student',()=>{
    test("Should create a student in memory",async ()=>{
        const inMemoryRepository = new InMemoryRepository();
        const createStudentUseCase = new CreateStudentUseCase(inMemoryRepository);
        const insertedStudent = await createStudentUseCase.execute({nome:"Guilherme",cpf:"123.123.123.12"});
        expect(inMemoryRepository.banco).toHaveLength(1);
        expect(insertedStudent).toStrictEqual({nome:"Guilherme",cpf:"123.123.123.12",id:insertedStudent.id});
    })
})