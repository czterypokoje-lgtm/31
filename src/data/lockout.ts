import { serviceFaq } from "@/data/faq";

export type ServiceSlug =
  | "wohnungstuer-zugefallen"
  | "tuer-abgeschlossen"
  | "schluessel-steckt-innen"
  | "schloss-defekt"
  | "schluessel-verloren"
  | "schluessel-abgebrochen"
  | "schluessel-nachmachen";

export type Service = {
  slug: ServiceSlug;
  /** Full name: page title, list rows, schema serviceType. */
  name: string;
  /** Lowercase fragment for headings: "Türöffnung bei zugefallener Tür". */
  shortName: string;
  /**
   * German declines after prepositions, so a single fragment cannot be spliced into
   * generated sentences: "bei defektes Schloss" is wrong, "bei einem defekten Schloss"
   * is right. Templates pick the case the preposition governs.
   */
  caseAkk: string;
  caseDat: string;
  /** Hero headline. Soft hyphens (­) let long German compounds break inside the display face. */
  heroHeadline: string;
  heroSub: string;
  detail: string;
  /**
   * The zugefallen/abgeschlossen distinction. Competitor research (docs/seo-research.md)
   * shows Ludwig and Adler both rank on exactly this split — it is the single highest-value
   * piece of copy on a service page, and the question every caller is actually asking.
   */
  conditionNote: string;
  /** Heading above conditionNote. "Zugefallen oder abgeschlossen?" is wrong for shop services. */
  conditionHeading: string;
  /** False for counter services: no callout timeline, no door-state framing. */
  isCallout: boolean;
  /** null renders as "Preis auf Anfrage" and emits no Offer schema. See lib/pricing.ts. */
  priceFrom: number | null;
  whatWeDo: string[];
  includesCylinderSection: boolean;
  heroImage: string;
  heroImageAlt: string;
};

