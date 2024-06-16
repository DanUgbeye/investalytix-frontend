import { Metadata } from "next";
import LoginScreen from "./screen";

export const metadata: Metadata = {
  title: "Login | Investalytix",
};

export default function LoginPage() {
  return <LoginScreen />;
}
