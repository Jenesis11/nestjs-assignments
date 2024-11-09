import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 1) {
      return { sequence: [] };
    }
    const sequence = this.calculateFibonacci(num);
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, n);
  }
}
