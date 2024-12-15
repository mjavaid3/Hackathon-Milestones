document.addEventListener("DOMContentLoaded", function () {
    var editableFields = document.querySelectorAll("[data-editable]");
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.style.margin = "10px 0";
    saveButton.style.padding = "10px 20px";
    saveButton.style.backgroundColor = "#007BFF";
    saveButton.style.color = "#fff";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "5px";
    saveButton.style.cursor = "pointer";
    document.body.insertBefore(saveButton, document.body.firstChild);
    saveButton.addEventListener("click", function () {
        editableFields.forEach(function (field) {
            var key = field.getAttribute("data-key");
            if (key) {
                var value = field.innerText;
                localStorage.setItem(key, value);
            }
        });
        alert("Changes saved successfully!");
    });
    editableFields.forEach(function (field) {
        var key = field.getAttribute("data-key");
        if (key && localStorage.getItem(key)) {
            field.innerText = localStorage.getItem(key) || "";
        }
        field.addEventListener("click", function () {
            field.contentEditable = "true";
            field.style.border = "1px dashed #007BFF";
        });
        field.addEventListener("blur", function () {
            field.contentEditable = "false";
            field.style.border = "none";
        });
    });
});
