import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  CheckCircle, 
  Users, 
  Award, 
  Star,
  ArrowRight,
  Sparkles,
  Shield,
  Clock
} from "lucide-react";

const stats = [
  { number: "1.500+", label: "Pasien Puas", icon: Users },
  { number: "8+", label: "Tahun Pengalaman", icon: Award },
  { number: "15+", label: "Dokter Spesialis", icon: CheckCircle },
];

const services = [
  {
    title: "Dental Check Up",
    description: "Pemeriksaan gigi menyeluruh untuk menjaga kesehatan mulut Anda",
    icon: Shield,
  },
  {
    title: "Teeth Whitening",
    description: "Perawatan pemutihan gigi yang aman untuk senyum lebih cerah",
    icon: Sparkles,
  },
  {
    title: "Veneer & Estetika",
    description: "Transformasi senyum dengan veneer berkualitas tinggi",
    icon: Star,
  },
  {
    title: "Behel & Aligners",
    description: "Perataan gigi modern dengan teknologi terkini",
    icon: Clock,
  },
];

const testimonials = [
  {
    name: "Sarah A.",
    age: 28,
    text: "Pelayanan sangat profesional dan ramah. Hasil whitening saya sangat memuaskan. Senyum saya jadi lebih percaya diri!",
    rating: 5,
  },
  {
    name: "Budi W.",
    age: 35,
    text: "Dokter menjelaskan prosedur dengan detail dan sabar. Perawatan veneer saya berjalan lancar tanpa rasa sakit.",
    rating: 5,
  },
  {
    name: "Maya R.",
    age: 24,
    text: "Klinik yang sangat bersih dan modern. Staf sangat membantu dan membuat saya nyaman selama perawatan behel.",
    rating: 5,
  },
];

const beforeAfter = [
  { before: "Gigi kuning dan bernoda", after: "Senyum putih cerah alami" },
  { before: "Gigi tidak rata", after: "Senyum simetris sempurna" },
  { before: "Bentuk gigi tidak ideal", after: "Tampilan veneer natural" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="container relative py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="up">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Klinik Gigi & Estetika Premium</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Solusi Profesional untuk{" "}
                  <span className="text-gradient">Kesehatan Gigi</span>{" "}
                  & Estetika Senyum Anda
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-xl">
                  Perawatan modern dengan dokter berpengalaman yang mengutamakan kenyamanan pasien. Wujudkan senyum impian Anda bersama kami.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Book Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20di%20Brown%20Clinic."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                      Chat via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
                    alt="Modern dental clinic interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -left-4 bottom-12 bg-card rounded-2xl p-4 shadow-xl hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Konsultasi Mudah</p>
                      <p className="text-sm text-muted-foreground">Booking online 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-foreground">{stat.number}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Layanan Unggulan Kami
              </h2>
              <p className="text-muted-foreground text-lg">
                Berbagai perawatan gigi dan estetika terbaik dengan teknologi modern dan dokter berpengalaman
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link to="/layanan">
                <Button variant="outline" size="lg">
                  Lihat Semua Layanan
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Transformasi Senyum Nyata
              </h2>
              <p className="text-muted-foreground text-lg">
                Lihat hasil perawatan dari pasien-pasien kami yang puas
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <div className="text-center p-6">
                      <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">Hasil Perawatan {index + 1}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-1">Before</p>
                        <p className="font-medium text-foreground">{item.before}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-1">After</p>
                        <p className="font-medium text-foreground">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-sm text-muted-foreground mt-8">
              *Hasil dapat berbeda untuk setiap pasien tergantung kondisi awal dan jenis perawatan
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Apa Kata Pasien Kami
              </h2>
              <p className="text-muted-foreground text-lg">
                Testimoni nyata dari mereka yang telah merasakan layanan kami
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.age} tahun</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Konsultasi Pertama adalah Langkah Menuju Senyum Terbaik Anda
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Jangan tunda lagi. Tim dokter profesional kami siap membantu mewujudkan senyum impian Anda.
              </p>
              <Link to="/booking">
                <Button
                  variant="secondary"
                  size="xl"
                  className="text-primary font-semibold"
                >
                  Jadwalkan Konsultasi Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
