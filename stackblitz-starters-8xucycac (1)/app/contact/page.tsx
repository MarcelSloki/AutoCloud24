import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Kontakt & Demo</h1>
        <p className="text-gray-700 mb-6">Wir melden uns schnellstmöglich.</p>
        <form className="grid gap-4">
          <input placeholder="Name" className="px-4 py-3 border rounded"/>
          <input placeholder="E-Mail" type="email" className="px-4 py-3 border rounded"/>
          <input placeholder="Telefon (optional)" className="px-4 py-3 border rounded"/>
          <textarea placeholder="Nachricht / Anforderungen" className="px-4 py-3 border rounded" rows={5}/>
          <button className="px-6 py-3 rounded bg-primary text-white hover:bg-primaryDark w-max">Absenden</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
