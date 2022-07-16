import { Student, StudentProps } from "./student.entity"
describe('Teste entidade estudante', ()=>{

  test('Contructor',()=>{
    const studentAux:StudentProps = {
      nome:'GUilherme',
      cpf:'123',
    }
    const student = new Student(studentAux);
    expect(student.id).toBeDefined();
    expect(student.props).toStrictEqual(studentAux);
  })

  test("should trasform Student in Json",()=>{
    const id:string = '123456';
    const studentAux:StudentProps = {
      nome:'GUilherme',
      cpf:'123',
    }

    const student:Student  = new Student(studentAux,id);
    expect(student.toJSON()).toStrictEqual({
      id:id,
      nome:studentAux.nome,
      cpf:studentAux.cpf,
    })

  })
})
