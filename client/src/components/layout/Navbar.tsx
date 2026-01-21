import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Truck } from "lucide-react";

export function Navbar() {
  const topLinks = [
    { name: "Dispatch", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Logbook", href: "#" },
    { name: "IFTA", href: "#" },
    { name: "Accounting", href: "#" },
    { name: "Administration", href: "#" },
    { name: "Hiring drivers", href: "#" },
    { name: "TMS", href: "#" },
    { name: "MC Services", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const mainLinks = [
    { name: "Services", href: "#services" },
    { name: "Softwares", href: "#software" },
    { name: "Trainings", href: "#trainings" },
    { name: "Programs", href: "#programs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      {/* Top Banner (Mini Links) */}
      <div className="border-b hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex">
            {topLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-medium px-4 py-2 border-r last:border-r-0 hover:text-primary transition-colors ${i === 0 ? 'text-primary border-b-2 border-b-primary' : 'text-slate-600'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-right py-1">
            <div className="text-sm font-bold text-slate-900">+1 (321) 888-3347</div>
            <div className="text-[10px] text-slate-400 -mt-1">Feel free to call us anytime</div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b">
        <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                 <div className="bg-primary p-1 rounded">
                   <Truck className="h-4 w-4 text-white" />
                 </div>
                 <div className="text-xl font-black tracking-tighter uppercase italic">
                   Trucking<span className="text-primary">42</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Desktop Main Links */}
          <div className="hidden md:flex items-center gap-12">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-900 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 text-base">
              Contact Us
            </Button>
            
            {/* Mobile Nav */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {mainLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t">
                    <p className="text-sm font-bold mb-2">+1 (321) 888-3347</p>
                    <Button className="w-full bg-primary text-white font-bold">Contact Us</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
