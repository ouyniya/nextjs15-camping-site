import Footer from "@/components/home/Footer";
import { X } from "lucide-react";

function LicensePage() {
  return (
    <div>
      <div className="not-odd:min-h-screen">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <article className="rounded-2xl shadow-xl p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold">License</h1>
            </header>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                1. Grant of License
              </h2>
              <div className="prose">
                <p>
                  We hereby grant you a limited, non-exclusive,
                  non-transferable, and revocable license to access and use the
                  content, services, and materials provided on this website
                  strictly in accordance with these terms.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Permitted Use</h2>
              <div className="bg-primary-foreground rounded-lg p-6">
                <ul className="space-y-4">
                  {[
                    "View and download materials for personal, non-commercial use only.",
                    "Share links to our content, provided appropriate credit is given.",
                    "Use our API or code snippets, if any, within the permitted scope defined in our documentation.",
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

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Restrictions</h2>
              <div className="bg-rose-500/10 dark:bg-rose-500/20 rounded-lg p-6">
                <ul className="space-y-4">
                  {[
                    "Modify, reproduce, distribute, or publicly display any materials without prior written permission.",
                    "Use the materials for commercial purposes without a separate commercial license.",
                    "Reverse-engineer, decompile, or otherwise attempt to extract the source code of any software provided on this site.",
                  ].map((item, index) => (
                    <li className="flex gap-3" key={index}>
                      <X className="size-5 text-rose-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
              4. Termination
              </h2>
              <div className="prose">
                <p>
                This license will automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon termination, you must cease all use of the materials and delete any copies in your possession.
                </p>
              </div>
            </section>

            {/* Section 5: Contact */}
            <section>
              <h2 className="text-xl font-semibold mb-4">5. Contact</h2>
              <div className="bg-primary-foreground rounded-lg p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-sm">
                For any questions regarding licensing or to request commercial use rights, please contact us.
                </p>
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

export default LicensePage;
