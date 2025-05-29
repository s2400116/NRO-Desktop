function Assignment() {
    const inputBox = document.getElementById("Input")

    // Show instructions once
    updateOutput("💡 Format: Name, Sales (e.g. Hiroshi, 12000)")

    inputBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userInput = inputBox.value.trim()
            inputBox.value = ""

            const parts = userInput.split(",")
            if (parts.length < 2) {
                return updateOutput("⚠️ Please enter input like this: Name, Sales")
            }

            const name = parts[0].trim()
            const sales = parseFloat(parts[1].trim())

            if (!name || isNaN(sales)) {
                return updateOutput("⚠️ Invalid input. Name must be text, and sales must be a number.")
            }

            let bonus = 0
            if (sales <= 5000) bonus = 0
            else if (sales <= 9999) bonus = 5
            else if (sales <= 14999) bonus = 10
            else bonus = 15

            const bonusAmount = sales * (bonus / 100)

            const message = bonus > 0
                ? `✅ ${name} has ${sales} in sales and earns a bonus of ${bonusAmount.toFixed(2)}.`
                : `❌ ${name} has ${sales} in sales and does not qualify for a bonus.`

            updateOutput(message)
        }
    })

    function updateOutput(newText) {
        const pTags = document.querySelectorAll("#CBody p")

        // Shift previous messages downward (from 2 → 3, 1 → 2)
        pTags[2].innerText = pTags[1].innerText
        pTags[1].innerText = pTags[0].innerText
        pTags[0].innerText = newText

        // Show only ones that have content
        for (let p of pTags) {
            p.style.display = p.innerText.trim() ? "block" : "none"
        }
    }
}
