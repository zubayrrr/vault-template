
<%* let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  } 
-%>
<%*
  let title_uppercase = title.replace(/\b\w/g, c => c.toUpperCase());
  let result = title_uppercase.replace(/[^a-zA-Z0-9 ]/g, '');
  tR += "---"
%>
id: <% tp.file.creation_date("YYYYMMDDHHmmss") %>
title:  <%* tR += "\"" + result + "\"" %>
created: <% moment(tp.file.creation_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
updated: <% moment(tp.file.last_modified_date("YYYY-MM-DDTHH:mm:ss.SSSZ")).toISOString() %>
tags:
  - podcasts
---

Podcast:: <% await tp.system.prompt("Enter name of the podcast") %>
Episode:: <%* tR += "\"" + result + "\"" %>
Link:: <% await tp.system.prompt("Enter URL(link) to the episode") %>
Description:: <% await tp.system.prompt("Enter description of the podcast") %>
Topics:: <% await tp.system.prompt("Enter [[backlinks]] to topics - comma separated") %>

---

<% tp.file.cursor() %>