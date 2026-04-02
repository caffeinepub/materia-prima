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
            "url(/assets/sole-019d4fd8-9260-763a-a83a-4972d48d5444.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-4 font-body font-black text-black">
            L&#39;Autore
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-black mb-4">
            Marco Persico
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-16 bg-black/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/70" />
            <div className="h-px w-16 bg-black/50" />
          </div>
          <p className="font-serif text-xl font-black text-black">
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
                    "Spiritualità comparata",
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
            <div className="space-y-6 font-body text-foreground/80 leading-relaxed">
              <p>
                Mi chiamo{" "}
                <strong className="text-foreground font-semibold">
                  Marco Persico
                </strong>{" "}
                e da oltre 5 anni esploro la zona di confine tra scienze fisiche
                e ricerca spirituale. Nato con una profonda curiosità per i
                meccanismi nascosti della realtà, mi sono laureato in ingegneria
                meccanica nel 2017 alla TU Delft in Olanda per poi sentire la
                necessità di andare oltre queste materie che sono utili
                solamente per fini pratici.
              </p>

              <p>
                Il mio percorso ha attraversato la psicologia del profondo e la
                teoria quantistica — con la sua dissoluzione del concetto di
                oggetto separato — le tradizioni filosofiche orientali e
                occidentali, e la grande corrente del pensiero mistico europeo.
                David Bohm, Krishnamurti per giungere a Guénon che è uno dei
                pochi autori moderni che riprende con fedeltà e autenticità la
                metafisica aristotelica che oramai viene considerata superata e
                dunque scartata.
              </p>

              <p>
                <em className="font-serif italic">Materia Prima</em> è il nome
                che ho scelto per questo spazio. Gli scolastici si riferivano
                alla materia prima come sostanza indifferenziata da cui tutto
                emerge. Guénon collega giustamente questo concetto alla Prakriti
                della tradizione hindu.
              </p>

              <p>
                In questo blog condivido riflessioni, analisi e intuizioni per
                chi, come me, è del parere che la scienza moderna è incompleta.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-2">
              <p className="font-serif italic text-xl text-foreground/90 leading-relaxed">
                «La scienza moderna ci insegna il come, le scienze filosofiche e
                l'esoterismo invece il perché.»
              </p>
            </blockquote>

            <div className="space-y-6 font-body text-foreground/80 leading-relaxed">
              <p>
                Sono convinto che la crisi della modernità — dovuta
                all'alienazione, al nichilismo, alla perdita di senso — derivi
                in parte dall'aver separato artificialmente il sapere
                scientifico dall'esperienza interiore. I grandi fisici del
                Novecento — Bohr, Heisenberg, Schrödinger, Bohm — avvertivano
                questa tensione e cercavano ponti. Il mio lavoro vuole
                continuare quella ricerca.
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
