import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy
          Effective Date: February 5, 2025

1. Introduction
Welcome to BeInventive ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your information when you use our website (https://beinventive.tech).

2. Data Collection

Personal Data: We collect your name, email, and payment information when you place an order.

Non-Personal Data: We use web cookies to enhance user experience.

3. Purpose of Data Collection
We collect your data solely for order processing and do not use it for any other purpose.

4. Data Sharing
We do not share your data with any third parties.

5. Children's Privacy
We do not collect any data from children.

6. Updates to the Privacy Policy
We may update this Privacy Policy from time to time. Users will be notified via email of any significant changes.

7. Contact Information 
For any questions, please contact us at aaa@beinventive.tech`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
