import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const alexImg = '/attached_assets/generated_images/alex_taylor_video_thumbnail.png';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "What Does it Take to Be a Successful Owner-Operator?",
      category: "Guide",
      date: "September 27, 2025",
      author: "Alex Taylor",
      readTime: "5 min read",
      image: alexImg,
      excerpt: "Learn the essential steps and strategies to succeed as an owner-operator in the trucking industry.",
      featured: true
    },
    {
      id: 2,
      title: "How to Start a Trucking Business",
      category: "Business",
      date: "September 20, 2025",
      author: "Sarah Johnson",
      readTime: "8 min read",
      excerpt: "A comprehensive guide to starting your own trucking company from scratch."
    },
    {
      id: 3,
      title: "Top 10 Trucks for 2026",
      category: "Reviews",
      date: "September 15, 2025",
      author: "Mike Davis",
      readTime: "6 min read",
      excerpt: "See our recommendations for the best commercial trucks available in 2026."
    },
    {
      id: 4,
      title: "Understanding FMCSA Regulations",
      category: "Compliance",
      date: "September 10, 2025",
      author: "Alex Taylor",
      readTime: "7 min read",
      excerpt: "A detailed breakdown of FMCSA safety regulations every trucker should know."
    },
    {
      id: 5,
      title: "Fuel Efficiency Tips for Truckers",
      category: "Efficiency",
      date: "September 5, 2025",
      author: "John Miller",
      readTime: "5 min read",
      excerpt: "Practical tips to reduce fuel consumption and increase profitability."
    },
    {
      id: 6,
      title: "The Future of Autonomous Trucking",
      category: "Technology",
      date: "August 30, 2025",
      author: "Emma Wilson",
      readTime: "9 min read",
      excerpt: "Exploring how autonomous vehicles are changing the trucking industry."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
              SafeMile Compliance <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">Expert insights and guidance for trucking companies and owner-operators.</p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <Badge className="bg-primary hover:bg-primary mb-4">Featured</Badge>
                <h2 className="text-4xl font-bold mb-4">What Does it Take to Be a Successful Owner-Operator?</h2>
                <p className="text-muted-foreground mb-6">Learn the essential steps and strategies to succeed as an owner-operator in the trucking industry. Discover what separates successful operators from the rest.</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span>September 27, 2025</span>
                  <span>•</span>
                  <span>Alex Taylor</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="lg:order-1 rounded-xl overflow-hidden h-96">
                <img src={alexImg} alt="Featured" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <article key={post.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="bg-slate-100 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <Badge variant="outline" className="mb-2">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div>
                        <div>{post.date}</div>
                        <div>{post.author}</div>
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <Button variant="outline">Previous</Button>
            <Button className="bg-primary hover:bg-primary/90">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="mt-20 bg-slate-50 border-y py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">Get the latest articles and insights delivered to your inbox every week.</p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 border rounded-lg outline-none focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
