const guideFields = [
  {
    labelText: "Full Name",
    labelFor: "name",
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "name",
    isRequired: true,
    placeholder: "Full name",
  },
  {
    labelText: "City",
    labelFor: "city",
    id: "city",
    name: "city",
    type: "text",
    autoComplete: "city",
    isRequired: true,
    placeholder: "City of service",
  },
  {
    labelText: "experience",
    labelFor: "experience",
    id: "experience",
    name: "experience",
    type: "text",
    autoComplete: "x years",
    isRequired: true,
    placeholder: "Working experience in years",
  },
  {
    labelText: "reg-id",
    labelFor: "reg-id",
    id: "reg-id",
    name: "reg-id",
    type: "text",
    autoComplete: "id",
    isRequired: false,
    placeholder: "Registration ID (if applicable)",
  },
  {
    labelText: "rate",
    labelFor: "rate",
    id: "rate",
    name: "rate",
    type: "number",
    autoComplete: "rate",
    isRequired: true,
    placeholder: "Rate per hour",
  },
];

export { guideFields };
