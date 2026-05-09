export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function navClickHandler(href: string, extra?: () => void) {
  return (e: React.MouseEvent) => {
    // Only intercept if we're navigating to the home page AND we're already ON the home page
    if (href === "/" && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If it's an anchor on the same page (e.g., #contact), we might want to handle it too,
    // but the main issue is the home link navigation.
    extra?.();
  };
}
