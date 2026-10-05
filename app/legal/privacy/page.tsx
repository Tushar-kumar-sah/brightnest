export const metadata = {
  title: "Privacy Policy | Brightnest Edutainment",
  description: "Privacy policy for Brightnest Edutainment website.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#070c1e] text-white pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1ec9f2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#9266fd]/10 rounded-full blur-[140px] pointer-events-none" />

      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-semibold text-[#1ec9f2] uppercase tracking-wider mb-4 backdrop-blur-xl">
            <span>Corporate Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-slate-300">
            <section className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                1. Introduction
              </h2>
              <p className="leading-relaxed font-light">
                Brightnest Edutainment Pvt Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Company&rdquo;) operates the brightnestedu.com
                website. This page informs you of our policies regarding the collection, use, and disclosure of personal
                data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                2. Information Collection
              </h2>
              <p className="leading-relaxed font-light mb-4">
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <h3 className="text-lg font-semibold text-white mb-2">
                Personal Data:
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4 font-light text-slate-300">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                3. Use of Data
              </h2>
              <p className="leading-relaxed font-light">
                Brightnest Edutainment uses the collected data for various purposes including providing and maintaining our
                Service, notifying you about changes to our Service, and allowing you to participate in interactive
                features of our Service.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                4. Security of Data
              </h2>
              <p className="leading-relaxed font-light">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                5. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed font-light">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the effective date at the top of this Privacy Policy.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                6. Contact Us
              </h2>
              <p className="leading-relaxed font-light mb-4">
                If you have any questions about this Privacy Policy, please contact our privacy compliance desk:
              </p>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1 text-sm font-light">
                <div><strong className="text-white font-medium">Email:</strong> info@brightnestedu.com</div>
                <div><strong className="text-white font-medium">Phone:</strong> (+91) 93663 55026 / (+91) 98319 11796 / (033)-48109275</div>
                <div><strong className="text-white font-medium">Address:</strong> 7/1 Lord Sinha Road, Lords Building, Kolkata, West Bengal 700071, India</div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
