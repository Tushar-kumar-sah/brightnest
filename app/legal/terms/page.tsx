export const metadata = {
  title: "Terms of Service | Brightnest Edutainment",
  description: "Terms of Service for Brightnest Edutainment website and offerings.",
}

export default function TermsOfService() {
  return (
    <main >
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-muted leading-relaxed">
                By accessing or using the brightnestedu.com website or any of our services, you agree to be bound
                by these Terms of Service. If you do not agree, please discontinue use of the site and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                2. Services
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Brightnest Edutainment provides IT infrastructure solutions including security systems, structured cabling,
                networking, audiovisual integration, and related professional services. Any proposals, statements of
                work, or service agreements will outline specific deliverables, timelines, and commercial terms.
              </p>
              <p className="text-muted leading-relaxed">
                We may update, modify, or discontinue any aspect of the services or website without prior notice,
                provided existing contractual obligations are honored as agreed in applicable statements of work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                3. Use of Website
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                <li>Do not misuse the website, attempt unauthorized access, or disrupt its operation.</li>
                <li>Do not submit false, misleading, or infringing content through forms or uploads.</li>
                <li>Respect intellectual property rights associated with content on this site.</li>
              </ul>
              <p className="text-muted leading-relaxed">
                We reserve the right to restrict or terminate access if these terms are violated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                4. Intellectual Property
              </h2>
              <p className="text-muted leading-relaxed">
                All content on this website, including text, graphics, logos, and code, is the property of Brightnest
                Edutainment or its licensors and is protected by applicable intellectual property laws. No content may be
                reproduced or used without prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                5. Confidentiality
              </h2>
              <p className="text-muted leading-relaxed">
                Information shared by clients in the course of engagements will be treated as confidential and used only
                to deliver the contracted services, subject to any non-disclosure agreements in place.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                6. Limitation of Liability
              </h2>
              <p className="text-muted leading-relaxed">
                To the fullest extent permitted by law, Brightnest Edutainment shall not be liable for any indirect,
                incidental, special, or consequential damages arising from the use of the website or services. Our
                aggregate liability related to services is limited to the amounts paid for the applicable engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                7. Third-Party Links
              </h2>
              <p className="text-muted leading-relaxed">
                The website may contain links to third-party sites or resources. We are not responsible for the content,
                security, or practices of those third parties. Access them at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                8. Changes to Terms
              </h2>
              <p className="text-muted leading-relaxed">
                We may update these Terms of Service periodically. Continued use of the website or services after
                changes constitutes acceptance of the revised terms. The effective date will be updated when changes are
                published.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                9. Governing Law
              </h2>
              <p className="text-muted leading-relaxed">
                These Terms of Service are governed by the laws of India. Any disputes arising under these terms shall
                be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                10. Contact
              </h2>
              <p className="text-muted leading-relaxed">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-brand-soft p-4 rounded-lg mt-4 text-muted">
                Email: info@brightnestedu.com
                <br />
                Phone: (+91) 93663 55026 / (+91) 98319 11796 / (033)-48109275
                <br />
                Address: 7/1 Lord Sinha Road, Lords Building, Kolkata, West Bengal 700071, India
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
