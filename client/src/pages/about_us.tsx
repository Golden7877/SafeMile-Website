import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Truck, FileCheck } from "lucide-react";

const alexImg = "/attached_assets/generated_images/alex_taylor_video_thumbnail.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary">About Us</Badge>
            <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-tight mb-6">
              SafeMile <span className="text-primary">Compliance</span>
            </h1>
            <p className="text-lg text-slate-300">
              Helping trucking companies stay compliant, profitable, and on the
              road with confidence.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-8 space-y-24">

          {/* Who We Are */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Build a Profitable Owner-Operator Business - Without the Operational Stress</h2>
              <p className="text-muted-foreground mb-4">
                Running a successful owner-operator business takes more than time on the road. It requires smart freight selection, disciplined cost management, reliable cash flow, and constant attention to safety and regulatory compliance. Managing all of this alone can be overwhelming—and costly.
              </p>
              <p className="text-muted-foreground mb-4">
                That's Where<b> we come in.</b>
              </p>
              <p className="text-muted-foreground mb-4">
                As your trusted third-party dispatch and compliance partner, we take care of the day-by-day operational responsibilities so you can focus on driving and growing your business. from <b>Load booking and dispatch</b> to <b>billing, collections, safety compliance, ELD managementm, audit, and IFTA reporting,</b> we handle the details that protect your authority and improve your profitabilty.
              </p>

              <p className="text-muted-foreground mb-4">
                Our Experienced team ensures your operations remain <b>compliant, efficent, and inspection ready,</b> while reducing administractive burden and elimination costly mistakes. With structured systems, proactive administractive support, we help owner-operators operate with confidence and consistency.
              </p>
              <p className="text-muted-foreground mb-4"><b>
               With the right partner, you don't just stay on the road - you build a stable, compliant and profitable trucking business.
              </b></p>
            </div>
            <div className="rounded-xl overflow-hidden h-96">
              <img
                src="/attached_assets/generated_images/cascadia.jpg"
                alt="cascadia"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Servies we offer */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Servies we offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-xl p-8 text-center">
                <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">Load Booking & Dispatch</h3>
                <p className="text-sm text-muted-foreground">
                  Simplify load booking and dispatch with faster assignments, better visibility, and reliable delivery execution.
                </p>
              </div>

              <div className="border rounded-xl p-8 text-center">
                <Truck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">Customer Invoicing & Collections</h3>
                <p className="text-sm text-muted-foreground">
                  Accurate invoicing and efficient collections to keep payments on time and operations running smoothly.
                </p>
              </div>

              <div className="border rounded-xl p-8 text-center">
                <FileCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">Safety & Compliance Managemenet</h3>
                <p className="text-sm text-muted-foreground">
                  Safety plans built to protect your drivers, ensure compliance, and strengthen your authority.
                </p>
              </div>

              <div className="border rounded-xl p-8 text-center">
                <FileCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">IFTA Filing & Reporting</h3>
                <p className="text-sm text-muted-foreground">
                  Hassle-free IFTA filing with precise fuel tax reporting and on-time submissions for multi-state operations.
                </p>
              </div>
              <div className="border rounded-xl p-8 text-center">
                <FileCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">ELD & Hours of Service Management</h3>
                <p className="text-sm text-muted-foreground">
                  Efficient ELD and Hours of Service management to maintain compliance, improve driver productivity, and avoid penalties.
                </p>
              </div>
              <div className="border rounded-xl p-8 text-center">
                <FileCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">Audit Handling & Regulatory Support</h3>
                <p className="text-sm text-muted-foreground">
                  Expert support for audits and regulatory requirements to ensure compliance, minimize risk, and protect your operating authority.
                </p>
              </div>
              <div className="border rounded-xl p-8 text-center">
                <FileCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="font-bold mb-3">Driver Hiring & Onboard Assistance</h3>
                <p className="text-sm text-muted-foreground">
                  Efficient driver hiring and onboarding assistance to ensure qualified drivers, proper documentation, and regulatory compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-slate-50 rounded-2xl py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Fleets Supported
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Compliance Success
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Ongoing Support
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To simplify compliance and protect trucking businesses through
                reliable, transparent, and high-quality support services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the most trusted compliance partner in the trucking
                industry—keeping fleets safe, compliant, and moving forward.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-950 text-white py-20 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Stay Compliant with Confidence?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Let SafeMile Compliance handle the paperwork, audits, and safety
              programs—so you can focus on the road ahead.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
