import AuthenticatedRoute from "@/components/layout/authenticated-route";
import { PropsWithChildren } from "react";

export default function AuthenticatedRoutesLayout(props: PropsWithChildren) {
  const { children } = props;
  
  return <AuthenticatedRoute>{children}</AuthenticatedRoute>;
}
