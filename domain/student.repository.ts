import { Student} from "./student.entity";

export interface StudentRepositoryInterface{
    insert(student:Student):Promise<void>;
    getAll():Student[];
}