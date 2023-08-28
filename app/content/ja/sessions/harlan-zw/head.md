I'm the author of the Unhead which currently powers the head management of Nuxt and much of the Vue 3 ecosystem.

In this talk the audience will learn at a high level more about how Vue plugins work. They will learn some techniques for dealing with SSR Vue plugins as well as more complex architectural issues. It is intended for audience members with beginner to advanced Vue knowledge, there should be something for everyone.

The talk will start with a beginner introduction to what head management in Vue is and how it works as a basic level, by building a useHead which accepts a title. We start with basic client-side support and add SSR support by using a Vue plugin.

From there, we'll change the code to highlight some of the problems with it.

Problems that can be solved?

Changing the title ref after calling useHead won't work on the when SSR and the solution (lazy ref resolving)
Handling variable input data (computed getter, getter, computed, refs) with correct types
Preserving state between component lifecycles - the stack pattern
Problems that aren't solved:

Async data that is using Vue refs (vue context is lost - how to work around it)
If there's time left over and I'm in the position to, I'd also like to use the opportunity to release v2 of Unhead, which will provide improved performance and bundle size while also supporting some other frameworks.

<TBC - need to see my time constraints>
