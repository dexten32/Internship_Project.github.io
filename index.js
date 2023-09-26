const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.id === "clear") {
            result.value = "";
        } else if (button.id === "calculate") {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = "Error";
            }
        } else {
            result.value += button.textContent;
        }
    });
});