---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

## Pages

{% for page in site.pages %}
  {% if page.title and page.sitemap != false %}
- [{{ page.title }}]({{ page.url }})
  {% endif %}
{% endfor %}

## Publications

{% assign publications = site.publications | sort: "date" | reverse %}
{% for post in publications %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
