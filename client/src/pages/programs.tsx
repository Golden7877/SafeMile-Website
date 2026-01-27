import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Users, CheckCircle2, Award, Zap } from "lucide-react";

const teamImg = '/attached_assets/generated_images/team_of_dispatchers_working.png';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImg} 
            alt="Business Programs" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Business <span className="text-primary">Growth Programs</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Transform your trucking business with our comprehensive programs. From startup to scale-up, we have solutions for every stage of growth.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">Our Business Programs</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Comprehensive programs designed to help you scale and succeed in the trucking industry.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProgramCard 
                icon={<Briefcase className="h-8 w-8 text-primary" />}
                title="Trucking Boss"
                price="$5000"
                badge="Most Popular"
                description="Complete business setup and mentorship program"
                features={[
                  "MC authority assistance",
                  "Business planning consultation",
                  "Fleet setup guidance",
                  "One-on-one mentorship",
                  "Ongoing support",
                  "Industry network access"
                ]}
              />
              <ProgramCard 
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Audit & Consulting"
                price="$300"
                description="Expert audit and business consulting services"
                features={[
                  "Financial audit",
                  "Compliance review",
                  "Performance analysis",
                  "Recommendations report",
                  "Action plan development",
                  "Follow-up consultation"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Detailed Program Info */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">What You Get</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Trucking Boss Program Includes:</h3>
                <ul className="space-y-4">
                  {[
                    "Complete MC authority setup and filing",
                    "Insurance and carrier registration assistance",
                    "Fleet management best practices",
                    "Dispatch systems setup and training",
                    "Accounting and bookkeeping guidance",
                    "Safety compliance framework",
                    "Driver recruitment strategies",
                    "Contract negotiation support",
                    "Growth optimization planning",
                    "12 months of premium support"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Audit & Consulting Program Includes:</h3>
                <ul className="space-y-4">
                  {[
                    "Complete financial audit",
                    "Compliance assessment review",
                    "Operational efficiency analysis",
                    "Driver performance metrics",
                    "Fleet maintenance review",
                    "Safety record evaluation",
                    "Revenue optimization audit",
                    "Detailed findings report",
                    "Improvement recommendations",
                    "Implementation support"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SuccessCard 
                metric="45%"
                description="Average increase in annual gross revenue after completing Trucking Boss program"
              />
              <SuccessCard 
                metric="300+"
                description="Trucking businesses successfully launched with our assistance"
              />
              <SuccessCard 
                metric="$2.5M"
                description="Total savings identified through our audit and consulting program"
              />
            </div>
          </div>
        </section>

        {/* Program Comparison */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Choose What's Right For You</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-900">
                    <th className="text-left py-4 px-4 font-bold">Feature</th>
                    <th className="text-center py-4 px-4 font-bold">Trucking Boss</th>
                    <th className="text-center py-4 px-4 font-bold">Audit & Consulting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Duration", boss: "6-12 months", audit: "4-6 weeks" },
                    { feature: "Mentorship", boss: "✓", audit: "" },
                    { feature: "Financial Audit", boss: "✓", audit: "✓" },
                    { feature: "Compliance Review", boss: "✓", audit: "✓" },
                    { feature: "Business Setup", boss: "✓", audit: "" },
                    { feature: "Ongoing Support", boss: "✓", audit: "" },
                    { feature: "Report Delivery", boss: "Custom", audit: "Detailed Report" }
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-slate-200">
                      <td className="py-4 px-4">{row.feature}</td>
                      <td className="py-4 px-4 text-center">{row.boss}</td>
                      <td className="py-4 px-4 text-center">{row.audit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">Join hundreds of trucking companies that have transformed their business with SafeMile Compliance programs.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Enroll Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function ProgramCard({ icon, title, price, description, features, badge }: { icon: React.ReactNode, title: string, price: string, description: string, features: string[], badge?: string }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <div className="p-8 bg-white">
        <div className="flex items-start justify-between mb-4">
          <div>{icon}</div>
          {badge && <Badge className="bg-primary">{badge}</Badge>}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="mb-6 pb-6 border-b">
          <span className="text-4xl font-bold">{price}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map(f => (
            <li key={f} className="text-sm flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-primary hover:bg-primary/90">Enroll Now</Button>
      </div>
    </div>
  );
}

function SuccessCard({ metric, description }: { metric: string, description: string }) {
  return (
    <div className="border rounded-xl p-8 bg-white text-center">
      <p className="text-4xl font-bold text-primary mb-4">{metric}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
