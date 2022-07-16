import {CreateStudentUseCase} from './create-student.use-case';
import {ListStudentUseCase} from './list-student.use-case';
import {InMemoryRepository} from '../infra/db/student-in-memory.repository';

describe('Test Use Case List Students',()=>{
    test("Should list Students", async ()=>{
        const inMemoryRepository = new InMemoryRepository();
        const createStudentUseCase = new CreateStudentUseCase(inMemoryRepository);
        const insertedStudent1 = await createStudentUseCase.execute({nome:"Guilherme",cpf:"123.123.123.12"});
        const insertedStudent2 = await createStudentUseCase.execute({nome:"Guilherme",cpf:"123.123.123.12"});
        const listStudentUseCase = new ListStudentUseCase(inMemoryRepository);
        const listInsertedStudents = await listStudentUseCase.execute();
        expect(inMemoryRepository.banco).toHaveLength(2);
        expect(listInsertedStudents).toStrictEqual([{nome:"Guilherme",cpf:"123.123.123.12",id:insertedStudent1.id},{nome:"Guilherme",cpf:"123.123.123.12",id:insertedStudent2.id}]);
    });
})