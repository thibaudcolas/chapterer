```sql
#standardSQL
SELECT
url
FROM
`httparchive.lighthouse.2022_06_01_mobile`
TABLESAMPLE SYSTEM (0.1 PERCENT)
WHERE
JSON_EXTRACT_SCALAR(report, "$.audits['html-lang-valid'].score") = '1'
and
JSON_EXTRACT_SCALAR(report, "$.audits['html-has-lang'].score") != '1'
```

## Empty `<html>` lang attributes report as fail of html-has-lang, pass for html-lang-valid #3624

https://github.com/dequelabs/axe-core/issues/3624

### Product

axe-core

### Product Version

4.4.2

### Latest Version

- [x] I have tested the issue with the latest version of the product

### Issue Description

For `<html lang="">`, `html-has-lang` fails, and `html-lang-valid` passes. This is a similar issue to #3623, where I would expect the rules to be consistent with one-another.

#### Expectation

Both rules should be consistent. If `lang=""` is indeed a valid lang attribute value, then `html-has-lang` should pass (both rules should pass). If it’s not a valid value, then either both rules should fail, or only `html-lang-valid` should fail.

#### Actual

Currently, `<html lang="">` passes `html-lang-valid`.

#### How to Reproduce

Here are two sites where this happens, and Axe CLI commands:

```bash
axe -r html-has-lang,html-lang-valid https://www.koldijkbv.nl/ --save empty-lang.json
axe -r html-has-lang,html-lang-valid https://loyalty.posnania.eu/ --save empty-lang.json
```

In each case, see the `html-has-lang` violation while `html-lang-valid` is marked as a "pass".

#### Additional context

Similarly to #3623, I was also tempted to report this to Lighthouse instead / in addition to Axe, as its overly simplified audit messages make this even more confusing. It would report:

- An error "`<html> element does not have a [lang] attribute`"
- And a pass "`<html> element has a valid value for its [lang] attribute`"

## Inconsistent handling of xml:lang attributes for XHTML pages between html-has-lang and html-lang-valid #3623

https://github.com/dequelabs/axe-core/issues/3623

### Product

axe-core

### Product Version

4.4.2

### Latest Version

- [x] I have tested the issue with the latest version of the product

### Issue Description

[html-has-lang’s has-lang-evaluate](https://github.com/dequelabs/axe-core/blob/f62f0cf18f7b69b247b0b6362cf1ae71ffbf3a1b/lib/checks/language/has-lang-evaluate.js) reports a failure for certain XHTML pages failing its XHTML validation, while [html-lang-valid’s valid-lang-evaluate](https://github.com/dequelabs/axe-core/blob/f62f0cf18f7b69b247b0b6362cf1ae71ffbf3a1b/lib/checks/language/valid-lang-evaluate.js) passes.

#### Expectation

html-has-lang and html-lang-valid should be consistent in their handling of `xml:lang` attributes, so it’s simpler to understand what the problem might be with a page. They should either both have the same XHTML validation, so they both fail pages with invalid language declarations – or both skip any XHTML validation.

If the discrepancy is intended, then I would expect the documentation of `html-lang-valid` to explain it also checks xml:lang. As-is, its description of "Ensures the lang attribute of the <html> element has a valid value" is confusing when there is no `lang` attribute on the element.

#### Actual

Right now, when a page has a `xml:lang` but doesn’t pass [Axe’s XHTML check](https://github.com/dequelabs/axe-core/blame/f8baee68fa5220d54399a347322c6c8ac4f26cb9/lib/core/utils/is-xhtml.js#L12),

- `html-has-lang` fails with "Ensures every HTML document has a lang attribute […] The xml:lang attribute is not valid on HTML pages, use the lang attribute.".
- `html-lang-valid` passes, with its description / help message suggesting everything is fine ("`<html>` element must have a valid value for the lang attribute").

I find it confusing that it seems `lang` is valid even when absent. And the XHTML validation is also confusing – I wasn’t expecting this kind of check from Axe, and the error message isn’t necessarily suggesting an actionable fix (the issue could be the page showing as HTML even though it’s not, rather than using the wrong attribute).

#### How to Reproduce

Here are sites where this can be tested with the Axe CLI:

```
axe -r html-has-lang,html-lang-valid https://www.nyjuror.gov/ --save html-lang-1.json
axe -r html-has-lang,html-lang-valid https://www.keolis-idf.com/ --save html-lang-2.json
axe -r html-has-lang,html-lang-valid https://www.cecil.fr/ --save html-lang-3.json
```

In each case, see the `html-has-lang` violation while `html-lang-valid` is marked as a "pass".

#### Additional context

##### Validation

Of the above three sites, the first one uses an invalid namespace and fails [validator.w3.org](https://validator.w3.org/) (HTTPS scheme in `xmlns="https://www.w3.org/1999/xhtml"`). The other two seem to pass validation of the DTD + namespaces, but are nonetheless not detected as XHTML by Axe.

##### Lighthouse

I was also tempted to file this as an issue with Lighthouse, as their two audits based on Axe’s rules are even more confusing. In the above cases, it reports:

- An error "`<html> element does not have a [lang] attribute`". No mention of the `xml:lang` / XHTML support.
- A pass "`<html> element has a valid value for its [lang] attribute`"

Their web.dev resources (https://web.dev/html-has-lang/, https://web.dev/html-lang-valid/) make no mention of XHTML / XML, so it takes a lot of digging to understand the discrepancy.
