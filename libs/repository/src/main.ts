import { Global, Module } from '@nestjs/common';
import { RDBMSConnectionManager } from './rdbms/manager';
import { UserRepository } from './rdbms/user/user.repository';

const repositoryList = [RDBMSConnectionManager, UserRepository];

@Global()
@Module({
    providers: repositoryList,
    exports: repositoryList,
})
export class RepositoryModule {}
