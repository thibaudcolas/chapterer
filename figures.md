## Introduction

## Ease of reading

## Color contrast

```
{{ figure_markup(
  image="color-contrast-2019-2020-2021-2022.png",
  caption="Mobile sites with sufficient color contrast.",
  description="A bar chart showing 22.0% of sites had sufficient color contrast in 2019, dipping slightly to 21.1% in 2020 and increasing slightly to 22.2% for 2020, increasing more to 22.9% in 2022.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=2111814473&format=interactive",
  sheets_gid="1468870242",
  sql_file="color_contrast.sql",
) }}
```

// [% of pages with sufficient text color contrast](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1468870242), [color_contrast.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/color_contrast.sql)

## Zooming and scaling

```
{{ figure_markup(
  image="pages-zooming-scaling-disabled.png",
  caption="Pages with zooming and scaling disabled.",
  description="A bar chart showing that 15.7% of desktop sites and 18.3% of mobile sites disable scaling, 20.2% and 24.4% respectively set a max scale of 1 and 23.4% and 27.8% use either.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=550476172&format=interactive",
  sheets_gid="602773443",
  sql_file="viewport_zoom_scale.sql",
) }}
```

// [Viewport zoom scale](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=602773443), [viewport_zoom_scale.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/viewport_zoom_scale.sql)

```
{{ figure_markup(
  image="pages-zooming-scaling-disabled-by-rank.png",
  caption="Pages with zooming and scaling disabled by rank.",
  description="A bar chart showing that for the top 1,000 sites zooming and scaling is disabled by 21.0% of desktop sites and 40.2% of mobile sites, for the top 10,000 it's 25.2% and 36.0% respectively, for the top 100,000 it's 25.0% and 31.9%, for the top million it's 24.4% and 28.9% and finally for all sites it's 23.4% and 27.8%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1987306037&format=interactive",
  sheets_gid="1896788548",
  sql_file="viewport_zoom_scale_by_domain_rank.sql",
) }}
```

// [Disabled zooming and scaling via the viewport tag by domain rank](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1896788548), [viewport_zoom_scale_by_domain_rank.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/viewport_zoom_scale_by_domain_rank.sql)

## Language identification

```
{{ figure_markup(
  content="82.7%",
  caption="Mobile sites have a valid `lang` attribute.",
  classes="big-number",
  sheets_gid="420415839",
  sql_file="valid_html_lang.sql",
) }}
```

// [% of pages with a valid html lang attribute](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=420415839), [valid_html_lang.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/valid_html_lang.sql)

## Font size and line height

```
{{ figure_markup(
  image="font-unit-usage.png",
  caption="Font unit usage.",
  description="A bar chart showing `px` is used for font sizes on 70.5% of desktop and mobiles pages, `em` on 14.9% and 15.2% respectively, `rem` on 5.7% and 5.6%, `%` on 4.5% and 4.8%, `<number>` on 2.1% and 1.9%, and finally `pt` on 1.7% and 1.5%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=850268795&format=interactive",
  sheets_gid="955782036",
  sql_file="units_properties.sql",
) }}
```

// [Length units top properties - From CSS Chapter](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=955782036), [units_properties.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/units_properties.sql)

## Focus Styles

```
{{ figure_markup(
  image="pages-overriding-focus-styles.png",
  caption="Pages overriding focus styles.",
  description="A bar chart showing 89.7% of desktop sites and 88.9% of mobile sites use a `:focus` pseudo class, and 90.0% of desktop sites and 91.0% of mobile sites use the `:focus` pseudo class to set the outline to 0 or none. 9.0% of desktop sites and 9.8% of mobile sites use the `:focus-visible` pseudo class.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=500239469&format=interactive",
  sheets_gid="1548098920",
  sql_file="focus_outline_0.sql",
) }}
```

// [focus and outline 0 - From CSS chapter](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1548098920), [focus_outline_0.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/focus_outline_0.sql)

```
{{ figure_markup(
  image="pages-overriding-focus-styles.png",
  caption="Pages overriding focus styles.",
  description="A bar chart showing 89.7% of desktop sites and 88.9% of mobile sites use a `:focus` pseudo class, and 90.0% of desktop sites and 91.0% of mobile sites use the `:focus` pseudo class to set the outline to 0 or none. 9.0% of desktop sites and 9.8% of mobile sites use the `:focus-visible` pseudo class.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=500239469&format=interactive",
  sheets_gid="1548098920",
  sql_file="focus_visible.sql",
) }}
```

// [focus and outline 0 - From CSS chapter](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1548098920), [focus_visible.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/focus_visible.sql)

