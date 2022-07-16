import { Student } from "../../domain/student.entity";
import { StudentRepositoryInterface } from "../../domain/student.repository";

export class InMemoryRepository implements StudentRepositoryInterface{
    private _banco:Student[] = [];
    async insert(student: Student): Promise<void> {
        this._banco.push(student);
    }
    getAll(): Student[] {
        return this._banco;
    }
    get banco(){
        return this._banco;
    }
}