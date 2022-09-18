https://cloud.google.com/docs/authentication/getting-started
https://console.cloud.google.com/iam-admin/serviceaccounts/details/103487585366993320317/keys?project=httparchive-bigquery-351100&supportedpurview=project

https://github.com/jroehl/google-sheet-cli

```
google-sheet worksheet:add --spreadsheetId=1ip3mJXlSgfClJmHj7eeO4jZs0yaau8CBZyaNT8KMRrs --worksheetTitle='Test potato'
```

google-sheet spreadsheet:get --rawOutput --spreadsheetId=1j32TLdG7uLUfYYwnVjWhN-WKf18EnFUbR8MV5QI9Umw > 2021-sheet-data.json

```
GSHEET_CLIENT_EMAIL=
GSHEET_PRIVATE_KEY=
google-sheet data:append --spreadsheetId=1j32TLdG7uLUfYYwnVjWhN-WKf18EnFUbR8MV5QI9Umw --worksheetTitle="Anchors with role='button'" $(cat spacer.json)
```

## 2021 mistakes

aria-lavel fun fact
Button accessible name source
an video https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2021/accessibility.md#video
Mobile sites with sufficient contrast color 2020 https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2021/accessibility.md#color-contrast
Asterick https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/content/en/2021/accessibility.md#requiring-information
53.8 of desktop sites
and 8.4%,100 cha
ns used in all `jpg`
required` us used by

## 2022

More YoY comparisons
2021 vs. 2022 (mobile only)

### Existing data

- [ ] Usage of input device media queries: `hover`, `any-hover`, `pointer`
- [ ] Usage of high-contrast media queries: `prefers-contrast`, `forced-colors`, `-ms-high-contrast`
- [ ] The limitations of automated tests: issues spotted in Lighthouse audits (HTML lang attribute, bypass blocks, and other tests not working correctly)
- [ ] Good news: largest changes in Lighthouse audit scores YoY (a few audits have great YoY increases in scores)

### Existing queries

`autocomplete` attribute usage and different values, to ease with forms completion
`<output>` element usage: we currently don’t report on it in our section about live regions

### New queries

Alt text ending in an image extension, by CMS
Most common lengths of alt text, by CMS
% of sites using each type of aria role, by framework
Lighthouse audit results, by CMS
Lighthouse audit results, by framework
