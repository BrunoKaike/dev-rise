"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'

const navigation = [
  { name: 'Exercícios', href: '#' },
  { name: 'Explore', href: '#' },
  { name: 'Torneios', href: '#' },
  { name: 'Sobre nós', href: '/about' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 border-b-2 border-slate-200">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/logodevrise.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <SignedOut>
                <SignUpButton
                  mode="modal"
                  afterSignInUrl="/about"
                  afterSignUpUrl="/about"
                >
                <button className="text-sm font-semibold leading-6 text-gray-900">Login</button>
                </SignUpButton>
              </SignedOut>
            </ClerkLoaded>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/logodevrise.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <ClerkLoading>
                  <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                </ClerkLoading>
                <ClerkLoaded>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>

                  <SignedOut>
                    <SignUpButton
                      mode="modal"
                      afterSignInUrl="/about"
                      afterSignUpUrl="/about"
                    >
                    <button className="text-sm font-semibold leading-6 text-gray-900">Login</button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <button className="text-sm font-semibold leading-6 text-gray-900">Continue aprendendo</button>
                  </SignedIn>
                </ClerkLoaded>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="flex min-h-screen px-6 pt-14 lg:px-8">flex 
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 p-4 lg:flex-row">
          <div className="relative mb-8 h-[300px] w-[300px] lg:mb-0 lg:h-[530px] lg:w-[530px] lg:mr-10">
            <Image src="/codeHero.png" alt="Hero" fill />
          </div>
          <div className="text-center max-w-[480px]">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transforme Seu Conhecimento em&nbsp;  
              <span style={{ color: '#6A56ED' }}>&lt;</span>
              <span style={{ color: '#FAB723' }}>/</span>
              Código
              <span style={{ color: '#6A56ED' }}>&gt;</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore uma vasta biblioteca de desafios de programação criados para todos os níveis. Melhore suas habilidades e compartilhe seu progresso com outros desenvolvedores.
            </p>
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  afterSignInUrl="/learn"
                  afterSignUpUrl="/learn"
                >
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="w-full max-w-[330px] rounded-md bg-indigo-600 h-12 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Comece agora
                    </a>
                  </div>
                </SignUpButton>

                <SignInButton
                  mode="modal"
                  afterSignInUrl="/learn"
                  afterSignUpUrl="/learn"
                >
                  <div className="mt-5 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="w-full max-w-[330px] rounded-md bg-transparent h-12 px-8 py-2.5 text-sm font-semibold text-slate-500 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Eu já tenho uma conta
                    </a>
                  </div>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="mt-5 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="w-full max-w-[330px] rounded-md bg-indigo-600 h-12 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Continue aprendendo
                  </a>
                </div>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
    
  )
}
