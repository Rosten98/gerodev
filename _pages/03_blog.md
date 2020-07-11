---
layout: page
title: Blog
permalink: /blog/
published: true
---

<div class="searchbar">
  <span> Buscar tutorial: </span>
  <input type="text" placeholder="Busca por etiqueta, tecnología, ...">
  <i class="fas fa-search"></i>
</div>

{% for post in site.posts %}
<div class="post">
  <div class="post-content">
    <a href="{{ post.url }}" class="post-title">
      <p>{{ post.title }}</p>
    </a>
    <p class="post-date"> {{ post.date | date: "%-d %B, %Y" }}</p>
  </div>
  <span class="post-tag">{{ post.tag }}</span>
</div>
{% endfor %}
