"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 text-sm">
      <Link
        href="/catalogue"
        className={
          pathname === "/catalogue"
            ? "text-primary-foreground font-medium"
            : "text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        }
      >
        Catalogue
      </Link>

      <Link
        href="/reservations"
        className={
          pathname === "/reservations"
            ? "text-primary-foreground font-medium"
            : "text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        }
      >
        Réservations
      </Link>
    </nav>
  );
};

export default Navigation;
