import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clipboard, FileCheck, Users, Clock } from "lucide-react";

export default function AdministrationPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Administrative <span className="text-primary">Support Services</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Streamlined administrative support to keep your operations running smoothly.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Administration - $25/mo
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Administrative Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<Clipboard className="h-8 w-8 text-primary" />}
                title="Document Management"
                description="Organization and management of all business documents"
              />
              <ServiceCard 
                icon={<FileCheck className="h-8 w-8 text-primary" />}
                title="Compliance Filing"
                description="Timely filing of all required regulatory documents"
              />
              <ServiceCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Customer Support"
                description="Professional customer communication and support"
              />
              <ServiceCard 
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="Scheduling"
                description="Appointment and fleet scheduling management"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Administrative Support Includes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Document filing and organization",
                "Email management",
                "Schedule coordination",
                "Vendor management",
                "Insurance documentation",
                "Contract management",
                "Meeting scheduling",
                "Administrative reporting",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Focus on Growing Your Business</h2>
            <p className="text-slate-400 mb-8 text-lg">Let us handle the administrative details.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
