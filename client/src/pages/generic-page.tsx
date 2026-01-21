import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl p-12 border shadow-sm">
            <h1 className="text-4xl font-black uppercase italic mb-6">
              {title} <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Our {title} solutions are designed to help your trucking business achieve maximum efficiency and compliance. 
              We leverage industry-leading expertise to provide you with the tools you need to succeed in today's competitive landscape.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">Efficiency</h3>
                <p className="text-sm text-muted-foreground">Streamlined workflows that save your team hours of manual work every week.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground">Stay ahead of regulations with our automated monitoring and reporting systems.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">24/7 dedicated assistance from our team of industry veterans.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
