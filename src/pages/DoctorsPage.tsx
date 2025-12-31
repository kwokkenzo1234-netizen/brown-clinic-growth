import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Award, GraduationCap, Heart, Shield, Sparkles } from "lucide-react";

const doctors = [
  {
    name: "drg. Amanda Putri, Sp.KG",
    specialty: "Spesialis Konservasi Gigi",
    experience: "12 tahun pengalaman",
    description: "Fokus pada perawatan saluran akar dan restorasi gigi dengan pendekatan yang lembut dan nyaman bagi pasien.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
    credentials: ["Universitas Indonesia", "Kemenkes RI Certified", "Member PDGI"],
  },
  {
    name: "drg. Michael Santoso, Sp.Ort",
    specialty: "Spesialis Ortodonti",
    experience: "10 tahun pengalaman",
    description: "Ahli dalam perataan gigi dengan behel dan clear aligners. Berdedikasi untuk memberikan senyum sempurna.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
    credentials: ["Universitas Padjadjaran", "Invisalign Certified", "AAOF Member"],
  },
  {
    name: "drg. Sarah Wibowo, Sp.Pros",
    specialty: "Spesialis Prostodonti",
    experience: "8 tahun pengalaman",
    description: "Spesialis veneer dan estetika senyum. Mengutamakan hasil natural dan kepuasan pasien.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=80",
    credentials: ["Universitas Airlangga", "AAID Member", "Certified Prosthodontist"],
  },
  {
    name: "drg. David Pratama",
    specialty: "Dokter Gigi Umum",
    experience: "6 tahun pengalaman",
    description: "Dokter gigi umum yang ramah dan sabar, khususnya dalam menangani pasien yang takut ke dokter gigi.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
    credentials: ["Universitas Trisakti", "ADA Member", "Pediatric Dentistry Cert"],
  },
];

const clinicFeatures = [
  {
    icon: Shield,
    title: "Sterilisasi Berstandar Tinggi",
    description: "Semua alat disterilisasi dengan autoclave berstandar internasional",
  },
  {
    icon: Sparkles,
    title: "Peralatan Modern",
    description: "Menggunakan teknologi dental terkini untuk hasil terbaik",
  },
  {
    icon: Heart,
    title: "Ruangan Nyaman",
    description: "Desain interior yang menenangkan untuk kenyamanan pasien",
  },
  {
    icon: Award,
    title: "Bersertifikasi",
    description: "Klinik terdaftar dan diawasi Dinas Kesehatan",
  },
];

const DoctorsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tim Dokter & Profesional Kami
              </h1>
              <p className="text-lg text-muted-foreground">
                Dipimpin oleh dokter-dokter berpengalaman dengan keahlian di berbagai bidang 
                kedokteran gigi dan estetika.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <ScrollReveal key={doctor.name} delay={index * 100}>
                <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2">
                      <div className="aspect-[3/4] h-full">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3 w-fit">
                        <GraduationCap className="w-4 h-4" />
                        {doctor.specialty}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {doctor.experience}
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {doctor.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {doctor.credentials.map((cred) => (
                          <span
                            key={cred}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fasilitas Klinik Kami
              </h2>
              <p className="text-muted-foreground text-lg">
                Standar kebersihan dan kenyamanan tertinggi untuk setiap pasien
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="bg-card rounded-2xl p-6 text-center border border-border h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Suasana Klinik
              </h2>
              <p className="text-muted-foreground text-lg">
                Ruang praktik yang bersih, modern, dan nyaman
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&auto=format&fit=crop&q=80"
                  alt="Reception area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80"
                  alt="Treatment room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80"
                  alt="Dental equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Siap Bertemu dengan Dokter Kami?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Jadwalkan konsultasi dan temukan perawatan terbaik untuk senyum Anda.
              </p>
              <Link to="/booking">
                <Button
                  variant="secondary"
                  size="xl"
                  className="text-primary font-semibold"
                >
                  Jadwalkan Konsultasi
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

export default DoctorsPage;
