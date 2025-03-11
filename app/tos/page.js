import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms & Services
          Effective Date: February 5, 2025

1. Introduction
Welcome to BeInventive ("we," "our," or "us"). By using our website (https://beinventive.tech) and purchasing our products, you agree to these Terms & Services. If you do not agree, please do not use our services.

2. Description of Service


3. Ownership & Usage Rights

Users own the code they download.

Users may not resell, redistribute, or sublicense the code.

4. Refund Policy
Users may request a full refund within 7 days after purchase by contacting us at aaa@beinventive.tech. Refunds will be processed within a reasonable timeframe.

5. Data Collection

Personal Data: We collect name, email, and payment information.

Non-Personal Data: We use web cookies to improve user experience.

For more details, see our Privacy Policy: https://beinventive.tech/privacy-policy.

6. Updates to Terms
We may update these Terms & Services from time to time. Users will be notified via email of any significant changes.

7. Governing Law
These Terms & Services are governed by the laws of France.

8. Contact Information
For any questions, please contact us at contact@beinventive.tech`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
