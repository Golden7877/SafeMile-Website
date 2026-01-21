import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export function Navbar() {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Software", href: "#software" },
    { name: "Trainings", href: "#trainings" },
    { name: "Programs", href: "#programs" },
    { name: "Blog", href: "#blog" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="text-2xl font-bold tracking-tighter text-foreground flex items-center gap-1">
            <span className="text-primary text-3xl">T</span>rucking<span className="text-primary">42</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            Contact Us
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-primary text-white">Contact Us</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
