interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Team Owner', 'Team Member', 'Scorer'],
  tenantName: 'Organization',
  applicationName: 'Cricket Scoring App ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Edit personal information',
    'View organization information',
    'Manage bookings',
    "Checkout the organization's details",
  ],
  ownerAbilities: ['Manage users', 'Manage organization', 'Update organization details', 'Manage tenant data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4289d8be-c7ff-46a9-98c0-a40e99ca5185',
};
