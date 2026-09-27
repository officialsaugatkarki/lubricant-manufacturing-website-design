'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header, Footer, CTA, PageHero, SectionLabel, productCategories } from '@/components/site'

const products = productCategories.flatMap((category) => [
  { ...category, name: `${category.name.replace(' Oils','')} Pro 5W-30`, spec: 'API SP / ILSAC GF-6A' },
  { ...category, name: `${category.name.replace(' Oils','')} Max 15W-40`, spec: 'API CK-4 / ACEA E7' },
])
export default function ProductsPage() { return <><Header /><main><PageHero eyebrow="Product catalogue" title="Our lubricant range." description="Straightforward, high-performance products for automotive, commercial and industrial applications." /><section className="w-full px-5 py-24 lg:px-8"><div className="flex items-end justify-between gap-5"><div><SectionLabel>Made for the job</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-tight text-[#101c2d]">Find the right protection.</h2></div><span className="hidden text-sm text-slate-500 md:block">{products.length} products across 4 categories</span></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map((product, i) => <article key={`${product.name}-${i}`} className="group border border-slate-200 bg-white"><div className="relative aspect-square overflow-hidden bg-[#f3f5f7]"><img src={product.image} alt={product.name} className="h-full w-full object-cover grayscale-[20%] transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-[#101c2d] px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white">{product.name.split(' ')[0]}</span></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-[#e24b2b]">{product.spec}</p><h3 className="mt-2 text-lg font-bold text-[#101c2d]">{product.name}</h3><p className="mt-3 text-sm leading-6 text-slate-500">Reliable protection and stable performance for demanding applications.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#101c2d]">Enquire <ArrowUpRight className="h-4 w-4 text-[#e24b2b]" /></Link></div></article>)}</div></section><CTA /></main><Footer /></> }
