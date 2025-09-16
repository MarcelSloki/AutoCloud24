import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Vielen Dank!</h1>
        <p className="text-gray-700">
          Ihre Registrierung wurde erfolgreich übermittelt.
          Wir senden Ihnen in Kürze eine Bestätigungsmail mit Vertrag und weiteren Informationen.
        </p>
      </main>
      <Footer />
    </div>
  )
}
