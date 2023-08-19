export interface Person {
  name: string;
  age: number;
}

export interface Student extends Person {
  id: string;
  new: (name: string, age: number, id: string) => Student;
}
