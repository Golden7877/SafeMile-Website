import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Briefcase, Shield, TrendingUp } from "lucide-react";

export default function MCServicesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              MC Authority <span className="text-primary">Setup Services</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">We handle everything needed to get your MC authority approved and active.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              MC Setup - $700
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Complete MC Authority Setup</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<FileText className="h-8 w-8 text-primary" />}
                title="Application Filing"
                description="Complete DOT FMCSA MC application preparation and filing"
              />
              <ServiceCard 
                icon={<Briefcase className="h-8 w-8 text-primary" />}
                title="Business Setup"
                description="Assistance with business structure and registration"
              />
              <ServiceCard 
                icon={<Shield className="h-8 w-8 text-primary" />}
                title="Insurance Coordination"
                description="Help obtaining required insurance coverage"
              />
              <ServiceCard 
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Compliance Guidance"
                description="Guidance on compliance requirements and obligations"
              />
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">MC Setup Package Includes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "MC application preparation",
                "FMCSA form completion",
                "Business registration guidance",
                "Insurance requirements review",
                "Safety fitness review",
                "Operating authority activation",
                "Compliance documentation",
                "Post-approval support",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12">Typical Timeline</h2>
            
            <div className="space-y-6 max-w-2xl">
              <TimelineItem 
                step="1"
                title="Initial Consultation"
                description="We review your business and ensure you qualify for MC authority"
              />
              <TimelineItem 
                step="2"
                title="Application Preparation"
                description="Complete all required documents and FMCSA forms"
              />
              <TimelineItem 
                step="3"
                title="Submission"
                description="File your MC application with the FMCSA"
              />
              <TimelineItem 
                step="4"
                title="Processing"
                description="FMCSA reviews and processes your application (30-60 days)"
              />
              <TimelineItem 
                step="5"
                title="Approval"
                description="Receive your MC number and begin operations"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Start Your Trucking Business Today</h2>
            <p className="text-slate-400 mb-8 text-lg">We'll guide you through every step of the MC authority process.</p>
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

function TimelineItem({ step, title, description }: { step: string, title: string, description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
