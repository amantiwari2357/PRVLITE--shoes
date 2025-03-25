import React, { useState, useRef } from 'react';

const termsContent = [
  {
    title: '1. Introduction',
    content: "Welcome to [Your Company Name] ('Company', 'we', 'our', 'us'). By accessing our website at [your website URL], you agree to be bound by these Terms and Conditions.",
  },
  {
    title: '2. Intellectual Property Rights',
    content: 'Other than the content you own, under these Terms, [Your Company Name] and/or its licensors own all the intellectual property rights and materials contained in this Website.',
  },
  {
    title: '3. Restrictions',
    content: 'You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing, and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website; using this Website in any way that impacts user access to this Website.',
  },
  {
    title: '4. Your Content',
    content: "In these Terms and Conditions, 'Your Content' shall mean any audio, video text, images, or other material you choose to display on this Website. By displaying Your Content, you grant [Your Company Name] a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.",
  },
  {
    title: '5. No warranties',
    content: "This Website is provided 'as is,' with all faults, and [Your Company Name] makes no express or implied representations or warranties of any kind related to this Website or the materials contained on this Website.",
  },
  {
    title: '6. Limitation of liability',
    content: 'In no event shall [Your Company Name], nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.',
  },
  {
    title: '7. Indemnification',
    content: 'You hereby indemnify to the fullest extent [Your Company Name] from and against any and all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.',
  },
  {
    title: '8. Severability',
    content: 'If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.',
  },
  {
    title: '9. Variation of Terms',
    content: '[Your Company Name] is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.',
  },
  {
    title: '10. Governing Law & Jurisdiction',
    content: 'These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.',
  },
];

const TermsAndConditions = () => {
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const contentRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setIsScrolledToEnd(true);
    }
  };

  const handleAccept = () => {
    alert('Thank you for accepting the Terms and Conditions.');
    // Implement further actions upon acceptance, such as navigation or API calls
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        Terms and Conditions
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-h-[60vh] overflow-y-auto" ref={contentRef} onScroll={handleScroll}>
        {termsContent.map((term, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">{term.title}</h2>
            <p className="text-gray-600">{term.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${
            isScrolledToEnd
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleAccept}
          disabled={!isScrolledToEnd}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
