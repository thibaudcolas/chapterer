echo 'a11y_overall_tech_usage_by_domain_rank.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < a11y_overall_tech_usage_by_domain_rank.sql >> est.txt
echo 'a11y_technology_usage.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < a11y_technology_usage.sql >> est.txt
echo 'a11y_technology_usage_by_domain_rank.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < a11y_technology_usage_by_domain_rank.sql >> est.txt
echo 'alt_ending_in_image_extension.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < alt_ending_in_image_extension.sql >> est.txt
echo 'anchors_with_role_button.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < anchors_with_role_button.sql >> est.txt
echo 'audio_track_usage.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < audio_track_usage.sql >> est.txt
echo 'button_name_sources.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < button_name_sources.sql >> est.txt
echo 'captcha_usage.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < captcha_usage.sql >> est.txt
echo 'color_contrast.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < color_contrast.sql >> est.txt
echo 'common_alt_text_length.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < common_alt_text_length.sql >> est.txt
echo 'common_aria_role.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < common_aria_role.sql >> est.txt
echo 'common_element_attributes.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < common_element_attributes.sql >> est.txt
echo 'focus_outline_0.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < focus_outline_0.sql >> est.txt
echo 'focus_visible.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < focus_visible.sql >> est.txt
echo 'form_input_name_sources.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < form_input_name_sources.sql >> est.txt
echo 'form_required_controls.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < form_required_controls.sql >> est.txt
echo 'landmark_elements_and_roles.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < landmark_elements_and_roles.sql >> est.txt
echo 'lighthouse_a11y_audits.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < lighthouse_a11y_audits.sql >> est.txt
echo 'lighthouse_a11y_score.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < lighthouse_a11y_score.sql >> est.txt
echo 'media_query_features.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < media_query_features.sql >> est.txt
echo 'page_title.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < page_title.sql >> est.txt
echo 'pages_with_search_input.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < pages_with_search_input.sql >> est.txt
echo 'placeholder_but_no_label.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < placeholder_but_no_label.sql >> est.txt
echo 'sites_using_role.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < sites_using_role.sql >> est.txt
echo 'skip_links.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < skip_links.sql >> est.txt
echo 'sr_only_classes.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < sr_only_classes.sql >> est.txt
echo 'tabindex_usage_and_values.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < tabindex_usage_and_values.sql >> est.txt
echo 'table_stats.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < table_stats.sql >> est.txt
echo 'units_properties.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < units_properties.sql >> est.txt
echo 'valid_html_lang.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < valid_html_lang.sql >> est.txt
echo 'video_track_usage.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < video_track_usage.sql >> est.txt
echo 'viewport_zoom_scale.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < viewport_zoom_scale.sql >> est.txt
echo 'viewport_zoom_scale_by_domain_rank.sql' >> est.txt
bq query --dry_run --project_id httparchive-bigquery-351100 --use_legacy_sql=false < viewport_zoom_scale_by_domain_rank.sql >> est.txt
