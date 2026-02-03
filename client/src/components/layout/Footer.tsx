import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Our contacts</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Visit one of our SafeMile Compliance hubs or speak with our business. Contact us today!
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Call Us</span>
                <span className="text-lg font-semibold">+1 (555) 123-4567</span>
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

        <div className="border-t pt-10">
          <h4 className="font-bold mb-6">Connect With Us</h4>
          <p className="text-sm text-muted-foreground mb-6">Connect with our social and the distinct trucking social media.</p>
          
          <div className="flex flex-wrap gap-8">
            <SocialIcon icon={Youtube} label="Youtube" color="text-red-600" />
            <SocialIcon icon={MessageCircle} label="Whatsapp" color="text-green-500" />
            <SocialIcon icon={Send} label="Telegram" color="text-blue-400" />
            <SocialIcon icon={Facebook} label="Facebook" color="text-blue-600" />
            <SocialIcon icon={Instagram} label="Instagram" color="text-pink-600" />
            <SocialIcon icon={Linkedin} label="LinkedIn" color="text-blue-700" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-xs text-muted-foreground border-t pt-8">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#">Disclaimer</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
            <p>© 2026 SafeMile Compliance. All rights reserved.</p>
          </div>
        </div>
      </div>
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
