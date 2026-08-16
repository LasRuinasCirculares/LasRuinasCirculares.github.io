---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am **Jun Zhang (张俊)**, currently pursuing an M.Sc. at the Institute of
Software, Chinese Academy of Sciences (ISCAS), where I work in the Chinese
Information Processing Laboratory under the supervision of **Hongyu Lin** and
**Boxi Cao**. I received my bachelor's degree in Artificial Intelligence from
Soochow University. My earlier research focused on temporal reasoning and
multimodal agentic reinforcement learning; my current work focuses on learning
dynamics and understanding how knowledge is acquired, represented, and updated
in large language models. I welcome discussions and collaborations on these
topics.

## Experience

<div class="career-list">
  <div class="career-item">
    <div class="career-date">Sep. 2024 &ndash; Dec. 2024</div>
    <div>
      <strong>Baidu</strong>
      <span>Natural Language Processing Intern</span>
      <p>Worked on data quality improvement and replication experiments for
      o1-style reasoning, including data curation, validation, and
      reasoning-oriented workflows.</p>
    </div>
  </div>
</div>

## Research Interests

- LLM Learning Dynamics & Knowledge Mechanisms
- Agentic Reasoning & Alignment

## Publications

{% assign publications = site.publications | sort: "date" | reverse %}
{% for post in publications %}
  {% include archive-single.html heading_tag="h3" %}
{% endfor %}

## Personal Interests

Outside research, I enjoy running marathons, swimming, and playing badminton.
