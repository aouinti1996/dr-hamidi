'use client';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu, Phone} from "lucide-react";
import {useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center mx-auto px-3">
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block">Dr. Hamidi Dermatologie</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                              href="#about">À propos</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                              href="#specialties">Spécialités</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                              href="#actes-et-soins">Actes et soins</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                              href="#treatments">Traitements</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                              href="#testimonials">Témoignages</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                              href="#contact">Contact</Link>
                    </nav>
                </div>
                <Button
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow  h-9 px-4 py-2 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    variant={!isMenuOpen  ? 'default' : 'outline'}>
                    <Menu className="h-5 w-5"/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b p-4 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                                  href="#about" onClick={() => setIsMenuOpen(false)}>À propos</Link>
                            <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                                  href="#specialties" onClick={() => setIsMenuOpen(false)}>Spécialités</Link>
                            <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                                  href="#actes-et-soins" onClick={() => setIsMenuOpen(false)}>Actes et soins</Link>
                            <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                                  href="#treatments" onClick={() => setIsMenuOpen(false)}>Traitements</Link>
                            <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                                  href="#testimonials" onClick={() => setIsMenuOpen(false)}>Témoignages</Link>
                            <Link className="transition-colors hover:text-foreground/80 text-foreground/60"
                                  href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </nav>
                    </div>
                )}
                <div className="flex flex-1 items-center space-x-2 justify-end">

                    <Phone className="w-6 h-6 text-primary mr-1"/>
                    <p className=" mr-2 font-bold">+216 23 320 280</p>

                </div>
            </div>
        </header>
    )
}
