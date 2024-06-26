//Exercise 4: Classes
// 1. Create a Person class with name and age properties. Implement a method to return the person's name.
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  // 2. Add a private property socialSecurityNumber to the Person class and a method to get the age.
  private socialSecurityNumber: string;

  setSocialSecurityNumber(ssn: string): void {
    this.socialSecurityNumber = ssn;
  }

  getAge(): number {
    return this.age;
  }
}
