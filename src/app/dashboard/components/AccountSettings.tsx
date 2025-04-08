import React from "react";

/**
 * AccountSettings component manages user account settings
 */
interface AccountSettingsProps {
  userData: any;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ userData }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      {/* Personal Information Section */}
      <div className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <div className="space-y-4">
          <FormField label="Name" type="text" defaultValue={userData.name} />
          <FormField label="Email" type="email" defaultValue={userData.email} />
          <FormField
            label="Phone Number"
            type="tel"
            defaultValue="+60 12 345 6789"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <ToggleSetting
            title="Donation Receipts"
            description="Receive receipts for your donations"
            defaultChecked={true}
          />
          <ToggleSetting
            title="Impact Updates"
            description="Receive updates about the impact of your donations"
            defaultChecked={true}
          />
          <ToggleSetting
            title="Campaign Alerts"
            description="Receive notifications about new campaigns and urgent needs"
            defaultChecked={true}
          />
          <ToggleSetting
            title="Newsletter"
            description="Receive our monthly newsletter"
            defaultChecked={false}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">
            Save Preferences
          </button>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-bold mb-4">Security</h2>
        <div className="space-y-4">
          <div>
            <button className="text-primary hover:underline text-sm">
              Change Password
            </button>
          </div>
          <div>
            <button className="text-primary hover:underline text-sm">
              Enable Two-Factor Authentication
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * FormField component for form inputs
 */
interface FormFieldProps {
  label: string;
  type: string;
  defaultValue: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, defaultValue }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 rounded-md border border-input bg-background"
      />
    </div>
  );
};

/**
 * ToggleSetting component for toggle switches
 */
interface ToggleSettingProps {
  title: string;
  description: string;
  defaultChecked: boolean;
}

const ToggleSetting: React.FC<ToggleSettingProps> = ({
  title,
  description,
  defaultChecked,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      <div className="flex items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={defaultChecked}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-secondary rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
      </div>
    </div>
  );
};

export default AccountSettings;
