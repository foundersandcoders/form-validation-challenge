const test = require("node:test");
const assert = require("node:assert");
const { loader } = require("./helpers.js");

test("Field type is enforced", async () => {
  const { $ } = await loader;
  has_type($, "email", "email");
  has_type($, "website", "url");
});

function has_type($, id, expected) {
  const input = $("#" + id);
  const type = input.getAttribute("type");
  assert.equal(
    type,
    expected,
    `#${input.id} field should have \`type\` attribute "${expected}", but got:
  
    ${input.outerHTML}
    `
  );
}
