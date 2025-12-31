import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  CheckCircle,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Dental Check Up",
  "Teeth Whitening",
  "Veneer & Estetika",
  "Behel & Aligners",
  "Konsultasi Umum",
];

const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
];

const BookingPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Form tidak lengkap",
        description: "Mohon isi nama, nomor WhatsApp, dan pilih layanan.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Halo, saya ingin booking konsultasi di Brown Clinic.

Nama: ${formData.name}
No. WhatsApp: ${formData.phone}
Layanan: ${formData.service}
${formData.date ? `Tanggal: ${formData.date}` : ""}
${formData.time ? `Waktu: ${formData.time}` : ""}
${formData.notes ? `Catatan: ${formData.notes}` : ""}

Mohon konfirmasi jadwal yang tersedia. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Booking dikirim!",
      description: "Kami akan menghubungi Anda maksimal 1×24 jam untuk konfirmasi jadwal.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Booking & Kontak
              </h1>
              <p className="text-lg text-muted-foreground">
                Jadwalkan konsultasi Anda dengan mudah. Tim kami siap membantu mewujudkan 
                senyum impian Anda.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Form & Contact */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-lg">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Form Booking Konsultasi
                </h2>
                <p className="text-muted-foreground mb-8">
                  Isi form di bawah ini dan kami akan menghubungi Anda untuk konfirmasi jadwal.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor WhatsApp *</Label>
                    <Input
                      id="phone"
                      placeholder="08xx-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Pilih Layanan *</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Pilih layanan</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Tanggal Preferensi</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Waktu Preferensi</Label>
                      <select
                        id="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Pilih waktu</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      placeholder="Keluhan atau pertanyaan (opsional)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Calendar className="w-5 h-5" />
                    Kirim Booking
                  </Button>
                </form>

                <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Kami akan menghubungi Anda maksimal 1×24 jam untuk konfirmasi jadwal.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick WhatsApp */}
              <ScrollReveal direction="right">
                <div className="bg-[#25D366]/10 rounded-3xl p-8 border border-[#25D366]/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Butuh Respon Cepat?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Chat langsung dengan tim kami via WhatsApp untuk pertanyaan atau booking instan.
                  </p>
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20di%20Brown%20Clinic."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5" />
                      Chat via WhatsApp
                    </Button>
                  </a>
                </div>
              </ScrollReveal>

              {/* Contact Details */}
              <ScrollReveal direction="right" delay={100}>
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Informasi Kontak
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Alamat</p>
                        <p className="text-muted-foreground">
                          Jl. Sudirman No. 123, Jakarta Selatan, 12190
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Telepon</p>
                        <p className="text-muted-foreground">(021) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <p className="text-muted-foreground">info@brownclinic.id</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Jam Operasional</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>Senin - Jumat: 09:00 - 20:00</p>
                          <p>Sabtu: 09:00 - 17:00</p>
                          <p>Minggu: Tutup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-card rounded-3xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904876075375!2d106.81458931476892!3d-6.226108995493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e98888d5e1%3A0x3b62b15c67e5a9b4!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brown Clinic Location"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
