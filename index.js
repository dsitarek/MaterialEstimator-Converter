let metric = document.getElementById("metric");

const matsBlock = () => {
  let mats = document.getElementById("matsBlock").value;
  return mats.split(" ").map(Number);
};

const clearMats = () => {
  document.getElementById("matList").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  //matsSum = 0;
};

showSum = () => {
  let totalLength = document.getElementById("total");
  totalLength.innerHTML = `<br>Total length: ${matsSum}</br>`;
  document.getElementById("inputForm").appendChild(totalLength);
};

let splitListRef = "";
let matsSum = 0;
let prevSum = 0;

const calcMat = () => {
  matsSum = 0;
  let arrayOfLengths = matsBlock();
  for (i = 0; i < arrayOfLengths.length; i++) {
    matsSum += arrayOfLengths[i];
  }
  if (metric.checked) {
    matsSum = matsSum / 25.4;
  }
  matsSum = matsSum + prevSum;
  prevSum = matsSum;
  return matsSum;
};

const splitter = () => {
  if (metric.checked) {
    matsBlock().forEach(function (item) {
      splitListRef += "<li class='list'>" + (item / 25.4).toFixed(3) + "</li>";
    });
  } else {
    matsBlock().forEach(function (item) {
      splitListRef += "<li class='list'>" + Number(item).toFixed(3) + "</li>";
    });
  }
  document.getElementById("matList").innerHTML = splitListRef;
  calcMat();
  showSum();
};

document.getElementById("submitBtn").addEventListener("click", splitter);
document.getElementById("clearBtn").addEventListener("click", clearMats);
