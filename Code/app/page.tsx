import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeaturedContent from "@/components/featured-content"
import { Calendar, MapPin, Music, Trophy, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Statistik-Bereich */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem icon={<Music />} value="500+" label="Lieder & Gstanzl" />
            <StatItem icon={<MapPin />} value="9" label="Bundesländer" />
            <StatItem icon={<Calendar />} value="120+" label="Veranstaltungen" />
            <StatItem icon={<Users />} value="10.000+" label="Besucher monatlich" />
          </div>
        </div>
      </section>

      <FeaturedContent />

      {/* Lied des Tages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 folk-heading inline-block">Lied des Tages</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Jeden Tag stellen wir ein besonderes Lied aus der österreichischen Volksmusik vor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Fein+sein,+beinander+bleiben"
                alt="Fein sein, beinander bleiben"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90">
                  <Music className="h-8 w-8" />
                </Button>
              </div>
            </div>

            <div>
              <div className="inline-block bg-amber-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Tirol
              </div>
              <h3 className="text-3xl font-bold mb-4">Fein sein, beinander bleiben</h3>
              <p className="text-gray-700 mb-6">
                &quot;Fein sein, beinander bleiben&quot; ist ein traditionelles Tiroler Volkslied, das Freundschaft und
                Zusammenhalt feiert. Es wird oft bei geselligen Zusammenkünften und in Wirtshäusern gesungen.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span>Beliebtheit: Sehr hoch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  <span>Schwierigkeit: Mittel</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/wirtshauslieder/3">Zum vollständigen Lied</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regionen-Karte */}
      <section className="py-16 bg-secondary/30 folk-section folk-section-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 folk-heading inline-block">Entdecke nach Region</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Jedes österreichische Bundesland hat seine eigenen musikalischen Traditionen und Besonderheiten.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Österreich+Karte"
                alt="Karte von Österreich"
                fill
                className="object-contain"
              />

              {/* Interaktive Punkte auf der Karte - in einer echten Implementierung würden diese positioniert */}
              <RegionPoint name="Tirol" x="20%" y="50%" count={31} />
              <RegionPoint name="Salzburg" x="35%" y="45%" count={22} />
              <RegionPoint name="Kärnten" x="45%" y="75%" count={18} />
              <RegionPoint name="Steiermark" x="55%" y="60%" count={24} />
              <RegionPoint name="Oberösterreich" x="45%" y="30%" count={27} />
              <RegionPoint name="Niederösterreich" x="65%" y="25%" count={25} />
              <RegionPoint name="Wien" x="75%" y="25%" count={15} />
              <RegionPoint name="Burgenland" x="80%" y="50%" count={14} />
              <RegionPoint name="Vorarlberg" x="10%" y="40%" count={12} />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/regionen">Alle Regionen erkunden</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Veranstaltungen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 folk-heading inline-block">Kommende Veranstaltungen</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Erlebe österreichische Volksmusik live bei diesen Veranstaltungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <EventCard
              title="Steirisches Volksmusikherbst"
              date="15. Oktober 2023"
              location="Graz, Steiermark"
              image="/placeholder.svg?height=300&width=400&text=Volksmusikfest"
              href="/veranstaltungen/1"
            />
            <EventCard
              title="Tiroler Volksmusikabend"
              date="22. Oktober 2023"
              location="Innsbruck, Tirol"
              image="/placeholder.svg?height=300&width=400&text=Volksmusikabend"
              href="/veranstaltungen/2"
            />
            <EventCard
              title="Wiener Heurigenkonzert"
              date="5. November 2023"
              location="Wien"
              image="/placeholder.svg?height=300&width=400&text=Heurigenkonzert"
              href="/veranstaltungen/3"
            />
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/veranstaltungen">Alle Veranstaltungen anzeigen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA-Bereich */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Teile dein Wissen!</h2>
            <p className="text-xl mb-8">
              Du kennst ein Gstanzl, Wirtshauslied oder einen Trinkspruch, der auf unserer Website fehlt? Hilf mit, die
              österreichische Volksmusik zu bewahren!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/inhalte-einreichen">Inhalte einreichen</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-primary mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

function RegionPoint({ name, x, y, count }: { name: string; x: string; y: string; count: number }) {
  return (
    <div
      className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
      style={{ left: x, top: y }}
    >
      <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      <div className="w-8 h-8 bg-primary/30 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow-lg whitespace-nowrap z-20">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-600">{count} Einträge</p>
      </div>
    </div>
  )
}

function EventCard({
  title,
  date,
  location,
  image,
  href,
}: {
  title: string
  date: string
  location: string
  image: string
  href: string
}) {
  return (
    <div className="folk-card folk-card-hover">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>Details</Link>
        </Button>
      </div>
    </div>
  )
}

