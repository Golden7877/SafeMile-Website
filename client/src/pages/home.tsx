import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle2, Truck, Shield, FileText, Settings, Users, Briefcase, ChevronRight, Play } from "lucide-react";

// Assets
const officeHero = '/attached_assets/generated_images/trucking_dispatch_office_hero.png';
const dispatcherImg = '/attached_assets/generated_images/truck_dispatcher_working.png';
const partnerImg = '/attached_assets/generated_images/business_handshake_silhouette.png';
const alexImg = '/attached_assets/generated_images/alex_taylor_video_thumbnail.png';
const tmsImg = '/attached_assets/generated_images/tms_software_dashboard.png';

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
              Enhance Your Trucking Business with Our <span className="text-primary">Expert Services</span>
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

      <main className="flex-1">

        {/* Services Section */}
        <section id="services" className="py-20 container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-2 text-center">Trucking Services</h2>
          <p className="text-muted-foreground mb-10 text-center">
            Reliable and support Services with top-leading 3rd parties
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-center">
            <ServiceCard
              title="Dispatch"
              description="Efficient dispatch services to keep your trucks moving."
              href="/dispatch"
              image="/attached_assets/generated_images/dispatch.jpg"
            />

            <ServiceCard
              title="Safety"
              description="Safety first. We help you maintain safety compliance."
              href="/safety"
              image="/attached_assets/generated_images/Safety.jpg"
            />

            <ServiceCard
              title="Logbook"
              description="Monitor logbooks accurately and easily."
              href="/logbook"
              image="/attached_assets/generated_images/Logbook.jpg"
            />

            <ServiceCard
              title="IFTA"
              description="Quarterly IFTA calculations & reports."
              href="/ifta"
              image="/attached_assets/generated_images/IFTA.jpg"
            />

            <ServiceCard
              title="Reporting & Management"
              description="Actionable reporting and fleet management solutions."
              href="/reporting-management"
              image="/attached_assets/generated_images/Management.jpg"
            />

            <ServiceCard
              title="Compliance Management"
              description="Streamlined compliance support for your fleet."
              href="/compliance-management"
              image="/attached_assets/generated_images/Compliance-management.jpg"
            />

            <ServiceCard
              title="Driver Hiring"
              description="Recruiting services to find qualified drivers."
              href="/hiring-drivers"
              image="/attached_assets/generated_images/Driver-hiring.jpg"
            />
          </div>
        </section>

        {/* Article Section - Center + Full Page */}
        <section id="software-article" className="py-24 bg-slate-50 flex justify-center">
          <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-20">

            <article className="bg-white rounded-3xl shadow-sm p-10 md:p-16 text-center">

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeMile Compliance & Trucking Programs
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-4xl mx-auto">
                SafeMile provides advanced compliance services, trucking tools, and professional trucking service to streamline logistics operations, ensure FMCSA compliance, and support trucking business growth.
              </p>

              {/* Software */}
              <div className="mb-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Compliance Services
                </h2>

                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Our compliance services help trucking companies stay audit-ready, meet regulatory requirements, and operate smoothly through expert management and reliable support.
                </p>

                <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-lg">

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ DOT & FMCSA compliance management
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ Driver qualification file (DQF) management
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ ELD & HOS monitoring
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ IFTA reporting & fuel tax management
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ Audit support & safety review preparation
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ Permit & licensing assistance
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    ✔ 24/7 compliance support and consultation
                  </li>

                  <li className="bg-slate-100 p-4 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 cursor-pointer">
                    New authority (MC/DOT) setup & activation
                  </li>
                </ul>
              </div>

            </article>
          </div>
        </section>

        {/* Trainings & Programs */}
        {/* <section id="trainings" className="py-20 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Trucking Trainings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PricingCard title="Truck Dispatcher" price="Contact Us" />
                <PricingCard title="Safety Manager" price="Contact Us" />
                <PricingCard title="Lawyer" price="Contact Us" />
              </div>
            </div>
            
            <div id="programs">
              <h2 className="text-3xl font-bold mb-8">Trucking Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PricingCard title="Trucking Boss" price="Contact Us" features={["Complete business setup", "Mentorship"]} />
                <PricingCard title="Audit & Consulting" price="Contact Us" />
              </div>
            </div>
          </div>
        </section> */}

        {/* Stats */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 max-w-md">Our team's experience and successful actions guarantee that your MC achieves the desired results.</h2>
              <Button variant="link" className="text-primary p-0 h-auto font-semibold">Discover Our Results <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <Stat value="100M" label="Client Gross" sub="Total gross revenue generated for our clients" />
              <Stat value="350+" label="Active Trucks" sub="Trucks currently under our management" />
              <Stat value="100+" label="Employees" sub="Dedicated professionals working for you" />
              {/* <Stat value="200+" label="Happy Clients" sub="Satisfied trucking companies" /> */}
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
                Contact Us
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
              <img src="/attached_assets/generated_images/Trucking_Logistics.jpg" alt="Image Thumbnail" className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/410 transition-colors">

              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium">
                SafeMile Compliance
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        {/* <section id="about us" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-bold">SafeMile Compliance about us</h2>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-slate-600 rounded-xl h-96 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-slate-800 transition-colors group-hover:bg-slate-700"></div>
                 <div className="absolute bottom-0 left-0 p-8 text-white max-w-xl">
                   <Badge className="bg-primary hover:bg-primary mb-4 border-0">News</Badge>
                   <h3 className="text-2xl font-bold mb-2">What Does it Take to Be a Successful Owner-Operator?</h3>
                   <p className="text-slate-300">September 27, 2025 | Head of Operation | 5 min read</p>
                 </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <BlogCard title="How to Start a Trucking Business" category="Guide" />
                <BlogCard title="Top 10 Trucks for 2026" category="Reviews" />
              </div>
            </div>
          </div>
        </section> */}

      </main>
      <Footer />
    </div>
  );
}

// Components
function ServiceCard({
  title,
  description,
  image,
  dark,
  href,
}: {
  title: string
  description: string
  image?: string
  dark?: boolean
  href?: string
}) {
  return (
    <div
      className={`
      relative p-6 rounded-xl border h-40
      flex flex-col justify-between overflow-hidden
      transition-all duration-300 group cursor-pointer
      hover:-translate-y-1 hover:shadow-xl
      ${dark ? 'bg-slate-200 border-slate-800' : 'bg-white border-slate-200'}
    `}
    >

      {/* IMAGE */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-top
                   transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

      {/* BRAND HOVER OVERLAY */}
      <div
        className={`
        absolute inset-0 z-0 transition-colors duration-300
        ${dark
            ? 'bg-slate-900/0 group-hover:bg-slate-900/80'
            : 'bg-primary/0 group-hover:bg-primary/80'}
      `}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white">
          {title}
        </h3>
        <p className="text-sm text-white/90">
          {description}
        </p>
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