## User preference media queries and high contrast support

```
{{ figure_markup(
  image="userpreference-media-queries.png",
  caption="User preference media queries.",
  description="A bar chart showing that 33.6% of desktop sites and 34.2% of mobile sites use the `prefers-reduced-motion` media query, 8.2% of desktop sites and 7.7% of mobile sites use `prefers-color-scheme`, and `prefers-contrast` is used by 1.1% of desktop sites and 1.2% of mobile sites.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=727284960&format=interactive",
  sheets_gid="48059230",
  sql_file="media_query_features.sql",
) }}
```

// [Prefers data - From CSS chapter](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=48059230), [media_query_features.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/media_query_features.sql)

## Ease of page navigation

## Landmarks and page structure

```
{{ figure_link(
  caption="Landmark element and role usage (desktop).",
  sheets_gid="2141972716",
  sql_file="landmark_elements_and_roles.sql",
) }}
```

// [sites using landmark elements or roles](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=2141972716), [landmark_elements_and_roles.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/landmark_elements_and_roles.sql)

## Document titles

```
{{ figure_markup(
  image="page_title-information.png",
  caption="Title element statistics",
  description="A bar chart showing 97.6% of desktop sites and 97.7% of mobile sites use the `<title>` element, 68.6% and 70.0% of those titles have four or more words, and 3.7% and 4.0% are changed on render.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=154664062&format=interactive",
  sheets_gid="634812711",
  sql_file="page_title.sql",
) }}
```

// [Page title stats](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=634812711), [page_title.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/page_title.sql)

## Secondary Navigation

We found that 22.7% of all mobile sites used a search input

// [Pages with search input](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=830945637), [pages_with_search_input.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/pages_with_search_input.sql)

## Tabindex

```
{{ figure_markup(
  image="tabindex-usage-and-values.png",
  caption="`tabindex` usage",
  description="Bar chart showing that of pages that use `tabindex`, a negative or zero `tabindex` is used on 97.3% of those pages for desktop and 97.9% of those pages for mobile, a `tabindex` of 0 is used on 76.7% and 76.4% respectively, a negative `tabindex` is used on 69.1% and 69.4%, and finally a positive `tabindex` is used on 8.5% and 7.4%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=723679746&format=interactive",
  sheets_gid="1436895233",
  sql_file="tabindex_usage_and_values.sql",
) }}
```

// [Tabindex usage data](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1436895233), [tabindex_usage_and_values.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/tabindex_usage_and_values.sql)

## Skip links

21% of desktop and mobile sites likely have a skip link

// [% of pages having skip links](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1778743357), [skip_links.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/skip_links.sql)

## Heading hierarchy

```
{{ figure_markup(
  content="57.7%",
  caption="Mobile sites passing the Lighthouse audit for properly ordered headings.",
  classes="big-number",
  sheets_gid="1270834582",
  sql_file="lighthouse_a11y_audits.sql",
) }}
```

// [Summary of all lighthouse scores for a category](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1270834582), [lighthouse_a11y_audits.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/lighthouse_a11y_audits.sql)

## Tables

```
{{ figure_link(
  caption="Accessible table usage.",
  sheets_gid="599630882",
  sql_file="table_stats.sql",
) }}
```

// [Table stats](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=599630882), [table_stats.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/table_stats.sql)

## Table captions

## Tables for layout

We found that 1% of desktop and mobile pages contain a table with a role of presentation.

// [Table stats](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=599630882), [table_stats.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/table_stats.sql)

## Tabs

We found that 8.7% of desktop pages have at least one element with a role="tablist", 7.7% of pages have elements with a role="tab" and 7.2% of pages have elements with a role="tabpanel"

// [% of sites using each type of aria role](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=283521996), [common_aria_role.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_aria_role.sql)

## Captchas

```
{{ figure_markup(
  content="18.5%",
  caption="Mobile sites using a CAPTCHA",
  classes="big-number",
  sheets_gid="1615174635",
  sql_file="captcha_usage.sql",
) }}
```

// [Captcha usage](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1615174635), [captcha_usage.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/captcha_usage.sql)

## Forms

## The `<label>` element

```
{{ figure_markup(
  image="form-input-name-sources.png",
  caption="Where inputs get their accessible names from.",
  description="A bar chart showing 38.3% of desktop input elements and 38.0% of mobile input elements have no accessible name. `placeholder` is the source for 23.7% of desktop pages and 26.0% of mobile pages. For `relatedElement: label` it's 19.8% and 18.8% respectively, for `attribute: aria-label` it's 7.2% and 8.2%, for `attribute: value` it's 5.3% and 5.1%, for `attribute: title` it's 3.5% and 2.3%, for `attribute: alt` it's 1.2% and 1.0%, for `attribute: type` it's 0.6% and 0.5%, for `relatedElement: aria-labelledby` it's 0.3% and 0.2%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=231535249&format=interactive",
  sheets_gid="1245935907",
  sql_file="form_input_name_sources.sql",
  width="600",
  height="537",
) }}
```

