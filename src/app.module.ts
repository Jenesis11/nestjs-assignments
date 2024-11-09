import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentsModule } from './assignments/assignments.module';

@Module({
  imports: [AssignmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
