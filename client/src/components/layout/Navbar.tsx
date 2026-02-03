import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Truck } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  const topLinks = [
    { name: "Dispatch", href: "/dispatch" },
    { name: "Safety", href: "/safety" },
    { name: "Logbook", href: "/logbook" },
    { name: "IFTA", href: "/ifta" },
    { name: "Accounting", href: "/accounting" },
    { name: "Administration", href: "/administration" },
    { name: "Hiring drivers", href: "/hiring-drivers" },
    // { name: "TMS", href: "/tms" },
    { name: "MC Services", href: "/mc-services" },
    { name: "About Us", href: "/about_us" },
  ];

  const mainLinks: { name: string; href: string }[] = [];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      {/* Top Banner (Mini Links) */}
      <div className="border-b hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex">
            {topLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-medium px-4 py-2 border-r last:border-r-0 hover:text-primary transition-colors ${isActive ? 'text-primary border-b-2 border-b-primary bg-slate-50' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="text-right py-1">
            <div className="text-sm font-bold text-slate-900">Number</div>
            <div className="text-[10px] text-slate-400 -mt-1">Feel free to call us anytime</div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b">
        <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-1">
               {/* <div className="bg-primary p-1 rounded">
                 <Truck className="h-4 w-4 text-white" />
               </div> */}
               <div className="h-13 w-40">
                <img src="Logo.png" alt="logo"></img>
               </div>
               {/* <div className="text-xl font-black tracking-tighter uppercase italic">
                 Trucking<span className="text-primary">42</span>
               </div> */}
            </Link>
          </div>

          {/* Desktop Main Links */}
          <div className="hidden md:flex items-center gap-12">
            {mainLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-900 hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              );
            })}
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
                  <Link href="/" className="text-lg font-bold">Home</Link>
                  {mainLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-4">
                    <p className="font-bold text-sm uppercase text-slate-400">Services</p>
                    {topLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="block text-sm font-medium">
                        {link.name}
                      </Link>
                    ))}
                    <div className="pt-4">
                      <p className="text-sm font-bold mb-2">Number</p>
                      <Button className="w-full bg-primary text-white font-bold">Contact Us</Button>
                    </div>
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
