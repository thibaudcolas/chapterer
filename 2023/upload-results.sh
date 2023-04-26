# TODO Based on 2022 append.sh
echo 'Append results: lighthouse_a11y_score.sql' | tee -a append.txt
export data=$(cat lighthouse_a11y_score.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Percentiles of lighthouse a11y score YoY" $data | tee -a append.txt
echo 'Append results: color_contrast.sql' | tee -a append.txt
export data=$(cat color_contrast.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="% mobile sites with sufficient text color contrast with its background" $data | tee -a append.txt
echo 'Append results: viewport_zoom_scale.sql' | tee -a append.txt
export data=$(cat viewport_zoom_scale.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Viewport zoom scale" $data | tee -a append.txt
echo 'Append results: viewport_zoom_scale_by_domain_rank.sql' | tee -a append.txt
export data=$(cat viewport_zoom_scale_by_domain_rank.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Disabled zooming and scaling via the viewport tag by domain rank" $data | tee -a append.txt
echo 'Append results: valid_html_lang.sql' | tee -a append.txt
export data=$(cat valid_html_lang.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="% of mobile sites with a valid html lang attribute" $data | tee -a append.txt
echo 'Append results: units_properties.sql' | tee -a append.txt
export data=$(cat units_properties.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Length units top properties - From CSS Chapter" $data | tee -a append.txt
echo 'Append results: focus_outline_0.sql' | tee -a append.txt
export data=$(cat focus_outline_0.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="focus and outline 0 - From CSS chapter" $data | tee -a append.txt
echo 'Append results: focus_visible.sql' | tee -a append.txt
export data=$(cat focus_visible.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="focus and outline 0 - From CSS chapter" $data | tee -a append.txt
echo 'Append results: media_query_features.sql' | tee -a append.txt
export data=$(cat media_query_features.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Prefers data - From CSS chapter" $data | tee -a append.txt
echo 'Append results: landmark_elements_and_roles.sql' | tee -a append.txt
export data=$(cat landmark_elements_and_roles.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="sites using landmark elements or roles" $data | tee -a append.txt
echo 'Append results: page_title.sql' | tee -a append.txt
export data=$(cat page_title.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Page title stats" $data | tee -a append.txt
echo 'Append results: pages_with_search_input.sql' | tee -a append.txt
export data=$(cat pages_with_search_input.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Pages with search input" $data | tee -a append.txt
echo 'Append results: tabindex_usage_and_values.sql' | tee -a append.txt
export data=$(cat tabindex_usage_and_values.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Tabindex usage data" $data | tee -a append.txt
echo 'Append results: skip_links.sql' | tee -a append.txt
export data=$(cat skip_links.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="% of pages having skip links" $data | tee -a append.txt
echo 'Append results: lighthouse_a11y_audits.sql' | tee -a append.txt
export data=$(cat lighthouse_a11y_audits.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Summary of all lighthouse scores for a category" $data | tee -a append.txt
echo 'Append results: table_stats.sql' | tee -a append.txt
export data=$(cat table_stats.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Table stats" $data | tee -a append.txt
echo 'Append results: common_aria_role.sql' | tee -a append.txt
export data=$(cat common_aria_role.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="% of sites using each type of aria role" $data | tee -a append.txt
echo 'Append results: captcha_usage.sql' | tee -a append.txt
export data=$(cat captcha_usage.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Captcha usage" $data | tee -a append.txt
echo 'Append results: form_input_name_sources.sql' | tee -a append.txt
export data=$(cat form_input_name_sources.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Where input elements get their A11Y names from" $data | tee -a append.txt
echo 'Append results: placeholder_but_no_label.sql' | tee -a append.txt
export data=$(cat placeholder_but_no_label.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Form controls with placeholder but no label" $data | tee -a append.txt
echo 'Append results: form_required_controls.sql' | tee -a append.txt
export data=$(cat form_required_controls.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Various stats for required form controls" $data | tee -a append.txt
echo 'Append results: alt_ending_in_image_extension.sql' | tee -a append.txt
export data=$(cat alt_ending_in_image_extension.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Alt text ending in an image extension" $data | tee -a append.txt
echo 'Append results: common_alt_text_length.sql' | tee -a append.txt
export data=$(cat common_alt_text_length.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Most common lengths of alt text" $data | tee -a append.txt
echo 'Append results: audio_track_usage.sql' | tee -a append.txt
export data=$(cat audio_track_usage.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Audio elements track usage" $data | tee -a append.txt
echo 'Append results: video_track_usage.sql' | tee -a append.txt
export data=$(cat video_track_usage.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Video elements track usage" $data | tee -a append.txt
echo 'Append results: sites_using_role.sql' | tee -a append.txt
export data=$(cat sites_using_role.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Sites using the role attribute" $data | tee -a append.txt
echo 'Append results: anchors_with_role_button.sql' | tee -a append.txt
export data=$(cat anchors_with_role_button.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Anchors with role='button'" $data | tee -a append.txt
echo 'Append results: common_element_attributes.sql' | tee -a append.txt
export data=$(cat common_element_attributes.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="How often pages contain an element with a given attribute" $data | tee -a append.txt
echo 'Append results: button_name_sources.sql' | tee -a append.txt
export data=$(cat button_name_sources.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Where button elements get their A11Y names from" $data | tee -a append.txt
echo 'Append results: sr_only_classes.sql' | tee -a append.txt
export data=$(cat sr_only_classes.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="Sites using sr-only or visually-hidden classes" $data | tee -a append.txt
echo 'Append results: a11y_technology_usage.sql' | tee -a append.txt
export data=$(cat a11y_technology_usage.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="A11Y technology usage" $data | tee -a append.txt
echo 'Append results: a11y_technology_usage_by_domain_rank.sql' | tee -a append.txt
export data=$(cat a11y_technology_usage_by_domain_rank.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="A11Y technology usage by domain rank" $data | tee -a append.txt
echo 'Append results: a11y_overall_tech_usage_by_domain_rank.sql' | tee -a append.txt
export data=$(cat a11y_overall_tech_usage_by_domain_rank.sql.20220815.csv.json); google-sheet data:append --spreadsheetId=1eJtp09ja2FLoY4OTcDR3LdunGDsE62Gm3ZCcRF_7r8c --worksheetTitle="A11Y technology usage by rank" $data | tee -a append.txt
