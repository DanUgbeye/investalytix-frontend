import { cn } from "@/lib/utils";
import { SVGAttributes } from "react";
import { ImSpinner8 } from "react-icons/im";

export interface SpinnerProps extends SVGAttributes<SVGElement> {}

export default function Spinner(props: SpinnerProps) {
  const { className, strokeWidth, ...rest } = props;

  return (
    <ImSpinner8 {...rest} className={cn(" h-6 w-6 animate-spin text-primary-base ", className)} />
  );
}
