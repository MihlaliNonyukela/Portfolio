export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-8">Contact</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4 px-4">
        <input name="name" placeholder="Name" className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" className="border p-2 rounded" />
        <textarea name="message" placeholder="Message" className="border p-2 rounded" rows={5} />
        <button type="submit" className="self-center bg-indigo-600 text-white px-6 py-2 rounded mt-4">
          Send Message
        </button>
      </form>
    </section>
  );
}