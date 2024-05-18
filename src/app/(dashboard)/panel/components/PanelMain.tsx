"use client";

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import * as React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DashboardIcon } from "@radix-ui/react-icons";
import { AccountSwitcher } from "./account-switcher";
import { Nav } from "./nav";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
  children: React.ReactNode;
}

export default function PanelMain({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize = 30,
  accounts,
  children,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const handleCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
      collapsed
    )}`;
  };

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => handleCollapse(true)}
          onExpand={() => handleCollapse(false)}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dasboard",
                label: "",
                href: "/panel",
                icon: DashboardIcon,
              },
              {
                title: "Orders",
                label: "20",
                icon: File,
                href: "/panel/orders",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <>{children}</>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
