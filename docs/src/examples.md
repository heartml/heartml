---
title: Usage Examples
layout: "default.webc"
---

# <template @text="title" webc:nokeep></template> {style="text-align: center"}

Heartml can be used in a wide variety of contexts. You can even use it in conjunction with other forms of component rendering. Here are some of the possibilities.

## Hydration After SSR

...

## Lit + Shared Signals

...

## WebC

[WebC](https://www.11ty.dev/docs/languages/webc/) is a web components-inspired template solution for Eleventy and beyond. Believe it or not, you can build a client-side Heartml component out of a server-side WebC component! Because Heartml's template format is pure HTML, the output HTML of the WebC component can itself be used as the template for a Heartml web component.

<aside>
<heartml-plus-webc :count="5 + 5" :@title="title"></heartml-plus-webc>
</aside>

Just call your WebC component using the typical semantics you're familiar with, even including dynamic values:

<code-example webc:raw>

```html
&lt;heartml-plus-webc :count="5 + 5" :@title="title">&lt;/heartml-plus-webc>
```

</code-example>

And then in your component definition, you can use Heartml syntax in the HTML and include your web component code in a script tag:

<code-example webc:raw>

```html
<!-- _components/heartml-plus-webc.webc -->
<p>Page title: &lt;strong @text="title"></strong></p>
&lt;output @text="count" host-lazy-effect=".count">&lt;/output>

&lt;style webc:scoped>
  :host {
    display: block;
    background: #00000033;
    border: 1px dashed var(--sl-color-gray-300);
    padding: var(--sl-spacing-large);
  }

  p {
    margin-block: 0 var(--sl-spacing-medium);
  }
&lt;/style>

<script type="module">
  import { HeartElement } from "https://esm.sh/heartml@latest"

  class HeartmlPlusWebC extends HeartElement {
    static properties = {
      count: {}
    }
    static declarativeEffects = { light: true }
    static {
      this.define("heartml-plus-webc")
    }

    start() {
      this.count = 0
      // `this.count` will be updated to 10 as soon as the `count` attribute is processed.
      // But because of `host-lazy-effect`, the number won't be re-rendered until it later
      // mutates via `setInterval`.
    }

    connectedCallback() {
      super.connectedCallback()

      setInterval(() => {
        this.count++
      }, 1000)
    }
  }
</script>
```
</code-example>
