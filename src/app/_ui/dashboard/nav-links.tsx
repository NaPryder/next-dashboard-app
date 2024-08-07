'use client';
import { HomeIcon, DocumentDuplicateIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, SVGProps } from "react";

interface LinkPath {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}

const links: LinkPath[] = [
  { name: 'Overview', href: '/', icon: HomeIcon },
  { name: 'Overview2', href: '/dashboard', icon: HomeIcon },
  { name: 'Financial', href: '/dashboard/financial', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}