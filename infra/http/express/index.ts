import express, { Express, Request, Response} from "express";
import { InMemoryRepository } from "../../db/student-in-memory.repository";
import { CreateStudentUseCase } from "../../../application/create-student.use-case";
import { ListStudentUseCase } from "../../../application/list-student.use-case";

const app:Express = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const StudentRepository = new InMemoryRepository();

app.get("/student",async (req:Request,res:Response)=>{
    const listStudentUseCase = new ListStudentUseCase(StudentRepository);
    const output = await listStudentUseCase.execute();
    res.json(output);
});

app.post('/student',async (req:Request,res:Response)=>{
    const createStudentUseCase = new CreateStudentUseCase(StudentRepository);
    const output = await createStudentUseCase.execute(req.body);
    res.status(201).json(output);
});

app.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
});