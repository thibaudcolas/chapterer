const fs = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");

const SHEET_2021 =
  "https://docs.google.com/spreadsheets/d/1WjAM5ZnHjMQt-rKyHvj2eVhU_WdzzFTjpoYWMr_I0Cw/edit";
const OFFICIAL_SHEET_2022 =
  "https://docs.google.com/spreadsheets/d/1ladaKh6RbtMKQwkccwxDJGQf85KyhfLrtlM_9e9sLH8/edit";
// Thibaud’s personal copy for trial purposes.
const TRIAL_SHEET_20222 =
  "https://docs.google.com/spreadsheets/d/1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c/edit";
const SHEET_2022 = TRIAL_SHEET_20222;
const SQL_2021 =
  "https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2021/accessibility";
const OFFICIAL_SQL_2022 =
  "https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/sql/2022/accessibility";
const TRIAL_SQL_2022 =
  "https://github.com/thibaudcolas/almanac.httparchive.org/blob/tablesample-accessibility-2022-sql/sql/2022/accessibility";
const SQL_2022 = TRIAL_SQL_2022;
const IMG_2021 =
  "https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/static/images/2021/accessibility";
const OFFICIAL_IMG_2022 =
  "https://github.com/HTTPArchive/almanac.httparchive.org/blob/main/src/static/images/2022/accessibility";
const TRIAL_IMG_2022 =
  "https://github.com/thibaudcolas/almanac.httparchive.org/blob/tablesample-accessibility-2022-sql/src/static/images/2022/accessibility";
const IMG_2022 = TRIAL_IMG_2022;

const csvHeader = [
  "Category",
  "###",
  "####",
  "Status",
  "Year",
  "Image",
  "Image URL",
  "Caption",
  "Description",
  "Chart URL",
  "Sheets Title",
  "Sheets GID",
  "Sheets URL",
  "SQL file",
  "SQL file URL",
  "Content",
  "Classes",
  "Width",
  "Height",
  "Notes",
];

