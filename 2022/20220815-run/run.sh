rm run.txt
echo 'a11y_overall_tech_usage_by_domain_rank.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/a11y_overall_tech_usage_by_domain_rank.sql > a11y_overall_tech_usage_by_domain_rank.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/a11y_overall_tech_usage_by_domain_rank.sql > a11y_overall_tech_usage_by_domain_rank.sql.20220815.csv
echo 'a11y_technology_usage.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage.sql > a11y_technology_usage.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage.sql > a11y_technology_usage.sql.20220815.csv
echo 'a11y_technology_usage_by_domain_rank.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage_by_domain_rank.sql > a11y_technology_usage_by_domain_rank.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage_by_domain_rank.sql > a11y_technology_usage_by_domain_rank.sql.20220815.csv
echo 'alt_ending_in_image_extension.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/alt_ending_in_image_extension.sql > alt_ending_in_image_extension.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/alt_ending_in_image_extension.sql > alt_ending_in_image_extension.sql.20220815.csv
echo 'anchors_with_role_button.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/anchors_with_role_button.sql > anchors_with_role_button.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/anchors_with_role_button.sql > anchors_with_role_button.sql.20220815.csv
echo 'audio_track_usage.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/audio_track_usage.sql > audio_track_usage.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/audio_track_usage.sql > audio_track_usage.sql.20220815.csv
echo 'button_name_sources.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/button_name_sources.sql > button_name_sources.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/button_name_sources.sql > button_name_sources.sql.20220815.csv
echo 'captcha_usage.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/captcha_usage.sql > captcha_usage.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/captcha_usage.sql > captcha_usage.sql.20220815.csv
echo 'color_contrast.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/color_contrast.sql > color_contrast.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/color_contrast.sql > color_contrast.sql.20220815.csv
echo 'common_alt_text_length.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/common_alt_text_length.sql > common_alt_text_length.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/common_alt_text_length.sql > common_alt_text_length.sql.20220815.csv
echo 'common_aria_role.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/common_aria_role.sql > common_aria_role.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/common_aria_role.sql > common_aria_role.sql.20220815.csv
echo 'common_element_attributes.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/common_element_attributes.sql > common_element_attributes.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/common_element_attributes.sql > common_element_attributes.sql.20220815.csv
echo 'focus_outline_0.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/focus_outline_0.sql > focus_outline_0.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/focus_outline_0.sql > focus_outline_0.sql.20220815.csv
echo 'focus_visible.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/focus_visible.sql > focus_visible.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/focus_visible.sql > focus_visible.sql.20220815.csv


# -------
echo 'form_input_name_sources.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/form_input_name_sources.sql > form_input_name_sources.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/form_input_name_sources.sql > form_input_name_sources.sql.20220815.csv
echo 'form_required_controls.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/form_required_controls.sql > form_required_controls.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/form_required_controls.sql > form_required_controls.sql.20220815.csv
echo 'landmark_elements_and_roles.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/landmark_elements_and_roles.sql > landmark_elements_and_roles.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/landmark_elements_and_roles.sql > landmark_elements_and_roles.sql.20220815.csv
echo 'lighthouse_a11y_audits.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/lighthouse_a11y_audits.sql > lighthouse_a11y_audits.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/lighthouse_a11y_audits.sql > lighthouse_a11y_audits.sql.20220815.csv
echo 'lighthouse_a11y_score.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/lighthouse_a11y_score.sql > lighthouse_a11y_score.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/lighthouse_a11y_score.sql > lighthouse_a11y_score.sql.20220815.csv
echo 'media_query_features.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/media_query_features.sql > media_query_features.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/media_query_features.sql > media_query_features.sql.20220815.csv
echo 'page_title.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/page_title.sql > page_title.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/page_title.sql > page_title.sql.20220815.csv
echo 'pages_with_search_input.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/pages_with_search_input.sql > pages_with_search_input.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/pages_with_search_input.sql > pages_with_search_input.sql.20220815.csv
echo 'placeholder_but_no_label.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/placeholder_but_no_label.sql > placeholder_but_no_label.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/placeholder_but_no_label.sql > placeholder_but_no_label.sql.20220815.csv
echo 'sites_using_role.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/sites_using_role.sql > sites_using_role.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/sites_using_role.sql > sites_using_role.sql.20220815.csv
echo 'skip_links.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/skip_links.sql > skip_links.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/skip_links.sql > skip_links.sql.20220815.csv
echo 'sr_only_classes.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/sr_only_classes.sql > sr_only_classes.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/sr_only_classes.sql > sr_only_classes.sql.20220815.csv
echo 'tabindex_usage_and_values.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/tabindex_usage_and_values.sql > tabindex_usage_and_values.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/tabindex_usage_and_values.sql > tabindex_usage_and_values.sql.20220815.csv
echo 'table_stats.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/table_stats.sql > table_stats.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/table_stats.sql > table_stats.sql.20220815.csv
echo 'units_properties.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/units_properties.sql > units_properties.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/units_properties.sql > units_properties.sql.20220815.csv
echo 'valid_html_lang.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/valid_html_lang.sql > valid_html_lang.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/valid_html_lang.sql > valid_html_lang.sql.20220815.csv
echo 'video_track_usage.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/video_track_usage.sql > video_track_usage.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/video_track_usage.sql > video_track_usage.sql.20220815.csv
echo 'viewport_zoom_scale.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/viewport_zoom_scale.sql > viewport_zoom_scale.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/viewport_zoom_scale.sql > viewport_zoom_scale.sql.20220815.csv
echo 'viewport_zoom_scale_by_domain_rank.sql' | tee -a run.txt
echo 'bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/viewport_zoom_scale_by_domain_rank.sql > viewport_zoom_scale_by_domain_rank.sql.20220815.csv' | tee -a run.txt
bq query --project_id httparchive --format csv --use_legacy_sql=false --max_rows=16000 < ../../almanac.httparchive.org/sql/2022/accessibility/viewport_zoom_scale_by_domain_rank.sql > viewport_zoom_scale_by_domain_rank.sql.20220815.csv
