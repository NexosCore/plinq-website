import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../out/index.html', import.meta.url), 'utf8');
const prices = readFileSync(new URL('../out/priser.html', import.meta.url), 'utf8');
for (const [route, html] of [['/', home], ['/priser', prices]]) {
  test(`${route}: confirmed prices and safe contact destinations`, () => {
    assert.match(html, /<strong>0<\/strong>/);
    assert.match(html, /<strong>99<\/strong>/);
    const enterprise = html.match(/<article[^>]*aria-labelledby="plan-enterprise"[\s\S]*?<\/article>/)?.[0];
    assert.ok(enterprise);
    assert.doesNotMatch(enterprise.replace(/<[^>]*>/g, ""), /\d|kr\/mnd/);
    assert.doesNotMatch(enterprise, /price-unit|price-prefix/);
    assert.match(enterprise, /Kontakt oss for pris/);
    assert.doesNotMatch(html, /499/);
    assert.match(html, /kr per skjerm per måned/);
    assert.match(html, /1 skjerm/);
    for (const plan of ['gratis', 'standard', 'enterprise']) {
      assert.ok(html.includes(`href="/priser/#kontakt-${plan}"`));
    }
    assert.doesNotMatch(html, /href="[^"]*(?:checkout|stripe|register|signup)/i);
  });
}
test('pricing page has FAQ, contact targets and plan-specific email drafts', () => {
  assert.equal((prices.match(/<details>/g) || []).length, 5);
  for (const plan of ['gratis', 'standard', 'enterprise']) assert.ok(prices.includes(`id="kontakt-${plan}"`));
  for (const plan of ['Gratis', 'Standard', 'Enterprise']) assert.ok(prices.includes(`mailto:support@plinq.no?subject=Plinq%20%E2%80%93%20${plan}`));
  assert.ok(prices.includes('https://plinq.no/priser'));
  assert.doesNotMatch(prices, /Kontaktinformasjon kommer/);
});
