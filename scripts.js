let button = document.querySelector("#btn");
button.addEventListener("click", calculateBMI);

function calculateBMI() {
  
  let height = parseInt(document
          .querySelector("#height").value);


  let weight = parseInt(document
          .querySelector("#weight").value);

  let result = document.querySelector("#results");

  if (height === "" || isNaN(height)) 
  result.innerHTML = "Insert a valid number!";

else if (weight === "" || isNaN(weight)) 
  result.innerHTML = "Dont be shy to add you weight!";

else {

  
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);


  if (bmi < 18.6) result.innerHTML =
      `Your BMI is : <span>${bmi}</span>
        <b>Please Eat More Food!!</b>`;

  else if (bmi >= 18.6 && bmi < 24.9) 
      result.innerHTML = 
          `Your BMI is: <span>${bmi}</span>
            <b>Looking Fiiiinnneeeeee</b> `;

  else result.innerHTML =
      `Your BMI is : <span>${bmi}</span>
        <b>Please Loose Weight!!</b>`;
}
}