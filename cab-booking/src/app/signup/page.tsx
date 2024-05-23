import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignUp } from "@/components/Auth";
import Password from "@/utils/password";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function SignUpPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  async function createUser(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;

    const user: any = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw Error("User does exist");
    }

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      throw Error("Password and Retype Password don't match");
    }

    const { hashedPassword, salt } = Password.saltAndHash(password);

    await prisma.user.create({
      data: {
        email,
        hashedPassword,
        salt,
      },
    });

    redirect("/");
  }

  return (
    <main className="pt-40">
      <div className="flex justify-center">
        <SignUp create={createUser} />
      </div>
    </main>
  );
}