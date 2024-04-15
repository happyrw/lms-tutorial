const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.deleteMany()
    console.log("Deleted")
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" }
      ]
    });
    console.log("Seed successful");
  } catch (error) {
    console.error("Error seeding the database", error);
  } finally {
    await database.$disconnect();
  }
}

main();
