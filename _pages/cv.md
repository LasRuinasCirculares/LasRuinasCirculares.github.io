---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume/
---

## Education

- **Institute of Software, Chinese Academy of Sciences**, Beijing, China<br>
  M.Sc. student, Chinese Information Processing Laboratory, Sep. 2025 &ndash; Present

- **Soochow University**, Suzhou, China<br>
  Bachelor's degree in Artificial Intelligence, Sep. 2021 &ndash; Jul. 2025

## Experience

- **Baidu**, Natural Language Processing Intern, Sep. 2024 &ndash; Dec. 2024<br>
  Data quality improvement and replication experiments for o1-style reasoning,
  including data curation, validation, and reasoning-oriented workflows.

## Research Interests

- Learning Dynamics in Large Language Models
- Knowledge Acquisition, Representation, and Updating in LLMs
- Trustworthy and Agentic LLMs
- Temporal Reasoning
- Multimodal Agentic Reinforcement Learning

## Publications

{% assign publications = site.publications | sort: "date" | reverse %}
{% for post in publications %}
  {% include archive-single.html heading_tag="h3" %}
{% endfor %}

## Personal Interests

Marathon running, swimming, and badminton.
