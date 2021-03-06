let metricConversionCheckbox = document.getElementById("metric");
let listOfLengths = "";
let materialSum = undefined;

const materialInput = () => {
  let material = document.getElementById("materialInput").value;
  return material.split(" ").map(Number);
};

const clearMaterial = () => {
  document.getElementById("matList").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  previousMaterialSum = 0;
  listOfLengths = ""
  document.getElementById("materialInput").value = ""
};

const calculateMaterialTotal = () => {
  materialSum = 0;
  let arrayOfLengths = materialInput();
  for (i = 0; i < arrayOfLengths.length; i++) {
    materialSum += arrayOfLengths[i];
  }
  if (metricConversionCheckbox.checked) {
    materialSum = materialSum / 25.4;
  }
  materialSum = Number(materialSum.toFixed(3));
  return materialSum;
};

showSum = () => {
  let totalLength = document.getElementById("total");
  totalLength.innerHTML = `<br>Total length: ${materialSum}</br>`;
  document.getElementById("inputForm").appendChild(totalLength);
};

const splitter = () => {
  if (metricConversionCheckbox.checked) {
    materialInput().forEach(function (item) {
      listOfLengths += "<li class='list'>" + (item / 25.4).toFixed(3) + "</li>";
    });
  } else {
    materialInput().forEach(function (item) {
      listOfLengths += "<li class='list'>" + Number(item).toFixed(3) + "</li>";
    });
  }
  document.getElementById("matList").innerHTML = listOfLengths;
  calculateMaterialTotal();
  showSum();
  document.getElementById("materialInput").value = ""
  listOfLengths = ''
};

const handleSubmit = (e) => {
  e.preventDefault();
  splitter();
}

document.getElementById("submitBtn").addEventListener("click", splitter);
document.getElementById("clearBtn").addEventListener("click", clearMaterial);
document.getElementById("inputForm").addEventListener("submit",(e) => handleSubmit(e));