// [Where input elements get their A11Y names from](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1245935907), [form_input_name_sources.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/form_input_name_sources.sql)

## The improper use of the `placeholder` attribute for labeling inputs

```
{{ figure_markup(
  image="placeholder-but-no-label.png",
  caption="Use of placeholders on inputs.",
  description="A bar chart showing 58.6% of desktop sites and 55.5% of mobile sites use placeholders. 66.7% of desktop sites and 67.2% of mobile sites have inputs with no label. 61.1% of desktop sites and 62.7% of mobile sites have placeholders and also inputs with no labels.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1142115744&format=interactive",
  sheets_gid="1464041597",
  sql_file="placeholder_but_no_label.sql",
) }}
```

// [Form controls with placeholder but no label](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1464041597), [placeholder_but_no_label.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/placeholder_but_no_label.sql)

## Requiring information

```
{{ figure_markup(
  image="form-required-controls.png",
  caption="How required inputs are specified",
  description="A bar chart showing the `required` attribute is used on 65.6% of desktop sites and 67.2% of mobile sites, `aria-required` is used by 32.4% and 31.8%, asterisk is used by 21.9% and 21.7%, `required` and `aria-required` is used by 7.9% and 8.5%, asterisk and `required` is used by 7.7% and 8.6%, asterisk and `aria-required` is used by 7.1% and 5.9%, and all three are used by 0.9% and 0.8%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=782719766&format=interactive",
  sheets_gid="1918657462",
  sql_file="form_required_controls.sql",
  width="600",
  height="505",
) }}
```

// [Various stats for required form controls](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1918657462), [form_required_controls.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/form_required_controls.sql)

## Media on the web

## Overview of text alternatives

## Images

```
{{ figure_markup(
  image="pages-containing-alt-with-file-extension.png",
  caption="Pages containing an `alt` attribute with a file extension.",
  description="A bar chart showing in 2020 6.8% of desktop sites and 6.4% of mobile sites used and extension in the `alt` attribute. This increased to 7.3% of desktop sites and 7.1% of mobile sites in 2021, and in 2022 to 7.2% of desktop sites and 7.5% of mobile sites",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1961543902&format=interactive",
  sheets_gid="304752448",
  sql_file="alt_ending_in_image_extension.sql",
) }}
```

// [Alt text ending in an image extension](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=304752448), [alt_ending_in_image_extension.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/alt_ending_in_image_extension.sql)

```
{{ figure_markup(
  image="common-file-extensions-in-alt-text.png",
  caption="Most common file extensions in `alt` text.",
  description="A bar chart showing of all extensions used in alt `jpg` is used 52.9% of the time on desktop sites and 52.8% for mobile, `png` is 34.1% and 34.4% and respectively, `ico` is 4.9% and 4.8%, `jpeg` is 3.2% and 3.8%, `svg` is 2.0% and 1.6%, `gif` is 1.8% and 1.6%, `webp` is 0.5% and 0.5%, and finally `tif` is 0.4% and 0.3%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=288529525&format=interactive",
  sheets_gid="304752448",
  sql_file="alt_ending_in_image_extension.sql",
  width="600",
  height="764",
) }}
```

// [Alt text ending in an image extension](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=304752448), [alt_ending_in_image_extension.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/alt_ending_in_image_extension.sql)

```
{{ figure_markup(
  image="alt-attribute-lengths.png",
  caption="`alt` attribute lengths.",
  description="A bar chart showing no `alt` is set on 17.9% of desktop images and 18.0% of mobile images, it is set to empty on 27.0% and 27.9% respectively, it is 10 characters or less on 16.0% and 15.3%, 20 characters or less on 14.3% and 14.1%, 30 characters or less on 8.4% and 8.4%, 100 characters or less on 15.1% and 15.0%, and it is greater than 100 characters on 1.2% and 1.2%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1428144088&format=interactive",
  sheets_gid="877399863",
  sql_file="common_alt_text_length.sql",
) }}
```

// [Most common lengths of alt text](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=877399863), [common_alt_text_length.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_alt_text_length.sql)

58.7% of sites pass the test for images with alt text, a small increase from 57.8% in 20202 and 54% in 2019