export const services: Service[] = [
  {
    slug: "wohnungstuer-zugefallen",
    name: "Wohnungstür zugefallen",
    shortName: "zugefallene Tür",
    caseAkk: "eine zugefallene Tür",
    caseDat: "einer zugefallenen Tür",
    heroHeadline: "Tür zugefallen? Wir öffnen sie.",
    heroSub:
      "Die Tür ist ins Schloss gefallen und der Schlüssel liegt innen. Die Falle hält die Tür zu, abgeschlossen wurde sie nicht – das ist der häufigste Grund für eine Türöffnung und in der Regel der geringste Aufwand.",
    detail:
      "Bei einer zugefallenen Tür hält nur die Schlossfalle das Türblatt im Rahmen. Der Riegel ist nicht ausgefahren, weil nicht mit dem Schlüssel abgeschlossen wurde. Für die Einschätzung am Telefon ist genau diese Unterscheidung wichtig: Beschreiben Sie, ob Sie die Tür lediglich hinter sich zugezogen haben oder ob zusätzlich abgeschlossen wurde.",
    conditionNote:
      "Zugefallen heißt: Sie haben die Tür hinter sich zugezogen, ohne den Schlüssel zu drehen. Abgeschlossen heißt: Der Riegel wurde mit dem Schlüssel ausgefahren. Beide Fälle erfordern ein anderes Vorgehen und einen anderen Aufwand. Wenn Sie unsicher sind, prüfen Sie, ob sich die Klinke noch normal bewegen lässt.",
    conditionHeading: "Zugefallen oder abgeschlossen?",
    isCallout: true,
    priceFrom: 69,
    whatWeDo: [
      "Türzustand am Telefon klären: zugefallen, abgeschlossen oder Schlüssel steckt innen",
      "Öffnungsversuch mit dem Ziel, Tür, Zarge und Schloss unbeschädigt zu lassen",
      "Rückmeldung vor Arbeitsbeginn, falls sich der Aufwand anders darstellt als beschrieben",
      "Legitimation: Bitte halten Sie einen Ausweis und einen Nachweis zur Wohnung bereit",
    ],
    includesCylinderSection: false,
    heroImage: "/photos/services/tueroeffnung.webp",
    heroImageAlt: "Hand mit Schlüssel an einem Türschloss",
  },
  {
    slug: "tuer-abgeschlossen",
    name: "Tür abgeschlossen",
    shortName: "abgeschlossene Tür",
    caseAkk: "eine abgeschlossene Tür",
    caseDat: "einer abgeschlossenen Tür",
    heroHeadline: "Tür abge­schlossen?",
    heroSub:
      "Wurde die Tür mit dem Schlüssel abgeschlossen, ist der Riegel ausgefahren. Das ist ein anderer Fall als eine nur zugefallene Tür und erfordert eine eigene Einschätzung von Türzustand und Aufwand.",
    detail:
      "Eine abgeschlossene Tür ist mechanisch fester verschlossen als eine zugefallene: Der Riegel greift vollständig in das Schließblech. Wie aufwendig die Öffnung wird, hängt vom Schloss, vom Zylinder und vom Zustand der Tür ab. Deshalb werden Aufwand und Gesamtpreis vor dem Auftrag besprochen und nicht pauschal zugesagt.",
    conditionNote:
      "Prüfen Sie vor dem Anruf, ob die Tür abgeschlossen oder nur zugefallen ist: Lässt sich die Klinke normal bewegen und die Tür bleibt trotzdem zu, ist sie in der Regel nur zugefallen. Blockiert die Klinke, wurde meist abgeschlossen. Diese Angabe verändert die Einschätzung deutlich.",
    conditionHeading: "Zugefallen oder abgeschlossen?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Türzustand, Schlossart und Zylinder am Telefon so genau wie möglich erfassen",
      "Einschätzung von Aufwand und Gesamtpreis vor der Beauftragung",
      "Öffnung mit dem Ziel, vorhandene Technik weiter nutzbar zu halten",
      "Falls ein Austausch nötig wird, wird er vorher besprochen und nicht stillschweigend ausgeführt",
    ],
    includesCylinderSection: true,
    heroImage: "/demir/schlossarbeit.jpg",
    heroImageAlt: "Arbeit an einem Türschloss",
  },
  {
    slug: "schluessel-steckt-innen",
    name: "Schlüssel steckt innen",
    shortName: "innen steckender Schlüssel",
    caseAkk: "einen innen steckenden Schlüssel",
    caseDat: "einem innen steckenden Schlüssel",
    heroHeadline: "Schlüssel steckt von innen.",
    heroSub:
      "Steckt der Schlüssel von innen im Zylinder, blockiert er den Zylinder von außen. Auch mit einem zweiten Schlüssel lässt sich die Tür dann meist nicht mehr öffnen.",
    detail:
      "Ein innen steckender Schlüssel verhindert, dass der Zylinder von außen bedient werden kann. Ob der Schlüssel dabei gedreht wurde und ob zusätzlich abgeschlossen ist, verändert den Aufwand. Geben Sie am Telefon bitte an, ob der Schlüssel gerade steht oder gedreht wurde, und ob die Tür zusätzlich abgeschlossen ist.",
    conditionNote:
      "Wichtig für die Einschätzung: Steht der innen steckende Schlüssel gerade, ist die Tür meist nur zugefallen. Wurde er gedreht, ist zusätzlich abgeschlossen. Bitte nennen Sie außerdem, ob es sich um einen Doppelzylinder mit Not- und Gefahrenfunktion handelt, falls Ihnen das bekannt ist.",
    conditionHeading: "Gedreht oder gerade?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Klären, ob der innen steckende Schlüssel gedreht wurde oder gerade steht",
      "Prüfen, ob der Zylinder eine Not- und Gefahrenfunktion hat",
      "Öffnung mit dem Ziel, den vorhandenen Zylinder nach Möglichkeit zu erhalten",
      "Besprechen, ob nach der Öffnung ein Zylindertausch sinnvoll ist",
    ],
    includesCylinderSection: true,
    heroImage: "/photos/services/schluessel-steckt-innen.webp",
    heroImageAlt: "Schließzylinder mit Schlüssel als Beispiel für die Bauform",
  },
  {
    slug: "schloss-defekt",
    name: "Schloss defekt",
    shortName: "defektes Schloss",
    caseAkk: "ein defektes Schloss",
    caseDat: "einem defekten Schloss",
    heroHeadline: "Schloss defekt? Erst prüfen.",
    heroSub:
      "Lässt sich der Schlüssel nicht mehr drehen, hakt der Zylinder oder ist der Schlüssel abgebrochen, liegt häufig ein Defekt an Zylinder oder Schloss vor. Dann geht es nicht nur ums Öffnen, sondern auch um den Ersatz.",
    detail:
      "Bei einem defekten Schloss ist nach der Öffnung meist ein Austausch von Zylinder oder Schloss nötig. Welches Bauteil ersetzt werden muss, zeigt sich erst bei der Prüfung vor Ort. Für den Ersatz sind die Zylinderlänge, die Bauform und die gewünschte Schließfunktion entscheidend – diese Punkte werden vor dem Einbau besprochen.",
    conditionNote:
      "Ein defektes Schloss ist nicht dasselbe wie eine verschlossene Tür. Beschreiben Sie bitte, ob sich der Schlüssel noch bewegen lässt, ob er abgebrochen ist und ob das Problem schon länger besteht. Daraus ergibt sich, ob ein Austausch wahrscheinlich ist und mit welchem Materialaufwand zu rechnen ist.",
    conditionHeading: "Defekt oder nur schwergängig?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Fehlerbild aufnehmen: hakender Zylinder, abgebrochener Schlüssel oder blockiertes Schloss",
      "Prüfen, ob Zylinder, Schloss oder beides betroffen ist",
      "Zylinderlänge und Bauform bestimmen, bevor über einen Ersatz entschieden wird",
      "Materialkosten und Austausch vor der Ausführung besprechen",
    ],
    includesCylinderSection: true,
    heroImage: "/demir/zylinder-aufbohren.webp",
    heroImageAlt: "Defekter Schließzylinder einer Haustür wird fachgerecht aufgebohrt",
  },
  {
    slug: "schluessel-verloren",
    name: "Schlüssel verloren",
    shortName: "verlorener Schlüssel",
    caseAkk: "einen verlorenen Schlüssel",
    caseDat: "einem verlorenen Schlüssel",
    heroHeadline: "Schlüssel verloren?",
    heroSub:
      "Ist der Schlüssel verloren gegangen, geht es um zwei Fragen: Wie kommen Sie wieder in die Wohnung, und was passiert anschließend mit dem Schließzylinder?",
    detail:
      "Nach einem Schlüsselverlust stellt sich neben der Öffnung die Frage nach der Absicherung. Solange der verlorene Schlüssel im Umlauf ist, passt er weiterhin in den vorhandenen Zylinder. Ob ein Austausch sinnvoll oder – etwa bei einer Mietwohnung oder einer Schließanlage – vertraglich erforderlich ist, sollte mit Vermieter oder Verwaltung geklärt werden.",
    conditionNote:
      "Ein verlorener Schlüssel ist ein anderer Fall als eine zugefallene Tür: Hier kommt zur Öffnung die Frage des Zylindertauschs hinzu. Gehört der Schlüssel zu einer Schließanlage, betrifft ein Austausch unter Umständen mehrere Zylinder. Klären Sie das vor der Beauftragung mit Vermieter oder Hausverwaltung.",
    conditionHeading: "Öffnen – und dann absichern?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Öffnung der Wohnung, damit Sie zunächst wieder hineinkommen",
      "Besprechen, ob der vorhandene Zylinder bestehen bleiben kann",
      "Hinweis auf Schließanlagen: Ein Austausch kann mehrere Zylinder betreffen",
      "Legitimation vor der Öffnung: Ausweis und Nachweis zur Wohnung bereithalten",
    ],
    includesCylinderSection: true,
    heroImage: "/demir/gallery-mechanism.webp",
    heroImageAlt: "Geöffneter Schließmechanismus einer Tür",
  },
  {
    slug: "schluessel-abgebrochen",
    name: "Schlüssel abgebrochen",
    shortName: "abgebrochener Schlüssel",
    caseAkk: "einen abgebrochenen Schlüssel",
    caseDat: "einem abgebrochenen Schlüssel",
    heroHeadline: "Schlüssel abge­brochen?",
    heroSub:
      "Ein Teil des Schlüssels steckt noch im Zylinder, der Rest ist in der Hand geblieben. Ziehen Sie nicht weiter daran – jeder Versuch kann das Bruchstück tiefer schieben.",
    detail:
      "Schlüssel brechen selten ohne Vorwarnung. Meist hakt das Schloss schon länger, der Schlüssel ist verschlissen oder die Tür hat sich gesetzt. Entscheidend für den Aufwand ist, wie tief das Bruchstück im Zylinder sitzt, ob es sich noch drehen lässt und ob die Tür zusätzlich abgeschlossen wurde. Lässt sich das Reststück schonend ziehen, kann der Zylinder oft erhalten bleiben.",
    conditionNote:
      "Ein abgebrochener Schlüssel ist etwas anderes als ein verlorener: Hier ist das Schloss selbst blockiert. Sagen Sie am Telefon, ob ein Teil des Schlüssels noch heraussteht, ob sich der Zylinder bewegen lässt und ob die Tür nur zugefallen oder abgeschlossen ist.",
    conditionHeading: "Abgebrochen oder verloren?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Lage des Bruchstücks beurteilen, bevor am Zylinder gearbeitet wird",
      "Reststück nach Möglichkeit ziehen, statt den Zylinder sofort zu ersetzen",
      "Prüfen, ob der Zylinder nach der Entfernung weiter verwendbar ist",
      "Falls ein Austausch nötig wird: Länge, Bauform und Kosten vorher besprechen",
    ],
    includesCylinderSection: true,
    heroImage: "/demir/service-defect.webp",
    heroImageAlt: "Arbeit an einem defekten Türzylinder",
  },
  {
    slug: "schluessel-nachmachen",
    name: "Schlüssel nachmachen",
    shortName: "Schlüssel zum Nachmachen",
    caseAkk: "einen nachzumachenden Schlüssel",
    caseDat: "einem nachzumachenden Schlüssel",
    heroHeadline: "Schlüssel nach­machen lassen.",
    heroSub:
      "Wohnungs-, Haus- und Briefkastenschlüssel werden im Ladengeschäft in Sindelfingen direkt angefertigt – mit eigener Fräsmaschine und einem großen Rohlingsbestand.",
    detail:
      "Ein Zweitschlüssel ist deutlich günstiger als eine Türöffnung. Für die Anfertigung bringen Sie den Originalschlüssel mit; vom Rohling hängt ab, ob sofort gefräst werden kann. Bei Schlüsseln mit Sicherungskarte – etwa aus einer Schließanlage – ist die Karte erforderlich, denn der Hersteller gibt solche Schlüssel nur gegen Legitimation frei.",
    conditionNote:
      "Nicht jeder Schlüssel darf ohne Weiteres kopiert werden. Steht eine Nummer auf dem Schlüssel oder gehört er zu einer Schließanlage, ist meist eine Sicherungskarte nötig. Bringen Sie diese mit, sonst ist eine Anfertigung nicht möglich.",
    conditionHeading: "Darf Ihr Schlüssel kopiert werden?",
    isCallout: false,
    priceFrom: null,
    whatWeDo: [
      "Anfertigung im Ladengeschäft an der Mercedesstraße in Sindelfingen",
      "Prüfen, ob für Ihr Profil ein passender Rohling vorrätig ist",
      "Bei Sicherungskarten-Systemen: Legitimation vor der Anfertigung klären",
      "Neuen Schlüssel vor Ort am Schloss testen, bevor Sie gehen",
    ],
    includesCylinderSection: false,
    heroImage: "/demir/schluessel-fraesen-detail.webp",
    heroImageAlt: "Schlüssel wird auf der Fräsmaschine angefertigt",
  },

];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Per-service FAQ lives in data/faq.ts so city pages can rotate it without duplicating answers. */
export const serviceFaqFor = (slug: ServiceSlug) => serviceFaq[slug];