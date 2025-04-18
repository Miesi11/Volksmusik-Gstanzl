"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, BookOpen, GlassWater, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturedContent() {
  const [activeTab, setActiveTab] = useState("gstanzl")

  return (
    <section className="py-20 bg-secondary/30 folk-section folk-section-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 folk-heading inline-block">Entdecke Volksmusik</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Tauche ein in die vielfältige Welt der österreichischen Volksmusik und entdecke Schätze aus allen Regionen.
          </p>
        </div>

        <Tabs defaultValue="gstanzl" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="gstanzl" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Gstanzl</span>
              </TabsTrigger>
              <TabsTrigger value="wirtshauslieder" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                <span className="hidden sm:inline">Wirtshauslieder</span>
              </TabsTrigger>
              <TabsTrigger value="trinksprueche" className="flex items-center gap-2">
                <GlassWater className="h-4 w-4" />
                <span className="hidden sm:inline">Trinksprüche</span>
              </TabsTrigger>
              <TabsTrigger value="regionen" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Regionen</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="gstanzl" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <FeaturedGstanzlCard
                title="Wann i auf d'Alma geh"
                region="Steiermark"
                content="Wann i auf d'Alma geh,
Kimmt ma da Baua entgegn.
Sagt er: Griaß di Gott, mei Bua,
Heut gibt's an Regen."
                image="/placeholder.svg?height=300&width=400&text=Alm"
                href="/gstanzl/1"
              />
              <FeaturedGstanzlCard
                title="Mei Dirndl hat g'sagt"
                region="Tirol"
                content="Mei Dirndl hat g'sagt,
Sie mog mi nimma.
Jetzt geh i zum Nachbarn
Und der mog mi a nimma."
                image="/placeholder.svg?height=300&width=400&text=Dirndl"
                href="/gstanzl/2"
              />
              <FeaturedGstanzlCard
                title="Auf da Alm, da gibt's koa Sünd"
                region="Oberösterreich"
                content="Auf da Alm, da gibt's koa Sünd,
Weil da Herrgott net zuaschaut.
Und die Englein, die zuaschaun,
Die verstehn's ja eh net."
                image="/placeholder.svg?height=300&width=400&text=Berge"
                href="/gstanzl/5"
              />
            </motion.div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/gstanzl">Alle Gstanzl anzeigen</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="wirtshauslieder" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <FeaturedLiedCard
                title="Ein Prosit der Gemütlichkeit"
                region="Bayern/Österreich"
                description="Der Klassiker zum Anstoßen bei jedem Fest"
                difficulty="Sehr leicht"
                image="/placeholder.svg?height=300&width=400&text=Prosit"
                href="/wirtshauslieder/2"
                hasAudio={true}
              />
              <FeaturedLiedCard
                title="Fein sein, beinander bleiben"
                region="Tirol"
                description="Ein traditionelles Lied über Freundschaft und Zusammenhalt"
                difficulty="Mittel"
                image="/placeholder.svg?height=300&width=400&text=Freunde"
                href="/wirtshauslieder/3"
                hasAudio={true}
              />
              <FeaturedLiedCard
                title="Im Wirtshaus, da ist heut Musik"
                region="Steiermark"
                description="Ein beliebtes Lied zum Mitsingen in geselliger Runde"
                difficulty="Leicht"
                image="/placeholder.svg?height=300&width=400&text=Wirtshaus"
                href="/wirtshauslieder/1"
                hasAudio={true}
              />
            </motion.div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/wirtshauslieder">Alle Wirtshauslieder anzeigen</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="trinksprueche" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <FeaturedTrinkspruchCard
                text="Hoch die Tassen, runter der Sprit, wer nicht mittrinkt, der trinkt nicht mit!"
                category="Kurz & Knackig"
                href="/trinksprueche/2"
              />
              <FeaturedTrinkspruchCard
                text="Lieber ein Glas in der Hand als zehn Flaschen im Schrank!"
                category="Humorvoll"
                href="/trinksprueche/3"
              />
              <FeaturedTrinkspruchCard
                text="Wer Sorgen hat, hat auch Likör. Wer Likör hat, hat keine Sorgen mehr!"
                category="Humorvoll"
                href="/trinksprueche/7"
              />
              <FeaturedTrinkspruchCard
                text="Auf die Berge, auf die Höhn, auf ein frohes Wiedersehn!"
                category="Traditionell"
                href="/trinksprueche/5"
              />
            </motion.div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/trinksprueche">Alle Trinksprüche anzeigen</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="regionen" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <RegionCard
                name="Steiermark"
                description="Bekannt für die Steirische Harmonika und lebhafte Gstanzl"
                image="/placeholder.svg?height=300&width=400&text=Steiermark"
                count={24}
                href="/regionen/steiermark"
              />
              <RegionCard
                name="Tirol"
                description="Heimat zahlreicher traditioneller Lieder und Jodler"
                image="/placeholder.svg?height=300&width=400&text=Tirol"
                count={31}
                href="/regionen/tirol"
              />
              <RegionCard
                name="Kärnten"
                description="Berühmt für mehrstimmigen Gesang und Kärntner Lieder"
                image="/placeholder.svg?height=300&width=400&text=Kärnten"
                count={18}
                href="/regionen/kaernten"
              />
              <RegionCard
                name="Salzburg"
                description="Reiche Tradition an Volksliedern und Brauchtum"
                image="/placeholder.svg?height=300&width=400&text=Salzburg"
                count={22}
                href="/regionen/salzburg"
              />
              <RegionCard
                name="Oberösterreich"
                description="Vielfältige Volksmusik mit Einflüssen aus Bayern"
                image="/placeholder.svg?height=300&width=400&text=Oberösterreich"
                count={27}
                href="/regionen/oberoesterreich"
              />
              <RegionCard
                name="Niederösterreich"
                description="Traditionelle Wirtshauslieder und Weinlieder"
                image="/placeholder.svg?height=300&width=400&text=Niederösterreich"
                count={25}
                href="/regionen/niederoesterreich"
              />
            </motion.div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/regionen">Alle Regionen anzeigen</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function FeaturedGstanzlCard({
  title,
  region,
  content,
  image,
  href,
}: {
  title: string
  region: string
  content: string
  image: string
  href: string
}) {
  return (
    <Card className="folk-card folk-card-hover overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 text-sm">{region}</div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="whitespace-pre-line text-gray-700 mb-4">{content}</div>
        <Link href={href} className="text-primary hover:text-primary/80 font-medium">
          Mehr lesen →
        </Link>
      </CardContent>
    </Card>
  )
}

