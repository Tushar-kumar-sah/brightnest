export const metadata = {
  title: "Privacy Policy | Brightnest Edutainment",
  description: "Privacy policy for Brightnest Edutainment website.",
}

export default function PrivacyPolicy() {
  return (
    <main >
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                1. Introduction
              </h2>
              <p className="text-muted leading-relaxed">
                Brightnest Edutainment Pvt Ltd ("we", "us", "our", or "Company") operates the brightnestedu.com
                website. This page informs you of our policies regarding the collection, use, and disclosure of personal
                data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                2. Information Collection
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--primary)" }}>
                Personal Data:
              </h3>
              <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                3. Use of Data
              </h2>
              <p className="text-muted leading-relaxed">
                Brightnest Edutainment uses the collected data for various purposes including providing and maintaining our
                Service, notifying you about changes to our Service, and allowing you to participate in interactive
                features of our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                4. Security of Data
              </h2>
              <p className="text-muted leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                5. Changes to This Privacy Policy
              </h2>
              <p className="text-muted leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                6. Contact Us
              </h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-brand-soft p-4 rounded-lg mt-4 text-muted">
                Email: info@brightnestedu.com
                <br />
                Phone: (+91) 93663 55026 / (+91) 98319 11796 / (033)-48109275
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
