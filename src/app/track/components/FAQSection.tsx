interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="mt-10 pt-6 border-t border-border">
      <h3 className="font-bold mb-4">Frequently Asked Questions</h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-border rounded-lg"
          >
            <summary className="flex justify-between items-center p-4 cursor-pointer">
              <h4 className="font-medium">{faq.question}</h4>
              <span className="transition group-open:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-muted-foreground text-sm border-t border-border">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
