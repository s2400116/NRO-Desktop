function Assignment() {
    const inputBox = document.getElementById("Input");
    const pTags = document.querySelectorAll("#CBody p");

    let userSatisfaction = "N";
    let stage = "showOptions"; // Tracks what step we're on
    let full = [];
    let fastFood = [
        "McDonald", "Burger King", "KFC", "Taco Bell", "Subway"
    ];
    let fineDining = [
        "The French Laundry", "Le Bernardin", "Alain Ducasse", "Osteria Francescana", "Restaurant Gordon Ramsay"
    ];
    let limit = 0;
    let recommendation = "";
    let userCategory = "";

    showOptions();

    inputBox.addEventListener("keydown", function (event) {
        if (event.key !== "Enter") return;

        const input = inputBox.value.trim();
        inputBox.value = "";

        if (!input) return;

        if (stage === "category") {
            const choice = input.toUpperCase();
            if (choice === "FAST FOOD" || choice === "FF") {
                userCategory = "Fast Food";
                recommendation = fastFood[Math.floor(Math.random() * fastFood.length)];
            } else if (choice === "FINE DINING" || choice === "FD") {
                userCategory = "Fine Dining";
                recommendation = fineDining[Math.floor(Math.random() * fineDining.length)];
            } else {
                userCategory = "Random";
                recommendation = full[Math.floor(Math.random() * full.length)];
            }

            updateOutput(`🍽️ Our ${userCategory} recommendation is: ${recommendation}`);
            stage = "satisfaction";
            setTimeout(() => {
                updateOutput("✅ Are you satisfied with this selection? (Y/N)");
            }, 500);
        }

        else if (stage === "satisfaction") {
            if (input.toUpperCase() === "Y") {
                updateOutput("🎉 Enjoy your meal!");
                stage = "done";
            } else {
                userSatisfaction = "N";
                showOptions();
            }
        }
    });

    function showOptions() {
        stage = "category";
        full = [...fastFood, ...fineDining];
        let msg1 = "🍔 Fast Food Options: " + fastFood.join(", ");
        let msg2 = "🍽️ Fine Dining Options: " + fineDining.join(", ");
        updateOutput(msg2);
        updateOutput(msg1);
        setTimeout(() => {
            updateOutput("❓ Choose category: Fast Food, Fine Dining, or Random (FF/FD/R)");
        }, 200);
    }

    function updateOutput(newText) {
        // Shift output 1 → 2 → 3
        pTags[2].innerText = pTags[1].innerText;
        pTags[1].innerText = pTags[0].innerText;
        pTags[0].innerText = newText;

        // Show only non-empty lines
        for (let p of pTags) {
            p.style.display = p.innerText.trim() ? "block" : "none";
        }
    }
}
