import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      return { error: 'Please provide a non-negative integer value for the number.' };
    }

    const factorial = this.getFactorial(num);
    return { factorial };
  }

  private getFactorial(n: number): number {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
