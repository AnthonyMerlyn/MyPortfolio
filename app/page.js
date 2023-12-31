import AboutSection from '@/components/AboutSection'
import EmailSection from '@/components/EmailSection'
import HeroSection from '@/components/HeroSection'
import AchivementsSections from '@/components/AchivementsSection'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchivementsSections />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
