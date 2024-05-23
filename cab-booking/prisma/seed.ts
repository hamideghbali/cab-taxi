import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const dummyUser = await prisma.user.upsert({
    where: { email: 'hardinegh@gmail.com' },
    update: {},
    create: {
      email: 'hardinegh@gmail.com',
      name: 'Hamid',
      hashedPassword: '75fa81faa5bbd4761a405516043b26f5dc2ced0bb622517df043c14b34580105b61d6ec425dc101c15a35648b401846c7f57942e1078f1493eb55e22ea4acb45',
      salt: '4bf030c5e76deb817dc2751c61e1e867'
    },
  })
  console.log({ dummyUser })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })