import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, CheckCircle2, Zap, TrendingUp, Users, Clock } from "lucide-react";

const tmsImg = '/attached_assets/generated_images/tms_software_dashboard.png';

export default function SoftwarePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={tmsImg} 
            alt="Software Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              SafeMile Compliance <span className="text-primary">Software Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Streamline your trucking operations with our proprietary software suite. From TMS to ELD, we've got everything you need to run your fleet efficiently.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12">
              Explore Our Software
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Software Products Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">Our Software Solutions</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Comprehensive tools designed to optimize every aspect of your trucking business.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SoftwareProductCard 
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="TMS" 
                description="Transportation Management System"
                badge="Popular"
                features={["Load optimization", "Real-time tracking", "Route planning"]}
              />
              <SoftwareProductCard 
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Dispatch" 
                description="Efficient load planning"
                features={["Smart load assignment", "Rate optimization", "Driver communication"]}
              />
              <SoftwareProductCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Drivers" 
                description="Driver mobile application"
                features={["Mobile app", "Job management", "Earnings tracking"]}
              />
              <SoftwareProductCard 
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="Accounting" 
                description="Financial tracking made easy"
                features={["Invoice management", "Expense tracking", "Reports"]}
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border flex flex-col justify-between h-64">
                <div>
                   <h3 className="font-bold text-lg mb-2">ELD</h3>
                   <p className="text-muted-foreground text-sm">Electronic Logging Device solutions compliant with FMCSA regulations. Automatic HOS tracking for full compliance.</p>
                </div>
                 <Button className="w-fit bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
               <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col justify-center relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="font-bold text-lg mb-2">Investments</h3>
                   <p className="text-slate-300 text-sm mb-4">Invest in the future of logistics and grow your business with SafeMile Compliance.</p>
                   <Button variant="secondary" size="sm" className="bg-white/10 text-white hover:bg-white/20 border-0">Learn More</Button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Why Choose Our Software?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Easy to Use"
                description="Intuitive interface designed for trucking professionals"
              />
              <FeatureCard 
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Fast Implementation"
                description="Get up and running in days, not months"
              />
              <FeatureCard 
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="24/7 Support"
                description="Round-the-clock technical support for your team"
              />
              <FeatureCard 
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Real-Time Analytics"
                description="Detailed dashboards and reporting on all metrics"
              />
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Team Collaboration"
                description="Seamless communication between dispatchers and drivers"
              />
              <FeatureCard 
                icon={<Settings className="h-8 w-8 text-primary" />}
                title="Customizable"
                description="Tailor the software to your specific needs"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">Start your free trial today and see how SafeMile software can improve your bottom line.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function SoftwareProductCard({ icon, title, description, badge, features }: { icon: React.ReactNode, title: string, description: string, badge?: string, features: string[] }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6 pb-2">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2">
             {icon}
             <h3 className="font-bold">{title}</h3>
          </div>
          {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <ul className="space-y-2">
          {features.map(f => (
            <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-primary" /> {f}
            </li>
          ))}
        </ul>
      </div>
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
