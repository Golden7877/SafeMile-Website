import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle, Send } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact us</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Visit one of our SafeMile Compliance hubs or speak with our business. Contact us today!
            </p>

            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Call Us</span>
                <span className="text-lg font-semibold">+1 (909) 901-6499</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Email Us</span>
                <span className="text-lg font-semibold">info@safemilecompliance.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">Want to talk with us?</h3>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surname">Surname</Label>
                  <Input id="surname" placeholder="Surname" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Phone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  I'm not a robot
                </label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* FULL WIDTH MODERN FOOTER */}
      <footer className="bg-gradient-to-r from-slate-900 to-black text-white py-2 w-full text-white">
        <div className="w-full px-6 md:px-16 lg:px-24 py-16">
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo + About */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/Logo.png"
                  alt="SafeMile Compliance"
                  className="h-14 w-auto"
                />
                {/* <div>
                  <h2 className="text-xl font-bold">SafeMile Compliance</h2>
                  <p className="text-xs text-white/50">
                    Where Reliability Meets Innovation
                  </p>
                </div> */}
              </div>

              <p className="text-sm text-white/60 max-w-sm">
                We provide reliable dispatch, compliance, driver hiring, and fleet
                management solutions to keep your trucking business safe, efficient,
                and profitable.
              </p>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-lg mb-5">Our Services</h3>

              <ul className="space-y-3 text-sm">
                {[
                  "Dispatch",
                  "Driver Hiring",
                  "Compliance Management",
                  "Reporting & Management",
                  "About Us",
                  "FAQ",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-primary transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Quick */}
            <div>
              <h3 className="font-semibold text-lg mb-5">Contact</h3>

              <ul className="space-y-3 text-sm text-white/70">
                <li>📞 +1 (909) 901-6499</li>
                <li>📧 support@safemile.com</li>
                <li>📍 United States</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10">
          <div className="w-full px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <div className="flex gap-6 mb-3 md:mb-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            </div>
            <p>© 2026 SafeMile Compliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </footer>
  );
}

function SocialIcon({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className={`p-3 bg-slate-50 rounded-full group-hover:bg-slate-100 transition-colors ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs font-medium text-slate-600">{label}</span>
    </div>
  )
}
