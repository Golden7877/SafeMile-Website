import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileCheck, Clock, BarChart3 } from "lucide-react";

export default function LogbookPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Electronic Logbook <span className="text-primary">Management</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Simplify HOS compliance with our comprehensive logbook monitoring service.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Logbook Service - $10/mo
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Electronic Logbook Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
                <FileCheck className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FMCSA Compliant</h3>
                <p className="text-muted-foreground">Fully compliant with federal electronic logbook regulations</p>
              </div>
              
              <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">24/7 monitoring of HOS compliance and violations</p>
              </div>
              
              <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
                <BarChart3 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
                <p className="text-muted-foreground">Detailed reports on driver hours and compliance metrics</p>
              </div>
              
              <div className="border rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Audit Ready</h3>
                <p className="text-muted-foreground">Documentation ready for roadside inspections and audits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Automatic logbook entries",
                "Driver app integration",
                "Real-time HOS alerts",
                "Violation reporting",
                "Monthly reporting",
                "Inspection preparation",
                "Driver coaching tools",
                "Fleet dashboard access",
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
            <h2 className="text-4xl font-bold mb-6">Simplify Compliance Today</h2>
            <p className="text-slate-400 mb-8 text-lg">Stay HOS compliant with minimal effort.</p>
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
