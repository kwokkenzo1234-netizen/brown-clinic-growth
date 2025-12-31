import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Konsultasi & Booking",
    questions: [
      {
        question: "Apakah konsultasi pertama berbayar?",
        answer: "Konsultasi pertama kami tidak dipungut biaya konsultasi. Anda hanya membayar jika memutuskan untuk melakukan tindakan perawatan. Ini agar Anda bisa mendiskusikan kebutuhan dan opsi perawatan dengan dokter tanpa tekanan.",
      },
      {
        question: "Bagaimana cara booking konsultasi?",
        answer: "Anda bisa booking melalui form di website kami, atau langsung chat via WhatsApp. Tim kami akan menghubungi Anda maksimal 1×24 jam untuk konfirmasi jadwal yang tersedia.",
      },
      {
        question: "Apakah bisa konsultasi dulu tanpa langsung tindakan?",
        answer: "Tentu saja! Konsultasi awal bertujuan untuk memahami kondisi dan kebutuhan Anda. Dokter akan menjelaskan opsi perawatan dan Anda bisa memutuskan kapan siap untuk melakukan tindakan.",
      },
    ],
  },
  {
    category: "Perawatan & Prosedur",
    questions: [
      {
        question: "Apakah perawatan di klinik aman?",
        answer: "Keamanan pasien adalah prioritas utama kami. Semua alat disterilisasi dengan autoclave berstandar internasional. Dokter-dokter kami bersertifikasi dan berpengalaman. Klinik kami juga terdaftar dan diawasi oleh Dinas Kesehatan.",
      },
      {
        question: "Berapa lama proses teeth whitening?",
        answer: "Prosedur teeth whitening in-office biasanya memakan waktu 60-90 menit dalam satu kunjungan. Hasil langsung terlihat setelah sesi. Untuk hasil optimal, dokter mungkin merekomendasikan perawatan lanjutan di rumah.",
      },
      {
        question: "Apakah veneer bersifat permanen?",
        answer: "Veneer adalah prosedur yang memerlukan sedikit pengurangan enamel gigi, sehingga bersifat irreversible. Veneer sendiri bisa bertahan 10-15 tahun dengan perawatan yang baik, dan bisa diganti jika diperlukan.",
      },
      {
        question: "Berapa lama proses perawatan behel?",
        answer: "Durasi perawatan behel bervariasi tergantung kondisi awal, biasanya 12-24 bulan. Untuk kasus ringan, clear aligners bisa selesai dalam 6-12 bulan. Dokter ortodonti kami akan memberikan estimasi yang lebih akurat setelah pemeriksaan.",
      },
    ],
  },
  {
    category: "Biaya & Pembayaran",
    questions: [
      {
        question: "Apakah ada sistem cicilan?",
        answer: "Ya, kami menyediakan opsi cicilan 0% untuk perawatan tertentu melalui kerjasama dengan beberapa bank. Silakan tanyakan ke tim kami untuk informasi lebih detail tentang opsi pembayaran yang tersedia.",
      },
      {
        question: "Apakah menerima asuransi?",
        answer: "Kami menerima berbagai asuransi kesehatan untuk perawatan gigi dasar. Untuk perawatan estetika seperti whitening dan veneer, biasanya tidak di-cover asuransi. Hubungi kami untuk konfirmasi dengan asuransi Anda.",
      },
      {
        question: "Berapa kisaran harga perawatan?",
        answer: "Harga bervariasi tergantung jenis perawatan. Dental check-up mulai dari Rp 150.000, whitening mulai Rp 1.500.000, veneer mulai Rp 3.000.000/gigi, dan behel mulai Rp 8.000.000. Untuk harga pasti, silakan konsultasi dengan dokter kami.",
      },
    ],
  },
  {
    category: "Kenyamanan Pasien",
    questions: [
      {
        question: "Saya takut ke dokter gigi, bagaimana?",
        answer: "Kami sangat memahami hal ini. Tim kami terlatih untuk menangani pasien dengan dental anxiety. Kami akan menjelaskan setiap langkah dengan sabar, menyediakan musik relaksasi, dan memastikan Anda nyaman sepanjang prosedur.",
      },
      {
        question: "Apakah tersedia parkir?",
        answer: "Ya, kami memiliki area parkir yang luas dan gratis untuk pasien. Lokasi klinik juga mudah dijangkau dengan transportasi umum.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum seputar layanan, prosedur, dan klinik kami.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="mb-12 animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tim kami siap membantu menjawab semua pertanyaan Anda. Hubungi kami 
              via WhatsApp atau jadwalkan konsultasi langsung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20punya%20pertanyaan%20mengenai%20layanan%20di%20Brown%20Clinic."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chat via WhatsApp
                </Button>
              </a>
              <Link to="/booking">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Jadwalkan Konsultasi
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
