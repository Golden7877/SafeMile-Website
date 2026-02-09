import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Clock } from "lucide-react";

const dispatcherImg = '/attached_assets/generated_images/truck_dispatcher_working.png';

export default function DispatchPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={dispatcherImg}
            alt="Dispatch Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Professional Truck <span className="text-primary">Dispatch Service</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Keep your trucks on the road and generating revenue with our experienced dispatch team. We handle load matching, rate negotiation, and administrative support.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12">
              Get Dispatch Service
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Dispatch Service?</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Our professional dispatchers ensure maximum profitability and efficiency for your fleet.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Fast Load Assignment"
                description="Real-time load matching to minimize downtime between loads"
              />
              <FeatureCard
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Rate Optimization"
                description="Negotiate best rates with brokers and shippers to maximize earnings"
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Expert Team"
                description="Experienced dispatchers with deep industry knowledge"
              />
              <FeatureCard
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="24/7 Support"
                description="Round-the-clock availability for your dispatch needs"
              />
              <FeatureCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Track & Trace"
                description="Real-time tracking and detailed reporting on every load"
              />
              <FeatureCard
                icon={<ArrowRight className="h-8 w-8 text-primary" />}
                title="Regulatory Compliance"
                description="Ensure all loads meet DOT and FMCSA requirements"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Dispatch Pricing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                title="Essential"
                price="3%"
                description="Load assignment only"
                features={["Basic load matching", "Standard support", "Email reports"]}
              />
              <PricingCard 
                title="Professional"
                price="5%"
                description="Most popular"
                features={["Premium load matching", "24/7 phone support", "Weekly reports", "Rate negotiation"]}
                highlighted
              />
              <PricingCard 
                title="Premium"
                price="7%"
                description="Full service dispatch"
                features={["Priority load matching", "24/7 premium support", "Daily reports", "Rate negotiation", "Route optimization", "Driver coordination"]}
              />
            </div>
          </div>
        </section> */}

        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Our Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard value="$2.04" label="Average CPM" sub="Cost per mile achieved" />
              <StatCard value="$2.68" label="Top CPM" sub="Best client performance" />
              <StatCard value="100M" label="Total Gross" sub="Revenue generated for clients" />
              <StatCard value="350+" label="Active Trucks" sub="Currently under dispatch" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Revenue?</h2>
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">Join hundreds of trucking companies that trust SafeMile Compliance for professional dispatch services.</p>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  const yOffset = -80; // adjust if navbar height different
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Start Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="border rounded-xl p-6 bg-white hover:border-primary/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, description, features, highlighted }: { title: string, price: string, description: string, features: string[], highlighted?: boolean }) {
  return (
    <div className={`rounded-xl border overflow-hidden transition-all ${highlighted ? 'border-primary bg-white shadow-lg scale-105' : 'bg-white'}`}>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">of gross per load</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm">
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

function StatCard({ value, label, sub }: { value: string, label: string, sub: string }) {
  return (
    <div className="border rounded-xl p-6 bg-white text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="font-bold mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{sub}</div>
    </div>
  );
}
