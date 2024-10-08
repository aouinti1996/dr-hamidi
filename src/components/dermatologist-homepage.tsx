'use client'

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Clock, Mail, MapPin, Phone, Star} from "lucide-react"
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import SpecialtiesSection from "@/components/specialite";
import SoinSection from "@/components/actes-et-soins";
import TraitementSection from "@/components/traitement";


export function DermatologistHomepageComponent() {


    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">
                <HeroSection/>
                <AboutSection/>
                <SpecialtiesSection/>
                <SoinSection/>
                <TraitementSection/>

                <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Ce que disent nos patients
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Le Dr. Hamidi a complètement transformé ma peau. Son expertise en dermatologie
                                    esthétique est incroyable. Je me sens tellement plus confiante maintenant !"
                                </p>

                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "J'ai consulté le Dr. Hamidi pour un problème d'ongles récurrent. Son diagnostic
                                    précis et le traitement qu'elle m'a prescrit ont résolu le problème en quelques
                                    semaines."
                                </p>

                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                    <Star className="text-yellow-400 w-5 h-5"/>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Le Dr. Hamidi est non seulement une excellente dermatologue, mais elle est aussi
                                    très à l'écoute et rassurante. Je la recommande vivement !"
                                </p>
                                {/* <div className="flex items-center">
                                    <Image
                                        src="/placeholder.svg?height=50&width=50"
                                        alt="Marie C."
                                        width={50}
                                        height={50}
                                        className="rounded-full mr-4"
                                    />
                                    <p className="font-semibold">Marie C.</p>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Questions fréquentes
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Quels types de traitements proposez-vous ?</h3>
                                <p className="text-gray-600">
                                    Nous proposons une large gamme de traitements dermatologiques, incluant les soins du
                                    cuir chevelu et des ongles,
                                    la dermatologie esthétique et laser, ainsi que le diagnostic et le traitement des
                                    maladies sexuellement transmissibles.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Les consultations sont-elles remboursées ?</h3>
                                <p className="text-gray-600">
                                    Oui, les consultations sont remboursées par la sécurité sociale. Certains
                                    traitements esthétiques peuvent ne pas être pris en charge.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Combien de temps dure une consultation ?</h3>
                                <p className="text-gray-600">
                                    Une consultation standard dure environ 20 à 30 minutes. Pour certains traitements
                                    spécifiques, la durée peut varier.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Faut-il une ordonnance pour consulter ?</h3>
                                <p className="text-gray-600">
                                    Non, vous pouvez prendre rendez-vous directement sans ordonnance. Cependant, si vous
                                    êtes orienté par votre médecin traitant,
                                    pensez à apporter son courrier.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F0EB]">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contactez-nous</h2>
                                <p className="text-gray-500 md:text-lg mb-4">
                                    N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous. Nous
                                    sommes là pour vous aider.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="w-6 h-6 text-primary mr-2"/>
                                        <p>Hosni centre 2eme etage cab CO-10 Rue taher Ibn Zied, Menzah 5 Tunis</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-6 h-6 text-primary mr-2"/>
                                        <p>+216 23 320 280</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-6 h-6 text-primary mr-2"/>
                                        <p>Alouifatima2009@gmail.com</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-6 h-6 text-primary mr-2"/>
                                        <p>Lundi - Vendredi : 9h - 18h</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name"
                                               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Prénom</label>
                                        <Input id="first-name" placeholder="Entrez votre prénom"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name"
                                               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nom</label>
                                        <Input id="last-name" placeholder="Entrez votre nom"/>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email"
                                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <Input id="email" placeholder="Entrez votre email" type="email"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message"
                                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <Textarea id="message" placeholder="Entrez votre message"/>
                                </div>
                                <Button
                                    className="w-full bg-primary text-primary-foreground shadow">Envoyer</Button>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="emergency" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-red-600">
                            Urgences dermatologiques
                        </h2>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg text-gray-700 mb-6">
                                En cas d'urgence dermatologique, veuillez nous contacter immédiatement ou vous rendre
                                aux urgences les plus proches.
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <h3 className="font-bold text-xl mb-2 text-red-600">Numéro d'urgence : +216 23 320 280
                                    89</h3>
                                <p className="text-gray-600">
                                    Ce numéro est réservé aux urgences dermatologiques en dehors des heures d'ouverture
                                    du cabinet.
                                </p>
                            </div>
                            <p className="text-gray-600">
                                Les urgences dermatologiques peuvent inclure : réactions allergiques sévères, infections
                                cutanées graves,
                                brûlures étendues, ou toute autre condition dermatologique qui ne peut pas attendre une
                                consultation régulière.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
