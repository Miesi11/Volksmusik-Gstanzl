"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  User,
  Tag,
  ArrowRight,
  Share2,
  ThumbsUp,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Beispiel-Daten für einen Blog-Beitrag
const blogPost = {
  id: 1,
  title: "Die Geschichte der Steirischen Harmonika",
  excerpt:
    "Erfahre mehr über die Entstehung und Entwicklung der Steirischen Harmonika, einem der wichtigsten Instrumente der österreichischen Volksmusik.",
  content: `
## Die Anfänge der Steirischen Harmonika

Die Steirische Harmonika, auch als Steirische Ziehharmonika oder einfach "Steirische" bekannt, ist ein diatonisches Knopfakkordeon, das in der alpenländischen Volksmusik eine zentrale Rolle spielt. Obwohl der Name auf die Steiermark hinweist, ist die genaue Herkunft des Instruments nicht eindeutig auf diese Region beschränkt.

Die Geschichte der Steirischen Harmonika beginnt im frühen 19. Jahrhundert. Nach der Erfindung der ersten Akkordeons um 1829 durch Cyrill Demian in Wien verbreiteten sich verschiedene Varianten des Instruments schnell in ganz Europa. Die spezielle Form der Steirischen Harmonika entwickelte sich in den 1870er Jahren und wurde besonders im alpenländischen Raum populär.

## Aufbau und Besonderheiten

Was die Steirische Harmonika von anderen Akkordeontypen unterscheidet, ist ihr diatonischer Aufbau und das Wechseltonprinzip. Das bedeutet, dass jeder Knopf beim Ziehen und Drücken des Balgs unterschiedliche Töne erzeugt. Diese Besonderheit verleiht dem Instrument seinen charakteristischen Klang und ermöglicht die typischen "Hackler" (schnelle Tonwechsel), die für die alpenländische Volksmusik so charakteristisch sind.

Eine traditionelle Steirische Harmonika hat auf der Melodieseite drei bis fünf Reihen von Knöpfen und auf der Bassseite meist zwischen 8 und 16 Bässe. Die Instrumente werden in verschiedenen Grundtonarten gebaut, wobei die häufigsten die "G-C-F" und die "B-Es-As" Stimmungen sind.

## Bedeutung in der österreichischen Volksmusik

Die Steirische Harmonika hat sich seit dem späten 19. Jahrhundert zu einem der wichtigsten Instrumente der österreichischen Volksmusik entwickelt. Sie ist besonders in der Steiermark, in Kärnten, Tirol, Salzburg und Oberösterreich verbreitet, aber auch in angrenzenden Regionen wie Bayern, Südtirol und Slowenien.

Das Instrument ist vielseitig einsetzbar und kann sowohl solo als auch in verschiedenen Ensembles gespielt werden. Typische Besetzungen sind das "Tanzlmusi"-Trio mit Harmonika, Gitarre und Bass oder größere Gruppen mit zusätzlichen Instrumenten wie Klarinette, Hackbrett oder Geige.

Die Steirische Harmonika wird für verschiedene traditionelle Musikstile verwendet, darunter Landler, Polka, Walzer, Boarische und Märsche. Sie begleitet Volkstänze, Wirtshauslieder und ist bei Festen und Veranstaltungen im ländlichen Raum nicht wegzudenken.

## Moderne Entwicklungen

In den letzten Jahrzehnten hat die Steirische Harmonika eine Renaissance erlebt. Immer mehr junge Menschen interessieren sich für das Instrument und seine Tradition. Musikschulen bieten spezielle Kurse an, und es gibt zahlreiche Wettbewerbe und Festivals, die der Steirischen Harmonika gewidmet sind.

Auch in der modernen Volksmusik und in Crossover-Projekten findet die Steirische Harmonika ihren Platz. Innovative Musiker experimentieren mit neuen Spieltechniken und kombinieren traditionelle Elemente mit anderen Musikstilen wie Jazz, Pop oder Weltmusik.

Hersteller haben das Instrument technisch weiterentwickelt, mit verbesserten Mechaniken, neuen Materialien und erweiterten klanglichen Möglichkeiten. Dennoch bleibt der charakteristische Grundklang erhalten, der die Steirische Harmonika so unverwechselbar macht.

## Fazit

Die Steirische Harmonika ist mehr als nur ein Musikinstrument – sie ist ein wichtiger Teil der kulturellen Identität im Alpenraum. Ihre Geschichte spiegelt die Entwicklung der österreichischen Volksmusik wider, und ihr unverwechselbarer Klang prägt bis heute die musikalische Landschaft in Österreich und darüber hinaus.

Ob bei traditionellen Festen, in Wirtshäusern oder auf modernen Konzertbühnen – die Steirische Harmonika verbindet Generationen und hält eine jahrhundertealte musikalische Tradition lebendig.
`,
  date: "12. September 2023",
  author: "Maria Huber",
  authorBio:
    "Maria Huber ist Musikwissenschaftlerin mit Schwerpunkt auf alpenländischer Volksmusik. Sie spielt selbst seit über 20 Jahren Steirische Harmonika und unterrichtet an der Musikschule Graz.",
  authorImage: "/placeholder.svg?height=100&width=100&text=Maria+H.",
  category: "Instrumente",
  image: "/placeholder.svg?height=600&width=1200&text=Steirische+Harmonika",
  readTime: "5 min",
  tags: ["Harmonika", "Instrumente", "Geschichte", "Tradition"],
  relatedPosts: [
    {
      id: 2,
      title: "Traditionelle Wirtshauslieder und ihre Bedeutung",
      image: "/placeholder.svg?height=200&width=300&text=Wirtshauslieder",
    },
    {
      id: 3,
      title: "Gstanzl-Singen: Eine lebendige Tradition",
      image: "/placeholder.svg?height=200&width=300&text=Gstanzl",
    },
    {
      id: 6,
      title: "Volksmusik und Jugend: Eine neue Generation entdeckt alte Traditionen",
      image: "/placeholder.svg?height=200&width=300&text=Junge+Volksmusiker",
    },
  ],
  comments: [
    {
      id: 1,
      user: "Josef M.",
      date: "14. September 2023",
      text: "Sehr informativer Artikel! Ich spiele selbst seit 5 Jahren Steirische und habe einiges Neues erfahren.",
      likes: 7,
    },
    {
      id: 2,
      user: "Anna B.",
      date: "13. September 2023",
      text: "Schön zu sehen, dass die Tradition der Steirischen Harmonika so lebendig ist. Mein Großvater war ein begeisterter Spieler.",
      likes: 5,
    },
  ],
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [commentText, setCommentText] = useState("")
  const { toast } = useToast()

  // In einer echten Implementierung würde hier der Beitrag basierend auf der ID geladen
  const post = blogPost

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Lesezeichen entfernt" : "Lesezeichen gesetzt",
      description: isBookmarked
        ? "Der Artikel wurde aus deinen Lesezeichen entfernt."
        : "Der Artikel wurde zu deinen Lesezeichen hinzugefügt.",
    })
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
    toast({
      title: isLiked ? "Gefällt mir entfernt" : "Gefällt mir hinzugefügt",
      description: isLiked ? "Du hast dein 'Gefällt mir' zurückgezogen." : "Danke für dein 'Gefällt mir'!",
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link kopiert!",
      description: "Der Link wurde in die Zwischenablage kopiert.",
    })
    setShowShareDialog(false)
  }

  const submitComment = () => {
    if (!commentText.trim()) return

    toast({
      title: "Kommentar gesendet",
      description: "Dein Kommentar wurde erfolgreich gesendet und wird nach Prüfung veröffentlicht.",
    })
    setCommentText("")
  }

  // Konvertiere Markdown zu HTML (vereinfachte Version)
  const renderMarkdown = (markdown: string) => {
    const html = markdown
      .replace(/## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/\n\n/g, '</p><p class="mb-4">')

    return `<p class="mb-4">${html}</p>`
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">
            Startseite
          </Link>
          {" > "}
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          {" > "}
          <span>{post.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link
              href={`/blog?category=${post.category}`}
              className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              {post.category}
            </Link>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{post.readTime} Lesezeit</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b">
          <div className="flex gap-2">
            <Button
              variant={isLiked ? "default" : "outline"}
              size="sm"
              onClick={toggleLike}
              className={isLiked ? "bg-primary hover:bg-primary/90" : ""}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              {isLiked ? "Gefällt mir" : "Gefällt mir"}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowShareDialog(true)}>
              <Share2 className="h-4 w-4 mr-2" />
              Teilen
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={toggleBookmark} className="flex items-center gap-2">
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`} />
            {isBookmarked ? "Gespeichert" : "Speichern"}
          </Button>
        </div>

        {/* Content */}
        <div className="mb-12">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
          </div>
        </div>

        {/* Author */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Über {post.author}</h3>
              <p className="text-gray-600">{post.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 folk-heading inline-block">Kommentare</h2>

          <div className="space-y-6 mb-8">
            {post.comments.map((comment) => (
              <div key={comment.id} className="border-b pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">{comment.user}</div>
                  <div className="text-sm text-gray-500">{comment.date}</div>
                </div>
                <p className="mb-2">{comment.text}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {comment.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    Antworten
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-medium mb-2">Kommentar hinzufügen:</h3>
            <textarea
              className="w-full border rounded-md p-3 min-h-[100px] mb-2"
              placeholder="Dein Kommentar..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <Button onClick={submitComment}>Kommentar senden</Button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 folk-heading inline-block">Ähnliche Artikel</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.relatedPosts.map(
              (relatedPost) =>
                (
                  <Card key={relatedPost.id} className="folk-car  => (
              <Card key={relatedPost.id} className="folk-card folk-card-hover overflow-hidden">
                <div className="relative h-40">\
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">
                    <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="text-primary hover:text-primary/80 text-sm flex items-center"
                  >
                    Weiterlesen <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
                ),
            )}
          </div>
        </div>

        {/* Share Dialog */}
        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Teile diesen Artikel</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                <Facebook className="h-6 w-6 text-blue-600" />
                <span className="text-xs">Facebook</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                <Twitter className="h-6 w-6 text-blue-400" />
                <span className="text-xs">Twitter</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                <Linkedin className="h-6 w-6 text-blue-700" />
                <span className="text-xs">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-2 h-auto py-4"
                onClick={copyToClipboard}
              >
                <Copy className="h-6 w-6 text-gray-600" />
                <span className="text-xs">Link kopieren</span>
              </Button>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <input
                type="text"
                value={typeof window !== "undefined" ? window.location.href : ""}
                readOnly
                className="flex-grow bg-transparent border-none focus:outline-none text-sm"
              />
              <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}

