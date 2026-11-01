import type { ServiceSlug } from "@/data/lockout";
import type { Location } from "@/data/locations";

export type FaqItem = { q: string; a: string };

export const generalFaq: FaqItem[] = [
  {
    q: "Was sollte ich am Telefon angeben?",
    a: "Nennen Sie Ihre genaue Adresse, ob die Haus- oder Wohnungstür betroffen ist und ob die Tür nur zugefallen oder zusätzlich abgeschlossen wurde. Diese drei Angaben verändern die Einschätzung am stärksten.",
  },
  {
    q: "Wird vorab ein Preis genannt?",
    a: "Der Gesamtpreis hängt von Türzustand, Anfahrt, Einsatzzeit und Material ab. Fragen Sie vor der Beauftragung nach einem Angebot einschließlich Anfahrt und möglicher Zuschläge, damit vor Arbeitsbeginn Klarheit besteht.",
  },
  {
    q: "Muss ich nachweisen, dass ich dort wohne?",
    a: "Ja. Vor einer Türöffnung ist zu klären, dass Sie berechtigt sind, die Wohnung zu betreten. Halten Sie dafür einen Ausweis und nach Möglichkeit einen Nachweis zur Wohnung bereit, etwa einen Mietvertrag oder eine Meldebescheinigung.",
  },
];

/**
 * Five answers per service. The city×service pages rotate three of these with a
 * city-dependent offset and prepend a city-specific question, so no two generated
 * pages ship the same FAQ set — and no FAQPage payload is duplicated across the site.
 */
