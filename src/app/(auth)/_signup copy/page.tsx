import { Metadata } from "next";
import SignupScreen from "./screen";

export const metadata: Metadata = {
  title: "Signup | Investalytix",
};

export default function SignupPage() {
  return <SignupScreen />;
}
