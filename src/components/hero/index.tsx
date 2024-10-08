import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="bg-[#F5F0EB] md:py-16 py-10 px-4">
            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 space-y-4">
                    <h1 className="text-3xl md:text-6xl font-serif text-[#4A3728] leading-tight md:text-left text-center">
                        Dr. Hamidi Fatima Zahra
                    </h1>

                    <div className="flex space-x-4 my-4">
                        <div className="md:w-[120px] md:h-[57px] w-full h-full bg-[#E0D5C9] rounded-full overflow-hidden">
                            <Image
                                src="/hero/left.png"
                                alt="Dermatology procedure 1"
                                width={120}
                                height={64}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-3xl md:text-6xl font-serif text-[#4A3728] ">
                            Dermatologue
                        </h2>
                        <div className="md:w-[120px] md:h-[57px] w-full h-full bg-[#E0D5C9] rounded-full overflow-hidden">
                            <Image
                                src="/hero/right.png"
                                alt="Dermatology procedure 2"
                                width={120}
                                height={64}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-[#7A6A5D] max-w-xl">Dermatologue spécialisée dans les maladies du cuir chevelu et
                        des ongles, la dermatologie esthétique et laser, et les maladies sexuellement
                        transmissibles.</p>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 md:h-[350px]">
                    <div className="relative w-full h-full md:w-full md:h-full mx-auto">
                        <Image
                            src="/hero/main.png"
                            alt="Dr. Hamidi Fatima Zahra performing a facial treatment"
                            width={387}
                            height={519}
                            className="md:rounded-b-[1000px]    rounded-full   object-cover h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
