import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, BarChart3, Route, Users } from "lucide-react";

const tmsImg = '/attached_assets/generated_images/tms_software_dashboard.png';

export default function TMSPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={tmsImg} 
            alt="TMS Software" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Advanced TMS <span className="text-primary">Software Platform</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Powerful transportation management system designed for modern trucking companies.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Get TMS Access
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">TMS Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<Route className="h-8 w-8 text-primary" />}
                title="Route Planning"
                description="Optimize routes for maximum efficiency and reduced fuel costs"
              />
              <ServiceCard 
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Real-Time Tracking"
                description="Live tracking of all trucks and loads in your fleet"
              />
              <ServiceCard 
                icon={<BarChart3 className="h-8 w-8 text-primary" />}
                title="Analytics & Reporting"
                description="Comprehensive analytics on fleet performance and profitability"
              />
              <ServiceCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Collaboration Tools"
                description="Seamless communication between dispatch, drivers, and office"
              />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Platform Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Automated load assignment",
                "Real-time tracking & alerts",
                "Driver mobile app included",
                "Integrated communication",
                "Revenue optimization",
                "Fuel tracking",
                "Maintenance scheduling",
                "24/7 customer support",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12">TMS Pricing Plans</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                title="Starter"
                price="$499"
                period="monthly"
                features={["Up to 10 trucks", "Basic reporting", "Email support"]}
              />
              <PricingCard 
                title="Professional"
                price="$999"
                period="monthly"
                features={["Up to 50 trucks", "Advanced analytics", "24/7 phone support", "API access"]}
                highlighted
              />
              <PricingCard 
                title="Enterprise"
                price="Custom"
                period="pricing"
                features={["Unlimited trucks", "Custom features", "Dedicated support", "White label option"]}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Transform Your Operations</h2>
            <p className="text-slate-400 mb-8 text-lg">Get started with our industry-leading TMS platform.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Demo
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

function PricingCard({ title, price, period, features, highlighted }: { title: string, price: string, period: string, features: string[], highlighted?: boolean }) {
  return (
    <div className={`rounded-xl border overflow-hidden transition-all ${highlighted ? 'border-primary bg-white shadow-lg scale-105' : 'bg-white'}`}>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">/{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <Button className={`w-full ${highlighted ? 'bg-primary hover:bg-primary/90 text-white' : 'border'}`}>
          Choose Plan
        </Button>
      </div>
    </div>
  );
}
