import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, AlertCircle, BarChart3, Users } from "lucide-react";

const teamImg = '/attached_assets/generated_images/team_of_dispatchers_working.png';

export default function SafetyPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImg} 
            alt="Safety Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Comprehensive <span className="text-primary">Safety Management</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Maintain compliance and reduce liability with our professional safety management services.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Safety Service - $79/mo
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Safety Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceBox 
                title="Compliance Monitoring"
                description="Stay current with all DOT and FMCSA safety regulations"
                icon={<Shield className="h-6 w-6 text-primary" />}
              />
              <ServiceBox 
                title="Driver Training"
                description="Comprehensive safety training programs for your fleet"
                icon={<Users className="h-6 w-6 text-primary" />}
              />
              <ServiceBox 
                title="Incident Investigation"
                description="Professional investigation and documentation of safety incidents"
                icon={<AlertCircle className="h-6 w-6 text-primary" />}
              />
              <ServiceBox 
                title="Safety Reports"
                description="Detailed analytics and safety metrics for your fleet"
                icon={<BarChart3 className="h-6 w-6 text-primary" />}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">What's Included</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Monthly safety audits",
                "Driver safety records management",
                "Safety policy development",
                "Insurance claim support",
                "Safety incident documentation",
                "Regulatory consultation",
                "Safety metrics tracking",
                "Annual training certification",
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
            <h2 className="text-4xl font-bold mb-6">Protect Your Business</h2>
            <p className="text-slate-400 mb-8 text-lg">Safety compliance is essential. Let us handle it for you.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function ServiceBox({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
