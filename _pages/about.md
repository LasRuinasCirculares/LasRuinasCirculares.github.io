---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am **Jun Zhang (张俊)**, an M.Sc. student at the Chinese Information
Processing Center, Institute of Software, Chinese Academy of Sciences
(ISCAS).

I received my bachelor's degree in Artificial Intelligence from Soochow
University in July 2025. I was subsequently admitted to the graduate program
at ISCAS through the recommendation-based admission pathway, without taking
the national postgraduate entrance examination.

My research focuses on **trustworthy and agentic large language models**. I am
particularly interested in reasoning reliability, temporal reasoning,
knowledge conflicts, multimodal tool use, and the interpretation of long
reasoning chains.

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

## Research Interests

- Trustworthy Large Language Models
- Agentic LLMs and Multimodal Agents
- Reasoning Reliability and Interpretability
- Temporal Reasoning and Knowledge Conflicts
- Visual Tool Use

## Education

<div class="career-list">
  <div class="career-item">
    <div class="career-date">Sep. 2025 &ndash; Present</div>
    <div>
      <strong>Institute of Software, Chinese Academy of Sciences</strong>
      <span>M.Sc. student, Chinese Information Processing Center</span>
    </div>
  </div>
  <div class="career-item">
    <div class="career-date">Sep. 2021 &ndash; Jul. 2025</div>
    <div>
      <strong>Soochow University</strong>
      <span>Bachelor's degree in Artificial Intelligence</span>
    </div>
  </div>
</div>

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

## Selected Publications

{% assign selected_publications = site.publications | where: "selected", true | sort: "date" | reverse %}
{% for post in selected_publications %}
  {% include archive-single.html heading_tag="h3" %}
{% endfor %}

[View all publications](/publications/){: .btn .btn--primary }

## Personal Interests

Outside research, I enjoy running marathons, swimming, and playing badminton.
