import { InMemoryRepository } from "./student-in-memory.repository";
import {Student,StudentProps} from '../../domain/student.entity';

describe('In memory Repository Insert Test',()=>{
    test("Should create a student in memory",()=>{
        const inMemoryRepository = new InMemoryRepository();
        const studentToInsert:StudentProps={
            nome:"Guilherme Figueiredo Terenciani",
            cpf:"278.459.782-12",
        }
        const toInsert = new Student(studentToInsert);
        inMemoryRepository.insert(toInsert);
        expect(inMemoryRepository.banco).toHaveLength(1);
        expect(inMemoryRepository.banco).toStrictEqual([toInsert]);
    });
    test("Should list all student in memory",()=>{
        const inMemoryRepository = new InMemoryRepository();
        const studentToInsert:StudentProps={
            nome:"Guilherme Figueiredo Terenciani",
            cpf:"278.459.782-12",
        }
        const toInsert1 = new Student(studentToInsert);
        const toInsert2 = new Student(studentToInsert);
        inMemoryRepository.insert(toInsert1);
        inMemoryRepository.insert(toInsert2);
        expect(inMemoryRepository.banco).toHaveLength(2);
        expect(inMemoryRepository.banco).toStrictEqual([toInsert1,toInsert2]);
    });
})