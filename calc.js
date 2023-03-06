function calculate() {
	// Getsuser input
	var area = document.getElementById("area").value;

	// Constants
	var efficiency = 0.2; // 20%
	var irrad_clear = 1000; // W/m2
	var irrad_cloudy = 500; // W/m2
	var perf_ratio = 0.75;
	var energy_cost = 0.34; // £/kWh (as of March 2023)

	// Calculates energy output
	var energy_clear = area * efficiency * irrad_clear * perf_ratio / 1000; // kWh
	var energy_cloudy = area * efficiency * irrad_cloudy * perf_ratio / 1000; // kWh

	// Updates output
	document.getElementById("output1").innerHTML = energy_clear.toFixed(2);
	document.getElementById("output2").innerHTML = energy_cloudy.toFixed(2);
}
