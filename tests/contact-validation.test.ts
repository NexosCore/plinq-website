import { test } from "node:test";
import assert from "node:assert/strict";
import {
  CONTACT_LIMITS,
  escapeHtml,
  parseContactPayload,
} from "../src/lib/contact-validation";

test("parseContactPayload accepts valid input", () => {
  const result = parseContactPayload({
    name: "Ola Nordmann",
    email: "ola@example.com",
    company: "Bakeri AS",
    message: "Vi trenger Plinq til tre skjermer.",
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.email, "ola@example.com");
  }
});

test("parseContactPayload rejects invalid input", () => {
  assert.equal(
    parseContactPayload({ name: "O", email: "feil", message: "kort" }).ok,
    false,
  );
});

test("parseContactPayload enforces max lengths", () => {
  const result = parseContactPayload({
    name: "A".repeat(CONTACT_LIMITS.nameMax + 5),
    email: "test@bedrift.no",
    message: "x".repeat(CONTACT_LIMITS.messageMax + 20),
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.name.length, CONTACT_LIMITS.nameMax);
    assert.equal(result.data.message.length, CONTACT_LIMITS.messageMax);
  }
});

test("escapeHtml escapes markup", () => {
  assert.equal(escapeHtml("<b>&</b>"), "&lt;b&gt;&amp;&lt;/b&gt;");
});
