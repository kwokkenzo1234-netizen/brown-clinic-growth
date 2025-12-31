import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Shield, 
  Sparkles, 
  Star, 
  Clock, 
  ArrowRight,
  CheckCircle,
  MessageCircle
} from "lucide-react";

const services = [
  {
    id: "dental-checkup",
    title: "Dental Check Up",
    icon: Shield,
    shortDesc: "Pemeriksaan gigi menyeluruh untuk menjaga kesehatan mulut Anda",
    longDesc: "Pemeriksaan gigi rutin adalah kunci untuk menjaga kesehatan mulut jangka panjang. Tim dokter kami akan memeriksa kondisi gigi, gusi, dan rongga mulut secara menyeluruh.",
    problems: [
      "Gigi berlubang yang tidak terdeteksi",
      "Masalah gusi seperti gingivitis",
      "Penumpukan karang gigi",
      "Potensi masalah gigi di masa depan"
    ],
    process: [
      "Konsultasi awal dan riwayat kesehatan",
      "Pemeriksaan visual gigi dan gusi",
      "Rontgen gigi (jika diperlukan)",
      "Pembersihan karang gigi",
      "Konsultasi hasil dan rekomendasi"
    ],
    duration: "30-60 menit",
    priceRange: "Rp 150.000 - Rp 500.000",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    icon: Sparkles,
    shortDesc: "Perawatan pemutihan gigi yang aman untuk senyum lebih cerah",
    longDesc: "Prosedur pemutihan gigi profesional yang aman dan efektif untuk mengembalikan warna putih alami gigi Anda. Menggunakan teknologi dan bahan berkualitas tinggi.",
    problems: [
      "Gigi kuning akibat kopi, teh, atau rokok",
      "Perubahan warna gigi seiring usia",
      "Noda pada gigi yang sulit dibersihkan",
      "Ingin senyum lebih cerah dan percaya diri"
    ],
    process: [
      "Pemeriksaan kondisi gigi awal",
      "Pembersihan gigi sebelum whitening",
      "Aplikasi gel whitening profesional",
      "Aktivasi dengan lampu khusus",
      "Evaluasi hasil dan perawatan lanjutan"
    ],
    duration: "60-90 menit",
    priceRange: "Rp 1.500.000 - Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "veneer",
    title: "Veneer & Estetika Senyum",
    icon: Star,
    shortDesc: "Transformasi senyum dengan veneer berkualitas tinggi",
    longDesc: "Veneer adalah lapisan tipis yang ditempelkan pada permukaan gigi untuk memperbaiki bentuk, warna, dan tampilan gigi secara keseluruhan. Solusi sempurna untuk senyum impian.",
    problems: [
      "Gigi dengan bentuk tidak ideal",
      "Celah antar gigi yang mengganggu",
      "Gigi patah atau retak ringan",
      "Warna gigi yang tidak merata"
    ],
    process: [
      "Konsultasi dan desain senyum",
      "Pengambilan cetakan gigi",
      "Pembuatan veneer di laboratorium",
      "Pemasangan veneer",
      "Finishing dan penyesuaian"
    ],
    duration: "2-3 kunjungan",
    priceRange: "Rp 3.000.000 - Rp 8.000.000 / gigi",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "braces",
    title: "Behel & Aligners",
    icon: Clock,
    shortDesc: "Perataan gigi modern dengan teknologi terkini",
    longDesc: "Koreksi susunan gigi dengan berbagai pilihan perawatan ortodontik, dari behel konvensional hingga clear aligners yang tidak terlihat. Solusi untuk semua usia.",
    problems: [
      "Gigi tidak rata atau berjejal",
      "Maloklusi (gigitan tidak normal)",
      "Gigi tonggos atau mundur",
      "Masalah estetika susunan gigi"
    ],
    process: [
      "Konsultasi dan pemeriksaan ortodontik",
      "Foto rontgen dan cetakan gigi",
      "Perencanaan perawatan",
      "Pemasangan alat ortodontik",
      "Kontrol berkala setiap 4-6 minggu"
    ],
    duration: "12-24 bulan",
    priceRange: "Rp 8.000.000 - Rp 35.000.000",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=80"
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Layanan Kami
              </h1>
              <p className="text-lg text-muted-foreground">
                Berbagai perawatan gigi dan estetika profesional dengan teknologi modern, 
                dokter berpengalaman, dan standar internasional.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={100}>
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.title}</span>
                    </div>

                    <h2 className="font-display text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.longDesc}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Masalah yang diselesaikan:</h4>
                      <ul className="space-y-2">
                        {service.problems.map((problem, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Proses perawatan:</h4>
                      <ol className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center shrink-0 font-medium">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Estimasi Durasi</p>
                        <p className="font-semibold text-foreground">{service.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Kisaran Harga</p>
                        <p className="font-semibold text-foreground">{service.priceRange}</p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(service.title)}%20di%20Brown%20Clinic.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="hero" size="lg" className="mt-4">
                        <MessageCircle className="w-5 h-5" />
                        Konsultasi via WhatsApp
                      </Button>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Masih Ragu dengan Layanan yang Tepat?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Konsultasikan kebutuhan Anda dengan dokter kami. Kami akan membantu menentukan 
                perawatan terbaik untuk senyum impian Anda.
              </p>
              <Link to="/booking">
                <Button
                  variant="secondary"
                  size="xl"
                  className="text-primary font-semibold"
                >
                  Jadwalkan Konsultasi Gratis
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

export default ServicesPage;
