let metricConversionCheckbox = document.getElementById("metric");
let ListofLengths = "";
let materialSum = undefined;
let previousMaterialSum = 0;

const materialInput = () => {
  let material = document.getElementById("materialInput").value;
  return material.split(" ").map(Number);
};

const clearMaterial = () => {
  document.getElementById("matList").innerHTML = "";
  document.getElementById("total").innerHTML = "";
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
  materialSum = materialSum + previousMaterialSum;
  previousMaterialSum = materialSum;
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
      ListofLengths += "<li class='list'>" + (item / 25.4).toFixed(3) + "</li>";
    });
  } else {
    materialInput().forEach(function (item) {
      ListofLengths += "<li class='list'>" + Number(item).toFixed(3) + "</li>";
    });
  }
  document.getElementById("matList").innerHTML = ListofLengths;
  calculateMaterialTotal();
  showSum();
};

document.getElementById("submitBtn").addEventListener("click", splitter);
document.getElementById("clearBtn").addEventListener("click", clearMaterial);
