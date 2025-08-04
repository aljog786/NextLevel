"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
}
