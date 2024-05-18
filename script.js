document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const location = document.querySelector('input[name="location"]:checked').id;
  const locationValue = location ? location.id : "Unspecified";

  const weight = document.getElementById("weight").value;
  const days = document.getElementById("days").value;

  const totalCarbonFootprint = weight * days * 2.5;

  let printhtml;

  if (totalCarbonFootprint < 70.53) {
    printhtml = `
    <section style="background: #bbdaa5">
      <div id="result" style="color: black">
        <h2>Rest Assured!</h2>
        <img src="./smiley/green.png" />
        <h3><strong class='huge'>${totalCarbonFootprint} </strong>kg CO₂e</h3>
        <p>Carbon footprint emmision at <strong>${location}</strong> is low.</p>
      </div>
    </section>`;
  } else if (totalCarbonFootprint < 141.06) {
    printhtml = `  
    <section style="background: #ffe368">
      <div id="result" style="color: black">
        <h2>Stay Alert!</h2>
        <img src="./smiley/yellow.png" />
        <h3><strong>${totalCarbonFootprint} </strong>kg CO₂e</h3>
        <p>Carbon footprint emmision at <strong>${location}</strong> is moderate.</p>
      </div>
    </section>`;
  } else {
    printhtml = ` 
    <section style="background: #ff8974">
      <div id="result">
        <h2>Warning!</h2>
        <img src="./smiley/red.png" />
        <h3><strong>${totalCarbonFootprint} </strong>kg CO₂e</h3>
        <p>Carbon footprint emmision at <strong>${location}</strong> is high.</p>
      </div>
    </section>`;
  }

  document.getElementById("result").innerHTML = printhtml;

  window.scrollTo({
    top: document.body.scrollHeight + 50,
    behavior: "smooth",
  });
});
