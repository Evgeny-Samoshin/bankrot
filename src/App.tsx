/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Advantages } from './components/Advantages';
import { Services } from './components/Services';
import { Timeline } from './components/Timeline';
import { Pricing } from './components/Pricing';
import { Cases } from './components/Cases';
import { Reviews } from './components/Reviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-text bg-brand-bg">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problems />
        <Advantages />
        <Services />
        <Timeline />
        <Pricing />
        <Cases />
        <Reviews />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
