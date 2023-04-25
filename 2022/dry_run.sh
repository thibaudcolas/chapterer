echo 'a11y_overall_tech_usage_by_domain_rank.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/a11y_overall_tech_usage_by_domain_rank.sql | tee -a dry_run.txt
echo 'a11y_technology_usage.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage.sql | tee -a dry_run.txt
echo 'a11y_technology_usage_by_domain_rank.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage_by_domain_rank.sql | tee -a dry_run.txt
echo 'alt_ending_in_image_extension.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/alt_ending_in_image_extension.sql | tee -a dry_run.txt
echo 'anchors_with_role_button.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/anchors_with_role_button.sql | tee -a dry_run.txt
echo 'audio_track_usage.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/audio_track_usage.sql | tee -a dry_run.txt
echo 'button_name_sources.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/button_name_sources.sql | tee -a dry_run.txt
echo 'captcha_usage.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/captcha_usage.sql | tee -a dry_run.txt
echo 'color_contrast.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/color_contrast.sql | tee -a dry_run.txt
echo 'common_alt_text_length.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/common_alt_text_length.sql | tee -a dry_run.txt
echo 'common_aria_role.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/common_aria_role.sql | tee -a dry_run.txt
echo 'common_element_attributes.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/common_element_attributes.sql | tee -a dry_run.txt
echo 'common_html_lang_attrib.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/common_html_lang_attrib.sql | tee -a dry_run.txt
echo 'form_input_name_sources.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/form_input_name_sources.sql | tee -a dry_run.txt
echo 'form_required_controls.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/form_required_controls.sql | tee -a dry_run.txt
echo 'landmark_elements_and_roles.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/landmark_elements_and_roles.sql | tee -a dry_run.txt
echo 'page_title.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/page_title.sql | tee -a dry_run.txt
echo 'placeholder_but_no_label.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/placeholder_but_no_label.sql | tee -a dry_run.txt
echo 'sites_using_role.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/sites_using_role.sql | tee -a dry_run.txt
echo 'sr_only_classes.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/sr_only_classes.sql | tee -a dry_run.txt
echo 'tabindex_usage_and_values.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/tabindex_usage_and_values.sql | tee -a dry_run.txt
echo 'table_stats.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/table_stats.sql | tee -a dry_run.txt
echo 'viewport_zoom_scale.sql' | tee -a dry_run.txt
bq query --project_id httparchive --dry_run < ../almanac.httparchive.org/sql/2022/accessibility/viewport_zoom_scale.sql | tee -a dry_run.txt
