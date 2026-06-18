'use test';
'use client';


import Navbar from '@/components/Navbar';
import FirstSection from '@/components/firstsection';
import LegacySection from '@/components/secondsection';


export default function Home() {
  return (
    <main>
        <Navbar />
      <FirstSection/>
      <LegacySection/>
    </main>
  );
}