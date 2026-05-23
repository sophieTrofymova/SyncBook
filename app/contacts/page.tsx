import { LocationSection } from "@/components/sections/contacts/location-section";
import { ContactSection } from "@/components/sections/home/contact-section";


export default function ContactsPage() {
  return (
    <main className="min-h-screen text-[#232634]">
      <LocationSection/>
      <ContactSection />
    </main>
  );
}