const csv = require("csv-parser");
const fs = require("fs");

const files = [
  "lighthouse_a11y_score.sql.20220815.csv",
  "color_contrast.sql.20220815.csv",
  "viewport_zoom_scale.sql.20220815.csv",
  "viewport_zoom_scale_by_domain_rank.sql.20220815.csv",
  "valid_html_lang.sql.20220815.csv",
  "units_properties.sql.20220815.csv",
  "focus_outline_0.sql.20220815.csv",
  "focus_visible.sql.20220815.csv",
  "media_query_features.sql.20220815.csv",
  "landmark_elements_and_roles.sql.20220815.csv",
  "page_title.sql.20220815.csv",
  "pages_with_search_input.sql.20220815.csv",
  "tabindex_usage_and_values.sql.20220815.csv",
  "skip_links.sql.20220815.csv",
  "lighthouse_a11y_audits.sql.20220815.csv",
  "table_stats.sql.20220815.csv",
  "common_aria_role.sql.20220815.csv",
  "captcha_usage.sql.20220815.csv",
  "form_input_name_sources.sql.20220815.csv",
  "placeholder_but_no_label.sql.20220815.csv",
  "form_required_controls.sql.20220815.csv",
  "alt_ending_in_image_extension.sql.20220815.csv",
  "common_alt_text_length.sql.20220815.csv",
  "audio_track_usage.sql.20220815.csv",
  "video_track_usage.sql.20220815.csv",
  "sites_using_role.sql.20220815.csv",
  "anchors_with_role_button.sql.20220815.csv",
  "common_element_attributes.sql.20220815.csv",
  "button_name_sources.sql.20220815.csv",
  "sr_only_classes.sql.20220815.csv",
  "a11y_technology_usage.sql.20220815.csv",
  "a11y_overall_tech_usage_by_domain_rank.sql.20220815.csv",
  "a11y_technology_usage_by_domain_rank.sql.20220815.csv",
];

files.forEach((file) => {
  const results = [];

  fs.createReadStream(`20220815-run/${file}`)
    .pipe(
      csv({
        headers: false,
      })
    )
    .on("data", (data) =>
      results.push(
        Object.values(data).map((d) => {
          try {
            return JSON.parse(d);
          } catch {
            return d;
          }
        })
      )
    )
    .on("end", () => {
      fs.writeFileSync(`20220815-run/${file}.json`, JSON.stringify(results));
    });
});
