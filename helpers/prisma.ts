import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

// this file enables us to import prisma from this file
// rather than creating a new instance of PrismaClient every
// time we want to use it