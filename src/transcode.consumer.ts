import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { TRANSCODE_QUEUE } from './constant';
import { Job } from 'bull';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);
  @Process()
  async transcode(job: Job<unknown>) {
    await this.logger.log(`TranscodeConsumer message ${job.id}`);
    await this.logger.debug('data:', job.data);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    await this.logger.log(`TranscodeConsumer message completed ${job.id}`);

  }
}
