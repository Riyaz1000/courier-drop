import JustValidate from "just-validate";

const formEl = document.getElementById("courier-request");

console.dir(formEl);

const localStorageKey = "courierData"; //oru variable la store paniyachu

//create own form instence
const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true, //inbuild formvalidation fn
});
console.log(validateForm);

validateForm.addField(
  "#nameId",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 8,
    },
    {
      rule: "maxLength",
      value: 12,
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
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
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
    errorLabelCssClass: ["!text-sm"],
  }
);

//mela iruka form validation success ana mattum intha fn run aagum

validateForm.onSuccess(() => {
  const formData = new FormData(formEl); //intha form la iruka ellam data um vaangurom newFormData valiya

  console.log(formData);

  const formValueObject = Object.fromEntries(formData.entries()); // form data la ula ellam object.entries valiya ellathaium object ah maathurom
  console.log("formValueObject", formValueObject);

  //get existing local storage value , if its exists!
  const existingCourierData = localStorage.getItem("localStorageKey"); //check pandrom existing ah ethachum item save panirukoma nu
  console.log(existingCourierData);

  //parse that string into javascript value
  const existingCourierArray = JSON.parse(existingCourierData); //javascript value ah kidaikum
  console.log(existingCourierArray);

  if (existingCourierArray) {
    // Create a new array and push the existing localstorage value into new array.
    console.log("existingCourierArray");

    existingCourierArray.push(formValueObject);

    localStorage.setItem(
      "localStorageKey",
      JSON.stringify(existingCourierArray)
    );
  } else {
    const newCourierData = []; //push existing code into new array (because apo tha vera engayachum save panna mudium)

    newCourierData.push(formValueObject);
    console.log("newCourierData");

    localStorage.setItem("localStorageKey", JSON.stringify(newCourierData));
  }

  formEl.reset();
});











////////local storage basic///////

// localStorage.setItem("favFood", "chickenbriyani");

// localStorage.getItem("favFood");

// alert("briyani");

// localStorage.setItem("favFood", "mutton");

// const riyazFavFood = ["briyani", "chicken", "maagie"];

// localStorage.setItem("myFav", riyazFavFood);

// localStorage.getItem("myFav");

function getallCourierDatas() {
  //get all stored courier data which are available in localstorage
  const courierData = localStorage.getItem(localStorageKey);

  const courierDataArr = JSON.parse(courierData);

  if (courierDataArr) {
    //those who values into table ui
    const tableEl = document.querySelector("#courierDataTable");

    const newFinalValue = [];

    courierDataArr.map((courierData) => {
      const trEl = document.createElement("tr");
      const tdEl = document.createElement("tr");
      const td2El = document.createElement("tr");
      const td3El = document.createElement("tr");
      const td5El = document.createElement("tr");
      const deleteBtnEl = document.createElement("tr");
    });

    const finalData = courierDataArr.map((courierData) => {
      return `

  

  `;
    });

    

    tableEl.innerHTML += `<tr>
 <td> some data </td>

</tr>`;

    newFinalValue.forEach((el) => tableEl.append(el));
  } else {
    console.log("no available in local storage");
  }
}

getallCourierDatas();
