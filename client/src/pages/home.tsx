import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle2, Truck, Shield, FileText, Settings, Users, Briefcase, ChevronRight, Play } from "lucide-react";

// Assets
import officeHero from '@assets/generated_images/trucking_dispatch_office_hero.png';
import dispatcherImg from '@assets/generated_images/truck_dispatcher_working.png';
import partnerImg from '@assets/generated_images/business_handshake_silhouette.png';
import alexImg from '@assets/generated_images/alex_taylor_video_thumbnail.png';
import tmsImg from '@assets/generated_images/tms_software_dashboard.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={officeHero} 
            alt="Trucking Office" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Enhancing Your Trucking Business with our <span className="text-primary">Trucking Services</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              As one of the leading trucking companies, SafeMile Compliance provides premium trucking services to enhance your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white/10 h-12 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <div className="border-b py-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center opacity-40 grayscale gap-8 overflow-x-auto no-scrollbar">
           {/* Placeholder Logos */}
           {["RTS", "CH Robinson", "Uber Freight", "TQL", "Coyote", "XPO"].map((logo) => (
             <span key={logo} className="text-xl font-bold whitespace-nowrap">{logo}</span>
           ))}
        </div>
      </div>

      <main className="flex-1">
        
        {/* Services Section */}
        <section id="services" className="py-20 container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-2">Trucking Services</h2>
          <p className="text-muted-foreground mb-10">Reliable and support Services with top-leading 3rd parties</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Dispatch" 
              description="Efficient dispatch services to keep your trucks moving."
              price="3-7%"
              image={dispatcherImg}
              dark
            />
            <ServiceCard 
              title="Safety" 
              description="Safety first. We help you maintain safety compliance."
              price="$79"
            />
            <ServiceCard 
              title="Logbook" 
              description="Monitor logbooks accurately and easily."
              price="$10"
            />
            <ServiceCard 
              title="IFTA" 
              description="Quarterly IFTA calculations & reports."
              price="$30"
            />
            <ServiceCard 
              title="Accounting" 
              description="Complete transportation accounting solutions."
              price="$35"
            />
            <ServiceCard 
              title="Administration" 
              description="Streamlined admin support for your fleet."
              price="$25"
            />
            <ServiceCard 
              title="Hiring Drivers" 
              description="Recruiting services to find qualified drivers."
              price="$500"
            />
             <ServiceCard 
              title="MC Setup" 
              description="We help you get your MC authority active."
              price="$700"
            />
            
            <div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-xl h-64">
              <img src={partnerImg} alt="partnerimg" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/70 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold mb-2">Become our partner</h3>
                <p className="text-slate-300 text-sm">Join our network and grow with us.</p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 bg-slate-50 rounded-xl p-8 flex flex-col justify-center border border-slate-100">
              <h3 className="text-xl font-bold mb-2">Choose any service and receive a <span className="text-primary">$100</span> for each truck</h3>
              <p className="text-muted-foreground text-sm mb-6">Limited time offer for new partners.</p>
              <Button className="w-fit bg-primary">Order Now</Button>
            </div>
          </div>
        </section>

        {/* Software Services */}
        <section id="software" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-2">SafeMile Compliance Software Services</h2>
            <p className="text-muted-foreground mb-12">Streamline your operations with our proprietary software.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <SoftwareCard 
                title="TMS" 
                badge="Popular"
                description="Transportation Management System"
                image={tmsImg}
              />
              <SoftwareCard 
                title="Dispatch" 
                description="Efficient load planning"
                image={tmsImg} // Reusing for consistency style
              />
              <SoftwareCard 
                title="Drivers" 
                description="Driver mobile application"
                image={tmsImg}
              />
              <SoftwareCard 
                title="Accounting" 
                description="Financial tracking made easy"
                image={tmsImg}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-8 rounded-xl border flex flex-col justify-between h-64">
                <div>
                   <h3 className="font-bold text-lg mb-2">ELD</h3>
                   <p className="text-muted-foreground text-sm">Electronic Logging Device solutions compliant with FMCSA.</p>
                </div>
                 <img src={tmsImg} alt="tmsimg" className="h-24 object-cover object-top opacity-50 rounded-md border" />
              </div>
               <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col justify-center relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="font-bold text-lg mb-2">Investments</h3>
                   <p className="text-slate-300 text-sm mb-4">Invest in the future of logistics.</p>
                   <Button variant="secondary" size="sm" className="bg-white/10 text-white hover:bg-white/20 border-0">Learn More</Button>
                 </div>
                 <div className="absolute right-0 bottom-0 opacity-20">
                    <img src={alexImg} alt="aleximg" className="h-48 object-cover mix-blend-luminosity" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainings & Programs */}
        <section id="trainings" className="py-20 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Trucking Trainings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PricingCard title="Truck Dispatcher" price="$390" />
                <PricingCard title="Safety Manager" price="$690" />
                <PricingCard title="Lawyer" price="$49" />
              </div>
            </div>
            
            <div id="programs">
              <h2 className="text-3xl font-bold mb-8">Trucking Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PricingCard title="Trucking Boss" price="$5000" features={["Complete business setup", "Mentorship"]} />
                <PricingCard title="Audit & Consulting" price="$300" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 max-w-md">Our team's experience and successful actions guarantee that your MC achieves the desired results.</h2>
              <Button variant="link" className="text-primary p-0 h-auto font-semibold">Discover Our Results <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
            
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <Stat value="150M" label="Client Gross" sub="Total gross revenue generated for our clients" />
              <Stat value="1800+" label="Active Trucks" sub="Trucks currently under our management" />
              <Stat value="200+" label="Employees" sub="Dedicated professionals working for you" />
              <Stat value="300+" label="Happy Clients" sub="Satisfied trucking companies" />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl font-bold mb-6">SafeMile Compliance: Where Reliability Meets Innovation</h2>
               <p className="text-muted-foreground mb-6">
                 Explore our comprehensive suite of logistics solutions designed to propel your business forward. We combine technology with expertise.
               </p>
               <Button className="bg-primary hover:bg-primary/90">Watch Video</Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
              <img src={alexImg} alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-primary ml-1 fill-primary" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium">
                ALEX TAYLOR
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-bold">SafeMile Compliance Blog</h2>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-slate-600 rounded-xl h-96 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-slate-800 transition-colors group-hover:bg-slate-700"></div>
                 <div className="absolute bottom-0 left-0 p-8 text-white max-w-xl">
                   <Badge className="bg-primary hover:bg-primary mb-4 border-0">News</Badge>
                   <h3 className="text-2xl font-bold mb-2">What Does it Take to Be a Successful Owner-Operator?</h3>
                   <p className="text-slate-300">September 27, 2025 | Alex Taylor | 5 min read</p>
                 </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <BlogCard title="How to Start a Trucking Business" category="Guide" />
                <BlogCard title="Top 10 Trucks for 2026" category="Reviews" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// Components
