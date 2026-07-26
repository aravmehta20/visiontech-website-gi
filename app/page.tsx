import { SidebarNav } from '@/components/sidebar-nav'
import { Hero } from '@/components/hero'
import { SpecStrip } from '@/components/spec-strip'
import { Calibration } from '@/components/calibration'
import { Architecture } from '@/components/architecture'
import { Audiences } from '@/components/audiences'
import { Trust } from '@/components/trust'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main className="pt-14 lg:pl-64 lg:pt-0">
        <Hero />
        <SpecStrip />
        <Calibration />
        <Architecture />
        <Audiences />
        <Trust />
        <ContactFooter />
      </main>
    </div>
  )
}
