"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar/index"

export function NavbarWrapper() {
  const pathname = usePathname()
  const isRootRoute = pathname === "/"

  if (isRootRoute) {
    return null
  }

  return <Navbar />
}
