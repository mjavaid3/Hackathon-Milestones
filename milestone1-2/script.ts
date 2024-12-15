document.addEventListener("DOMContentLoaded", () => {
    const editableFields = document.querySelectorAll("[data-editable]");
    const saveButton = document.createElement("button");

    saveButton.textContent = "Save Changes";
    saveButton.style.margin = "10px 0";
    saveButton.style.padding = "10px 20px";
    saveButton.style.backgroundColor = "#007BFF";
    saveButton.style.color = "#fff";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "5px";
    saveButton.style.cursor = "pointer";

    document.body.insertBefore(saveButton, document.body.firstChild);

    saveButton.addEventListener("click", () => {
        editableFields.forEach(field => {
            const key = field.getAttribute("data-key");
            if (key) {
                const value = (field as HTMLElement).innerText;
                localStorage.setItem(key, value);
            }
        });
        alert("Changes saved successfully!");
    });

    editableFields.forEach(field => {
        const key = field.getAttribute("data-key");
        if (key && localStorage.getItem(key)) {
            (field as HTMLElement).innerText = localStorage.getItem(key) || "";
        }

        field.addEventListener("click", () => {
            (field as HTMLElement).contentEditable = "true";
            (field as HTMLElement).style.border = "1px dashed #007BFF";
        });

        field.addEventListener("blur", () => {
            (field as HTMLElement).contentEditable = "false";
            (field as HTMLElement).style.border = "none";
        });
    });
});
