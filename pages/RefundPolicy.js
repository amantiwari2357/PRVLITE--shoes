import React from 'react';

const refundPolicySections = [
  {
    title: '1. Returns',
    content: 'We accept returns within 30 days of purchase. Items must be unused and in their original packaging. To initiate a return, please contact our support team at support@keevalshoes.com.',
  },
  {
    title: '2. Refunds',
    content: 'Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original method of payment within 7-10 business days.',
  },
  {
    title: '3. Exchanges',
    content: 'If you need to exchange an item for a different size or color, please contact us at support@keevalshoes.com. Exchanges are subject to product availability.',
  },
  {
    title: '4. Shipping Costs',
    content: 'Customers are responsible for return shipping costs unless the return is due to a defective or incorrect item received. In such cases, we will provide a prepaid return label.',
  },
  {
    title: '5. Non-Returnable Items',
    content: 'Certain items, such as gift cards and clearance items, are non-returnable and non-refundable.',
  },
  {
    title: '6. Contact Us',
    content: 'For any questions regarding our refund policy, please contact us at support@keevalshoes.com.',
  },
];

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        Refund Policy
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {refundPolicySections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">{section.title}</h2>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundPolicy;
