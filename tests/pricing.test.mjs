import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const output = new URL("../.next/server/app/", import.meta.url);
const home = readFileSync(new URL("index.html", output), "utf8");
const business = readFileSync(new URL("priser.html", output), "utf8");

for (const [route, html] of [["/", home], ["/priser", business]]) {
  test(`${route}: business positioning without public subscription offers`, () => {
    assert.doesNotMatch(html, /Gratis|Standard|Enterprise|kr\/mnd|99 kr|499 kr|Start gratis|Åpne Plinq/);
    assert.match(html, /Kontakt oss for tilbud/);
    assert.match(html, /For bedrifter/);
    assert.match(html, /id="kontakt"/);
    assert.doesNotMatch(html, /href="[^"]*(?:checkout|stripe|register|signup)/i);
    assert.match(html, /Send henvendelse/);
    assert.match(html, /id="kontakt-skjema"/);
    assert.match(html, /#kontakt-skjema/);
    const appLinks = [...html.matchAll(/href="(https:\/\/app\.plinq\.no[^"]*)"/g)];
    assert.ok(appLinks.every((match) => match[1] === "https://app.plinq.no/login"));
    assert.match(html, /Logg inn · eksisterende kunder/);
  });
}

test("homepage includes the service journey and product explanation", () => {
  assert.match(home, /Digital reklame på TV –/);
  assert.match(home, /enkelt for din bedrift/);
  assert.match(home, /Vi hjelper deg hele veien/);
  assert.match(home, /Fortell oss om bedriften din/);
  assert.match(home, /Vi hjelper deg med oppsett og tilpasning/);
  assert.match(home, /Publiser reklame på skjermene dine/);
  assert.match(home, /id="slik-fungerer-det"/);
  assert.match(home, /href="\/priser"/);
});

test("business page provides quote factors, FAQ and canonical metadata", () => {
  assert.match(business, /En løsning tilpasset/);
  for (const phrase of ["Skjermene dine", "Butikker og lokasjoner", "Oppsett", "Tilpasninger"]) {
    assert.ok(business.includes(phrase));
  }
  assert.equal((business.match(/<details>/g) || []).length, 5);
  assert.match(business, /https:\/\/plinq.no\/priser/);
});

function files(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? files(join(path, entry.name)) : [join(path, entry.name)],
  );
}

test("retained plan data is absent from exported HTML, RSC payloads and JavaScript", () => {
  const root = fileURLToPath(new URL("../.next/", import.meta.url));
  for (const file of files(root).filter((file) => /\.(html|txt|js|json)$/.test(file))) {
    assert.doesNotMatch(
      readFileSync(file, "utf8"),
      /Kom i gang gratis|Velg Standard|kontakt-gratis|kontakt-standard|99 kr per skjerm|0 kr\/mnd/,
      file,
    );
  }
});
