/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MOValWsmZqV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import docusignImage from './pictures/DocusignHome.jpg';

export default function Component() {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
          <h1 className="text-xl font-semibold">Documents</h1>
        </header>
        <main className="flex-1 p-4 sm:p-8 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-3xl font-bold">Documents: Powered by DocuSign</h2>
                <p className="text-muted-foreground mb-8">
                  Manage all your real estate documents in one place. Upload, view, and sign documents securely with our
                  Docusign integration.
                </p>
                <div>
                  <img
                    src={docusignImage.src}
                    alt="Docusign Integration"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }