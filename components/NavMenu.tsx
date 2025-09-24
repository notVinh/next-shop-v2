"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const contactUs: {
  title: string;
  href: string;
  content: string;
  description: string;
}[] = [
  {
    title: "Store Address",
    href: "/docs/primitives/alert-dialog",
    content: "41 Mai Duong, An Nhon, Binh Dinh",
    description: "Visit directly to our store for the best experience",
  },
  {
    title: "Tel",
    href: "/docs/primitives/alert-dialog",
    content: "0965898429",
    description: "Call for us to help",
  },

  {
    title: "Email",
    href: "/docs/primitives/alert-dialog",
    content: "vnashieshop@gmail.com",
    description: "Send mail for your request to us",
  },

  {
    title: "Facebook",
    href: "/docs/primitives/alert-dialog",
    content: "Facebook.com/nashieshop",
    description: "Connect to my social network with us",
  },

  {
    title: "Online support",
    href: "/docs/primitives/alert-dialog",
    content: "Live Chat",
    description: "My Helping bot alway answer your question quickly",
  },

  {
    title: "FAQ - Frequently Asked Questions)",
    href: "/docs/primitives/alert-dialog",
    content: "Read our FAQ carefully to most experience for you",
    description: "My Helping bot alway answer your question quickly",
  },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/docs/primitives/alert-dialog",
    description:
      "T-shirts, Shirts, Polo, Hoodie & Sweater, Croptop, Sweaters,...",
  },
  {
    title: "Bottoms",
    href: "/docs/primitives/hover-card",
    description: "Jeans, Kaki, Trousers, Short, Jogger,...",
  },
  {
    title: "Outerwears",
    href: "/docs/primitives/progress",
    description: "Leather jackets, Windbreakers, Blazer, Denim,...",
  },
  {
    title: "Shoes",
    href: "/docs/primitives/scroll-area",
    description: "Sneaker, Boots, Sandar,...",
  },
  {
    title: "Accessories",
    href: "/docs/primitives/tabs",
    description: "Ring, Bag, Hat, Glasses, Watch,...",
  },
  {
    title: "Collection",
    href: "/docs/primitives/tooltip",
    description: "We choose for you.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between">
        <NavigationMenuItem className="w-1/3">
          <NavigationMenuTrigger className="font-semibold text-gray-600">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <div className="flex flex-row w-[400px] gap-3 p-4 md:w-[500px]">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        className="w-10 h-10"
                        src={"/logo.png"}
                        alt="logo"
                        width={10}
                        height={10}
                      ></Image>

                      <div className="mb-2 mt-4 text-lg font-bold">
                        VNASHIES
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Difference is you.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                <div>
                  <ListItem href="/docs" title="Introduction">
                    We are confident to bring you something new but will always
                    be top fashion.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Shopping">
                    To help you reach the top fashion.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Legit">
                    We always put prestige first.
                  </ListItem>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-1/3">
          <NavigationMenuTrigger className="font-semibold text-gray-600">
            Contact Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {contactUs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.content}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-1/3">
          <NavigationMenuTrigger className="font-semibold text-gray-600">
            Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem className="w-1/3 px-10 bg-black">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="font-semibold text-gray-600">
              Track Order
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