// [Summary of all lighthouse scores for a category](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1270834582), [lighthouse_a11y_audits.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/lighthouse_a11y_audits.sql)

## Audio

```
{{ figure_markup(
  content="0.03%",
  caption="Desktop websites with an `<audio>` element have at least one accompanying `<track>` element",
  classes="big-number",
  sheets_gid="201877037",
  sql_file="audio_track_usage.sql",
) }}
```

// [Audio elements track usage](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=201877037), [audio_track_usage.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/audio_track_usage.sql)

## Video

```
{{ figure_markup(
  content="0.7%",
  caption="Desktop websites with a `<video>` element have at least one accompanying `<track>` element",
  classes="big-number",
  sheets_gid="345150659",
  sql_file="video_track_usage.sql",
) }}
```

// [Video elements track usage](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=345150659), [video_track_usage.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/video_track_usage.sql)

## Supporting assistive technology with ARIA

## ARIA roles

```
{{ figure_markup(
  image="sites-using-role.png",
  caption="Number of ARIA roles used by percentile.",
  description="Bar chart showing the number of ARIA roles used by percentile. At the 10th and 25th percentile 0 roles are used for both desktop and mobile, at the 50th percentile 4 roles are used for both, at the 75th percentile 16 roles are used on desktop and 15 on mobile, and at the 90th percentile 43 roles are used on desktop and 38 on mobile.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=2082926503&format=interactive",
  sheets_gid="752623932",
  sql_file="sites_using_role.sql",
) }}
```

// [Sites using the role attribute](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=752623932), [sites_using_role.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/sites_using_role.sql)

```
{{ figure_markup(
  image="top-10-aria-roles.png",
  caption="Top 10 most common ARIA roles.",
  description="Bar chart showing `button` is used by 32.5% of desktop sites and 32.5% of mobile sites, `presentation` by 24.9% and 23.7% respectively, `dialog` by 22.8% and 21.9%, `navigation` by 22.1% and 21.9%, `search` by 19.6% and 18.9%, `main` by 16.8% and 16.7%, `banner` by 13.2% and 13.2%, `img` by 12.6% and 12.1%, `contentinfo` by 11.4% and 11.4%, and finally `none` by 11.0% and 11.3%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1302320094&format=interactive",
  sheets_gid="283521996",
  sql_file="common_aria_role.sql",
  width="600",
  height="540",
) }}
```

// [% of sites using each type of aria role](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=283521996), [common_aria_role.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_aria_role.sql)

## Just use a button!

```
{{ figure_markup(
  content="20.6%",
  caption="Desktop websites have at least one link with a button role",
  classes="big-number",
  sheets_gid="751886683",
  sql_file="anchors_with_role_button.sql",
) }}
```

// [Anchors with role='button'](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=751886683), [anchors_with_role_button.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/anchors_with_role_button.sql)

We found that 33% (up from 29% in 2021, 25% in 2020) of desktop and mobile sites had homepages with at least one element with an explicitly assigned role="button".

// [% of sites using each type of aria role](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=283521996), [common_aria_role.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_aria_role.sql)

## Using presentation role

We found that 25% of desktop pages (up from 22% in 2021) and 24% of mobile pages (up from 24% in 2021) have at least one element with role="presentation".

// [% of sites using each type of aria role](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=283521996), [common_aria_role.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_aria_role.sql)

## Labelling and describing elements with ARIA

```
{{ figure_markup(
  image="top10-aria-attributes.png",
  caption="Top 10 ARIA attributes.",
  description="A bar chart showing `aria-label` is used by 58.4% of desktop sites and 57.0% of mobile sites, `aria-hidden` by 57.8% and 57.0% respectively, `aria-expanded` by 28.5% and 27.8%, `aria-labelledby` by 24.3% and 22.6%, `aria-controls` by 23.9% and 22.8%, `aria-live` by 23.3% and 22.3%,  `aria-haspopup` by 20.5% and 19.3%, `aria-current` by 17.8% and 19.4%, `aria-describedby` by 15.6% and 14.3%, and finally `aria-atomic` by 10.8% and 10.1%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1585975336&format=interactive",
  sheets_gid="711360879",
  sql_file="common_element_attributes.sql",
) }}
```

// [How often pages contain an element with a given attribute](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=711360879), [common_element_attributes.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_element_attributes.sql)

## Where do buttons get their accessible names from?

