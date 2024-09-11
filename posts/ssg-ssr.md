---
title: 'When to use static generation vs Server Side Rendering'
date: '2023-08-24'
---

We reccomend using **Static Generation** (with and
without data) whenever possible. 
This is because your page can be built and served
by CDN, which makes it much faster than having a 
server render the page on every request. 