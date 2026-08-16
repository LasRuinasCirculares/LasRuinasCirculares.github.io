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

## News

<div class="news-list">
  <div class="news-item">
    <time datetime="2026-06">Jun. 2026</time>
    <p><a href="https://arxiv.org/abs/2606.23404">ReasoningLens</a> was released with open-source code.</p>
  </div>
  <div class="news-item">
    <time datetime="2025-09">Sep. 2025</time>
    <p>Joined ISCAS as an M.Sc. student.</p>
  </div>
  <div class="news-item">
    <time datetime="2025-05">May 2025</time>
    <p><a href="https://arxiv.org/abs/2505.08617">OpenThinkIMG</a> was released on arXiv.</p>
  </div>
  <div class="news-item">
    <time datetime="2024-12">Dec. 2024</time>
    <p>Completed an NLP internship at Baidu.</p>
  </div>
</div>

## Selected Publications

{% assign selected_publications = site.publications | where: "selected", true | sort: "date" | reverse %}
{% for post in selected_publications %}
  {% include archive-single.html heading_tag="h3" %}
{% endfor %}

[View all publications](/publications/){: .btn .btn--primary }

## Research Interests

- Learning Dynamics in Large Language Models
- Knowledge Acquisition, Representation, and Updating in LLMs
- Trustworthy and Agentic LLMs
- Temporal Reasoning
- Multimodal Agentic Reinforcement Learning

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

## Personal Interests

Outside research, I enjoy running marathons, swimming, and playing badminton.
