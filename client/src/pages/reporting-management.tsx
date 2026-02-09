import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart3, PieChart } from "lucide-react";

export default function ReportingManagementPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Reporting & <span className="text-primary">Management</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Actionable reporting and fleet management tools tailored for trucking operators.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              View Reporting Plans
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Reporting & Management - Your Key to a Profitable, Complaint Fleet</h2>
            <p className="text-muted-foreground mb-8">
                Accurate reporting and proactive management are the backbone of a sucessful trucking business. They help you stay complaint, track performance, protect profitability, reduce risk, ande make data-driven decisions that drive growth. With the right insights, you can optimize every aspect of your fleet and focus on scaling your business confidently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<BarChart3 className="h-8 w-8 text-primary" />}
                title="Revenue Analytics"
                description="Detailed analytics on revenue by lane, customer, and load"
              />
              <ServiceCard 
                icon={<PieChart className="h-8 w-8 text-primary" />}
                title="Operations Management"
                description="Tools to monitor utilization, routes, and driver performance"
              />
              <ServiceCard 
                icon={<BarChart3 className="h-8 w-8 text-primary" />}
                title="Performance Dashboards"
                description="Custom dashboards for KPIs and financial health"
              />
              <ServiceCard 
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Compliance Reporting"
                description="Automated reports for regulatory and tax compliance"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Core Reporting Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {[
                "Revenue vs Expense Reports",
                "Automated compliance exports",
                "Fuel and route cost analysis",
                "Driver performance scoring",
                "Monthly and ad-hoc reports",
                "Alerting for anomalies",
                "SMS Score report and analysis",
                "Forecasting and trend analysis",
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
            <h2 className="text-4xl font-bold mb-6">See Your Fleet, Clearly</h2>
            <p className="text-slate-400 mb-8 text-lg">Reporting and management tools to optimize routes, costs, and compliance.</p>
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