function FeaturedLiedCard({
  title,
  region,
  description,
  difficulty,
  image,
  href,
  hasAudio,
}: {
  title: string
  region: string
  description: string
  difficulty: string
  image: string
  href: string
  hasAudio: boolean
}) {
  return (
    <Card className="folk-card folk-card-hover overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {hasAudio && (
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <Music className="h-3 w-3" /> Mit Audio
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm bg-secondary px-2 py-1 rounded-full">{region}</span>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{difficulty}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={href} className="text-primary hover:text-primary/80 font-medium">
          Zum Lied →
        </Link>
      </CardContent>
    </Card>
  )
}

function FeaturedTrinkspruchCard({
  text,
  category,
  href,
}: {
  text: string
  category: string
  href: string
}) {
  return (
    <Card className="folk-card folk-card-hover h-full flex flex-col">
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="text-amber-500 text-2xl mb-2">"</div>
          <blockquote className="text-lg italic mb-4">{text}</blockquote>
          <div className="text-amber-500 text-2xl text-right">"</div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm bg-amber-100 px-2 py-1 rounded-full">{category}</span>
          <Link href={href} className="text-primary hover:text-primary/80 text-sm">
            Details
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function RegionCard({
  name,
  description,
  image,
  count,
  href,
}: {
  name: string
  description: string
  image: string
  count: number
  href: string
}) {
  return (
    <Card className="folk-card folk-card-hover overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{count} Einträge</span>
          <Link href={href} className="text-primary hover:text-primary/80 font-medium">
            Entdecken →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

