import type { ComponentPropsWithoutRef } from "react";

type SiteContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Shared horizontal page constraint for future route and feature components.
 */
export function SiteContainer({ className, ...props }: SiteContainerProps) {
  return (
    <div
      className={["mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
