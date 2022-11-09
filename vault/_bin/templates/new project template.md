---
title: '<% tp.file.title %>'
category: '<% tp.file.creation_date("YYYY") %>'
tags:
  - projects
created: <% moment(tp.file.creation_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
updated: <% moment(tp.file.last_modified_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
---

Areas:: <% await tp.system.prompt("Enter [[backlink]] to the areas") %>
Priority:: <% await tp.system.suggester(["High", "Medium", "Low"], ["High", "Medium", "Low"]) %>
Status:: <% await tp.system.suggester(["Ongoing", "Backlog", "Done"], ["Ongoing", "Backlog", "Done"]) %>
Duration:: <% await tp.system.prompt("Enter duration or deadline for this project") %>

---