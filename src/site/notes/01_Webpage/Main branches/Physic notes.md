---
{"dg-publish":true,"permalink":"/01-webpage/main-branches/physic-notes/","dg-note-properties":{"type":["house"]}}
---


```base
filters:
  and:
    - file.hasProperty("dg-publish")
    - file.path.startsWith("30_Rad Knowledge/303_Physics")
    - file.ext == "md"
views:
  - type: cards
    name: Table
    order:
      - file.name
      - tags
    sort:
      - property: file.mtime
        direction: DESC
    cardSize: 340
    imageAspectRatio: 1

```
