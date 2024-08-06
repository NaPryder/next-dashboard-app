import prisma from "@/lib/prisma";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().min(5),
  password: z.string(),
});

export async function loginAction(prevState: any, formData: FormData) {
  console.log("formData :>> ", formData);
  console.log("prisma :>> ", prisma);
  try {
    // const email = formData.get("email");
    // const password = formData.get("password");

    const { email, password } = Object.fromEntries(formData);
    // validation
    loginSchema.parse({ email, password });

    console.log("email :>> ", email);

    console.log("password :>> ", password);

    const user = await prisma.user.findUnique({
      where: {
        email: email?.toString(),
      },
      select: {
        email: true,
        password: true,
      },
    });

    console.log("found user :>> ", user);
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.issues);
      console.log(err.cause);
      return { message: err.issues.toString() };
    }
  }
  return { message: "Pass" };
}

export async function registerAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Sign up");
  console.log("email :>> ", email);
  console.log("password :>> ", password);
}
