import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, ArrowRight, Play, CheckCircle2 } from "lucide-react";

// Assets
const alexImg = '/attached_assets/generated_images/alex_taylor_video_thumbnail.png';
const teamImg = '/attached_assets/generated_images/team_of_dispatchers_working.png';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImg} 
            alt="Trucking Office" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Truck {title} <span className="text-primary"></span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              A trusted trucking company committed to providing exceptional truck  services for owner-operators and trucking businesses. Our experienced team and dedicated support work tirelessly to maximize your fleet's productivity and revenue.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Filters/Calculators Mockup */}
        <section className="py-12 bg-slate-50 border-b">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="space-y-4">
                 <p className="font-bold text-sm uppercase text-slate-400">Fleet Size</p>
                 <div className="flex gap-2">
                   {["1-3", "4-10", "11-50", "50+"].map(size => (
                     <Button key={size} variant="outline" size="sm" className={size === "1-3" ? "bg-primary text-white border-primary" : ""}>{size}</Button>
                   ))}
                 </div>
               </div>
               <div className="space-y-4">
                 <p className="font-bold text-sm uppercase text-slate-400">Truck Type</p>
                 <div className="flex flex-wrap gap-2">
                   {["Dry Van", "Reefer", "Flatbed", "Step Deck"].map(type => (
                     <Button key={type} variant="outline" size="sm" className={type === "Dry Van" ? "bg-primary text-white border-primary" : ""}>{type}</Button>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Results / Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black uppercase italic mb-4">Results</h2>
                <p className="text-muted-foreground mb-8">Our team of professional logistics coordinators are experienced.</p>
                
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-slate-400 text-xs uppercase mb-1">Average Gross per Truck</p>
                      {/* <p className="text-4xl font-bold">$36,475</p> */}
                    </div>
                    <BarChart3 className="h-10 w-10 text-primary" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                    <div>
                      <p className="text-slate-400 text-xs mb-1">Average CPM</p>
                      {/* <p className="text-2xl font-bold text-primary">$2.04</p> */}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs mb-1">Top Result</p>
                      {/* <p className="text-2xl font-bold text-green-400">$2.68</p> */}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-80 bg-slate-50 rounded-2xl border flex items-center justify-center relative overflow-hidden">
                 {/* Chart Placeholder */}
                 <div className="flex items-end gap-4 h-48">
                    {[40, 60, 45, 80, 55, 95].map((h, i) => (
                      <div
                        key={i}
                        className="w-12 bg-primary/20 rounded-t-lg transition-all hover:bg-primary h-[var(--bar-height)]"
                        data-height={h}
                      ></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase italic mb-6">Our team's experience and successful actions guarantee that your MC achieves the desired results.</h2>
              <p className="text-muted-foreground mb-8">
                Our company is made up of experienced and professional experts in the trucking industry who excel at providing top-notch dispatch, safety, accounting, and billing services. We serve the transportation sector and it is our priority to deliver results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <p className="text-4xl font-black text-slate-900 mb-1">150M</p>
                   <p className="text-sm font-bold">Client Gross</p>
                </div>
                <div>
                   <p className="text-4xl font-black text-slate-900 mb-1">200+</p>
                   <p className="text-sm font-bold">Active Trucks</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={teamImg} alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black uppercase italic mb-6">See our team's experience and successful actions with your own eyes.</h2>
                <p className="text-muted-foreground mb-8">
                  Discover how our innovative approach to trucking services sets us apart. We don't just provide services; we partner with you for success.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-red-600 fill-red-600" />
                  </div>
                  <div>
                    <p className="font-bold">Watch on YouTube</p>
                    <p className="text-sm text-muted-foreground">Alex Taylor - CEO SafeMile Compliance</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer">
                <img src={alexImg} alt="Alex Taylor" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary fill-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-black uppercase italic mb-12">Trucking Owners often ask us</h2>
            <div className="max-w-4xl">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  "What does your service consist of?",
                  "How do you track dispatch service results every weekend?",
                  "What distinguishes our dispatch company from others?",
                  "How is payment handled?",
                  "Is your support 24/7?",
                  "Do you help with driver recruitment?",
                  "What types of trailers do you provide dispatch services for?"
                ].map((q, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold py-6 hover:no-underline">{q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      Our {title.toLowerCase()} service is built on transparency and efficiency. We provide end-to-end support including load matching, rate negotiation, and administrative documentation to ensure your trucks stay on the road profitably.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-black uppercase italic mb-6">Want to talk with us?</h2>
              <p className="text-slate-400 mb-8 text-lg">Contact a business agent today to get your custom offer and start growing your business with SafeMile Compliance.</p>
              <form className="flex gap-4 max-w-md">
                <input className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 h-12 outline-none focus:border-primary" placeholder="Your email address" />
                <Button className="bg-primary hover:bg-primary/90 px-8 h-12">Submit</Button>
              </form>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
               <TruckIcon className="h-96 w-96 text-white" />
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

  function TruckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.25a1 1 0 0 0-.13-.48l-1.37-2.39a1 1 0 0 0-.87-.48H15" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    )
  }
