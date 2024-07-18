import { Metadata } from "next";
import OTPScreen from "./screen";

export const metadata: Metadata = {
  title: "Confirm OTP | Investalytix",
};

export default function OTPPage() {
  return <OTPScreen />;
}