```
{{ figure_markup(
  image="button-name-sources.png",
  caption="Button accessible name source.",
  description="A bar chart showing the contents are used for 60.9% of desktop buttons and 57.9% of mobile buttons, `aria-label` attribute is used for 19.6% and 23.1% respectively, there is no accessible name for 9.1% and 11.8%, the `value` attribute is used for 9.6% and 6.6%, `title` attribute is used for 0.7% and 0.5%, an `aria-labelledby` related element is used for 0.1% and 0.1%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=561787469&format=interactive",
  sheets_gid="597786485",
  sql_file="button_name_sources.sql",
  width="600",
  height="457",
) }}
```

// [Where button elements get their A11Y names from](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=597786485), [button_name_sources.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/button_name_sources.sql)

## Hiding content

```
{{ figure_markup(
  content="57.8%",
  caption="Desktop websites have at least one instance of the `aria-hidden` attribute",
  classes="big-number",
  sheets_gid="711360879",
  sql_file="common_element_attributes.sql",
) }}
```

// [How often pages contain an element with a given attribute](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=711360879), [common_element_attributes.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_element_attributes.sql)

We found that 24% of desktop pages and 23% of mobile pages had at least one element with the aria-expanded attribute.

// [How often pages contain an element with a given attribute](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=711360879), [common_element_attributes.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_element_attributes.sql)

## Screen reader-only text

```
{{ figure_markup(
  content="15.4%",
  caption="Desktop websites with a `sr-only` or `visually-hidden` class",
  classes="big-number",
  sheets_gid="642136962",
  sql_file="sr_only_classes.sql",
) }}
```

// [Sites using sr-only or visually-hidden classes](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=642136962), [sr_only_classes.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/sr_only_classes.sql)

## Dynamically-rendered content

We found that 23% of desktop pages (up from 21% in 2021, 17% in 2020) and 22% of mobile pages (up from 20% in 2021, 16% in 2020) have live regions.

// [How often pages contain an element with a given attribute](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=711360879), [common_element_attributes.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/common_element_attributes.sql)

## Accessibility overlays

```
{{ figure_markup(
  image="pages-using-a11y-apps.png",
  caption="Pages using accessibility apps.",
  description="A bar chart showing 1.6% of desktop sites and 1.2% of mobile sites use an accessibility app.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1586321777&format=interactive",
  sheets_gid="667492149",
  sql_file="a11y_technology_usage.sql",
) }}
```

// [A11Y technology usage](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=667492149), [a11y_technology_usage.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/a11y_technology_usage.sql)

```
{{ figure_markup(
  image="a11y-app-usage-by-rank.png",
  caption="Accessibility app usage by rank.",
  description="A bar chart showing usage of the most popular accessibility apps by domain rank on desktop sites. AccessiBe is used by 0.13% of the top 1,000 sites and by 0.15% of the top 10,000 sites, by 0.48% of the top 100,000 sites, by 0.48% of the top million sites and by 0.37% of all sites. AudioEye is used by 0.13% (one), 0.27%, 0.16%, 0.21%, and 0.35% respectively. EqualWeb is not used on the top 1,000 sites, but is used by 0.02% of the top 10,000 site, 0.07% of the top 100,000, 0.05% of the top million, and 0.03% of all sites. Texthelp similarly is not used on the top 1,000 or top 10,000 sites but is used by 0.02% of the top 100,000, 0.04% of the top million, and 0.03% of all sites. Finally, UserWay is not used on the top 1,000 sites but is used by 0.07% of the top 10,000 sites, by 0.12% of the top 100,000 sites, by 0.31% of the top million and by 0.49% of all sites.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=741701117&format=interactive",
  sheets_gid="1961985994",
  sql_file="a11y_technology_usage_by_domain_rank.sql",
) }}
```

// [A11Y technology usage by domain rank](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=1961985994), [a11y_technology_usage_by_domain_rank.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/a11y_technology_usage_by_domain_rank.sql)

```
{{ figure_markup(
  image="pages-using-a11y-apps-by-rank.png",
  caption="Pages using accessibility apps by rank.",
  description="A bar chart showing that for the top 1,000 sites, 0.4% on desktop and 0.3% on mobile use and accessibility app, for the top 10,000 it's 0.9% and 0.8% respectively, for the top 100,000 it's 1.2% and 1.1%, for the top million it's 1.4% and 1.3%, and finally for all sites 1.6% it's 1.2%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=2069674657&format=interactive",
  sheets_gid="134319036",
  sql_file="a11y_overall_tech_usage_by_domain_rank.sql",
) }}
```

// [A11Y technology usage by rank](https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit#gid=134319036), [a11y_overall_tech_usage_by_domain_rank.sql](https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility/a11y_overall_tech_usage_by_domain_rank.sql)

## The consequences of overlays

## Privacy concerns

## Overlays and lawsuits

## Why do some companies use overlays?

## Additional resources about overlays

## Conclusion
