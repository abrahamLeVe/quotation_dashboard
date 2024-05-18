"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon:
      | LucideIcon
      | React.ForwardRefExoticComponent<
          IconProps & React.RefAttributes<SVGSVGElement>
        >;
    href?: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathname = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="relative h-9 w-9"
                  variant={pathname === link.href ? "default" : "ghost"}
                >
                  <Link
                    href={link.href || "#"}
                    className="absolute inset-0"
                  ></Link>
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={index}
              variant={pathname === link.href ? "default" : "ghost"}
              className="justify-start relative"
              size="sm"
            >
              <Link href={link.href || "#"} className="absolute inset-0"></Link>
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto dark:text-background dark:text-white pl-2"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Button>
          )
        )}
      </nav>
    </div>
  );
}