function ServiceCard({ title, description, price, image, dark }: { title: string, description: string, price: string, image?: string, dark?: boolean }) {
  return (
    <div className={`
      relative p-6 rounded-xl border flex flex-col justify-between h-64 transition-all duration-300 hover:shadow-lg group
      ${dark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white hover:border-slate-300'}
    `}>
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
           <img src={image} alt="image" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm ${dark ? 'text-slate-400' : 'text-muted-foreground'}`}>{description}</p>
      </div>
      
      <div className="relative z-10 flex justify-between items-end">
        <div>
           <span className="text-xs uppercase opacity-70 block mb-1">Starting at</span>
           <span className="text-2xl font-bold">{price}</span>
        </div>
        <div className={`p-2 rounded-full ${dark ? 'bg-white/10' : 'bg-slate-100'}`}>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

function SoftwareCard({ title, description, image, badge }: { title: string, description: string, image: string, badge?: string }) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6 pb-2">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2">
             {/* Icon Placeholder */}
             <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
               <Settings className="w-4 h-4" />
             </div>
             <h3 className="font-bold">{title}</h3>
          </div>
          {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="bg-slate-50 rounded-lg border overflow-hidden h-32 relative">
          <img src={image} alt="image" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  )
}

function PricingCard({ title, price, features }: { title: string, price: string, features?: string[] }) {
  return (
    <div className="border rounded-xl p-6 bg-white hover:border-primary/50 transition-colors cursor-pointer group">
      <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-2xl font-bold">{price}</span>
      </div>
      {features && (
        <ul className="space-y-2 mb-4">
          {features.map(f => (
            <li key={f} className="text-sm text-muted-foreground flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-primary" /> {f}
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-end">
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  )
}

function Stat({ value, label, sub }: { value: string, label: string, sub: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">{value}</div>
      <div className="font-bold text-lg mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{sub}</div>
    </div>
  )
}

function BlogCard({ title, category }: { title: string, category: string }) {
  return (
    <div className="bg-slate-100 rounded-xl p-6 h-full flex flex-col justify-between hover:bg-slate-200 transition-colors cursor-pointer">
       <div>
         <Badge variant="outline" className="mb-3 bg-white">{category}</Badge>
         <h3 className="font-bold text-lg leading-snug">{title}</h3>
       </div>
       <div className="text-xs text-muted-foreground mt-4">
         Read More
       </div>
    </div>
  )
}
