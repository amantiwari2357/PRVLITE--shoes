import React from "react";

const privacySections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Keeval Shoes. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information such as your name, email address, shipping address, and payment details when you make a purchase. Additionally, we gather data on your browsing behavior to enhance our services.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Your information is used to process transactions, provide customer support, and improve our website. We may also use your data to send promotional communications, which you can opt out of at any time.",
  },
  {
    title: "4. Sharing Your Information",
    content:
      "We do not sell your personal information. However, we may share data with third-party service providers to fulfill orders, process payments, and deliver marketing communications.",
  },
  {
    title: "5. Security Measures",
    content:
      "We implement a variety of security measures to maintain the safety of your personal information. Despite our efforts, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@keevalshoes.com.",
  },
  {
    title: "7. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on our website.",
  },
  {
    title: "8. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at privacy@keevalshoes.com.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        Privacy Policy
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {privacySections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
