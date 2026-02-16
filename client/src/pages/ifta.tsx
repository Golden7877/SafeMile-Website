import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Calculator, TrendingUp } from "lucide-react";

export default function IFTAPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              IFTA Reporting <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Accurate quarterly fuel tax reporting across all states.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              IFTA Service - $30/quarter
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">IFTA Compliance Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<Calculator className="h-8 w-8 text-primary" />}
                title="Quarterly Calculations"
                description="Accurate fuel tax calculations for all jurisdictions"
              />
              <ServiceCard 
                icon={<FileText className="h-8 w-8 text-primary" />}
                title="Report Generation"
                description="Complete IFTA quarterly reports ready for filing"
              />
              <ServiceCard 
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Audit Support"
                description="Documentation and support for IFTA audits"
              />
              <ServiceCard 
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Compliance Review"
                description="Ensure all fuel tax obligations are met"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">What We Handle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Quarterly fuel tax calculations",
                "Multi-state reporting",
                "Refund optimization",
                "Audit preparation",
                "Form 2290 preparation",
                "License renewals",
                "Compliance documentation",
                "Year-round support",
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
            <h2 className="text-4xl font-bold mb-6">Never Miss a Filing Deadline</h2>
            <p className="text-slate-400 mb-8 text-lg">We handle all your quarterly IFTA obligations.</p>
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

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
