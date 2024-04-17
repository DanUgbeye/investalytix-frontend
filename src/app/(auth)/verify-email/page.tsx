import { Metadata } from "next";
import VerifyEmailScreen from "./screen";

export const metadata: Metadata = {
  title: "Verify Email | Investalytix",
};

export default function VerifyEmailPage() {
  return <VerifyEmailScreen />;
}
