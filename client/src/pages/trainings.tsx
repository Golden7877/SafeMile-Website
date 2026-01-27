import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, CheckCircle2, Award, Clock, TrendingUp } from "lucide-react";

const teamImg = '/attached_assets/generated_images/team_of_dispatchers_working.png';

export default function TrainingsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImg} 
            alt="Training Programs" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Professional <span className="text-primary">Trucking Training</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Invest in your career with our comprehensive training programs. Learn from industry experts and earn certifications that matter.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Training Courses Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">Available Training Courses</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Choose from our industry-leading training programs designed for trucking professionals.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TrainingCard 
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Truck Dispatcher"
                price="$390"
                duration="4 weeks"
                description="Master the skills of professional truck dispatching"
                features={["Load matching", "Rate negotiation", "Route planning", "Customer service", "Compliance training"]}
              />
              <TrainingCard 
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Safety Manager"
                price="$690"
                duration="6 weeks"
                description="Become a certified safety manager in the trucking industry"
                features={["DOT compliance", "Risk management", "Driver safety", "Incident reporting", "Audit procedures"]}
              />
              <TrainingCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Logistics Specialist"
                price="$49"
                duration="2 weeks"
                description="Learn the fundamentals of logistics management"
                features={["Supply chain basics", "Inventory management", "Documentation", "Industry overview"]}
              />
            </div>
          </div>
        </section>

        {/* Why Train With Us Section */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12">Why Train With SafeMile?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard 
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Industry Certifications"
                description="Earn recognized certifications that boost your career value"
              />
              <BenefitCard 
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Expert Instructors"
                description="Learn from experienced professionals in the trucking industry"
              />
              <BenefitCard 
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="Flexible Scheduling"
                description="Online and in-person classes to fit your schedule"
              />
              <BenefitCard 
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Career Growth"
                description="Advance your career with valuable industry knowledge"
              />
              <BenefitCard 
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Job Placement"
                description="Access to job opportunities with our network of partners"
              />
              <BenefitCard 
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Lifetime Access"
                description="Keep the course materials and reference guides forever"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Students Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="The dispatcher training was comprehensive and practical. I started earning more within weeks of completing the course."
                author="James Martinez"
                role="Professional Truck Dispatcher"
              />
              <TestimonialCard 
                quote="Excellent instructors and hands-on learning experience. The safety training gave me confidence in managing my fleet."
                author="Sarah Johnson"
                role="Fleet Safety Manager"
              />
              <TestimonialCard 
                quote="The certification helped me land a better job. Worth every penny invested in my education."
                author="Michael Chen"
                role="Logistics Coordinator"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">Enroll in our training programs today and get certified by SafeMile Compliance.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Enroll Today
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function TrainingCard({ icon, title, price, duration, description, features }: { icon: React.ReactNode, title: string, price: string, duration: string, description: string, features: string[] }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <div className="p-8 bg-white">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-6 pb-6 border-b">
          <p className="text-3xl font-bold mb-1">{price}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" /> {duration}
          </p>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map(f => (
            <li key={f} className="text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-primary hover:bg-primary/90">Enroll Now</Button>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="border rounded-xl p-6 bg-white hover:border-primary/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="bg-slate-50 border rounded-xl p-6">
      <p className="text-muted-foreground mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
