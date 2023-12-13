import { PrismaClient } from '@prisma/client';

async function seed() {
    const admin = {
        userId: '9ae2ecbb-a4de-49f8-aa79-ff1a2ec9f2e3',
        loginId: 'system',
        name: 'system',
        loginType: 'system',
    };
    const prisma = new PrismaClient();
    prisma.$queryRaw`select 1`;
    console.log('Seed Code 추가');

    await prisma.user.create({ data: { ...admin, loginType: 'system', passwdEnc: '', passwdSalt: '' } });
    console.log('admin 계정 추가 완료');
}

seed();
