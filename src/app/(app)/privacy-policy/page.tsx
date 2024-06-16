import { Container } from "@/components/container";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
// import markdown from "./privacy-policy.md";

const markdown = `

## **Introduction**

investalytix (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website, services, and platform (collectively, the “Services”). By using our Services, you consent to the data practices described in this policy.

## **Information We Collect**

**Personal Information:**

- **Account Registration:** When you register for an account, we collect personal information such as your name, email address, phone number, and password.
- **Payment Information:** When you make a purchase, we collect payment details, including credit card information and billing address.
- **Communication:** We collect information from you when you communicate with us, such as when you send us emails or complete a contact form.

**Non-Personal Information:**

- **Usage Data:** We collect data on how you interact with our Services, including IP addresses, browser type, pages viewed, and the time and date of your visit.
- **Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to collect information about your activities on our website.

## **How We Use Your Information**

**Provide and Improve Our Services:**

- To create and manage your account.
- To process transactions and send you related information.
- To provide customer support and respond to your inquiries.
- To improve our Services and develop new features.

**Communication:**

- To send you technical notices, updates, security alerts, and support messages.
- To send promotional communications if you have opted in to receive them.

**Analytics and Research:**

- To monitor and analyze trends, usage, and activities in connection with our Services.
- To conduct research and analysis to improve our Services.

**Legal Compliance:**

- To comply with applicable laws, regulations, and legal processes.
- To enforce our Terms of Service and other agreements.

## **How We Share Your Information**

**Service Providers:**

- We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.

**Legal Requirements:**

- We may disclose your information if required to do so by law or in response to valid requests by public authorities.

**Business Transfers:**

- In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.

## **Data Security**

We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

## **Your Rights**

**Access and Correction:**

- You have the right to access and update your personal information at any time through your account settings.

**Data Portability:**

- You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.

**Deletion:**

- You have the right to request the deletion of your personal information, subject to certain legal exceptions.

**Opt-Out:**

- You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages or by contacting us directly.

## **Third-Party Links**

Our Services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of those third parties.

## **Changes to This Privacy Policy**

We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the revised policy on our website and updating the "Effective Date" at the top of this policy. Your continued use of our Services after the changes take effect constitutes your acceptance of the revised policy.

## **Contact Us**

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at **investalytix**

Email: <info@investalytix.com>

Address: \[Your Business Address\]`;

export default function PrivacyPolicy() {
  return (
    <Container>
      <header>
        <h1 className="pb-10 pt-16 text-center text-6xl font-bold">
          Privacy Policy
        </h1>
      </header>
      <div id="privacy-policy" className="mx-auto max-w-2xl pb-16">
        <Markdown remarkPlugins={[gfm]}>{markdown}</Markdown>
      </div>
    </Container>
  );
}

// <h1 className="text-lg">
//   <strong>Privacy Policy</strong>
// </h1>
// <p className="text-lg">
//   <strong>Introduction</strong>
// </p>
// <br />
// <p>
//   investalytix (“we,” “us,” or “our”) is committed to protecting your
//   privacy. This Privacy Policy outlines how we collect, use, and
//   safeguard your personal information when you use our website,
//   services, and platform (collectively, the “Services”). By using our
//   Services, you consent to the data practices described in this policy.
// </p>
