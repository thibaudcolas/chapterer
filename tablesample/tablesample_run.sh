echo 'a11y_technology_usage.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/a11y_technology_usage.sql > tablesample/a11y_technology_usage.tablesample.csv
echo 'anchors_with_role_button.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/anchors_with_role_button.sql > tablesample/anchors_with_role_button.tablesample.csv
echo 'audio_track_usage.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/audio_track_usage.sql > tablesample/audio_track_usage.tablesample.csv
echo 'button_name_sources.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/button_name_sources.sql > tablesample/button_name_sources.tablesample.csv
echo 'captcha_usage.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/captcha_usage.sql > tablesample/captcha_usage.tablesample.csv
echo 'color_contrast.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/color_contrast.sql > tablesample/color_contrast.tablesample.csv
echo 'common_alt_text_length.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/common_alt_text_length.sql > tablesample/common_alt_text_length.tablesample.csv
echo 'common_html_lang_attrib.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/common_html_lang_attrib.sql > tablesample/common_html_lang_attrib.tablesample.csv
echo 'form_input_name_sources.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/form_input_name_sources.sql > tablesample/form_input_name_sources.tablesample.csv
echo 'form_required_controls.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/form_required_controls.sql > tablesample/form_required_controls.tablesample.csv
echo 'page_title.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/page_title.sql > tablesample/page_title.tablesample.csv
echo 'placeholder_but_no_label.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/placeholder_but_no_label.sql > tablesample/placeholder_but_no_label.tablesample.csv
echo 'sites_using_role.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/sites_using_role.sql > tablesample/sites_using_role.tablesample.csv
echo 'sr_only_classes.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/sr_only_classes.sql > tablesample/sr_only_classes.tablesample.csv
echo 'tabindex_usage_and_values.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/tabindex_usage_and_values.sql > tablesample/tabindex_usage_and_values.tablesample.csv
echo 'table_stats.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/table_stats.sql > tablesample/table_stats.tablesample.csv
echo 'viewport_zoom_scale.sql' | tee -a tablesample_run.txt
bq query --project_id httparchive --format csv < ../almanac.httparchive.org/sql/2022/accessibility/viewport_zoom_scale.sql > tablesample/viewport_zoom_scale.tablesample.csv