const categories = [
  {
    name: "Introduction",
    figure_inline: [
      {
        caption_2021:
          "The median overall site score for all Lighthouse Accessibility audit data rose from 80% in 2020 to 82% in 2021. We hope that this 2% increase represents a shift in the right direction.",
        caption_2022: "",
        sheets_title: "Percentiles of lighthouse a11y score YoY",
        sheets_gid_2021: "1224854971",
        sheets_gid_2022: "",
        sql_file_2021: "lighthouse_a11y_score.sql",
        sql_file_2022: "lighthouse_a11y_score.sql",
        status: "Chart in sheets",
      },
    ],
    figure_markup: null,
    children: null,
  },
  {
    name: "Ease of reading",
    children: [
      {
        name: "Color contrast",
        figure_markup: [
          {
            image_2021: "color-contrast-2019-2020-2021.png",
            image_2022: "",
            caption_2021: "Mobile sites with sufficient color contrast.",
            caption_2022: "",
            description_2021:
              "A bar chart showing 22.0% of sites had sufficient color contrast in 2019, dipping slightly to 21.1% in 2020 and increasing slightly to 22.2% for 2020",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1642421167&format=interactive",
            chart_url_2022: "",
            sheets_title: "% of pages with sufficient text color contrast",
            sheets_gid_2021: "51084807",
            sheets_gid_2022: "",
            sql_file_2021: "color_contrast.sql",
            sql_file_2022: "color_contrast.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Zooming and scaling",
        figure_markup: [
          {
            image_2021: "pages-zooming-scaling-disabled.png",
            image_2022: "",
            caption_2021: "Pages with zooming and scaling disabled.",
            caption_2022: "",
            description_2021:
              "A bar chart showing that 16.1% of desktop sites and 19.3% of mobile sites disable scaling, 20.8% and 25.7% respectively set a max scale of 1 and 24.1% and 29.4% use either.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=2099068658&format=interactive",
            chart_url_2022: "",
            sheets_title: "Viewport zoom scale",
            sheets_gid_2021: "744885125",
            sheets_gid_2022: "",
            sql_file_2021: "viewport_zoom_scale.sql",
            sql_file_2022: "viewport_zoom_scale.sql",
            status: "Chart in sheets",
            notes: "From mobile web chapter",
          },
          {
            image_2021: "pages-zooming-scaling-disabled-by-rank.png",
            image_2022: "",
            caption_2021: "Pages with zooming and scaling disabled by rank.",
            caption_2022: "",
            description_2021:
              "A bar chart showing that for the top 1,000 sites zooming and scaling is disabled by 22.4% of desktop sites and 45.0% of mobile sites, for the top 10,000 it's 27.0% and 40.5% respectively, for the top 100,000 it's 26.2% and 34.1%, for the top million it's 25.2% and 30.4% and finally for all sites it's 24.1% and 29.4%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1312122950&format=interactive",
            chart_url_2022: "",
            sheets_title:
              "Disabled zooming and scaling via the viewport tag by domain rank",
            sheets_gid_2021: "645664156",
            sheets_gid_2022: "",
            sql_file_2021:
              "../mobile-web/viewport_zoom_scale_by_domain_rank.sql",
            sql_file_2022: "viewport_zoom_scale_by_domain_rank.sql",
            status: "Chart in sheets",
            notes: "From mobile web chapter",
          },
        ],
        children: null,
      },
      {
        name: "Language identification",
        figure_markup: [
          {
            caption_2021: "Mobile sites have a valid `lang` attribute.",
            caption_2022: "",
            content_2021: "80.5%",
            content_2022: "",
            classes_2021: "big-number",
            classes_2022: "",
            sheets_title: "% of pages with a valid html lang attribute",
            sheets_gid_2021: "2009310389",
            sheets_gid_2022: "",
            sql_file_2021: "valid_html_lang.sql",
            sql_file_2022: "valid_html_lang.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Font size and line height",
        figure_markup: [
          {
            image_2021: "font-unit-usage.png",
            image_2022: "",
            caption_2021: "Font unit usage.",
            caption_2022: "",
            description_2021:
              "A bar chart showing `px` is used for font sizes on 68.4% of desktop pages and 69.0% of mobiles pages, `em` on 16.7% and 16.4% respectively, `%` on 5.0% and 5.4%, `rem` on 5.5% and 5.2%, `<number>` on 2.3% and 2.1%, and finally `pt` on 1.8% and 1.6%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1495101594&format=interactive",
            chart_url_2022: "",
            sheets_title: "Length units top properties - From CSS Chapter",
            sheets_gid_2021: "1740727138",
            sheets_gid_2022: "",
            sql_file_2021: "../css/units_properties.sql",
            sql_file_2022: "units_properties.sql",
            notes:
              "Same as https://github.com/HTTPArchive/almanac.httparchive.org/blob/css-2022-sql/sql/2022/css/units_properties.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Focus Styles",
        figure_markup: [
          {
            image_2021: "pages-overriding-focus-styles.png",
            image_2022: "",
            caption_2021: "Pages overriding focus styles.",
            caption_2022: "",
            description_2021:
              "A bar chart showing 92.6% of desktop sites and 94.1% of mobile sites use a `:focus` pseudo class, and 90.0% of desktop sites and 91.0% of mobile sites use that `:focus` pseudo class to set the outline to 0 or none. 0.6% of desktop sites and 0.6% of mobile sites use the `:focus-visible` pseudo class.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1277337070&format=interactive",
            chart_url_2022: "",
            sheets_title: "focus and outline 0 - From CSS chapter",
            sheets_gid_2021: "1517955087",
            sheets_gid_2022: "",
            sql_file_2021: "../css/focus_outline_0.sql",
            sql_file_2022: "focus_outline_0.sql",
            status: "Chart in sheets",
          },
          {
            image_2021: "pages-overriding-focus-styles.png",
            image_2022: "",
            caption_2021: "Pages overriding focus styles.",
            caption_2022: "",
            description_2021:
              "A bar chart showing 92.6% of desktop sites and 94.1% of mobile sites use a `:focus` pseudo class, and 90.0% of desktop sites and 91.0% of mobile sites use that `:focus` pseudo class to set the outline to 0 or none. 0.6% of desktop sites and 0.6% of mobile sites use the `:focus-visible` pseudo class.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1277337070&format=interactive",
            chart_url_2022: "",
            sheets_title: "focus and outline 0 - From CSS chapter",
            sheets_gid_2021: "1517955087",
            sheets_gid_2022: "",
            sql_file_2021: "../css/focus_visible.sql",
            sql_file_2022: "focus_visible.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "User preference media queries and high contrast support",
        figure_markup: [
          {
            image_2021: "userpreference-media-queries.png",
            image_2022: "",
            caption_2021: "User preference media queries.",
            caption_2022: "",
            description_2021:
              "A bar chart showing that 31.6% of desktop and mobile sites use the `prefers-reduced-motion` media query, 5.7% of desktop sites and 7.1% of mobile sites use `prefers-color-scheme`, and usage of `prefers-contrast` is so small on both it looks like 0.0%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=168171508&format=interactive",
            chart_url_2022: "",
            sheets_title: "Prefers data - From CSS chapter",
            sheets_gid_2021: "1027210289",
            sheets_gid_2022: "",
            sql_file_2021: "../css/media_query_features.sql",
            sql_file_2022: "media_query_features.sql",
            notes:
              "Same as https://github.com/HTTPArchive/almanac.httparchive.org/blob/css-2022-sql/sql/2022/css/media_query_features.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
    ],
  },
  {
    name: "Ease of page navigation",
    children: [
      {
        name: "Landmarks and page structure",
        figure_markup: null,
        figure_link: [
          {
            caption_2021: "Landmark element and role usage (desktop).",
            caption_2022: "",
            sheets_title: "sites using landmark elements or roles",
            sheets_gid_2021: "1736231238",
            sheets_gid_2022: "",
            sql_file_2021: "landmark_elements_and_roles.sql",
            sql_file_2022: "landmark_elements_and_roles.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Document titles",
        figure_markup: [
          {
            image_2021: "page_title-information.png",
            image_2022: "",
            caption_2021: "Title element statistics",
            caption_2022: "",
            description_2021:
              "A bar chart showing 98.2% of desktop sites and 98.1% of mobile sites use the `<title>` element, 68.5% and 69.3% of those titles have four or more words, and 4.1% on both desktop and mobile are changed on render.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=467029485&format=interactive",
            chart_url_2022: "",
            sheets_title: "Page title stats",
            sheets_gid_2021: "1437437016",
            sheets_gid_2022: "",
            sql_file_2021: "page_title.sql",
            sql_file_2022: "page_title.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Secondary Navigation",
        figure_inline: [
          {
            caption_2021: "We found that 24% of all sites used a search input",
            caption_2022: "",
            sheets_title: "Pages with search input",
            sheets_gid_2021: "95974815",
            sheets_gid_2022: "",
            sql_file_2021: "pages_with_search_input.sql",
            sql_file_2022: "pages_with_search_input.sql",
            status: "Chart in sheets",
          },
        ],
        figure_markup: null,
        children: null,
      },
      {
        name: "Tabindex",
        figure_markup: [
          {
            image_2021: "tabindex-usage-and-values.png",
            image_2022: "",
            caption_2021: "`tabindex` usage",
            caption_2022: "",
            description_2021:
              "Bar chart showing that of pages that use `tabindex`, a negative or zero `tabindex` is used on 96.9% of those pages for desktop and 97.4% of those pages for mobile, a `tabindex` of 0 is used on 68.2% and 68.3% respectively, a negative `tabindex` is used on 74.2% and 73.3%, and finally a positive `tabindex` is used on 8.7% and 7.7%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=632373616&format=interactive",
            chart_url_2022: "",
            sheets_title: "Tabindex usage data",
            sheets_gid_2021: "1330777562",
            sheets_gid_2022: "",
            sql_file_2021: "tabindex_usage_and_values.sql",
            sql_file_2022: "tabindex_usage_and_values.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Skip links",
        figure_inline: [
          {
            caption_2021:
              "close to 20% of desktop and mobile sites likely have a skip link",
            caption_2022: "",
            sheets_title: "% of pages having skip links",
            sheets_gid_2021: "1767801208",
            sheets_gid_2022: "",
            sql_file_2021: "skip_links.sql",
            sql_file_2022: "skip_links.sql",
            status: "Chart in sheets",
            notes:
              "By this definition, any hash link in the first four links of the page is a skip link (https://github.com/HTTPArchive/custom-metrics/blob/5d2f74fbdc580e76da5d1dad738fca8381429b9a/dist/almanac.js#L310)",
          },
        ],
        figure_markup: null,
        children: null,
      },
      {
        name: "Heading hierarchy",
        figure_markup: [
          {
            caption_2021:
              "Mobile sites passing the Lighthouse audit for properly ordered headings.",
            caption_2022: "",
            content_2021: "58%",
            content_2022: "",
            classes_2021: "big-number",
            classes_2022: "",
            sheets_title: "Summary of all lighthouse scores for a category",
            sheets_gid_2021: "461215072",
            sheets_gid_2022: "",
            sql_file_2021: "lighthouse_a11y_audits.sql",
            sql_file_2022: "lighthouse_a11y_audits.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Tables",
        figure_markup: null,
        figure_link: [
          {
            caption_2021: "Accessible table usage.",
            caption_2022: "",
            sheets_title: "Table stats",
            sheets_gid_2021: "1802381033",
            sheets_gid_2022: "",
            sql_file_2021: "table_stats.sql",
            sql_file_2022: "table_stats.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Table captions",
        figure_markup: null,
        children: null,
      },
      {
        name: "Tables for layout",
        figure_inline: [
          {
            caption_2021:
              "We found that 1% of desktop and mobile pages contain a table with a role of presentation.",
            caption_2022: "",
            sheets_title: "Table stats",
            sheets_gid_2021: "1802381033",
            sheets_gid_2022: "",
            sql_file_2021: "table_stats.sql",
            sql_file_2022: "table_stats.sql",
            status: "Chart in sheets",
          },
        ],
        figure_markup: null,
        children: null,
      },
      {
        name: "Tabs",
        figure_inline: [
          {
            caption_2021:
              'We found that 8% of desktop pages have at least one element with a role="tablist", 7% of pages have elements with a role="tab" and 6% of pages have elements with a role="tabpanel"',
            caption_2022: "",
            sheets_title: "% of sites using each type of aria role",
            sheets_gid_2021: "2046624948",
            sheets_gid_2022: "",
            sql_file_2021: "common_aria_role.sql",
            sql_file_2022: "common_aria_role.sql",
            status: "Chart in sheets",
          },
        ],
        figure_markup: null,
        children: null,
      },
      {
        name: "Captchas",
        figure_markup: [
          {
            caption_2021: "Desktop sites using a CAPTCHA",
            caption_2022: "",
            content_2021: "10.2%",
            content_2022: "",
            classes_2021: "big-number",
            classes_2022: "",
            sheets_title: "Captcha usage",
            sheets_gid_2021: "1059643233",
            sheets_gid_2022: "",
            sql_file_2021: "captcha_usage.sql",
            sql_file_2022: "captcha_usage.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
    ],
  },
  {
    name: "Forms",
    children: [
      {
        name: "The `<label>` element",
        figure_markup: [
          {
            image_2021: "form-input-name-sources.png",
            image_2022: "",
            caption_2021: "Where inputs get their accessible names from.",
            caption_2022: "",
            description_2021:
              "A bar chart showing 33.0% of desktop input elements and 32.7% of mobile input elements have no accessible name. `relatedElement: label` is the source for 27.2% of desktop pages and 27.4% of mobile pages. For `placeholder` it's 24.9% and 25.3% respectively, for `attribute: aria-label` it's 6.7% and 6.9%, for `attribute: value` it's 3.9% for both, for `attribute: title` it's 1.9% and 1.8%, for `attribute: alt` it's 1.0% and 0.8%, for `relatedElement: aria-labelledby` it's 0.7% and 0.8%, for `attribute: type` it's 0.6% and 0.5%, for `contents` and `relatedElement: aria-labeledby` they are too small and so show as 0.0%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1447032816&format=interactive",
            chart_url_2022: "",
            sheets_title: "Where input elements get their A11Y names from",
            sheets_gid_2021: "1517205301",
            sheets_gid_2022: "",
            sql_file_2021: "form_input_name_sources.sql",
            sql_file_2022: "form_input_name_sources.sql",
            width_2021: 600,
            width_2022: "",
            height_2021: 537,
            height_2022: "",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "The improper use of the `placeholder` attribute for labeling inputs",
        figure_markup: [
          {
            image_2021: "placeholder-but-no-label.png",
            image_2022: "",
            caption_2021: "Use of placeholders on inputs.",
            caption_2022: "",
            description_2021:
              "A bar chart showing 57.8% of desktop sites and 55.7% of mobile sites use placeholders. 69.2% of desktop sites and 69.7% of mobile sites have inputs with no label. 63.4% of desktop sites and 64.8% of mobile sites have placeholders and also inputs with no labels.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1871025491&format=interactive",
            chart_url_2022: "",
            sheets_title: "Form controls with placeholder but no label",
            sheets_gid_2021: "743455437",
            sheets_gid_2022: "",
            sql_file_2021: "placeholder_but_no_label.sql",
            sql_file_2022: "placeholder_but_no_label.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Requiring information",
        figure_markup: [
          {
            image_2021: "form-required-controls.png",
            image_2022: "",
            caption_2021: "How required inputs are specified",
            caption_2022: "",
            description_2021:
              "A bar chart showing the `required` attribute is used on 64.3% of desktop sites and 65.7% of mobile sites, `aria-required` is used by 32.3% and 31.6%, asterisk is used by 21.9% and 22.3%, `required` and `aria-required` is used by 7.4% and 7.7%, asterisk and `aria-required` is used by 7.3% and 8.2%, asterisk and `required` us used by 7.1% and 6.3%, and all three are used by 0.8% of sites on both.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1608381516&format=interactive",
            chart_url_2022: "",
            sheets_title: "Various stats for required form controls",
            sheets_gid_2021: "2064792791",
            sheets_gid_2022: "",
            sql_file_2021: "form_required_controls.sql",
            sql_file_2022: "form_required_controls.sql",
            width_2021: 600,
            width_2022: "",
            height_2021: 505,
            height_2022: "",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
    ],
  },
  {
    name: "Media on the web",
    children: [
      {
        name: "Overview of text alternatives",
        children: [
          {
            name: "Images",
            figure_inline: [
              {
                caption_2021:
                  "57% of sites pass the test for images with alt text, a small increase from 54% the year before",
                caption_2022: "",
                sheets_title: "Summary of all lighthouse scores for a category",
                sheets_gid_2021: "461215072",
                sheets_gid_2022: "",
                sql_file_2021: "lighthouse_a11y_audits.sql",
                sql_file_2022: "lighthouse_a11y_audits.sql",
                status: "Chart in sheets",
              },
            ],
            figure_markup: [
              {
                image_2021: "pages-containing-alt-with-file-extension.png",
                image_2022: "",
                caption_2021:
                  "Pages containing an `alt` attribute with a file extension.",
                caption_2022: "",
                description_2021:
                  "A bar chart showing in 2020 6.8% of desktop sites and 6.4% of mobile sites used and extension in the `alt` attribute. This increased to 7.3% of desktop sites and 7.1% of mobile sites in 2021.",
                description_2022: "",
                chart_url_2021:
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=403540154&format=interactive",
                chart_url_2022: "",
                sheets_title: "Alt text ending in an image extension",
                sheets_gid_2021: "747755748",
                sheets_gid_2022: "",
                sql_file_2021: "alt_ending_in_image_extension.sql",
                sql_file_2022: "alt_ending_in_image_extension.sql",
                status: "Chart in sheets",
                notes: "Missing modern formats",
              },
              {
                image_2021: "common-file-extensions-in-alt-text.png",
                image_2022: "",
                caption_2021: "Most common file extensions in `alt` text.",
                caption_2022: "",
                description_2021:
                  "A bar chart showing of all extensions used in all `jpg` is used 55.1% of the time on desktop sites and 54.44% for mobile, `png` is 32.8% and 33.11% and respectively, `ico` is 5.2% and 5.36%, `jpeg` is 2.8% and 3.00%, `gif` is 2.0% and 1.92%, `svg` is 1.5% and 1.36%, `tif` is 0.3% and 0.38%, `webp` is 0.2% and 0.21%, `jpe` is 0.0% and 0.05%, and finally `cur` is 0.0% and 0.03%.",
                description_2022: "",
                chart_url_2021:
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1350890749&format=interactive",
                chart_url_2022: "",
                sheets_title: "Alt text ending in an image extension",
                sheets_gid_2021: "747755748",
                sheets_gid_2022: "",
                sql_file_2021: "alt_ending_in_image_extension.sql",
                sql_file_2022: "alt_ending_in_image_extension.sql",
                width_2021: 600,
                width_2022: "",
                height_2021: 764,
                height_2022: "",
                status: "Chart in sheets",
              },
              {
                image_2021: "alt-attribute-lengths.png",
                image_2022: "",
                caption_2021: "`alt` attribute lengths.",
                caption_2022: "",
                description_2021:
                  "A bar chart showing no `alt` is set on 19.1% of desktop images and 19.0% of mobile images, it is set to empty on 26.9% and 27.0% respectively, it is 10 characters or less on 15.9% and 15.3%, 20 characters or less on 13.9% and 14.0%, 30 characters or less on 8.2% and 8.4%,100 characters or less on 14.8% and 15.1%, and it is greater than 100 characters on 1.1% and 1.1%.",
                description_2022: "",
                chart_url_2021:
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=159159336&format=interactive",
                chart_url_2022: "",
                sheets_title: "Most common lengths of alt text",
                sheets_gid_2021: "384780873",
                sheets_gid_2022: "",
                sql_file_2021: "common_alt_text_length.sql",
                sql_file_2022: "common_alt_text_length.sql",
                status: "Error",
              },
            ],
            children: null,
          },
          {
            name: "Audio",
            figure_markup: [
              {
                caption_2021:
                  "Desktop websites with an `<audio>` element have at least one accompanying `<track>` element",
                caption_2022: "",
                content_2021: "0.02%",
                content_2022: "",
                classes_2021: "big-number",
                classes_2022: "",
                sheets_title: "Audio elements track usage",
                sheets_gid_2021: "1198212185",
                sheets_gid_2022: "",
                sql_file_2021: "audio_track_usage.sql",
                sql_file_2022: "audio_track_usage.sql",
                status: "Chart in sheets",
              },
            ],
            children: null,
          },
          {
            name: "Video",
            figure_markup: [
              {
                caption_2021:
                  "Desktop websites with an `<video>` element have at least one accompanying `<track>` element",
                caption_2022: "",
                content_2021: "0.5%",
                content_2022: "",
                classes_2021: "big-number",
                classes_2022: "",
                sheets_title: "Video elements track usage",
                sheets_gid_2021: "1261793459",
                sheets_gid_2022: "",
                sql_file_2021: "video_track_usage.sql",
                sql_file_2022: "video_track_usage.sql",
                status: "Chart in sheets",
              },
            ],
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "Supporting assistive technology with ARIA",
    children: [
      {
        name: "ARIA roles",
        figure_markup: [
          {
            image_2021: "sites-using-role.png",
            image_2022: "",
            caption_2021: "Number of ARIA roles used by percentile.",
            caption_2022: "",
            description_2021:
              "Bar chart showing the number of ARIA roles used by percentile. At the 10th and 25th percentile 0 roles are used for both desktop and mobile, at the 50th percentile 3 roles are used for both, at the 75th percentile 12 roles are used on desktop and 11 on mobile, and at the 90th percentile 34 roles are used on desktop and 31 on mobile.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1547371971&format=interactive",
            chart_url_2022: "",
            sheets_title: "Sites using the role attribute",
            sheets_gid_2021: "1612528407",
            sheets_gid_2022: "",
            sql_file_2021: "sites_using_role.sql",
            sql_file_2022: "sites_using_role.sql",
            status: "Chart in sheets",
          },
          {
            image_2021: "top-10-aria-roles.png",
            image_2022: "",
            caption_2021: "Top 10 most common ARIA roles.",
            caption_2022: "",
            description_2021:
              "Bar chart showing `button` is used by 29.4% of desktop sites and 29.0% of mobile sites, `navigation` by 22.8% and 22.5% respectively, `presentation` by 22.2% and 21.1%, `dialog` by 20.8% and 20.1%, `search` by 19.3% and 18.8%, `main` by 16.9% and 16.8%, `banner` by 14.3% and 14.3%, `contentinfo` by 12.2% and 12.1%, `img` by 11.4% and 10.9%, and finally `tablist` by 7.7% and 7.4%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1136878573&format=interactive",
            chart_url_2022: "",
            sheets_title: "% of sites using each type of aria role",
            sheets_gid_2021: "2046624948",
            sheets_gid_2022: "",
            sql_file_2021: "common_aria_role.sql",
            sql_file_2022: "common_aria_role.sql",
            width_2021: 600,
            width_2022: "",
            height_2021: 540,
            height_2022: "",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Just use a button!",
        figure_inline: [
          {
            caption_2021:
              'We found that 29% (up from 25% in 2020) of desktop sites and 29% of mobile sites (up from 25% in 2020) had homepages with at least one element with an explicitly assigned role="button".',
            caption_2022: "",
            sheets_title: "% of sites using each type of aria role",
            sheets_gid_2021: "2046624948",
            sheets_gid_2022: "",
            sql_file_2021: "common_aria_role.sql",
            sql_file_2022: "common_aria_role.sql",
            status: "Chart in sheets",
          },
        ],
        figure_markup: [
          {
            caption_2021:
              "Desktop websites have at least one link with a button role",
            caption_2022: "",
            content_2021: "18.6%",
            content_2022: "",
            classes_2021: "big-number",
            classes_2022: "",
            sheets_title: "Anchors with role='button'",
            sheets_gid_2021: "1014817325",
            sheets_gid_2022: "",
            sql_file_2021: "anchors_with_role_button.sql",
            sql_file_2022: "anchors_with_role_button.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Using presentation role",
        figure_inline: [
          {
            caption_2021:
              'We found that 29% (up from 25% in 2020) of desktop sites and 29% of mobile sites (up from 25% in 2020) had homepages with at least one element with an explicitly assigned role="button".',
            caption_2022: "",
            sheets_title: "% of sites using each type of aria role",
            sheets_gid_2021: "2046624948",
            sheets_gid_2022: "",
            sql_file_2021: "common_aria_role.sql",
            sql_file_2022: "common_aria_role.sql",
            status: "Chart in sheets",
          },
        ],
        figure_markup: null,
        children: null,
      },
      {
        name: "Labelling and describing elements with ARIA",
        figure_markup: [
          {
            image_2021: "top10-aria-attributes.png",
            image_2022: "",
            caption_2021: "Top 10 ARIA attributes.",
            caption_2022: "",
            description_2021:
              "A bar chart showing `aria-hidden` is used by 53.8 of desktop sites and 53.0% of mobile sites, `aria-label` by 53.1 and 51.8% respectively, `aria-expanded` by 25.5 and 25.1%, `aria-labelledby` by 21.3 and 19.9%, `aria-controls` by 20.9 and 20.2%, `aria-live` by 20.8 and 19.7%,  `aria-haspopup` by 18.3 and 17.1%, `aria-current` by 16.1 and 16.9%, `aria-describedby` by 12.7 and 12.1%, and finally `aria-atomic` by 8.2 and 7.7%.",
            description_2022: "",
            chart_url_2021:
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=1828569038&format=interactive",
            chart_url_2022: "",
            sheets_title:
              "How often pages contain an element with a given attribute",
            sheets_gid_2021: "1763660541",
            sheets_gid_2022: "",
            sql_file_2021: "common_element_attributes.sql",
            sql_file_2022: "common_element_attributes.sql",
            status: "Chart in sheets",
          },
        ],
        children: [
          {
            name: "Where do buttons get their accessible names from?",
            figure_markup: [
              {
                image_2021: "button-name-sources.png",
                image_2022: "",
                caption_2021: "Button accessible name source.",
                caption_2022: "",
                description_2021:
                  "A bar chart showing the contents are used for 49.9% of desktop buttons and 47.3% of mobile buttons, `aria-label` attribute is used for 20.7% and 22.2% respectively, there is no accessible name for 17.5% and 19.9%, the `value` attribute is used for 9.2% and 8.1%, `title` attribute is used for 2.6% and 2.5%, an `aria-labelledby` related element is used for 0.1% and 0.1%.",
                description_2022: "",
                chart_url_2021:
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=2097166988&format=interactive",
                chart_url_2022: "",
                sheets_title: "Where button elements get their A11Y names from",
                sheets_gid_2021: "1467280228",
                sheets_gid_2022: "",
                sql_file_2021: "button_name_sources.sql",
                sql_file_2022: "button_name_sources.sql",
                width_2021: 600,
                width_2022: "",
                height_2021: 457,
                height_2022: "",
                status: "Chart in sheets",
              },
            ],
          },
        ],
      },
      {
        name: "Hiding content",
        figure_inline: [
          {
            caption_2021:
              "We found that 26% of desktop pages (up from 21% in 2020) and 25% of mobile pages (up from 21% in 2020) had at least one element with the aria-expanded attribute.",
            caption_2022: "",
            sheets_title:
              "How often pages contain an element with a given attribute",
            sheets_gid_2021: "1763660541",
            sheets_gid_2022: "",
            sql_file_2021: "common_element_attributes.sql",
            sql_file_2022: "common_element_attributes.sql",
            status: "Chart in sheets",
          },
        ],
        figure_markup: [
          {
            caption_2021:
              "Desktop websites have at least one instance of the `aria-hidden` attribute",
            caption_2022: "",
            content_2021: "53.8%",
            content_2022: "",
            classes_2021: "big-number",
            classes_2022: "",
            sheets_title:
              "How often pages contain an element with a given attribute",
            sheets_gid_2021: "1763660541",
            sheets_gid_2022: "",
            sql_file_2021: "common_element_attributes.sql",
            sql_file_2022: "common_element_attributes.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Screen reader-only text",
        figure_markup: [
          {
            caption_2021:
              "Desktop websites with a `sr-only` or `visually-hidden` class",
            caption_2022: "",
            content_2021: "14.3%",
            content_2022: "",
            classes_2021: "big-number",
            classes_2022: "",
            sheets_title: "Sites using sr-only or visually-hidden classes",
            sheets_gid_2021: "960991314",
            sheets_gid_2022: "",
            sql_file_2021: "sr_only_classes.sql",
            sql_file_2022: "sr_only_classes.sql",
            status: "Chart in sheets",
          },
        ],
        children: null,
      },
      {
        name: "Dynamically-rendered content",
        figure_inline: [
          {
            caption_2021:
              "We found that 21% of desktop pages (up from 17% in 2020) and 20% of mobile pages (up from 16% in 2020) have live regions.",
            caption_2022: "",
            sheets_title:
              "How often pages contain an element with a given attribute",
            sheets_gid_2021: "1763660541",
            sheets_gid_2022: "",
            sql_file_2021: "common_element_attributes.sql",
            sql_file_2022: "common_element_attributes.sql",
            status: "Chart in sheets",
            notes: "Missing output element",
          },
        ],
        figure_markup: null,
        children: null,
      },
    ],
  },
  {
    name: "Accessibility overlays",
    figure_markup: [
      {
        image_2021: "pages-using-a11y-apps.png",
        image_2022: "",
        caption_2021: "Pages using accessibility apps.",
        caption_2022: "",
        description:
          "A bar chart showing 0.96% of desktop sites and 0.80% of mobile sites use an accessibility app.",
        chart_url:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=618692173&format=interactive",
        sheets_title: "A11Y technology usage",
        sheets_gid_2021: "150155313",
        sheets_gid_2022: "",
        sql_file_2021: "a11y_technology_usage.sql",
        sql_file_2022: "a11y_technology_usage.sql",
        status: "Chart in sheets",
      },
      {
        image_2021: "a11y-app-usage-by-rank.png",
        image_2022: "",
        caption_2021: "Accessibility app usage by rank.",
        caption_2022: "",
        description:
          "A bar chart showing usage of the most popular accessibility apps by domain rank on desktop sites. AccessiBe is not used on the top 1,000 sites but is used by 0.15% of the top 10,000 sites, by 0.39% of the top 100,000 sites, by 0.37% of the top million sites and by 0.27% of all sites. AudioEye is used by 0.13%, 0.20%, 0.13%, 0.16%, and 0.24% respectively. EqualWeb is not used on the top 1,000 or top 10,000 site but is used by 0.02% of the top 100,000, 0.03% of the top million, and 0.02% of all sites. Texthelp similarly is not used on the top 1,000 or top 10,000 sites but is used by 0.02% of the top 100,000, 0.04% of the top million, and 0.02% of all sites. Finally, UserWay is not used on the top 1,000 sites but is used by 0.04% of the top 10,000 sites, by 0.09% of the top 100,000 sites, by 0.24% of the top million and by 0.39% of all sites. Only AudioEye is used by the top 1,000 sites.",
        chart_url:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=473077851&format=interactive",
        sheets_title: "A11Y technology usage by domain rank",
        sheets_gid_2021: "2077755325",
        sheets_gid_2022: "",
        sql_file_2021: "a11y_technology_usage_by_domain_rank.sql",
        sql_file_2022: "a11y_technology_usage_by_domain_rank.sql",
        status: "Chart in sheets",
      },
      {
        image_2021: "pages-using-a11y-apps-by-rank.png",
        image_2022: "",
        caption_2021: "Pages using accessibility apps by rank.",
        caption_2022: "",
        description:
          "A bar chart showing that for the top 1,000 sites, 0.1% on desktop and 0.1% on mobile use and accessibility app, for the top 10,000 it's 0.6% and 0.5% respectively, for the top 100,000 it's 0.8% and 0.7%, for the top million it's 0.9% and 0.8%, and finally for all sites 1.0% it's 0.8%.",
        chart_url:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4cxIC7ywDV-K2RpfaTeCYI4URyJE1air8BCAxoOw7VW9MjGRQfwHuILvhw-6UmcWnsrAJ0-1TTD_/pubchart?oid=851935325&format=interactive",
        sheets_title: "A11Y technology usage by rank",
        sheets_gid_2021: "827309922",
        sheets_gid_2022: "",
        sql_file_2021: "a11y_overall_tech_usage_by_domain_rank.sql",
        sql_file_2022: "a11y_overall_tech_usage_by_domain_rank.sql",
        status: "Chart in sheets",
      },
    ],
    children: [
      {
        name: "The consequences of overlays",
        figure_markup: null,
        children: null,
      },
      {
        name: "Privacy concerns",
        figure_markup: null,
        children: null,
      },
      {
        name: "Overlays and lawsuits",
        figure_markup: null,
        children: null,
      },
      {
        name: "Why do some companies use overlays?",
        figure_markup: null,
        children: null,
      },
      {
        name: "Additional resources about overlays",
        figure_markup: null,
        children: null,
      },
    ],
  },
  {
    name: "Conclusion",
    figure_markup: null,
    children: null,
  },
];

const figureRows = (figures) => {
  if (!figures) {
    return [];
  }

  return figures.flatMap((figure) => {
    return [
      [
        // "Category",
        "",
        // "###",
        "",
        // "####",
        "",
        // "Status",
        figure.status,
        // "Year",
        "2021",
        // "Image",
        figure.image_2021 || "",
        // "Image URL",
        figure.image_2021 ? `${IMG_2021}/${figure.image_2021}` : "",
        // "Caption",
        figure.caption_2021 || "",
        // "Description",
        figure.description_2021 || "",
        // "Chart URL",
        figure.chart_url_2021 || "",
        // "Sheets Title",
        figure.sheets_title || "",
        // "Sheets GID",
        figure.sheets_gid_2021 || "",
        // "Sheets URL",
        figure.sheets_gid_2021
          ? `${SHEET_2021}#gid=${figure.sheets_gid_2021}`
          : "",
        // "SQL file",
        figure.sql_file_2021 || "",
        // "SQL file URL",
        figure.sql_file_2021 ? `${SQL_2021}/${figure.sql_file_2021}` : "",
        // "Content",
        figure.content_2021 || "",
        // "Classes",
        figure.classes_2021 || "",
        // "Width",
        figure.width_2021 || "",
        // "Height",
        figure.height_2021 || "",
      ],
      [
        // "Category",
        "",
        // "###",
        "",
        // "####",
        "",
        // "Status",
        "",
        // "Year",
        "2022",
        // "Image",
        figure.image_2022 || "",
        // "Image URL",
        figure.image_2022 ? `${IMG_2022}/${figure.image_2022}` : "",
        // "Caption",
        figure.caption_2022 || "",
        // "Description",
        figure.description_2022 || "",
        // "Chart URL",
        figure.chart_url_2022 || "",
        // "Sheets Title",
        figure.sheets_title || "",
        // "Sheets GID",
        figure.sheets_gid_2022 || "",
        // "Sheets URL",
        figure.sheets_gid_2022
          ? `${SHEET_2022}#gid=${figure.sheets_gid_2022}`
          : "",
        // "SQL file",
        figure.sql_file_2022 || "",
        // "SQL file URL",
        figure.sql_file_2022 ? `${SQL_2022}/${figure.sql_file_2022}` : "",
        // "Content",
        figure.content_2022 || "",
        // "Classes",
        figure.classes_2022 || "",
        // "Width",
        figure.width_2022 || "",
        // "Height",
        figure.height_2022 || "",
      ],
    ];
  });
};

const array = categories.reduce((rows, cat) => {
  const children = cat.children ? cat.children : [];
  const subarray = children.reduce((subrows, subcat) => {
    const children = subcat.children ? subcat.children : [];

    const subsubarray = children.reduce((subsubrows, subsubcat) => {
      const children = subsubcat.children ? subsubcat.children : [];

      return subsubrows.concat([
        [
          // "Category",
          "",
          // "###",
          "",
          // "####",
          subsubcat.name,
        ],
        ...figureRows(subsubcat.figure_markup),
        ...figureRows(subsubcat.figure_link),
        ...figureRows(subsubcat.figure_inline),
      ]);
    }, []);

    return subrows.concat([
      [
        // "Category",
        "",
        // "###",
        subcat.name,
      ],
      ...figureRows(subcat.figure_markup),
      ...figureRows(subcat.figure_link),
      ...figureRows(subcat.figure_inline),
      ...subsubarray,
    ]);
  }, []);

  return rows.concat([
    [
      // 0 "Category",
      cat.name,
      // 1 "###",
      // 2 "####",
      // 3 "Status",
      // 4 "Year",
      // 5 "Image",
      // 6 "Image URL",
      // 7 "Caption",
      // 8 "Description",
      // 9 "Chart URL",
      // 10 "Sheets Title"
      // 11 "Sheets GID",
      // 12 "Sheets URL",
      // 13 "SQL file",
      // 14 "SQL file URL",
      // 15 "Content",
      // 16 "Classes",
      // 17 "Width",
      // 18 "Height",
      // 19 "Notes",
    ],
    ...figureRows(cat.figure_markup),
    ...figureRows(cat.figure_link),
    ...figureRows(cat.figure_inline),
    ...subarray,
  ]);
}, []);

const csv = convertArrayToCSV(array, {
  header: csvHeader,
});

fs.writeFileSync("chapterer.csv", csv, "utf8");

const outline = array
  .map((row) => {
    const h2 = row[0] ? `- ${row[0]}\n` : null;
    const h3 = row[1] ? `  - ${row[1]}\n` : null;
    const h4 = row[2] ? `    - ${row[2]}\n` : null;
    return h2 || h3 || h4;
  })
  .join("");

fs.writeFileSync("outline.md", outline, "utf8");

const queries = array
  .map((row) => {
    const h2 = row[0] ? `\n## ${row[0]}\n\n` : null;
    const h3 = row[1] ? `\n### ${row[1]}\n\n` : null;
    const h4 = row[2] ? `\n#### ${row[2]}\n\n` : null;
    const year = row[4];
    const title = row[10];
    let query = "";
    if (title && year === "2022") {
      query = `- [ ] \`${row[13].replace(
        ".sql",
        ""
      )}\` [${title}](${TRIAL_SHEET_20222}#gid=${row[11]})\n`;
    }
    // 6 "Image URL",
    // 7 "Caption",
    // 8 "Description",
    // 9 "Chart URL",
    // 10 "Sheets Title"
    // 11 "Sheets GID",
    // 12 "Sheets URL",
    // 13 "SQL file",
    // 14 "SQL file URL",
    // 15 "Content",
    // 16 "Classes",
    // 17 "Width",
    // 18 "Height",
    // 19 "Notes",
    return h2 || h3 || h4 || query;
  })
  .join("");

fs.writeFileSync("chapterer.md", queries, "utf8");
