//Exercise 5: Basic Calculator
class Calculator {
  // Validate if the inputs are numbers
  private validateNumber(input: any): boolean {
    return typeof input === "number" && !isNaN(input);
  }

  // Addition method
  add(a: any, b: any): number | string {
    if (this.validateNumber(a) && this.validateNumber(b)) {
      return a + b;
    }
    return "Invalid input, please provide valid numbers";
  }

  // Subtraction method
  subtract(a: any, b: any): number | string {
    if (this.validateNumber(a) && this.validateNumber(b)) {
      return a - b;
    }
    return "Invalid input, please provide valid numbers";
  }

  // Multiplication method
  multiply(a: any, b: any): number | string {
    if (this.validateNumber(a) && this.validateNumber(b)) {
      return a * b;
    }
    return "Invalid input, please provide valid numbers";
  }

  // Division method
  divide(a: any, b: any): number | string {
    if (this.validateNumber(a) && this.validateNumber(b)) {
      if (b === 0) {
        return "Division by zero is not allowed";
      }
      return a / b;
    }
    return "Invalid input, please provide valid numbers";
  }
}
