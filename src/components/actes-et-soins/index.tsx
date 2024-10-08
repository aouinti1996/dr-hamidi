'use client'
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useState} from "react";


export default function SoinSection() {
    const categories = [
        {
            name: "Dermatologie générale",
            treatments: [
                "Surveillance ou ablation du grain de beauté",
                "Traitement du psoriasis",
                "Traitement des mycoses de la peau (Candidose, dermatophytie..)",
                "Prise en charge de l'acné",
                "Traitement molluscum contagiosum par azote liquide ou curetage",
                "Traitement des dermatoses allergiques",
                "Dermoscopie (microscopie dermatologique pour diagnostic et surveillance)",
                "Prise en charge des dermatoses bulleuses",
                "Dermatologie Pédiatrique",
                "Allergologie cutanée"
            ]
        },
        {
            name: "Traitements capillaires",
            treatments: [
                "Traitement des alopécies cicatricielles",
                "Traitement pelade",
                "Traitement des mycoses du cuir chevelu (Teignes)",
                "Mesothérapie cheveux",
                "Injection de PRP (Plasma riche en plaquettes)",
                "Traitement Médical et Chirurgical des Cheveux"
            ]
        },
        {
            name: "Traitements des ongles",
            treatments: [
                "Phénolisation ongle incarné",
                "Traitement des mycoses des ongles",
                "Traitement Médical et Chirurgical des Ongles",
                "Chirurgie de l'ongle incarné"
            ]
        },
        {
            name: "Dermatologie esthétique",
            treatments: [
                "Détatouage au laser 'Q-Switched' ou déclenché",
                "Traitement des angiomes par laser",
                "Traitement des rougeurs (érythrose / Couperose) au laser",
                "Ultra-sons focalisés de haute intensité (HIFU)",
                "Radiofréquences (avec ou sans microneedling)",
                "Traitement des rides au laser",
                "Comblement par acide hyaluronique",
                "Mésolift (Mésothérapie)",
                "Peeling superficiel / moyen / profond",
                "Microneedling",
                "L'Hydrafacial",
                "Laser CO2 fractionné",
                "Injection de botox",
                "Nettoyage de peau dermatologique",
                "Rhinoplastie médicale",
                "Epilation électrique",
                "Médecine Esthétique",
                "Epilation au laser",
                "Skin booster",
                "Profhilo",
                "Rajeunissement des mains",
                "Rajeunissement du cou",
                "Relissage fractionnel",
                "Restauration des volumes par radiesse",
                "La toxine botulique",
                "Traitement des pores dilatés",
                "Peeling au charbon",
                "Morpheus 8",
                "Mesotherapie visage",
                "Le rajeunissement au laser",
                "Lasers",
                "Laser vasculaire",
                "Injection de PRP et mésothérapie pour les cernes",
                "Injection éclaircissante",
                "Filler",
                "Le comblement",
                "Comblement des lèvres",
                "Comblement des sillons",
                "Carboxythérapie",
                "Botox"
            ]
        },
        {
            name: "Traitements spécifiques",
            treatments: [
                "Traitement des condylomes acuminés",
                "Cryothérapie",
                "Traitement des taches brunes lasers déclenchés (laser Q switched) ou des lampes intenses et pulsées (lampes flash)",
                "Traitement du vitiligo",
                "Traitement au laser des cicatrices d'acné / Brûlures / post-opératoires / Traumatiques",
                "Puvathérapie",
                "Traitement des taches brunes par peeling et mésothérapie",
                "Peeling pour traitement d'acné",
                "Mélasma",
                "Hyperpigmentation des aisselles",
                "Hyperpigmentation des coudes et des genoux",
                "Peeling des aisselles"
            ]
        },
        {
            name: "Chirurgie dermatologique",
            treatments: [
                "Chirurgie des kystes cutanés",
                "Traitement Médical et Chirurgical de la Peau",
                "Chirurgie des carcinomes basocellulaires",
                "Chirurgie cutanée et dermatologique"
            ]
        },
        {
            name: "Vénéréologie",
            treatments: [
                "Vénéréologie",
                "Traitement des Maladies Sexuellement Transmissibles"
            ]
        }
    ]
    const [, setActiveCategoryActes] = useState(categories[0].name)
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Actes et soins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                {/* Left: Image Grid */}
                <div className="grid grid-cols-2 gap-4  md:w-4/5">
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src="/soin/1.webp"
                            alt="Hair treatment"
                            fill
                            className="rounded-t-full rounded-bl-full object-cover"
                            priority
                        />
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src="/soin/2.webp"
                            alt="Skin examination"
                            fill
                            className="rounded-t-full rounded-br-full object-cover"
                        />
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src="/soin/3.webp"
                            alt="Facial treatment"
                            fill
                            className="rounded-tl-full rounded-b-full object-cover"
                        />
                    </div>
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src="/soin/4.webp"
                            alt="Aesthetic procedure"
                            fill
                            className="rounded-tr-full rounded-b-full object-cover"
                        />
                    </div>
                </div>

                {/* Right: Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceCard
                        title="Dermatologie générale"
                        description="Prise en charge complète des affections de la peau, des cheveux et des ongles."
                    />
                    <ServiceCard
                        title="Dermatologie esthétique"
                        description="Soins esthétiques personnalisés pour sublimer votre peau."
                    />
                    <ServiceCard
                        title="Traitement capillaire"
                        description="Solutions innovantes pour la santé et la beauté de vos cheveux."
                    />
                    <ServiceCard
                        title="Chirurgie dermatologique"
                        description="Interventions précises et sûres pour traiter les anomalies cutanées."
                    />
                    <ServiceCard
                        title="Traitement des ongles"
                        description="Soins et traitements adaptés pour des ongles en pleine santé."
                    />
                    <ServiceCard
                        title="Vénérologie"
                        description="Consultations spécialisées pour les infections sexuellement transmissibles."
                    />
                </div>

            </div>
            <div className="py-8">
                <Tabs defaultValue={categories[0].name} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 bg-[#F7F3EE] ">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.name}
                                value={category.name}
                                onClick={() => setActiveCategoryActes(category.name)}
                                className="px-3 py-2 text-sm rounded-full"
                            >
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {categories.map((category) => (
                        <TabsContent key={category.name} value={category.name}>
                            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                                <ul className="space-y-2">
                                    {category.treatments.map((treatment, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="mr-2 text-primary">•</span>
                                            {treatment}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}

function ServiceCard({title, description}: { title: string; description: string }) {
    return (
        <div
            className="bg-[#F7F3EE] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}
