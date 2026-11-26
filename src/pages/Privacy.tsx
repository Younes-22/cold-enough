import type { ReactNode } from 'react'
import { useSeo } from '../hooks/useSeo'
import { formEndpoint, mailtoUrl, site } from '../config/site'

const P = ({ children }: { children: ReactNode }) => <p className="mt-3 leading-relaxed">{children}</p>
const H = ({ children }: { children: ReactNode }) => <h2 className="mt-12 text-2xl font-semibold">{children}</h2>
const Todo = ({ children }: { children: ReactNode }) => <span className="rounded bg-flame/15 px-1.5 py-0.5 font-mono text-xs text-flame-light">[{children}]</span>

export default function Privacy() {
  useSeo('Privacy Policy', 'How Cold Enough collects and uses personal information from website enquiries, calls, emails and WhatsApp messages.')
  return (
    <section className="pb-24 pt-36 sm:pt-44">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Privacy policy</h1>
        <P>Last updated: <Todo>date to be completed on publishing</Todo></P>

        <H>Who we are</H>
        <P>{site.name} ({site.domain}) is the controller of the personal information described in this policy. Registered business name and address: <Todo>to be supplied</Todo>. Company number, if applicable: <Todo>to be supplied</Todo>.</P>
        <P>Contact us about privacy by email at <a className="text-ice underline" href={mailtoUrl}>{site.email}</a> or by phone on <a className="text-ice underline" href={site.phoneHref}>{site.phoneDisplay}</a> or <a className="text-ice underline" href={site.mobileHref}>{site.mobileDisplay}</a>.</P>

        <H>What information we collect</H>
        <P>When you contact us by the enquiry form, telephone, email or WhatsApp we may receive your name, phone number, email address, the service you are asking about, the details of your enquiry, and the location of the equipment or premises if you tell us.</P>
        <P>This website does not use accounts, and at the time of writing it does not use advertising or analytics cookies. <Todo>Update this paragraph if analytics or other tracking is added.</Todo></P>

        <H>How we use it</H>
        <P>We use your information to respond to your enquiry, provide quotes, arrange and carry out refrigeration work, and keep records of that work.</P>
        <P>Our lawful bases under UK GDPR are taking steps at your request before entering into a contract, performing a contract with you, and our legitimate interests in running our business and responding to enquiries. Where we are required to keep records by law, that is our basis for doing so.</P>

        <H>The enquiry form</H>
        {formEndpoint ? (
          <P>When you submit the enquiry form, your details are sent to us by Formspree (Formspree, Inc., based in the United States), a form-delivery service that passes your message to our inbox on our behalf. Formspree may store submissions for a period under its own terms and privacy policy. <Todo>Confirm Formspree’s current retention and international-transfer terms, and update this paragraph if they change.</Todo></P>
        ) : (
          <P>The enquiry form on this site is not currently connected to an inbox, and nothing you type into it is transmitted until you choose to send it by email yourself. When a form-handling service is connected, we will update this policy to name it. Service provider: <Todo>to be named once chosen</Todo>.</P>
        )}

        <H>WhatsApp, telephone and email</H>
        <P>If you choose to contact us on WhatsApp, your message is handled by WhatsApp (Meta) under its own terms and privacy policy. We only see what you send us. Calls and emails are handled in the normal way by the relevant telephone and email providers.</P>

        <H>Who we share it with</H>
        <P>We do not sell your information. We may share it with people who help us deliver the service, such as suppliers or subcontractors working on your job, and with professional advisers or authorities where the law requires. <Todo>Confirm and list any other recipients, e.g. accountancy or job-management software.</Todo></P>

        <H>How long we keep it</H>
        <P>We keep enquiry information for as long as needed to deal with your request and for a reasonable period afterwards. Retention period: <Todo>to be decided, e.g. 12 months for enquiries that do not become jobs; longer for job and invoicing records</Todo>.</P>

        <H>Your rights</H>
        <P>Under UK data protection law you can ask us for a copy of your information, to correct it, to delete it, to restrict or object to our use of it, and, where relevant, to move it. To use these rights, contact us using the details above.</P>
        <P>If you are unhappy with how we handle your information you can complain to the Information Commissioner’s Office at <a className="text-ice underline" href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>. We would appreciate the chance to put things right first.</P>

        <H>Fonts and third-party content</H>
        <P>The fonts on this site are served from our own hosting, so your browser does not contact Google or other font providers when you visit. Links to WhatsApp leave this site and are governed by the destination’s own policies.</P>

        <H>Changes</H>
        <P>We may update this policy from time to time. The date at the top shows when it last changed.</P>

        <p className="mt-14 rounded-xl2 border border-ink-600 bg-ink-800 p-5 text-sm">This is a working draft prepared for the business. Complete the highlighted items and have it reviewed before relying on it.</p>
      </div>
    </section>
  )
}
