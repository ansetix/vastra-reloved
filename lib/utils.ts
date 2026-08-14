/** Joins conditional class names without introducing a styling dependency. */
export function cn(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}
