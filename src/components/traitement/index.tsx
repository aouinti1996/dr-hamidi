"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function TraitementSection() {
    const [activeTab, setActiveTab] = useState('all')

    const treatments = [
        {
            id: 1,
            name: "Traitement de l'acné",
            category: 'aesthetic',
            before: '/traitement/ance-b.webp',
            after: '/traitement/ance-a.webp'
        },
        {
            id: 2,
            name: 'Greffe de cheveux',
            category: 'scalp',
            before: '/traitement/after1.webp',
            after: '/traitement/befor1.webp'
        },
        {
            id: 3,
            name: 'Traitement des ongles',
            category: 'nails',
            before: '/traitement/after2.webp',
            after: '/traitement/befor2.webp'
        },
        {
            id: 4,
            name: 'Rajeunissement laser',
            category: 'aesthetic',
            before: '/traitement/after1.webp',
            after: '/traitement/befor1.webp'
        },
    ]

    const filteredTreatments = activeTab === 'all' ? treatments : treatments.filter(t => t.category === activeTab)

    return (
        <section id="treatments" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                    Nos traitements
                </h2>

                {/* Button container with horizontal scrolling */}
                <div className="flex space-x-4 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap ">
                    <Button
                        onClick={() => setActiveTab('all')}
                        variant={activeTab === 'all' ? 'default' : 'outline'}
                    >
                        Tous
                    </Button>
                    <Button
                        onClick={() => setActiveTab('aesthetic')}
                        variant={activeTab === 'aesthetic' ? 'default' : 'outline'}
                    >
                        Esthétique
                    </Button>
                    <Button
                        onClick={() => setActiveTab('scalp')}
                        variant={activeTab === 'scalp' ? 'default' : 'outline'}
                    >
                        Cuir chevelu
                    </Button>
                    <Button
                        onClick={() => setActiveTab('nails')}
                        variant={activeTab === 'nails' ? 'default' : 'outline'}
                    >
                        Ongles
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {filteredTreatments.map((treatment) => (
                        <div key={treatment.id} className="border rounded-lg overflow-hidden">
                            <div className="grid grid-cols-2">
                                <div className="relative h-48">
                                    <Image src={treatment.before} alt={`Avant ${treatment.name}`} layout="fill"
                                           objectFit="cover"/>
                                    <div
                                        className="absolute top-2 left-2 bg-[#EBE5DE] px-2 py-1 text-sm font-semibold rounded-full">Avant
                                    </div>
                                </div>
                                <div className="relative h-48">
                                    <Image src={treatment.after} alt={`Après ${treatment.name}`} layout="fill"
                                           objectFit="cover"/>
                                    <div
                                        className="absolute top-2 right-2 bg-[#EBE5DE] px-2 py-1 text-sm font-semibold rounded-full">Après
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">{treatment.name}</h3>
                                <p className="text-sm text-gray-600">Résultats visibles après traitement par le Dr. Hamidi</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
