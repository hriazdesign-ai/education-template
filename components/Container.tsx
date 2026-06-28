import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { layoutMaxWidth, layoutPadding } from "@/lib/layout";

export type ContainerSize = "prose" | "content" | "layout";

type ContainerProps = {
  size?: ContainerSize;
  pad?: boolean;
  className?: string;
  as?: ElementType;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;

const sizeClasses: Record<ContainerSize, string> = {
  prose: "max-w-[800px]",
  content: "max-w-[1100px]",
  layout: layoutMaxWidth,
};

export { layoutPadding as containerPadding };

export default function Container({
  size = "layout",
  pad = true,
  className = "",
  as: Component = "div",
  children,
  ...rest
}: ContainerProps) {
  const paddingClass = pad ? layoutPadding : "";

  return (
    <Component
      {...rest}
      className={`mx-auto w-full ${sizeClasses[size]} ${paddingClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
