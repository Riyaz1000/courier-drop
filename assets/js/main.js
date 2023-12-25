import JustValidate from "just-validate";

const formEl = document.getElementById("courier-request");

console.dir(formEl);

//create own form instence
const validateForm = new JustValidate(formEl);
console.log(validateForm);

validateForm.addField(
  "#nameId",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 7,
    },
  ],
  {
    errorLabelCssClass: ["text-sm"],
  }
);

validateForm.addField(
  "#numberId",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minNumber",
      value: 10,
    },
    {
      rule: "maxNumber",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["text-sm"],
  }
);

validateForm.addField(
  "#pickup-date",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minNumber",
      value: 10,
    },
    {
      rule: "maxNumber",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["text-sm"],
  }
);

validateForm.addField(
  "#numberId",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["text-sm"],
  }
);
validateForm.addField(
  "#pickup-area",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["text-sm"],
  }
);
