import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
/* 
    create a record in the User table
    const user = await prisma.user.create({
        data: {
            name: "Dominique",
            email: "test@email.com",
        },
    });
    console.log(user);
----------------------------------------
    use findMany method to retrieve all records in User table
    const users = await prisma.user.findMany();
    console.log(users)
----------------------------------------
    create a relational record in the User and Posts table
    const user = await prisma.user.create({
        data: {
            name: "User with Post",
            email: "post@email.com",
            posts: {
                create: {
                    title: "Hello, world!",
                },
            },
        },
    });
    console.log(user);
----------------------------------------
    use findMany method to retrieve all records in User table; this time including related Posts records
    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
    console.dir(usersWithPosts, { depth: null });
----------------------------------------
*/
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
