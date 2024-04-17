import { Metadata } from "next";
import ForgotPasswordScreen from "./screen";

export const metadata: Metadata = {
  title: "Forgot Password | Investalytix",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordScreen />;
}
