import { useEffect } from "react";

export default function ChiSonoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div
        className="relative py-32 text-center"
        style={{
          backgroundImage:
            "url(/assets/intuizione-019d4f1a-343e-733c-a92d-cc5c6c7678de.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-xs text-gold uppercase tracking-widest mb-4 font-body">
            L&#39;Autore
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            Marco Persico
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-16 bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
            <div className="h-px w-16 bg-gold/50" />
          </div>
          <p className="font-serif italic text-lg text-gold/80">
            Esploratore all&#39;incrocio tra fisica, filosofia e coscienza
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Portrait / Feature Image */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden border border-gold/20 shadow-card-dark mb-6">
                <img
                  src="/assets/dall_e_2024-11-16_18.12.01_-_un_immagine_concettuale_che_rappresenta_l_unit_tra_mente_sensi_e_spirit-019d4f1a-3b0b-71bc-ae39-940b38606101.webp"
                  alt="Marco Persico"
                  className="w-full object-cover"
                />
              </div>
              {/* Topics sidebar */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-serif text-sm text-gold uppercase tracking-wider mb-4">
                  Argomenti
                </h3>
                <ul className="space-y-2">
                  {[
                    "Fisica Quantistica",
                    "Filosofia della mente",
                    "Spiritualit\u00e0 comparata",
                    "Coscienza e materia",
                    "Metafisica occidentale",
                  ].map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm text-muted-foreground font-body"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-2 space-y-8">
            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-2">
              <p className="font-serif italic text-xl text-foreground/90 leading-relaxed">
                &#x22;Tra le equazioni della fisica e le parole dei mistici, ho
                trovato un territorio comune: la domanda sull&#39;origine della
                realt\u00e0.&#x22;
              </p>
            </blockquote>

            <div className="space-y-6 font-body text-foreground/80 leading-relaxed">
              <p>
                Mi chiamo{" "}
                <strong className="text-foreground font-semibold">
                  Marco Persico
                </strong>{" "}
                e da oltre vent&#39;anni esploro la zona di confine tra scienze
                fisiche e ricerca spirituale. Nato con una profonda
                curiosit\u00e0 per i meccanismi nascosti della realt\u00e0, ho
                studiato fisica e filosofia cercando sempre un filo conduttore
                tra queste due discipline apparentemente distanti.
              </p>

              <p>
                Il mio percorso ha attraversato la meccanica quantistica
                &#x2014; con la sua inquietante dissoluzione del concetto di
                oggetto separato &#x2014; le tradizioni filosofiche orientali e
                occidentali, e la grande corrente del pensiero mistico europeo.
                David Bohm, Krishnamurti, Platone, Aristotele, la fisica del
                campo: tutti testimoni di un&#39;unica, grande domanda.
              </p>

              <p>
                <em className="font-serif italic">Materia Prima</em> \u00e8 il
                nome che ho scelto per questo spazio. Nella tradizione
                alchemica, la <em>materia prima</em> \u00e8 la sostanza
                indifferenziata da cui tutto emerge: la potenzialit\u00e0 pura,
                prima che il mondo prenda forma. \u00c8 anche la domanda che
                continua a guidare la mia ricerca: cosa c&#39;\u00e8 al di sotto
                della materia?
              </p>

              <p>
                In questo blog condivido riflessioni, analisi e intuizioni che
                nascono dall&#39;incontro tra la precisione della fisica e la
                profondit\u00e0 della meditazione spirituale. Non cerco risposte
                definitive &#x2014; cerco domande pi\u00f9 precise.
              </p>
            </div>

            {/* Second quote highlight */}
            <div className="bg-navy-mid border border-gold/15 rounded-lg p-8 text-center">
              <p className="font-serif italic text-lg text-gold/80 leading-relaxed">
                &#x22;La fisica ci dice com&#39;\u00e8 fatto il mondo. La
                spiritualit\u00e0 ci chiede perch\u00e9 esiste. La filosofia ci
                insegna a tollerare la tensione tra le due risposte.&#x22;
              </p>
            </div>

            <div className="space-y-6 font-body text-foreground/80 leading-relaxed">
              <p>
                Sono convinto che la crisi della modernit\u00e0 &#x2014;
                l&#39;alienazione, il nichilismo, la perdita di senso &#x2014;
                derivi in parte dall&#39;aver separato artificialmente il sapere
                scientifico dall&#39;esperienza interiore. I grandi fisici del
                Novecento &#x2014; Bohr, Heisenberg, Schr\u00f6dinger, Bohm
                &#x2014; avvertivano questa tensione e cercavano ponti. Il mio
                lavoro vuole continuare quella ricerca.
              </p>

              <p>
                Quando non scrivo, medito, leggo e cammino in montagna &#x2014;
                dove la pietra, l&#39;acqua e il silenzio ricordano che la
                materia ha una sua saggezza.
              </p>
            </div>

            {/* Image closing */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src="/assets/dio-019d4f1a-45aa-716f-90d9-8666862f85e5.png"
                  alt="Il Divino nella visione di Marco Persico"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src="/assets/intuizione-019d4f1a-343e-733c-a92d-cc5c6c7678de.jpg"
                  alt="L'Intuizione"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
