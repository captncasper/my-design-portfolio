const faqs = [
  {
    question: 'What do I need to bring?',
    answer: 'Just bring your swimsuit, a towel, and a sense of adventure! We provide all the necessary scuba gear. If you have your own gear, you are welcome to bring it.',
  },
  {
    question: 'Is scuba diving safe?',
    answer: 'Absolutely. Your safety is our number one priority. All of our dives are led by certified instructors, and we follow strict safety protocols. We also provide a thorough briefing before every dive.',
  },
  {
    question: 'What if the weather is bad?',
    answer: 'We constantly monitor the weather conditions. If a dive has to be cancelled due to unsafe weather, we will notify you as soon as possible and offer to reschedule or provide a full refund.',
  },
  {
    question: 'Do I need to be a strong swimmer?',
    answer: 'You should be comfortable in the water, but you don\'t need to be a competitive swimmer. We will conduct a brief water skills assessment before your first dive to ensure you are comfortable.',
  },
  {
    question: 'What marine life will I see?',
    answer: 'The marine life varies by site and season, but you can expect to see a wide variety of fish, rays, and invertebrates. On special dives, you might even encounter weedy sea dragons, seals, or friendly sharks!',
  },
];

export default function FaqPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
