document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Validate input values
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine BMI category
    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    // Display the results
    document.getElementById("bmi-value").textContent = bmi;
    document.getElementById("bmi-category").textContent = bmiCategory;

    // Show the result section
    document.getElementById("result").style.display = "block";
});


