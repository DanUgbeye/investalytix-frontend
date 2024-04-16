import { Metadata } from "next";
import VerifyEmailTokenScreen from "./screen";

export const metadata: Metadata = {
  title: "Verify Email Token | Investalytix",
};

export default function VerifyEmailTokenPage(props: {
  params: { token: string };
}) {
  const {
    params: { token },
  } = props;

  return <VerifyEmailTokenScreen token={token} />;
}
