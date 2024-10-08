import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos du
                            Dr. Hamidi</h2>
                        <p className="text-gray-500 md:text-lg">Le Dr. Hamidi Aloui Allani Fatima Zahra est une dermatologue renommée avec plus de 15 ans d'expérience. Diplômée de la Faculté de Médecine de Paris, elle a poursuivi sa spécialisation en dermatologie à l'Hôpital Saint-Louis. Sa passion pour la dermatologie et son engagement envers ses patients font d'elle une référence dans son domaine.</p>
                        <p className="text-gray-500 md:text-lg">Le Dr. Hamidi est membre de plusieurs sociétés savantes, dont la Société Française de Dermatologie et l'Académie Européenne de Dermatologie et de Vénéréologie. Elle participe régulièrement à des conférences internationales pour rester à la pointe des avancées en dermatologie.</p>
                    </div>
                    <div className="relative h-[400px] overflow-hidden rounded-lg">
                        <Image
                            src="/about/hamidi.svg"
                            alt="Dr. Hamidi Aloui Allani Fatima Zahra"
                            fill

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
