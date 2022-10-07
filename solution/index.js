const fields = document.querySelectorAll("input, textarea");

fields.forEach((field) => {
  field.setAttribute("aria-invalid", "false");

  field.addEventListener("invalid", () => {
    field.setAttribute("aria-invalid", "true");
  });

  field.addEventListener("input", () => {
    field.setAttribute("aria-invalid", "false");
  });
});
