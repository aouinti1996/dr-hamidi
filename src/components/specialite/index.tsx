import Image from 'next/image'

const services = [
    {
        title: 'Maladies du cuir \n' +
            'chevelu et des ongles',
        description: 'Diagnostic et traitement des affections capillaires et unguéales, y compris l\'alopécie, le psoriasis du cuir chevelu, et les mycoses des ongles.',
        image: '/spes/1.webp'
    },
    {
        title: 'Dermatologie\n' +
            'esthétique et laser',
        description: 'Traitements innovants pour améliorer l\'apparence de la peau, incluant le rajeunissement facial, le traitement des cicatrices et la réduction des rides.',
        image: '/spes/2.webp'
    },
    {
        title: 'Maladies sexuellement\n' +
            'transmissibles',
        description: 'Dépistage, diagnostic et traitement des MST avec confidentialité et professionnalisme, incluant le suivi et la prévention.',
        image: '/spes/3.webp'
    }
]

export default function SpecialtiesSection() {
    return (
        <section id="specialties" className=" w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                    Nos spécialités
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#F7F3EE] md:rounded-r-full rounded-xl md:p-6 p-3">
                            <div className="flex  items-center gap-4 flex-col md:flex-row">

                                <div className="md:w-1/3 w-[80%] relative">
                                    <div
                                        className="md:h-52 md:rounded-b-full md:rounded-t-none h-full rounded-full overflow-hidden order-2">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={1800}
                                            height={750}
                                            style={{
                                                aspectRatio: "1800/750",
                                                objectFit: "cover",
                                                height: '100%',
                                                width: '100%'
                                            }}

                                        />
                                    </div>
                                </div>
                                <div className="md:w-2/3 w-full pl-4 whitespace-break-spaces order-1">
                                    <h3 className="text-xl font-serif font-semibold text-[#4A3728] mb-2">{service.title}</h3>
                                    <p className="text-sm text-[#7A6A5D] mb-4 w-full">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
