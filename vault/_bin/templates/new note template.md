---
title: '<% tp.file.title %>'
category: '<% tp.file.creation_date("YYYY") %>'
tags:
  - <% tp.system.suggester(["projects", "areas", "resources", "archive", "meta", "inbox"], ["projects", "areas", "resources", "archive", "meta", "inbox"]) %>
created: <% moment(tp.file.creation_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
updated: <% moment(tp.file.last_modified_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
---