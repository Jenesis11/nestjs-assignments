import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('prime/:number')
  checkPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 2) {
      return { error: 'Please provide a positive integer greater than 1.' };
    }

    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  private isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
}
