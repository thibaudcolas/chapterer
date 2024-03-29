## Introduction

Half of all web searches are [performed by voice](https://review42.com/resources/voice-search-stats/). 85% of Facebook videos are watched [with closed captions on and sound off](https://idearocketanimation.com/18761-facebook-video-captions/). When you ask voice assistants like Siri, Alexa, and Cortana a question, they typically read their answer from a web page using screen reader technology that has been around [for as long as personal computers have existed](https://www.theverge.com/23203911/screen-readers-history-blind-henter-curran-teh-nvda).

When does a software feature cease being an "accessibility feature" and simply become a "feature" that we all use? Ask yourself that the next time you put your smartphone in silent/vibrate mode – especially if you're not a member of the Deaf/Hard of Hearing community.

Good accessibility benefits everyone, not just those with disabilities. This is one of the core principles of [Universal Design](https://en.wikipedia.org/wiki/Universal_design). Tim Berners-Lee said, "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." After the COVID-19 pandemic started, more and more people have been reliant on the internet. Likewise, accessibility needs to improve as well, or we risk alienating a lot of people.

The median overall site score for all Lighthouse Accessibility audit data rose from 80% in 2020 to 82% in 2021, then 83% in 2022. We hope that this increase represents a shift in the right direction.

In the hope of improvement towards accessibility in the web, we have tried to write the chapter with some actionable links and solutions that people can follow. For consistency, we chose to use the person-first term "people with disabilities" throughout this chapter, though we acknowledge that the identity-first term "disabled people" is also used. Our choice in terminology is in no way prescriptive of which term is most appropriate.

## Ease of reading

Readability of information and content on the web is crucial. There are a number of factors in a website that contribute to the content's readability. These factors ensure that everyone on the internet can not only consume content, but also are not harmed by any aspect of the content.

### Color contrast

Color contrast refers to how easily the foreground (which can include text, diagrams, iconography or other pieces of information) stands out from the background of the section. A higher color contrast usually means it's easier for people to distinguish the content.

The minimum contrast requirement defined by the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) for normal sized text (up to 24px) is 4.5:1 for AA conformance and 7:1 for AAA conformance. However, for larger font sizes, the contrast requirement is only 3:1 as larger text has increased legibility even at a lower contrast.

{{ figure_markup(
  image="color-contrast-2019-2020-2021-2022.png",
  caption="Sites with sufficient color contrast.",
  description="A bar chart showing 22.0% of mobile sites had sufficient color contrast in 2019, dipping slightly to 21.1% in 2020 and increasing slightly to 22.2% for 2020, increasing more to 22.9% in 2022. In 2022, we also see desktop sites at 22.7%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=2111814473",
  sheets_gid="1468870242",
  sql_file="color_contrast.sql",
) }}

We found that 22.9% of mobile sites have sufficient text color contrast, which is less than a 1% increase from last year. In 2022, we also have data for desktop sites, with 22.7% passing automated text contrast checks. The color contrast issue (at least for the text-based color contrasts that we tested) is pretty straightforward to validate even before you start building the website. There are multiple tools that can help developers and designers to check color contrast of text and graphical elements such as:

- [Web Color Contrast Checker (by WebAIM)](https://webaim.org/resources/contrastchecker/)
- [Figma Plugin (by Stark)](https://www.figma.com/community/plugin/733159460536249875)

It's a good idea to select a color scheme that passes color contrast requirements at the beginning of a project or while addressing the issues and use it throughout the website. You can also provide other color modes such as dark mode, light mode, high contrast modes to let the user choose.

### Zooming and scaling

Zooming is another feature that users with low vision often use to view the text in a website better. There are system settings in the browser, as well as some magnifying tools that allow a user to zoom and scale a website. Adrian Roselli talks in detail about the [different reasons you should not disable zoom](https://adrianroselli.com/2015/10/dont-disable-zoom.html).

{{ figure_markup(
  image="pages-zooming-scaling-disabled.png",
  caption="Pages with zooming and scaling disabled.",
  description="A bar chart showing that 15.7% of desktop sites and 18.3% of mobile sites disable scaling, 20.2% and 24.4% respectively set a max scale of 1 and 23.4% and 27.8% use either.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=550476172",t
  sheets_gid="602773443",
  sql_file="viewport_zoom_scale.sql",
) }}

WCAG requires that text in a website can be resized up to at least 200%. We have found that 23.4% of desktop homepages and 27.8% of mobile homepages attempt to disable zoom.

The method by which a developer disabled zoom is by adding a `<meta name="viewport" >` tag with a value like `maximum-scale, minimum-scale, user-scalable=no, or user-scalable=0` in the `content` attribute. So if you have a website that has one of these values, please delete those particular values from the `content` attribute to enable zoom.

{{ figure_markup(
  image="pages-zooming-scaling-disabled-by-rank.png",
  caption="Pages with zooming and scaling disabled by rank.",
  description="A bar chart showing that for the top 1,000 sites zooming and scaling is disabled by 21.0% of desktop sites and 40.2% of mobile sites, for the top 10,000 it's 25.2% and 36.0% respectively, for the top 100,000 it's 25.0% and 31.9%, for the top million it's 24.4% and 28.9% and finally for all sites it's 23.4% and 27.8%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=1987306037",
  sheets_gid="1896788548",
  sql_file="viewport_zoom_scale_by_domain_rank.sql",
) }}

Of the top 1,000 most visited sites, 21% of desktop sites and 40.2% of mobile sites are built using code that attempts to disable user zooming or scaling. This means that the percentage of sites with zooming disabled is almost double on mobile compared to desktop. It's really important to not disable zooming on any device. To combat this, browsers have begun to override developers' attempts to disable zoom. Manuel Matuzovic wrote an article talking about the [concerns with disabling zoom and user settings in browsers](https://www.matuzo.at/blog/2022/please-stop-disabling-zoom/).

{{ figure_markup(
  image="font-unit-usage.png",
  caption="Font unit usage.",
  description="A bar chart showing `px` is used for font sizes on 70.5% of desktop and mobiles pages, `em` on 14.9% and 15.2% respectively, `rem` on 5.7% and 5.6%, `%` on 4.5% and 4.8%, `<number>` on 2.1% and 1.9%, and finally `pt` on 1.7% and 1.5%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=850268795",
  sheets_gid="955782036",
  sql_file="units_properties.sql",
) }}

Another thing to keep in mind is the unit you choose for font size. We found that 70.5% of pages in desktop use px, and only 14.9% and 5.7% use em and rem respectively. So the percentage of px usage in desktop has increased by 2% compared to last year, while em usage has decreased by 1.5%. It's considered wise to use relative units such as `em` or `rem` when it comes to `font-size` because if you use `px` [it will not scale](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html#Update02) if the user explicitly choses a bigger or smaller default font size in the browser settings.

### Language identification

Language identification using the `lang` attribute is important for providing better screen reader support, and also helps in proper browser translation. This is another good example of a feature that helps everyone, including people with disabilities. Without the `lang` attribute, the automatic browser translation in Chrome can often translate the text incorrectly. Manuel Matuzovic gives one such [example of an auto-translate mishap](https://www.matuzo.at/blog/lang-attribute/) due to the lack of a`lang` attribute.

{{ figure_markup(
  content="82.7%",
  caption="Mobile sites have a valid `lang` attribute.",
  classes="big-number",
  sheets_gid="420415839",
  sql_file="valid_html_lang.sql",
) }}

It's encouraging to see that 82.7% of mobile websites do have a `lang` attribute, and within that group, 99.4% have a valid value. There's still room for improvement given this is a Level A conformance issue under WCAG 2.1. To meet this success criteria, one can put the `lang` attribute in the `<html>` tag with a [known primary language tag](https://www.w3.org/WAI/standards-guidelines/act/rules/bf051a/#known-primary-language-tag). The [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) is a global attribute and can be set on other tags as well in case the web page has content in more than one language. It's important to define the correct language for a website. In cases where people copy a template to create a website, there is sometimes a discrepancy between the language used in the website's content and the `lang="en"` attribute used in the code.

### User preference

There are certain User Preference Media Queries from the [CSS Media Queries Level 5 specification](https://www.w3.org/TR/mediaqueries-5) that can be used for various accessibility features. These range from choosing a color scheme or contrast mode that works better for the user to reducing animations on the page, which is helpful to people with vestibular disorders.

{{ figure_markup(
  image="userpreference-media-queries.png",
  caption="User preference media queries.",
  description="A bar chart showing that 33.6% of desktop sites and 34.2% of mobile sites use the `prefers-reduced-motion` media query, 8.2% of desktop sites and 7.7% of mobile sites use `prefers-color-scheme`, and `prefers-contrast` is used by 1.1% of desktop sites and 1.2% of mobile sites.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=727284960",
  sheets_gid="48059230",
  sql_file="media_query_features.sql",
) }}

We found that 34.2% of mobile websites use `prefers-reduced-motion`. Websites that rely on motion can cause issues for people with vestibular disorders, so it is important to adapt or remove those animations with the `prefers-reduced-motion` media query. There are many great [resources](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) related to [designing accessible animation](https://www.a11yproject.com/posts/design-accessible-animation/).

8.2% of desktop websites and 7.7% of mobile websites used the `prefers-color-scheme` media query, while 1.1% of desktop sites and 1.2% of mobile sites used `prefers-contrast`. Both of these media queries improve content readability by adjusting the [display mode](https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/) based on the user's preference. `prefers-color-scheme` allows the browser to detect the user's system color. Using this information, the web developer can then provide a light or dark mode accordingly. `prefer-contrast` is useful for users with low vision or photosensitivity who may benefit from high contrast modes.

## Navigation

When talking about navigating through websites, one thing that is important to remember and be cautious of is that users may use a variety of methods and input devices. Some people use a mouse to scroll through a page, others use their keyboard or a switch control device, and some may use a screen reader to browse through the different heading levels. When making a website, it's important to ensure that the website works for everyone, irrespective of the device or assistive technology that a person chooses to use.

### Focus indication

Focus indication is super important for people who primarily rely on keyboard navigation or switch control devices. These tools are often used by people with limited motor capacity. There are many different switch control devices, from a [single switch](https://www.24a11y.com/2018/i-used-a-switch-control-for-a-day/) to a [sip-and-puff device](https://accessibleweb.com/assistive-technologies/assistive-technology-focus-sip-and-puff-devices/). Visible focus styles and proper focus orders are essential for such users to get a visual indication of where they are on a page.

#### Focus styles

The WCAG requires a visible focus indicator for all interactive content to help people know which element has the keyboard focus as they traverse through a page. In fact for [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) (which is expected to be published in December 2022), it has been [promoted from AA to Level A](https://w3c.github.io/wcag/guidelines/22/#focus-visible) .

{{ figure_markup(
  image="pages-overriding-focus-styles.png",
  caption="Pages overriding focus styles.",
  description="A bar chart showing 89.7% of desktop sites and 88.9% of mobile sites use a `:focus` pseudo class, and 90.0% of desktop sites and 91.0% of mobile sites use the `:focus` pseudo class to set the outline to 0 or none. 9.0% of desktop sites and 9.8% of mobile sites use the `:focus-visible` pseudo class.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=500239469",
  sheets_gid="1548098920",
  sql_file="focus_outline_0.sql",
) }}

We found that 86.0% of websites add `:focus {outline: 0}`. This removes the default outline that browsers use for the focused interactive element. In some cases, they are overridden using some custom styling, but not always. This makes it impossible for users to determine which element has focus which in turn hinders navigation. Sara Souedian has a great article on how to [design WCAG-compliant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/). However, it's exciting to see that 9.0% of websites have `:focus-visible` compared to only 0.6% last year. This is definitely a step in the right direction.

#### TabIndex

`tabindex` is an attribute that can be added to elements to control whether they can receive focus. Depending on its value, the element can also be organized within the keyboard focus or "tab" order.

We found that 59.6% of mobile websites and 61.8% of desktop websites use `tabindex`. The `tabindex` attribute can be used for a few different purposes, which may or may not cause accessibility issues.

- Adding `tabindex="0"` adds an element in the sequential keyboard focus order. Custom elements and widgets that are intended to be interactive need an explicitly assigned `tabindex="0"`.
- `tabindex="-1"` means that the element is not in the keyboard focus order, but can be programmatically focused using JavaScript.

It's important to remember that placing non-interactive elements in the keyboard focus order can be confusing for low-vision users and should hence be avoided.

{{ figure_markup(
  image="tabindex-usage-and-values.png",
  caption="`tabindex` usage",
  description="Bar chart showing that of pages that use `tabindex`, a `tabindex` of 0 is used on 76.7% of those pages for desktop and 76.4% of those pages for mobile, a negative `tabindex` is used on 69.1% and 69.4% respectively, and finally a positive `tabindex` is used on 8.5% and 7.4%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=723679746",
  sheets_gid="1436895233",
  sql_file="tabindex_usage_and_values.sql",
) }}

Out of all websites with `tabindex` attribute, 7.4% have `tabindex` with a positive value. A positive value for `tabindex` is used to override the keyboard focus order and most of the time leads to a [WCAG 2.4.3 - Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html) failure. Using positive values for `tabindex` is generally bad practice since it disrupts the normal navigation. Karl Groves has a [great article](https://karlgroves.com/2018/11/13/why-using-tabindex-values-greater-than-0-is-bad) that explains this concept further.

### Landmarks

Landmarks help divide a web page into thematic regions that makes it easier for users of assistive technologies to understand the page structure and navigate the website. For example, a [rotor menu](https://www.afb.org/blindness-and-low-vision/using-technology/cell-phones-tablets-mobile/apple-ios-iphone-and-ipad-2) can be used to navigate between different page landmarks, while [skip links](https://webaim.org/techniques/skipnav/) can be used to target landmarks, including `<main>`. Landmarks can be created using various HTML5 elements or explicitly adding [ARIA landmark roles](https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html). However, following the first rule of ARIA, one should give preference to native HTML5 elements whenever possible.

<figure>
<table>
 <thead>
   <tr>
     <th>HTML5 <br />element</th>
     <th>ARIA role <br />equivalent</th>
     <th>Pages with <br /> element</th>
     <th>Pages with <br /> role</th>
     <th>Pages with <br /> element or role</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>`<main>`</td>
     <td>`role="main"`</td>
     <td class="numeric">31.0%</td>
     <td class="numeric">16.8%</td>
     <td class="numeric">38.1%</td>
   </tr>
   <tr>
     <td>`<header>`</td>
     <td>`role="banner"`</td>
     <td class="numeric">63.4%</td>
     <td class="numeric">13.2%</td>
     <td class="numeric">64.8%</td>
   </tr>
   <tr>
     <td>`<nav>`</td>
     <td>`role="navigation"`</td>
     <td class="numeric">63.4%</td>
     <td class="numeric">22.1%</td>
     <td class="numeric">67.0%</td>
   </tr>
   <tr>
     <td>`<footer>`</td>
     <td>`role="contentinfo"`</td>
     <td class="numeric">64.6%</td>
     <td class="numeric">11.4%</td>
     <td class="numeric">65.7%</td>
   </tr>
 </tbody>
</table>
<figcaption>
{{ figure_link(
  caption="Landmark element and role usage (desktop).",
  sheets_gid="2141972716",
  sql_file="landmark_elements_and_roles.sql",
) }}
</figcaption>
</figure>

The most commonly expected landmarks that the majority of web pages should have are `<main>`, `<header>`, `<nav>` and `<footer>`. We found that only 31% of desktop and mobile pages have a native HTML `<main>` element, while 17% of desktop pages have an element with a `role="main"`, and 38% of pages have either `<main>` or `role="main"`. It's good to see the use of native elements increase. Scott O' Hara's [[article](https://www.scottohara.me/blog/2018/03/03/landmarks.html) on landmarks](https://www.scottohara.me/blog/2018/03/03/landmarks.html) covers all the details that one should keep in mind to ensure better accessibility.

### Heading hierarchy

Headings help all users, including those using assistive technologies, to navigate through the website. Users with assistive technologies can navigate to the exact sections that they are interested in. As mentioned in Marcy Sutton's [[article](https://marcysutton.com/how-i-audit-a-website-for-accessibility#Headings-and-Semantic-Structure) on XXX](https://marcysutton.com/how-i-audit-a-website-for-accessibility#Headings-and-Semantic-Structure) , headings can be thought of as a table of contents that one can navigate through to go to a particular content area.

{{ figure_markup(
  content="57.7%",
  caption="Mobile sites passing the Lighthouse audit for properly ordered headings.",
  classes="big-number",
  sheets_gid="1270834582",
  sql_file="lighthouse_a11y_audits.sql",
) }}

57.7% of websites pass the test for properly ordered headings that do not skip levels, which is the same as last year. Hopefully this number will increase next year since the [document outline example in WHATWG standards have been updated](https://github.com/whatwg/html/pull/7829). A very important thing to remember is that heading levels don't have to represent the actual style (or importance) of a particular element. Headings are to be used primarily for hierarchy purposes, while CSS can be used for the styling of the element. A very good article on how to structure headings in your page is by Steve Faulkner titled, ["How to mark up subheadings, subtitles, alternative titles and taglines"](https://stevefaulkner.github.io/Articles/How%20to%20mark%20up%20subheadings,%20subtitles,%20alternative%20titles%20and%20taglines.html).

### Secondary navigation

WCAG requires websites to have multiple ways to navigate between the different pages apart from the primary navigation menu in the header (see [Success Criterion 2.4.5: Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html)). For example many people, including those with cognitive limitations, prefer to use search features to find a page when there are a substantial number of pages in a website.

There are 22.7% of websites on mobile that have a search input, and 24.1% on desktop. Another recommended method for secondary navigation is to include a sitemap for a website. Although we do not have any data about the presence of site maps, this [technique guide from the W3C](https://www.w3.org/WAI/WCAG21/Techniques/general/G63) explains what they are in detail and how to implement one effectively.

### Skip links

Skip links allow keyboard or switch control device users to skip through different sections of pages without having to pass every focusable item. One of the most common sections to skip is the primary navigation to go to the `<main>` section, especially if a website has a really large number of interactive items in their primary navigation.

{{ figure_markup(
  content="21%",
  caption="Mobile and desktop pages which likely have a skip link",
  classes="big-number",
  sheets_gid="1778743357",
  sql_file="skip_links.sql",
) }}

We found 21% of desktop and mobile pages likely have a skip link, allowing users to bypass part of the page content. This figure could be higher in practice, as our detection only checks for the presence of skip links early in the page (for example to skip navigation). Skip links can also be used to skip parts of the page.

### Document titles

Descriptive page titles are useful when navigating between pages, tabs and windows, as the new page has its title read by assistive technologies to help users keep track of where they are.

{{ figure_markup(
  image="page_title-information.png",
  caption="Title element statistics",
  description="A bar chart showing 97.6% of desktop sites and 97.7% of mobile sites use the `<title>` element, 68.6% and 70.0% of those titles have four or more words, and 3.7% and 4.0% are changed on render.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?format=interactive&oid=154664062",
  sheets_gid="634812711",
  sql_file="page_title.sql",
) }}

Though there are 97.7% of mobile websites which have a document title, only 70% have a title that is longer than four words. Since we only scan homepages of websites, it's not possible for us to determine if the inner pages of the website use a more detailed text in the `<title>` tag that describes the page. A title should ideally have both the title of the website as well as a title giving context about the page in the website for better navigation.

### Tables

Tables help in representing data and the relationships between the data using two axes. Tables should have a well-formatted structure with the appropriate elements and markups that helps assistive technology users to easily comprehend the data represented in the table, as well as navigate through the table. Table caption, appropriate headers and appropriate header cells for every row are as such important elements that help users of assistive technology to make sense of the data.

<figure>
 <table>
   <thead>
     <tr>
       <td></td>
       <th scope="colgroup" colspan="2">Table sites</th>
       <th scope="colgroup" colspan="2">All sites</th>
     </tr>
     <tr>
       <td></td>
       <th scope="col">Desktop</th>
       <th scope="col">Mobile</th>
       <th scope="col">Desktop</th>
       <th scope="col">Mobile</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>Captioned tables</td>
       <td class="numeric">5.4%</td>
       <td class="numeric">4.7%</td>
       <td class="numeric">1.3%</td>
       <td class="numeric">1.2%</td>
     </tr>
     <tr>
       <td>Presentational table</td>
       <td class="numeric">1.2%</td>
       <td class="numeric">0.9%</td>
       <td class="numeric">0.6%</td>
       <td class="numeric">0.5%</td>
     </tr>
   </tbody>
 </table>
 <figcaption>
{{ figure_link(
  caption="Accessible table usage.",
  sheets_gid="599630882",
  sql_file="table_stats.sql",
) }}
</figcaption>
</figure>

When providing a caption for the table, the `<caption>` element is the correct semantic choice to provide the most context to a screen reader user. Table captions act as a heading summarizing the information of the table. 1.3% of desktop and mobile sites with table elements present used a `<caption>`.

Tables are also sometimes used for laying out pages, though with the arrival of Flexbox and Grid properties in CSS, one should definitely avoid tables for any visual formatting. However, if there is no other option, tables can set a `role="presentation"`. We observe 1% of tables using this workaround.

## Forms

Forms are one of the most common ways that users submit information to and interact with websites. Whether it be logging into a site, creating a post on social media, or making a purchase at an ecommerce site, all of those user journeys will at some stage require a form. Without proper form accessibility, people with disabilities can't interact with them properly which in turn stops them from completing their tasks and achieving full information and feature parity with non-disabled users.

There are specific things that one should keep in mind when it comes to accessibility in forms.

### `<label>` element

The `<label>` element is the most effective way of providing accessible names to input fields (or [form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)) in a form. One can link a `<label>` to a form control programmatically using the `for` attribute. The `for` attribute should contain the value of the `id` attribute of the form control element that you want to link it with. For example:

```html
<label for="email">Email</label>
<input type="email" id="email">
```

The `for` attribute is important because without it, the `<label>`won't be programmatically linked to a corresponding form control. This affects the usability of the form as it's likely that a field does not have a semantically linked label unless another method is used.

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

38.0% of inputs have no accessible names, while only 18.8% use `<label>` . Without a proper accessible name, a screen reader user or a voice-to-text user won't be able to identify what data an input is trying to collect. Often there are inputs on websites that don't have any visible labels, which causes issues for all users, or the input's purpose isn't clearly defined both visually and programatically. In select cases where a label can be visually excluded (such as a search field), one must still add a screen reader-only `<label>` to provide the accessible name.

### `placeholder` attribute

The purpose of a `placeholder` attribute in a form control is to provide an example of the data or format that the form control accepts. For example, `<input type="text" id="credit-card" placeholder="1234-5678-9999-0000">` lets the user know that a card number should be entered with dashes in between every 4 digits.

However, unlike `<label>` elements, the `placeholder` attribute disappears the moment someone starts typing or entering data. This can cause users with cognitive disabilities to get disoriented about the data they were trying to input. Also, not all screen readers support the`placeholder` attribute for accessible names which is also problematic. Hence, using the `placeholder` attribute for accessible names can create many [accessibility issues](https://www.smashingmagazine.com/2018/06/placeholder-attribute/) and should be avoided .

{{ figure_markup(
  image="placeholder-but-no-label.png",
  caption="Use of placeholders on inputs.",
  description="A bar chart showing 58.6% of desktop sites and 55.5% of mobile sites use placeholders. 66.7% of desktop sites and 67.2% of mobile sites have inputs with no label. 61.1% of desktop sites and 62.7% of mobile sites have placeholders and also inputs with no labels.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1142115744&format=interactive",
  sheets_gid="1464041597",
  sql_file="placeholder_but_no_label.sql",
) }}

62.7% of the websites surveyed have inputs with only a `placeholder` attribute and no `<label>` element linked to it, which is extremely problematic. The [HTML5 specification](https://html.spec.whatwg.org/#the-placeholder-attribute) clearly states "The placeholder attribute should not be used as an alternative to a label." It's important to provide a `<label>` to improve accessibility for all.

<figure>
  <blockquote>Use of the placeholder attribute as a replacement for a label can reduce the accessibility and usability of the control for a range of users including older users and users with cognitive, mobility, fine motor skill or vision impairments.</blockquote>
  <figcaption>
  — <cite><a hreflang="en" href="https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research">The W3C's Placeholder Research</a></cite>
  </figcaption>
</figure>

### Requiring information

When websites gather input from their users, they need a clear way to indicate what information is optional, and what information is required to submit. For example, in a form an email address might be a required field, but a middle name can be an optional field. Before HTML5 introduced the required attribute for `<input>` fields in 2014, a common convention was to put an asterisk (\*) in the label for required input fields. However, just using an asterisk is only a visual indicator, and it provides no validation or sufficient information to assistive technologies that a field is required.

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

The `required` and `aria-required` attributes are two ways of telling an assistive technology that an input field is not optional. The `required` attribute also prevents form submission without an input, while `aria-required` only conveys the information to assistive technology and doesn't validate the input. We found that 67.2% of the sites use the `required` attribute and 31.8% use `aria-required`. However, there are still 21.7% websites which only use an asterisk (\*) to indicate a field is required. That should definitely be avoided unless it is also accompanied with `required` and `aria-required`.

### Captchas

Websites often want to verify that the visitor is a human and not a bot, which is a program that crawls through websites for many different purposes. For example, The Web Almanac is created each year by sending out a similar kind of web crawler to gather information from websites. These types of "human-only" tests are called a CAPTCHA – "Completely Automated Public Turing Test, to Tell Computers and Humans Apart".

{{ figure_markup(
  content="18.5%",
  caption="Mobile sites using a CAPTCHA",
  classes="big-number",
  sheets_gid="1615174635",
  sql_file="captcha_usage.sql",
) }}

18.5% of mobile websites have one of two captcha implementations which we can detect. This type of test can be difficult to solve for everyone (see [CAPTCHAs Have an 8% Failure Rate](https://baymard.com/blog/captchas-in-checkout)) but would likely be more difficult for people with low vision and other vision or reading-related disabilities. Also, such tests might fail under [WCAG 3.3.7 Accessible Authentication](https://w3c.github.io/wcag/understanding/accessible-authentication.html) once WCAG 2.2 is released. W3C actually has a [paper on alternatives to visual turing tests](https://www.w3.org/TR/turingtest/) that is definitely recommended.

## Media on the web

Accessibility considerations become very crucial when it comes to media consumption on the web. A lot of media is often designed in ways that people with disabilities can't consume unless alternative methods are provided. For example, a blind person or a person with a vision impairment needs an audio description for an image or a video so that they can understand the media. A screen reader can only create an audio description if an alternate text describing the image or the video is present. Similarly, for people with hearing disabilities, captions on videos or text tracks for audio are essential to accessing the material.

### Images

{{ figure_markup(
  content="58.7%",
  caption="Mobile pages passing the Lighthouse image-alt audit for images with alt text",
  classes="big-number",
  sheets_gid="1270834582",
  sql_file="lighthouse_a11y_audits.sql",
) }}

Images on the web can have an `alt` attribute which provides an alternate text description of the image. A screen reader can then use this information to create an audio description of the image for people with a visual impairment. We found that 58.7% of sites pass the test for images with alt text, which is a small (1%) increase from 2021.

{{ figure_markup(
  image="pages-containing-alt-with-file-extension.png",
  caption="Pages containing an `alt` attribute with a file extension.",
  description="A bar chart showing in 2020 6.8% of desktop sites and 6.4% of mobile sites used an extension in the `alt` attribute. This increased to 7.3% of desktop sites and 7.1% of mobile sites in 2021, and in 2022 to 7.2% of desktop sites and 7.5% of mobile sites",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1961543902&format=interactive",
  sheets_gid="304752448",
  sql_file="alt_ending_in_image_extension.sql",
) }}

The text in the `alt` attribute depends on the context. If the image is decorative and doesn't provide any meaningful information, then `alt=""` is ideal. However, if the image is crucial to the context of the page, then a proper text description is essential. If the image is a child of a link, then ideally the `alt` attribute should be used to label the link so the user knows where the link takes them. We found that 7.5% of mobile web pages and 7.2% of desktop pages with an `alt` attribute have a file extension assigned to that alt attribute. This probably means that the `alt` attribute just contains the image filename, which is not helpful at all, and should be avoided in every case.

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

The top five file extensions explicitly included in the alt text value (for sites with images that have non-empty alt values) are jpg, png, ico, jpeg and svg. This likely reflects the use of CMS or other content management methods which auto-generate alternative text for images or ask the content editors for image descriptions compulsorily. However, if the CMS just puts the image filename in the `alt` attribute, this provides no value to the users, so it's important that meaningful text descriptions are provided.

{{ figure_markup(
  image="alt-attribute-lengths.png",
  caption="`alt` attribute lengths.",
  description="A bar chart showing no `alt` is set on 17.9% of desktop images and 18.0% of mobile images, it is set to empty on 27.0% and 27.9% respectively, it is 10 characters or less on 16.0% and 15.3%, 20 characters or less on 14.3% and 14.1%, 30 characters or less on 8.4% and 8.4%, 100 characters or less on 15.1% and 15.0%, and it is greater than 100 characters on 1.2% and 1.2%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1428144088&format=interactive",
  sheets_gid="877399863",
  sql_file="common_alt_text_length.sql",
) }}

We found that 27% of alt text attributes in desktop and mobile websites were empty. An empty `alt` attribute is supposed to be used only when the image is presentational and should not be described by screen readers or other assistive technologies. However, most images on the web do add value to the content in the web page and hence should have a proper text description. We found that 15.3% have 10 or fewer characters, which would be a strangely short description for most images, indicating that information parity has not been achieved. Though it is possible that some of them might be used to provide labeling for a link, in which case it's okay.

### Audio and video

`<track>` allows providing timed textual content for `<audio>` and `<video>` elements. This can be for subtitles, captions, descriptions, or chapters. Captions allow people with permanent or temporary hearing loss to be able to consume the audio content. Descriptions allow blind screen reader users to understand what is happening in the video.

{{ figure_markup(
  content="0.03%",
  caption="Desktop websites with an `<audio>` element have at least one accompanying `<track>` element",
  classes="big-number",
  sheets_gid="201877037",
  sql_file="audio_track_usage.sql",
) }}

`<track>` loads one or more WebVTT files, which allows text content to be synchronized with the audio it is describing. We found that only 0.03% of all pages on desktop and 0.05% of all pages on mobile with a detectable `<audio>` element had at least one accompanying `<track>` element.

{{ figure_markup(
  content="0.7%",
  caption="Desktop websites with a `<video>` element have at least one accompanying `<track>` element",
  classes="big-number",
  sheets_gid="345150659",
  sql_file="video_track_usage.sql",
) }}

The `<track>` element was included with a corresponding `<video>` element less than 1% of the time — 0.7% for desktop sites, and 0.6% for mobile sites. These data points do not include audio or video embedded via an `<iframe>` element, which is common for content like podcasts or YouTube videos. It should also be noted that most popular third-party audio and video embedding services include the ability to add synchronized text equivalents.

## Assistive technology with ARIA

[Accessible Rich Internet Applications, or ARIA](https://www.w3.org/TR/using-aria/) defines a set of attributes for HTML5 elements that can be used to make web content more accessible for people with disabilities. However, overuse of ARIA can cause more issues than improvements to accessibility. It is always recommended to use ARIA attributes only when using HTML5 is not sufficient to create a fully accessible experience. It should not be used as a replacement of native HTML5 elements, or overused unnecessarily.

### ARIA roles

When an assistive technology encounters an element, the element's role communicates information about how someone might interact with its content. HTML5 introduced many new native elements which have implicit semantics, including roles. For example, the `<nav`> element has an implicit `role="navigation"` and does not need to have this role added explicitly via ARIA.

{{ figure_markup(
  image="sites-using-role.png",
  caption="Number of ARIA roles used by percentile.",
  description="Bar chart showing the number of ARIA roles used by percentile. At the 10th and 25th percentile 0 roles are used for both desktop and mobile, at the 50th percentile 4 roles are used for both, at the 75th percentile 16 roles are used on desktop and 15 on mobile, and at the 90th percentile 43 roles are used on desktop and 38 on mobile.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=2082926503&format=interactive",
  sheets_gid="752623932",
  sql_file="sites_using_role.sql",
) }}

Currently 72.1% of desktop pages have at least one instance of an ARIA role attribute. The median site has four instances of the role attribute. [Tabbed interfaces](https://inclusive-components.design/tabbed-interfaces/) are one of the most commonly used UI elements that need various ARIA roles to be defined explicitly to convey the structure of the UI properly. A common implementation for an accessible tabbed interface is mentioned in the [WAI-ARIA Authoring Practices Design Patterns](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel). When creating a tablist widget, a tablist role can be assigned to the container element since there is no native HTML equivalent.

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

We found that 33% (up from 29% in 2021, and 25% in 2020) of desktop and mobile sites had homepages with at least one element with an explicitly assigned `role="button"`. This increase in percentage is likely not good since this indicates that websites are either creating custom buttons using `<div>` or `<span>`, or are adding a redundant role to `<button>` elements. Both of these are bad practices and go against the [first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1). Following this rule, one should always use a native HTML element (in this case, `<button>`) when possible.

{{ figure_markup(
  content="20.6%",
  caption="Desktop websites have at least one link with a button role",
  classes="big-number",
  sheets_gid="751886683",
  sql_file="anchors_with_role_button.sql",
) }}

Adding an ARIA role tells assistive technology what the element is, but doesn't provide any other functionality to make elements behave like their native counterpart. For example, we found that 20.6% of websites had at least one link with a `role="button"`. This kind of pattern can cause issues with keyboard navigation, as links and buttons have different interactions. Though both links and buttons are interactive, links are not activated with the space key, whereas buttons are.

### Using presentation role

When an element has `role="presentation"` declared on it, its semantics are stripped away, as well the semantics of any of its child elements if those child elements are required child elements (such as `li` nested under a `ul` element, or rows and cells in a table). For example, declaring `role="presentation"` on a parent table or list element will cascade the role to their required child elements and none of them will have table or list semantics.

{{ figure_markup(
  content="23.7%",
  caption="Mobile websites have at least one element with a role=presentation",
  classes="big-number",
  sheets_gid="283521996",
  sql_file="common_aria_role.sql",
) }}

Removing an element's semantics causes an element to lose its behavior. It becomes only visually present, and assistive technologies fail to understand the structure of the element and cannot convey that message to the user. For example, a list with a role="presentation" will no longer communicate any information to a screen reader about the list structure. We found that 24.9% of desktop pages and 23.7% of mobile pages have at least one element with role="presentation".

{{ figure_markup(
  content="11.3%",
  caption="Mobile websites have at least one element with a role=none",
  classes="big-number",
  sheets_gid="283521996",
  sql_file="common_aria_role.sql",
) }}

The same effect of semantic removal takes place with `role="none"`. We found that this year, the percentage of `role="none"` has also increased to 11.3% and is one of the top 10 most common ARIA roles. There are very few use cases where this is particularly helpful for assistive technology users, for example if there is a `<table>` element being used only for layouting. But it can otherwise be harmful and should be used sparingly.

Most browsers ignore role="presentation" and role="none" on focusable elements, including links and inputs, or anything with a tabindex attribute set. Browsers also ignore the inclusion of the role if any of the element contains any global ARIA states and properties, such as aria-describedby.

### Labeling elements with ARIA

Parallel to the DOM there is a similar browser structure called the accessibility tree. It contains information about HTML elements including accessible names, descriptions, roles and states. This information is conveyed to assistive technologies through accessibility APIs.

The accessible name can be derived from an element's content (such as button text), an attribute (such as an image alt text value), or an associated element (such as a programmatically associated label for a form control). There is a specificity ranking that is used to determine where the element gets its accessible name from if there are multiple potential sources. [Léonie Watson's](https://twitter.com/LeonieWatson) article, [What is an accessible name?](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/) is a great source to learn more about accessible names.

{{ figure_markup(
  image="top10-aria-attributes.png",
  caption="Top 10 ARIA attributes.",
  description="A bar chart showing `aria-label` is used by 58.4% of desktop sites and 57.0% of mobile sites, `aria-hidden` by 57.8% and 57.0% respectively, `aria-expanded` by 28.5% and 27.8%, `aria-labelledby` by 24.3% and 22.6%, `aria-controls` by 23.9% and 22.8%, `aria-live` by 23.3% and 22.3%, `aria-haspopup` by 20.5% and 19.3%, `aria-current` by 17.8% and 19.4%, `aria-describedby` by 15.6% and 14.3%, and finally `aria-atomic` by 10.8% and 10.1%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1585975336&format=interactive",
  sheets_gid="711360879",
  sql_file="common_element_attributes.sql",
) }}

There are two ARIA attributes that help in providing elements with an accessible name: `aria-label` and `aria-labelledby`. These attributes will be preferred over the native derived accessible name so they should be used very carefully and only when necessary. It's always a good idea to test the accessible names obtained with a screen reader, and involve people with disabilities to confirm that it is actually helpful and doesn't make the content more inaccessible. We found that 58.4% of desktop pages and 57.0% of mobile home pages had at least one element with the aria-label attribute, making it the most popular ARIA attribute for providing accessible names. We found that 24.3% of desktop pages and 22.6% of mobile pages had at least one element with the aria-labelledby attribute. This could mean that more elements now have accessible names but it may also be indicative that more elements now lack a visual label which can be problematic for people with cognitive disabilities and voice to text users (see [`<label>` element](#label-element)).

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

Buttons typically get their accessible names from their content or an ARIA attribute. Per the first rule of ARIA, if an element can derive its accessible name without the use of ARIA, this is preferable. Therefore a `<button>` should get its accessible name from its text content rather than an ARIA attribute if possible. We found that 60.9% of buttons on desktop and 57.9% in mobile sites get their accessible name from content which is good. We also found that 19.6% of buttons on desktop sites and 23.1% of buttons on mobile sites get their accessible names from the aria-label attribute. There are few cases where an aria-label can help. For example, if the page has multiple buttons with the same content, but different purposes, then an aria-label can be used to provide a better accessible name. Sometimes developers also use aria-label when the button has only an image or icon, which might be a reason why mobile sites use the aria-label, rather than the content, to define accessible names.

### Hiding content

Sometimes the visual interface can contain some redundant elements that are unhelpful for users of assistive technologies. In such cases `aria-hidden="true"` can be used to hide the element from screen readers. However, they should never be used if omitting such an element would provide a screen reader user with less information than the visual interface. Hiding content from assistive technologies should never be used to skip over content that is challenging to make accessible.

{{ figure_markup(
  content="57.8%",
  caption="Desktop websites have at least one instance of the `aria-hidden` attribute",
  classes="big-number",
  sheets_gid="711360879",
  sql_file="common_element_attributes.sql",
) }}

We found that 24% of desktop pages and 23% of mobile pages had at least one instance of an element with the aria-hidden attribute. Hiding and showing content is a prevalent pattern in modern interfaces, and it can be helpful to declutter the UI for everyone.

It's important to use the proper aria attribute to convey the correct message. For example, disclosure widgets should be making use of the `aria-expanded` attribute to indicate to assistive technology that something is revealed by expanding when the control is activated and hidden when activated again. We found that 28.5% of desktop pages and 27.8% of mobile pages had at least one element with the aria-expanded attribute.

### Screen reader-only text

A common technique that developers employ to supply additional information for screen reader users is to use CSS to visually hide a passage of text but make it discoverable by a screen reader. This [CSS code](https://css-tricks.com/inclusively-hidden/) is used such that it's present in the accessibility tree but hidden visually.

{{ figure_markup(
  content="15.4%",
  caption="Desktop websites with a `sr-only` or `visually-hidden` class",
  classes="big-number",
  sheets_gid="642136962",
  sql_file="sr_only_classes.sql",
) }}

`sr-only` and `visually-hidden` are the most common class names used by developers and by UI frameworks to achieve screen reader-only text. Bootstrap and Tailwind also use `sr-only` classes for such elements. We found that 15.4% of desktop pages and 14.0% of mobile pages had one or both of these CSS class names. It is important to keep in mind that not all screen reader users are fully visually impaired, and thus one should avoid making too much use of screen reader-only solutions.

### Dynamically-rendered content

The presence of new or updated content in the DOM sometimes needs to be communicated to screen readers. For example, form validation errors need to be conveyed whereas a lazy-loaded image may not. Updates to the DOM also need to be done in a way that is not disruptive.

{{ figure_markup(
  content="23%",
  caption="Desktop pages with live regions",
  classes="big-number",
  sheets_gid="711360879",
  sql_file="common_element_attributes.sql",
) }}

ARIA live regions allow us to listen for changes in the DOM, such that the updated content can be announced by a screen reader. We found that 23% of desktop pages (up from 21% in 2021, 17% in 2020) and 22% of mobile pages (up from 20% in 2021, 16% in 2020) have live regions. For more information about live region variants and usage check out the [MDN live region documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) or play with this [live demo by Deque](https://dequeuniversity.com/library/aria/liveregion-playground).

## Accessibility apps and overlays

Accessibility overlays are tools claiming to automatically fix websites' accessibility issues.

The [Overlay Fact Sheet](https://overlayfactsheet.com/#what-is-a-web-accessibility-overlay) defines them as "a broad term for technologies that aim to improve the accessibility of a website. They apply third-party source code (typically JavaScript) to automate improvements to the front-end code of the website."

Their vendors generally promise a quick and easy solution to online accessibility: integrate one JavaScript snippet onto the site to make it compliant. Web accessibility is simply not possible to achieve with an out of the box solution like this. Automated tools can only detect [30 to 50% of accessibility issues](https://alphagov.github.io/accessibility-tool-audit/) to start with, and even for issues that can be detected, automated remediation via an overlay cannot always reliably fix those issues.

{{ figure_markup(
  image="pages-using-a11y-apps.png",
  caption="Pages using accessibility apps.",
  description="A bar chart showing 1.6% of desktop sites and 1.2% of mobile sites use an accessibility app.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=1586321777&format=interactive",
  sheets_gid="667492149",
  sql_file="a11y_technology_usage.sql",
) }}

We found that 1.56% of desktop websites use one of 22 specific accessibility apps we could detect in 2022. This is a clear rise compared to 0.96% in 2021.

Not all of those products are accessibility overlays, however the specific overlays we can detect show a similar rise. UserWay is the most popular overlay in our dataset, in use by 0.49% of desktop websites and 0.39% on mobile, compared to respectively 0.39% and 0.33% in 2021.

{{ figure_markup(
  image="a11y-app-usage-by-rank.png",
  caption="Accessibility app usage by rank.",
  description="A bar chart showing usage of the most popular accessibility apps by domain rank on desktop sites. AccessiBe is used by 0.13% of the top 1,000 sites and by 0.15% of the top 10,000 sites, by 0.48% of the top 100,000 sites, by 0.48% of the top million sites and by 0.37% of all sites. AudioEye is used by 0.13% (one), 0.27%, 0.16%, 0.21%, and 0.35% respectively. EqualWeb is not used on the top 1,000 sites, but is used by 0.02% of the top 10,000 sites, 0.07% of the top 100,000, 0.05% of the top million, and 0.03% of all sites. Texthelp similarly is not used on the top 1,000 or top 10,000 sites but is used by 0.02% of the top 100,000, 0.04% of the top million, and 0.03% of all sites. Finally, UserWay is not used on the top 1,000 sites but is used by 0.07% of the top 10,000 sites, by 0.12% of the top 100,000 sites, by 0.31% of the top million and by 0.49% of all sites.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=741701117&format=interactive",
  sheets_gid="1961985994",
  sql_file="a11y_technology_usage_by_domain_rank.sql",
) }}

Usage of overlays, and accessibility apps generally, is more rare for high-traffic websites. For sites ranked in the top 1,000 by visits, only 0.3% – or 3 websites – use an overlay.

{{ figure_markup(
  image="pages-using-a11y-apps-by-rank.png",
  caption="Pages using accessibility apps by rank.",
  description="A bar chart showing that for the top 1,000 sites, 0.4% on desktop and 0.3% on mobile use and accessibility app, for the top 10,000 it's 0.9% and 0.8% respectively, for the top 100,000 it's 1.2% and 1.1%, for the top million it's 1.4% and 1.3%, and finally for all sites 1.6% it's 1.2%.",
  chart_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi-gjiB_GnE2U4P7oxN2zqs0DbA2YDPqtsfIm3IBmtph_VE7FTrQvw7L6FsOsJlcZFI6HEULXuKEeb/pubchart?oid=2069674657&format=interactive",
  sheets_gid="134319036",
  sql_file="a11y_overall_tech_usage_by_domain_rank.sql",
) }}

### Concerns with overlays

There is a lot of pushback against overlays, [from accessibility advocates](https://overlayfactsheet.com/) and [users](https://www.vice.com/en/article/m7az74/people-with-disabilities-say-this-ai-tool-is-making-the-web-worse-for-them) alike. The National Federation of the Blind [denounce the practices of accessiBe](https://nfb.org/about-us/press-room/national-convention-sponsorship-statement-regarding-accessibe) in particular, a company known for their deceptive marketing, [including fake reviews](https://www.joedolson.com/2021/02/accessibe-the-fake-wordpress-plug-in-reviews/):

> […] the Board believes that accessiBe currently engages in behavior that is harmful to the advancement of blind people in society.
> […]
> It seems that accessiBe fails to acknowledge that blind experts and regular screen reader users know what is accessible and what is not. The nation's blind will not be placated, bullied, or bought off.
>
> — [National Federation for the Blind](https://nfb.org/about-us/press-room/national-convention-sponsorship-statement-regarding-accessibe)

accessiBe raised [an additional $30M in 2022](https://www.geektime.com/accessibe-raised-30m/), and is one of the overlays showing a clear rise in usage year-to-year, from 0.27% of desktop sites and 0.21% of mobile sites in 2021, to 0.37% and 0.25% in 2022.

Adrian Roselli's [#accessiBe Will Get You Sued](https://adrianroselli.com/2020/06/accessibe-will-get-you-sued.html) is an excellent resource on the practical implications of using such an overlay, including legal risks and privacy issues.

## Conclusion

Our analysis shows that there hasn't been much of a substantial change in the accessibility issues seen across websites. There have been some improvements. For example, adoption of `:focus-visible` has increased by almost 9% this year. Our analysis shows that there are still a lot of straightforward fixes, such as color contrast and image alt attributes, that could cause high impacts if addressed.

We see that there are often a lot of misuse of features that may give an illusion of things being more accessible but in reality it often degrades the experience. For example, we see 19.8% of websites have an anchor tag with `role=button`. Also, we see that 2.2% of alt attributes across websites have a file extension in them, which really doesn't help in conveying the meaning of the image.

A lot of the accessibility issues that we see in our analysis can be avoided if designers and developers start thinking about web accessibility from the very beginning and not as an enhancement at the end. Like Anna E. Cook once [said](https://twitter.com/annaecook/status/1404615552883060737), there's "no MVP without accessibility". The web community needs to realize that a website only has a great User Experience when that User Experience works for everyone, irrespective of the device and assistive technology used. We have tried to focus on key metrics that can be easily addressed in the hope that in 2023 we see the numbers improve.
