'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from 'lucide-react'

export const siteNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`flex items-center gap-3 ${light ? 'text-white' : 'text-[#101c2d]'}`} aria-label="Apex Lubricants home">
    <span className="flex h-10 w-10 items-center justify-center bg-[#e24b2b] text-lg font-black text-white">A</span>
    <span className="leading-none"><strong className="block text-[15px] font-extrabold tracking-[0.18em]">APEX</strong><small className="text-[9px] font-bold tracking-[0.28em] opacity-70">LUBRICANTS</small></span>
  </Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="absolute inset-x-0 top-0 z-40 border-b border-white/15 bg-[#101c2d]/95 text-white">
    <div className="flex w-full items-center justify-between px-5 py-4 lg:px-8">
      <Logo light />
      <nav className="hidden items-center gap-8 md:flex">{siteNav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-white/75 transition hover:text-white">{item.label}</Link>)}</nav>
      <Link href="/contact" className="hidden items-center gap-2 bg-[#e24b2b] px-5 py-3 text-sm font-bold transition hover:bg-[#c93e21] md:flex">Get a Quote <ArrowUpRight className="h-4 w-4" /></Link>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-white/15 bg-[#101c2d] px-5 py-5 md:hidden">{siteNav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-sm font-medium">{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-5 block bg-[#e24b2b] px-5 py-3 text-center text-sm font-bold">Get a Quote</Link></nav>}
  </header>
}

export function Footer() {
  return <footer className="bg-[#101c2d] text-white"><div className="grid w-full gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-8"><div><Logo light /><p className="mt-6 max-w-xs text-sm leading-7 text-white/55">Industrial-grade lubrication solutions built for engines, machinery and the people who keep the world moving.</p><div className="mt-6 flex gap-3"><a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center border border-white/20 hover:border-[#e24b2b]"><span className="text-xs font-black">in</span></a><a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center border border-white/20 hover:border-[#e24b2b]"><span className="text-xs font-black">ig</span></a></div></div><div><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e24b2b]">Explore</h3><div className="mt-5 grid gap-3 text-sm text-white/65">{siteNav.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}</div></div><div><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e24b2b]">Products</h3><div className="mt-5 grid gap-3 text-sm text-white/65"><Link href="/products">Engine Oils</Link><Link href="/products">Gear Oils</Link><Link href="/products">Hydraulic Oils</Link><Link href="/products">Greases</Link></div></div><div><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e24b2b]">Contact</h3><div className="mt-5 grid gap-4 text-sm text-white/65"><span className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[#e24b2b]" /> +1 (800) 555-0148</span><span className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[#e24b2b]" /> hello@apexlubricants.com</span><span className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#e24b2b]" /> 440 Industrial Park Way<br />Houston, TX 77032</span></div></div></div><div className="border-t border-white/10 px-5 py-5 text-xs text-white/40 lg:px-8"><div className="flex w-full justify-between gap-4"><span>© 2025 Apex Lubricants. All rights reserved.</span><span>Privacy · Terms</span></div></div></footer>
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="bg-[#101c2d] pb-20 pt-40 text-white"><div className="w-full px-5 lg:px-8"><p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#e24b2b]">{eyebrow}</p><h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] md:text-7xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/65">{description}</p></div></section>
}

export function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e24b2b]">{children}</p> }

export const images = {
  hero: 'https://images.unsplash.com/photo-1635773054018-8d9d3fb6b4b5?auto=format&fit=crop&w=1600&q=85',
  factory: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
  lab: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
  engine: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85',
  gear: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=900&q=85',
  hydraulic: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85',
  grease: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=900&q=85',
}

export const productCategories = [
  { name: 'Engine Oils', text: 'Everyday protection for petrol and diesel engines.', image: images.engine },
  { name: 'Gear Oils', text: 'Smooth, durable performance for demanding drivetrains.', image: images.gear },
  { name: 'Hydraulic Oils', text: 'Reliable power transfer across industrial systems.', image: images.hydraulic },
  { name: 'Greases', text: 'Long-lasting protection for high-load components.', image: images.grease },
]

export function CategoryCard({ category }: { category: typeof productCategories[number] }) { return <Link href="/products" className="group block"><div className="relative aspect-[4/3] overflow-hidden bg-slate-200"><img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#101c2d]/80 to-transparent" /><h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">{category.name}</h3></div><p className="mt-4 text-sm leading-6 text-slate-500">{category.text}</p><span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#e24b2b]">View products <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link> }

export function CTA() { return <section className="bg-[#e24b2b] text-white"><div className="flex w-full flex-col items-start justify-between gap-7 px-5 py-14 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Need a recommendation?</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Looking for the right lubricant?</h2><p className="mt-3 text-white/75">Talk to our team about your vehicle, machinery or industrial requirements.</p></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 bg-[#101c2d] px-6 py-4 text-sm font-bold hover:bg-[#182a42]">Get a Quote <ArrowUpRight className="h-4 w-4" /></Link></div></section> }