export const serviceFaq: Record<ServiceSlug, FaqItem[]> = {
  "wohnungstuer-zugefallen": [
    {
      q: "Woran erkenne ich, ob die Tür nur zugefallen ist?",
      a: "Lässt sich die Klinke normal bewegen und die Tür bleibt trotzdem geschlossen, ist sie in der Regel nur zugefallen. Blockiert die Klinke, wurde zusätzlich abgeschlossen.",
    },
    {
      q: "Nimmt die Tür bei der Öffnung Schaden?",
      a: "Ziel ist eine Öffnung, bei der Tür, Zarge und Schloss unbeschädigt bleiben. Ob das gelingt, hängt vom Türzustand und vom verbauten Schloss ab. Lässt sich ein Eingriff am Zylinder nicht vermeiden, wird das vorher besprochen.",
    },
    {
      q: "Muss der Zylinder nach dem Aussperren getauscht werden?",
      a: "Allein durch das Zufallen der Tür entsteht kein Grund für einen Austausch. Nötig wird er erst, wenn der Zylinder beschädigt ist oder ein Schlüssel fehlt.",
    },
    {
      q: "Was mache ich, bis jemand da ist?",
      a: "Lassen Sie die Tür unverändert und versuchen Sie keine eigenen Öffnungsversuche mit Karten oder Werkzeug. Beschädigungen an Falle oder Zylinder erhöhen den Aufwand meist deutlich.",
    },
    {
      q: "Spielt es eine Rolle, ob es eine Haus- oder Wohnungstür ist?",
      a: "Ja. Haustüren haben häufig andere Schlösser und Mehrfachverriegelungen als Wohnungstüren. Geben Sie deshalb an, um welche Tür es geht.",
    },
  ],
  "tuer-abgeschlossen": [
    {
      q: "Warum ist eine abgeschlossene Tür aufwendiger?",
      a: "Beim Abschließen fährt der Riegel vollständig in das Schließblech. Die Tür ist damit mechanisch fester verschlossen als eine nur zugefallene Tür, was ein anderes Vorgehen erfordert.",
    },
    {
      q: "Woher weiß ich, wie oft abgeschlossen wurde?",
      a: "Bei vielen Schlössern lässt sich der Schlüssel mehrfach drehen. Wenn Sie wissen, wie oft gedreht wurde, nennen Sie es – es hilft bei der Einschätzung des Aufwands.",
    },
    {
      q: "Kann die Tür geöffnet werden, wenn innen kein Schlüssel steckt?",
      a: "Ob eine Öffnung möglich ist, hängt vom Schloss, vom Zylinder und vom Türzustand ab. Das wird vor Ort geprüft; eine pauschale Zusage ist vorab nicht möglich.",
    },
    {
      q: "Was ist bei einer Mehrfachverriegelung zu beachten?",
      a: "Mehrfachverriegelungen greifen an mehreren Punkten in die Zarge und verhalten sich anders als ein einfaches Einsteckschloss. Wenn Ihre Tür eine hat, geben Sie das bitte an.",
    },
    {
      q: "Kann ich den Preis vorab erfahren?",
      a: "Eine Einschätzung ist am Telefon möglich, sobald Türzustand und Schlossart beschrieben sind. Der verbindliche Gesamtpreis wird vor dem Auftrag besprochen.",
    },
  ],
  "schluessel-steckt-innen": [
    {
      q: "Warum lässt sich die Tür mit dem Zweitschlüssel nicht öffnen?",
      a: "Ein innen steckender Schlüssel blockiert den Zylinder. Bei einem gewöhnlichen Doppelzylinder lässt sich dann von außen nicht mehr schließen oder öffnen.",
    },
    {
      q: "Was ist eine Not- und Gefahrenfunktion?",
      a: "Zylinder mit dieser Funktion lassen sich von außen auch dann bedienen, wenn innen ein Schlüssel steckt. Ob Ihr Zylinder sie hat, ist von außen nicht immer erkennbar und wird vor Ort geprüft.",
    },
    {
      q: "Ist die Tür zusätzlich abgeschlossen?",
      a: "Das hängt davon ab, ob der innen steckende Schlüssel gedreht wurde. Steht er gerade, ist die Tür meist nur zugefallen; wurde er gedreht, ist zusätzlich abgeschlossen.",
    },
    {
      q: "Bleibt der Zylinder erhalten?",
      a: "Ziel ist, den vorhandenen Zylinder zu erhalten. Ob das möglich ist, zeigt sich bei der Prüfung vor Ort. Ein Austausch wird vorher besprochen.",
    },
    {
      q: "Kann ich den Schlüssel von innen selbst herausbekommen?",
      a: "In der Regel nicht, solange die Tür verschlossen ist. Eigene Versuche mit Werkzeug können den Zylinder beschädigen und den Aufwand erhöhen.",
    },
  ],
  "schloss-defekt": [
    {
      q: "Mein Schlüssel ist abgebrochen – was nun?",
      a: "Versuchen Sie nicht, das Bruchstück selbst zu entfernen. Je nachdem, wie tief es im Zylinder sitzt und ob es sich noch drehen lässt, unterscheidet sich das weitere Vorgehen.",
    },
    {
      q: "Muss immer der ganze Zylinder getauscht werden?",
      a: "Nicht zwingend. Manchmal ist nur der Zylinder betroffen, manchmal das Einsteckschloss. Welches Bauteil ersetzt werden muss, zeigt die Prüfung vor Ort.",
    },
    {
      q: "Welche Angaben braucht es für einen Ersatzzylinder?",
      a: "Entscheidend sind die Zylinderlänge, gemessen ab der Mitte der Stulpschraube nach innen und außen, sowie die Bauform und die gewünschte Schließfunktion.",
    },
    {
      q: "Der Schlüssel hakt seit Wochen. Ist das ein Defekt?",
      a: "Ein hakender Schlüssel ist oft ein Anzeichen für Verschleiß am Zylinder oder für eine Tür, die sich gesetzt hat. Beschreiben Sie, seit wann es auftritt – das hilft bei der Einordnung.",
    },
    {
      q: "Was kostet ein neuer Zylinder?",
      a: "Die Materialkosten hängen von Länge, Bauform und Ausführung des Zylinders ab. Sie werden vor dem Einbau gesondert besprochen und nicht pauschal zugesagt.",
    },
  ],
  "schluessel-verloren": [
    {
      q: "Muss ich den Zylinder nach einem Schlüsselverlust tauschen?",
      a: "Technisch zwingend ist es nicht, sicherheitsrelevant aber oft schon: Der verlorene Schlüssel passt weiterhin. Bei Mietwohnungen kann ein Austausch zudem vertraglich gefordert sein.",
    },
    {
      q: "Was gilt bei einer Schließanlage?",
      a: "Gehört der Schlüssel zu einer Schließanlage, kann ein Austausch mehrere Zylinder betreffen. Klären Sie das vor der Beauftragung mit Vermieter oder Hausverwaltung.",
    },
    {
      q: "Zahlt meine Versicherung den Austausch?",
      a: "Das richtet sich nach Ihrem Vertrag. Hausrat- oder Haftpflichtversicherungen behandeln Schlüsselverlust unterschiedlich; fragen Sie dort nach, bevor Sie einen Austausch beauftragen.",
    },
    {
      q: "Was braucht es für die Öffnung?",
      a: "Vor der Öffnung ist zu klären, dass Sie berechtigt sind, die Wohnung zu betreten. Halten Sie einen Ausweis und nach Möglichkeit einen Nachweis zur Wohnung bereit.",
    },
    {
      q: "Soll ich den Verlust melden?",
      a: "Bei einem Schlüssel mit Adressbezug oder einem Anlagenschlüssel ist eine Meldung an Vermieter oder Verwaltung sinnvoll. Bei Diebstahl kommt zusätzlich eine Anzeige in Betracht.",
    },
  ],
};

/**
 * One city-specific question plus three service answers chosen at a city-dependent
 * offset. Fixes the Dutch original, which renders the identical three-item FAQ — and
 * therefore the identical FAQPage payload — on every one of its 88 city×service pages.
 */
export function cityServiceFaq(location: Location, slug: ServiceSlug, cityItem: FaqItem): FaqItem[] {
  const pool = serviceFaq[slug];
  const offset = (location.slug.length + slug.length) % pool.length;
  return [
    cityItem,
    pool[offset],
    pool[(offset + 1) % pool.length],
    pool[(offset + 2) % pool.length],
  ];
}

/** Every answer on the site, for the /faq/ page. */
export const allFaq: FaqItem[] = [...generalFaq, ...Object.values(serviceFaq).flat()];
