import Footer from "@/components/home/Footer";

function TermsOfServicePage() {
  return (
    <div>
      <div className="not-odd:min-h-screen">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <article className="rounded-2xl shadow-xl p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold">Terms of Service</h1>
            </header>

            {/* Section 1: Acceptance */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <div className="prose">
                <p>
                  By accessing and using this website, you acknowledge that you have read,
                  understood, and agree to be legally bound by the terms and conditions stated herein.
                </p>
              </div>
            </section>

            {/* Section 2: License */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <div className="bg-primary-foreground rounded-lg p-6">
                <ul className="space-y-4">
                  {[
                    "Permission is granted to temporarily download one copy of the materials for personal, non-commercial, and transitory viewing only.",
                    "This constitutes a license grant, not a transfer of ownership."
                  ].map((item, index) => (
                    <li className="flex gap-3" key={index}>
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 3: Disclaimer */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Disclaimer</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-sm text-yellow-700">
                    <p>
                      {`All materials on this website are provided "as is." No warranties, either expressed or implied, are made. We disclaim all implied warranties including, but not limited to, merchantability, fitness for a particular purpose, or non-infringement of intellectual property.`}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Limitations */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Limitations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-primary-foreground p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Time Constraints</h3>
                  <p>All claims must be submitted within 30 days of the incident.</p>
                </div>
                <div className="border border-primary-foreground p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Liability Waiver</h3>
                  <p>We are not liable for any damages arising from the use of this site.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Revisions */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Revisions</h2>
              <div className="prose">
                <p>
                  These terms may be updated at any time without prior notice. Continued use of the site constitutes acceptance of the most current version.
                </p>
              </div>
            </section>

            {/* Section 6: Contact */}
            <section>
              <h2 className="text-xl font-semibold mb-4">6. Contact</h2>
              <div className="bg-primary-foreground rounded-lg p-6 flex items-center justify-between">
                <p className="text-sm">Have questions regarding our Terms of Service?</p>
                <a
                  href="mailto:support@nysdev.com"
                  className="inline-flex items-center text-primary hover:text-primary"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
              </div>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfServicePage;
