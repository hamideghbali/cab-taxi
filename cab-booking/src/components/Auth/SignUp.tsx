"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SignUp({ create }: any) {
  return (
    <form className="flex flex-col gap-5" action={create}>
      <Input placeholder="Email" name="email" />
      <Input placeholder="Password" type="password" name="password" />
      <Input
        placeholder="Retype Password"
        type="password"
        name="confirmPassword"
      />
      <Button type="submit">Create Account</Button>
    </form>
  );
}