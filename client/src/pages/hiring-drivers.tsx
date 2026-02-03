import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Briefcase, Target, TrendingUp } from "lucide-react";

export default function HiringDriversPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
             <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
             Professional Driver{" "}
              <span className="text-primary">Recruitment Services</span>
            </h1>

            <p className="text-lg text-slate-300 mb-4">
             The success of any fleet starts with its drivers. The right drivers keep
             your trucks running safely, on time, and profitably—while protecting your
             compliance, reputation, and bottom line. We help fleets find, screen, and
             hire qualified drivers who are reliable, compliant, and ready to perform.
             With professional drivers on your team, you reduce accidents, lower
             turnover, improve customer satisfaction, and grow your business with
             confidence.
             </p>

          
            <h3 className="text-white text-lg font-semibold mb-4">
              Let us handle driver hiring—so you can focus on moving your business forward.
            </h3>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold mt-2"
            >
              Hiring Service
            </Button>
          </div>
        </div>

      </section>

      <main className="flex-1">
        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Driver Recruitment Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Candidate Sourcing"
                description="Wide network of qualified driver candidates"
              />
              <ServiceCard 
                icon={<Briefcase className="h-8 w-8 text-primary" />}
                title="Screening & Vetting"
                description="Comprehensive background checks and qualifications verification"
              />
              <ServiceCard 
                icon={<Target className="h-8 w-8 text-primary" />}
                title="Interview Coordination"
                description="Managed interview process and candidate coordination"
              />
              <ServiceCard 
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Onboarding Support"
                description="Complete onboarding assistance for new drivers"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Our Recruitment Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Job posting and advertising",
                "Application screening",
                "Background check coordination",
                "License verification",
                "MVR review",
                "Reference checking",
                "Offer negotiation",
                "Onboarding coordination",
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
            <h2 className="text-4xl font-bold mb-6">Build Your Ideal Team</h2>
            <p className="text-slate-400 mb-8 text-lg">Professional drivers ready to join your fleet.</p>
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
