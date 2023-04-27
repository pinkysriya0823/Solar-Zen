function calculateSavings() {
  const energyUsage = document.getElementById("energy-usage").value;
  const panelCost = document.getElementById("panel-cost").value;
  event.preventDefault();
  const coalCost = energyUsage * 7;
  const solarCost = energyUsage * 4;
  const numofmonths = panelCost/(coalCost-solarCost);
  const numofyears = numofmonths/12;
  const savingsElement = document.getElementById("savings");
  savingsElement.innerHTML = "<p> Cost of Coal Electricity per month " + coalCost + " rupees</p>" +
                             "<p> Cost of Solar Electricity per month " + solarCost + " rupees</p>" +
                             "<p> Years required to recover initial cost " + numofyears.toFixed(1) + " years</p>";
}
