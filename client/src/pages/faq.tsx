import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Mail, MessageSquare, Phone } from "lucide-react";

// Assets
const faqBg = '/attached_assets/generated_images/team_of_dispatchers_working.png';

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Services",
      items: [
        {
          question: "How do you handle dispatch services?",
          answer: "We provide complete dispatch management by securing consistent, high-paying loads that match your equipment and preferred lanes. Our team negotiates rates, plans efficient routes, reduces deadhead miles, and handles all broker communication and paperwork so your trucks stay loaded and profitable."
        },
        {
          question: "Who can benefit from SafeMile's services?",
          answer: "Our services are designed for owner-operators, small trucking companies, and large fleet operations. Whether you're managing a single truck or hundreds of vehicles, we have solutions tailored to your business needs."
        },
        {
          question: "Do you offer customized solutions for my business?",
          answer: "Yes, we understand that every trucking business is unique. Our team works with you to understand your specific needs and provide customized solutions that align with your operational requirements and goals."
        },
        {
          question: "Is SafeMile Compliance available 24/7?",
          answer: "We offer comprehensive support during business hours with emergency assistance available. For urgent matters, please contact our support team through the channels listed below."
        }
      ]
    },
    {
      title: "Compliance & Regulations",
      items: [
        {
          question: "How does SafeMile help with DOT compliance?",
          answer: "We provide comprehensive compliance management services including monitoring DOT regulations, maintaining proper documentation, conducting safety audits, and ensuring your fleet meets all federal and state requirements."
        },
        {
          question: "How do you handle IFTA filing?",
          answer: "We manage IFTA(Internation Fuel Tax Agreement) reporting from start to finish. This includes mileage tracking, fuel calculations, accurate quarterly filings, and record maintenance to ensure compliance and avoid penalties or audit issues."
        },
        {
          question: "How do you manage truck compliance?",
          answer: "We take care of all truck compliance requirements, including permits, registrations, inspections, and renewals. We track deadlines, maintain documentation, and ensure full compliance with FMCSA and state regulations, keeping your trucks audit-ready at all times."
        },
        {
          question: "How do you ensure driver compliance?",
          answer: "We maintain complete driver qualification files and monitor CDL status, medical certificates, onboarding documents, and renewals. Our process ensures drivers meet FMCSA requirements and remain compliant during audits and roadside inspections."
        },
        {
            question: "How do you handle safety compliance?",
            answer: "We actively monitor safety performance by reviewing inspections, violations, and crash data. High-risk areas are identified early, and corrective actions are recommended to reduce repeat violations and minimize FMCSA intervention risk."
        },
        {
          question: "How do you manage ELD services?",
          answer: "We handle ELD setup, monitoring, and ongoing support. Driver logs are reviewed for Hours-of-Service compliance, and we assist with log edits, violations, and ELD-related issues, including audit and inspection support."
        }
      ]
    },
    {
      title: "Driver Management",
      items: [
        {
          question: "Does SafeMile help with driver hiring?",
          answer: "Yes, we offer comprehensive driver hiring services including recruitment, screening, background checks, and training coordination. We connect you with qualified drivers ready to join your operation."
        },
        {
          question: "What driver training programs do you offer?",
          answer: "SafeMile provides specialized trainings covering safety protocols, compliance requirements, equipment operation, customer service, and professional development to enhance driver performance and reduce incidents."
        },
        {
          question: "How does SafeMile support driver safety?",
          answer: "Our comprehensive safety programs include driver training, safety monitoring, incident reporting, coaching, and best practice implementation to create a safety-first culture and reduce accidents."
        },
        {
          question: "Can you help with driver retention?",
          answer: "Yes, we offer strategies and support to improve driver retention, including competitive compensation analysis, workplace culture improvement, professional development opportunities, and recognition programs."
        },
        {
          question: "How do you handle reporting and management?",
          answer: "We provide clear, structured reports covering operational performance, compliance status, and safety metrics. Reports are updated regularly to give fleet owners full visibility and support informed decision-making."
        },
        {
          question: "How do you handle SMS safety score reporting and analysis?",
          answer: "We continuously monitor your FMCSA SMS scores across all BASIC categories. We analyze score trends, identify contributing violations, and provide actionable recommendations to improve safety performance and reduce enforcement exposure."
        }

      ]
    },
    {
      title: "Support & Integration",
      items: [
        {
          question: "What kind of customer support does SafeMile provide?",
          answer: "We offer comprehensive support including onboarding, training, technical assistance, compliance guidance, and ongoing optimization. Our support team is available to help you succeed."
        },
        {
          question: "Can SafeMile integrate with my existing systems?",
          answer: "Yes, we can integrate with many existing systems and platforms used in trucking operations. Discuss your current setup with our technical team to determine integration possibilities."
        },
        {
          question: "How long does implementation typically take?",
          answer: "Implementation timelines vary based on complexity and scope. Typically, basic implementations start within days, while comprehensive solutions may take 1-2 weeks. We'll provide a specific timeline during the onboarding process."
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={faqBg} 
            alt="FAQ Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
              <Badge className="bg-primary text-white">Help & Support</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Find answers to common questions about SafeMile Compliance's services, software, compliance solutions, and more. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
                    <div className="h-1 w-12 bg-primary"></div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary transition-colors py-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
                <p className="text-lg text-slate-600">
                  Our support team is here to help. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Call Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-slate-600">
                      Speak directly with our team
                    </p>
                    <a href="tel:+19099016499">
                    <Button variant="link" className="p-0 text-primary h-auto">
                      Contact Our Team →
                    </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Email Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-slate-600">
                      Send us your questions anytime
                    </p>
                    <a href="mailto:info@safemilecompliance.com">
                    <Button variant="link" className="p-0 text-primary h-auto">
                      Send Email →
                    </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Chat</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-slate-600">
                      Get instant support from our team
                    </p>
                    <Button variant="link" className="p-0 text-primary h-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Start Chat →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
