document.getElementById("calculateBtn").addEventListener("click", function () {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);

  const workPrice = parseFloat(document.getElementById("work").value);
  const blockPrice = parseFloat(document.getElementById("block").value);

  const mirrorPrice = parseFloat(document.getElementById("mirrorPrice").value);
  const framePrice = parseFloat(document.getElementById("framePrice").value);
  const tapePrice = parseFloat(document.getElementById("tapePrice").value);
  const backPrice = parseFloat(document.getElementById("backPrice").value);

  const sensorSwitchPrice = document.getElementById("sensorSwitch").checked
    ? parseFloat(document.getElementById("sensorSwitch").value)
    : 0;
  const mechanicalSwitchPrice = document.getElementById("mechanicalSwitch").checked
    ? parseFloat(document.getElementById("mechanicalSwitch").value)
    : 0;
  const heatingPrice = document.getElementById("heating").checked
    ? parseFloat(document.getElementById("heating").value)
    : 0;

  const area = width * height;
  const perimeter = 2 * (width + height);

  const mirrorCost = area * mirrorPrice;
  const frameCost = perimeter * framePrice;
  const tapeCost = perimeter * tapePrice;
  const backCost = area * backPrice;

  const totalPrice =
    mirrorCost +
    frameCost +
    tapeCost +
    backCost +
    workPrice +
    blockPrice +
    sensorSwitchPrice +
    mechanicalSwitchPrice +
    heatingPrice;

  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
});
