// Registration Data
export const availableVouchers: string[] = [
  "111111", "970584", "174590", "571531", "285751", "286917", "650555", "980060"
  // Add more voucher codes as needed
];

export interface RegistrationFormField {
  name: string;
  type: 'text' | 'email' | 'tel';
  placeholder: string;
  required: boolean;
}

export interface RegistrationOption {
  id: 'without' | 'with';
  label: string;
  price: number;
}

export interface DiscountOption {
  id: string;
  label: string;
  discountType: 'percentage' | 'multiplier';
  value: number;
  requiresIEEEId?: boolean;
}

export const registrationData = {
  title: "IEEE CS AI Caravan 2025 Registration",
  
  formFields: [
    { name: 'name', type: 'text' as const, placeholder: 'Name', required: true },
    { name: 'title', type: 'text' as const, placeholder: 'Title', required: false },
    { name: 'affiliation', type: 'text' as const, placeholder: 'Affiliation', required: false },
    { name: 'email', type: 'email' as const, placeholder: 'Email', required: true },
    { name: 'phone', type: 'text' as const, placeholder: 'Phone', required: false },
    { name: 'country', type: 'text' as const, placeholder: 'Country', required: false }
  ] as RegistrationFormField[],
  
  options: [
    { id: 'without' as const, label: 'Without Accommodation', price: 100 },
    { id: 'with' as const, label: 'With Accommodation', price: 300 }
  ] as RegistrationOption[],
  
  discounts: [
    { 
      id: 'isIEEE', 
      label: '10% discount for IEEE Members', 
      discountType: 'percentage' as const,
      value: 0.9,
      requiresIEEEId: true
    },
    { 
      id: 'isIEEECS', 
      label: '10% extra discount for IEEE Computer Society Members', 
      discountType: 'percentage' as const,
      value: 0.9,
      requiresIEEEId: true
    },
    { 
      id: 'isStudent', 
      label: '50% off for students', 
      discountType: 'multiplier' as const,
      value: 0.5
    },
    { 
      id: 'isDevelopingCountry', 
      label: '50% partial funding for participants from developing countries', 
      discountType: 'multiplier' as const,
      value: 0.5
    }
  ] as DiscountOption[],
  
  vouchers: availableVouchers,
  
  messages: {
    voucherInvalid: "Invalid voucher code",
    voucherUsed: "This voucher code has already been used",
    voucherOnlyWithout: "Voucher code only applies to 'Without Accommodation'",
    voucherSuccess: "Voucher applied successfully! Registration is now free.",
    ieeeIdRequired: "Please enter your IEEE ID to apply the discount.",
    registrationSuccess: "Registration successful!",
    registrationError: "Error registering. Please try again.",
    paymentNote: "You will receive an email with the payment details shortly."
  }
};
