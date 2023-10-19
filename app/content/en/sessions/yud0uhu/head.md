We developed a cross-platform desktop markdown editor. Initially using Vue3 and Electron, we found performance issues and migrated to Tauri.
The move to Tauri has greatly improved the performance of the markdown editor.

Electron uses an architecture that internally combines Chromium and Node.js, but this caused bloated memory consumption and slow startup times. Performance degradation was particularly noticeable when editing large markdown files and displaying previews.

Tauri is a framework made of Rust that aims to replace Electron, and it features light memory consumption and fast startup time while maintaining the excellent features of Electron.

In this talk, I would like to share my findings on desktop app development in Vue3 and Tauri and how the performance issues of the editor were solved.
