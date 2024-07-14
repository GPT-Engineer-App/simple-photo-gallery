'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Package2 } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-5 lg:gap-6 text-lg font-medium md:text-sm">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};