/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rjq66PDEckK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <>
            <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
                <h1 className="text-xl font-semibold">Marketing</h1>
            </header>
            <div className="overflow-scroll h-[calc(100%-56px)]">
                <div className="w-full">
                    <section className="w-full py-8 md:py-12 lg:py-20 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Seamless Integrations for Powerful Real Estate Marketing
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Tennora partners with you to offer a personalized approach, integrating with the marketing tools you
                            already use to enhance your real estate marketing efforts.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="w-full pt-10 pb-8 md:pb-12 lg:pb-16">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Powerful Integrations</h3>
                            <p className="text-muted-foreground">
                            Tennora seamlessly integrates with the marketing tools you already use, allowing you to streamline your
                            real estate marketing efforts.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <ChromeIcon className="h-6 w-6" />
                                <span>Google Ads</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FacebookIcon className="h-6 w-6" />
                                <span>Facebook Ads</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <WebhookIcon className="h-6 w-6" />
                                <span>Hubspot</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="h-6 w-6" />
                                <span>Mailchimp</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MoonIcon className="h-6 w-6" />
                                <span>ApolloIO</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ZapIcon className="h-6 w-6" />
                                <span>Zapier</span>
                            </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Marketing Features</h3>
                            <p className="text-muted-foreground">
                            Tennora's CRM offers a suite of marketing features to help you elevate your real estate business.
                            </p>
                            <ul className="grid gap-4">
                            <li className="flex items-center gap-2">
                                <SearchIcon className="h-6 w-6" />
                                <span>SEO Optimization</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FilePenIcon className="h-6 w-6" />
                                <span>Content Marketing</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BrushIcon className="h-6 w-6" />
                                <span>Branding Assistance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MailOpenIcon className="h-6 w-6" />
                                <span>Email Marketing</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FacebookIcon className="h-6 w-6" />
                                <span>Social Media Marketing</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </>
    )
  }
  
  function BrushIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
      </svg>
    )
  }
  
  
  function ChromeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" x2="12" y1="8" y2="8" />
        <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
        <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
      </svg>
    )
  }
  
  
  function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function FilePenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
      </svg>
    )
  }
  
  
  function MailIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function MailOpenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
      </svg>
    )
  }
  
  
  function MoonIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    )
  }
  
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function WebhookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
      </svg>
    )
  }
  
  
  function ZapIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    )
  }