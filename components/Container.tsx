import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

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
  layout: "max-w-[1440px]",
};

export default function Container({
  size = "layout",
  pad = true,
  className = "",
  as: Component = "div",
  children,
  ...rest
}: ContainerProps) {
  const paddingClass = pad ? "px-5 min-[768px]:px-8" : "";

  return (
    <Component
      {...rest}
      className={`mx-auto w-full ${sizeClasses[size]} ${paddingClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
