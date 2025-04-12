import React from "react";

/**
 * PaymentMethods component displays saved payment methods
 */
interface PaymentMethodsProps {
  userData: any;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ userData }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Payment Methods</h1>

      <div className="bg-card rounded-lg border border-border mb-8">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">Saved Payment Methods</h2>
        </div>
        <div className="p-4 space-y-4">
          {userData.savedPaymentMethods.map((method: any) => (
            <div
              key={method.id}
              className="p-4 border border-border rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center">
                <PaymentMethodIcon type={method.type} />
                <div>
                  <div className="font-medium">
                    {method.type === "Credit Card"
                      ? `•••• ${method.lastFour}`
                      : `${method.bank} •••• ${method.accountLastFour}`}
                    {method.isDefault && (
                      <span className="ml-2 text-xs text-primary font-medium">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {method.type === "Credit Card"
                      ? `Expires ${method.expiryDate}`
                      : "Online Banking"}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {!method.isDefault && (
                  <button className="text-sm text-primary hover:underline">
                    Set as Default
                  </button>
                )}
                <button className="text-sm text-muted-foreground hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-sm font-medium">
            <PlusIcon />
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * PaymentMethodIcon component displays appropriate icon based on payment method type
 */
const PaymentMethodIcon = ({ type }: { type: string }) => {
  return (
    <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center mr-4">
      {type === "Credit Card" ? <CreditCardIcon /> : <BankIcon />}
    </div>
  );
};

/**
 * Icon components
 */
const CreditCardIcon = () => (
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
    className="h-5 w-5"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const BankIcon = () => (
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
    className="h-5 w-5"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const PlusIcon = () => (
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
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export default PaymentMethods;
