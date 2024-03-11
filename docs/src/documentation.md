---
title: Documentation
layout: "default.webc"
markdownTemplateEngine: liquid
---

# <template @text="title" webc:nokeep></template> {style="text-align: center"}

**Heartml** is a modular toolkit which comes together in the form of a `HeartElement` base class you can inherit to build your own web components. [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) is an umbrella term for a collection of browser-native technologies which let you augment standard HTML with custom elements. You can interleave built-in elements like `<section>` and `<aside>` with custom elements like `<colorful-button>` or `<audio-playlist>`.

You can build, and consume, custom elements which have been built with a variety of libraries or none at all. Unlike particular JavaScript frontend frameworks, there's no penalty or technical obstacle (though keep an eye on bundle sizes!) to mixing 'n' matching components built any number of ways.

This means on a single HTML page, theoretically you can work with components built with **Heartml**, **Lit**, **Stencil**, and even frameworks like **Vue** or **Svelte** which are able to "emit" web components.

## Defining Heartml Components

You can define a **Heartml** component a few different ways. One way is via a straightforward JavaScript file:

```js
import { HeartElement, html, css } from "heartml"

class CommentAuthor extends HeartElement {
  static template = html`
    <img src="" host-effect="@src = .avatar" class="author-avatar" />
    <div class="author-name">
      <slot></slot>
    </div>
  `

  static styles = css`
    .author-avatar {
      float: left;
      width: var(--avatar-size, 70px);
      height: var(--avatar-size, 70px);
      border: var(--avatar-border, 1px solid #ddd);
      border-radius: var(--avatar-radius, 50%);
    }

    .author-name {
      color: var(--author-color, white);
      font-weight: var(--author-weight, bold);
      margin-block-start: var(--author-gap, 24px);
      margin-inline-start: var(--body-indent, 90px);
    }
  `

  static properties = {
    avatar: {},
  }

  static declarativeEffects = { shadow: true }

  static {
    this.define("comment-author")
  }

  start() {
    this.avatar = ""
  }
}
```

In this component definition, a few things are going on:

* We're defining an HTML template via the `template` static property. This will be inserted into the component's Shadow DOM upon connection.
* We're defining a CSS stylesheet via the `styles` static property, which will be inserted as a style tag in the shadow DOM.
* We're defining which reative properties should be made available via the `properties` static property, in this case just one: `avatar`. We don't need to specify the type of the property, because that will be inferred by the default value set within `start()`.
* We're setting up the Declarative Effects plugin via the `declarativeEffects` static property. This is what enables `host-effect` to work within the HTML template. More on that below.
* We're defining the component to mount for all `comment-author` tags.
* And finally, we're setting that default `avatar` value in `start()`. All property types are inferred from their default values (aka strings, numbers, booleans, arrays, and data objects).

Almost without exception, these are all plugins. The `template` static property gets mapped to the `template` plugin, the `declarativeEffects` static property gets mapped to the `declarativeEffects` static property, and so on. Why is this cool? **You can write your own plugins** and completely customize what your Heartml components are capable of.

### Heartml Modules

Besides pure JavaScript, you can also define a component in a "Heartml Module" file (`.heartml`) which is based on the HTML Modules specification. These can be loaded in one of two ways:

* Via an [esbuild plugin](https://github.com/whitefusionhq/esbuild-plugin-html-modules). Simply set up the plugin in your esbuild configuration, and add a filter so that `.heartml` files get loaded:
  ```js
  plugins: {
    htmlModules({
      filter: /\.heartml/
    })
  }
  ```
* Via the `HeartModule` loader. Add the following to your JavaScript entrypoint:
  ```js
  import HeartModule from "heartml/utils/HeartModule.js"
  ```
  or if you're pulling in Heartml from a CDN distribution, it's included automatically. Once loaded, you can reference any Heartml Module file with a single tag:
  ```html
  <heart-module src="/path/to/component.heartml"></heart-module>
  ```

A Heartml Module is comprised of multiple HTML-based blocks:

* HTML tags at the top-level or grouped within a `<template>` tag.
* CSS at the top-level within a <code>&lt;style&gt;</code> tag.
* JavaScript at the top-level within a <code>&lt;script&gt;</code> tag.

Here's an example of the above component if it were written within a Heartml Module:

<code-example webc:raw>

```html
<img src="" host-effect="@src = .avatar" class="author-avatar" />
<div class="author-name">
  <slot></slot>
</div>

&lt;style>
  .author-avatar {
    float: left;
    width: var(--avatar-size, 70px);
    height: var(--avatar-size, 70px);
    border: var(--avatar-border, 1px solid #ddd);
    border-radius: var(--avatar-radius, 50%);
  }

  .author-name {
    color: var(--author-color, white);
    font-weight: var(--author-weight, bold);
    margin-block-start: var(--author-gap, 24px);
    margin-inline-start: var(--body-indent, 90px);
  }
&lt;/style>

<script type="module">
import { HeartElement } from "heartml"

class CommentAuthor extends HeartElement {
  static template = import.meta.document // this pulls in styles as well as HTML
  static properties = {
    avatar: {},
  }
  static declarativeEffects = { shadow: true }
  static {
    this.define("comment-author")
  }

  start() {
    this.avatar = ""
  }
}
</script>
```

</code-example>

The thing that's really nice about this format is it lets you break your HTML, CSS, and JavaScript apart into their own spaces, and **HTML** is the format host for these three languages, not JavaScript—just like how "vanilla" web pages work in general.

You can gain access to the HTML template via the `import.meta.document` variable. And if you group your HTML template inside of a specific `<template>` tag, you can also add other template tags with IDs for use within your JavaScript code. For example:

<code-example webc:raw>

```html
<template>
  <p>This is my component template.</p>
  <slot></slot>
</template>

<template id="something-else">
  <aside>But I can use this independently!</aside>
</template>
```

```js
static template = import.meta.document

someMethod() {
  const somethingElse = import.meta.document.querySelector("#something-else")
  console.log(somethingElse.innerHTML) // aside, etc.
}
```

</code-example>

Now that's all pretty cool…but wait, there's one more thing!

### Declarative Custom Elements (DCEs)

You can declare **Heartml** components right on any webpage, right in your HTML, with a special declarative syntax. No JavaScript files or bundlers required! You simply use the `heart-ml` tag and switch out some of your static properties/plugin customizations for attributes on the tag (though still using JSON notation). Once again, we'll rewrite the above component example, but this time as DCE:

**NOTE:** apologies, but the 11ty WebC processing on the Markdown of this docs page is messing up the code example slightly. It should be `properties='{"avatar": {}}'` and `declarative-effects='{"shadow": true}'`. Thanks for bearing with us!

<code-example webc:raw>

```html
<heart-ml tag-name="comment-author" properties='{"avatar": {}}' declarative-effects='{"shadow": true}'>
  <template data-html>
    <img host-effect="@src = .avatar" class="author-avatar" />
    <div class="author-name">
      <slot></slot>
    </div>
  </template>
  
  <template data-css>
    <style>
      .author-avatar {
        float: left;
        width: var(--avatar-size, 70px);
        height: var(--avatar-size, 70px);
        border: var(--avatar-border, 1px solid #ddd);
        border-radius: var(--avatar-radius, 50%);
      }
    
      .author-name {
        color: var(--author-color, white);
        font-weight: var(--author-weight, bold);
        margin-block-start: var(--author-gap, 24px);
        margin-inline-start: var(--body-indent, 90px);
      }
    </style>
  </template>
  
  <script type="module">
    class CommentAuthor extends (await customElements.whenDefined("heart-ml")) {
      static {
        this.define()
      }
 
      start() {
        this.avatar = ""
      }
    }
  </script>
</heart-ml>
```

</code-example>

A component definition like this could be used on a particular page either above or below actual usage of the `<component-author>` custom element. This is the essentially the easiest way to "code split" custom components across parts of your website. Only define the components you need, where you need them!

And as a bonus feature for the "buildless" fans out, you can even put DCEs inside of Heartml Module files! For example, you could take the above, move it all into a `comment-author.heartml` file, and then use `<heart-module src="/components/comment-author.heartml"></heart-module>` to load the definition.

**NOTE:** DCEs inside of Heartml Modules aren't currently supported via the esbuild plugin, nor are they compatible (yet) with the [Ruby server](/ruby) for SSR. We hope to improve this compatibility story in the future.

## Typical Heartml Plugins

**Heartml** is built around a plugin system. The `HeartElement` base class in fact does almost nothing…it simply kicks off the lifecycle of calling relevant plugins which you may have configured. Don't believe me? Here's the full code for the base class!

<code-example webc:raw>

```js
export class HeartElement extends HTMLElement {
  /**
   * Set up a custom element to hook into the Heartml lifecycle and get registered.
   * Static properties/methods will be treated as plugin configurations. However,
   * if it starts with `_` then it will be ignored.
   * 
   * @param {string} tagName - the custom element's tag to register
   */
  static define(tagName) {
    const reservedKeys = ["length", "name", "prototype"]

    Reflect.ownKeys(this).forEach(key => {
      if (!reservedKeys.includes(key.toString()) && Heartml.plugins[key]) {
        Heartml.plugins[key].static?.(this)
      } else if (!key.toString().startsWith("_") && !reservedKeys.includes(key.toString())) {
        console.warn(`The "${key.toString()}" Heartml plugin hasn't been initialized.`)
        console.debug(this)
      }
    })

    customElements.define(tagName, this)
  }

  constructor() {
    super()

    this.lifecycle = new HeartLifecycle(this).start()
  }

  connectedCallback() {
    this.lifecycle.mount()
  }

  disconnectedCallback() {
    this.lifecycle.cleanup()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.lifecycle.attributeChanged(name, oldValue, newValue)
  }
}
```

</code-example>

Within the various methods of the `HeartLifecycle` object, Heartml plugin features are called which are relevant to the lifecycle of the custom element.

* Static definition via `define` -> calls plugins' `static` methods.
* `constructor` -> calls your custom element's `start` method -> then calls plugins' `instance` methods. You shouldn't ever need to write your own `constructor` method.
* `connectedCallback` -> calls plugins' `connected` methods, potentially sets up some signal subscriptions (more on that below), then calls plugins' `resumed` methods. If you override `connectedCallback`, you should call `super.connectedCallback()` either before or after your method body.
* `disconnectedCallback` -> calls plugins' `cleanup` method. If you override `disconnectedCallback`, you should call `super.disconnectedCallback()` either before or after your method body.
* `attributeChangedCallback` -> calls plugins' `attributeChanged` methods. If you override `attributeChangedCallback`, you should call `super.attributeChangedCallback(name, oldValue, newValue)` either before or after your method body.

If you need to override and customize the lifecycle of your custom element for whatever reason, you may be better off just writing your own base class and then hooking in `HeartLifecycle`. There's a reason we architected **Heartml** this way after all!

But for the majority of use cases, it's much simpler just to rely on `HeartElement`'s default behavior.

**Heartml** comes with a set of core plugins, many of which you'll be using regularly. Here are descriptions of how they work:

### Properties

The Properties plugin lets you set up the "props" of your component, which will reflect to/from HTML attributes by default, and make it easy to pass data to your components and change state over time.

...

### Declarative Events

...

### Declarative Effects

...

### Queries

...

### Template

...

## Signals

Heartml's reactive properties and "declarative effects" features are all powered by the [Signals](https://github.com/preactjs/signals) library, which is maintained by the fine folks at Preact (though the core signals library we use has no relation to Preact proper). We've also written both features in a thoroughly moduler way, with a good deal of functionality contained within standalone classes (documentation below).

When you're mutating the state of a component, what is happening under the hood is that the value of a signal is changing. In other words:

```js
this.firstName = "Joseph"
```

is essentially a proxy for this:

```js
this.firstNameSignal.value = "Joseph"
```

In fact, all properties' signals are exposed on components! If you have a `firstName` property, a `firstNameSignal` instance variable is made available automatically.

The declarative effects feature works by literally setting up `effect` callbacks for you based on the simplified syntax within `host-effect` and `host-lazy-effect` attributes. But at any time you can write your own `effect`s!

<code-example webc:raw>

```js
import { effect } from "@preact/signals-core"

connectedCallback() {
  super.connectedCallback()
  
  effect(() => {
    console.log("The firstName value has changed!", this.firstName)
  })
}
```

</code-example>

In case it's not clear what exactly is going on here—and why it even works!?!—let me break it down for you:

* First we import `effect` from the Signals library.
* Then when the component connects, we write an effect callback to log the value of the `firstName` property.
* Immediately this callback will execute, but more importantly, any time the value of `firstName` changes, this callback will re-run.

How does that work? It's because of how Signals operates: any signal value which is accessed within an effect callback essentially creates a subscription. The callback, now being subscribed to that particular signal, will execute every time the signal has a new value. If you access two or more signals within a single effect, changing any of those signals will trigger the effect.

And recall what we said earlier: `firstName` is a proxy for `firstNameSignal.value`, so that's how the subscription is automatically created for you. **Pretty cool huh?**

### Resumability & Hydration

...

## Directives for Declarative Effects

...

## The `HostEffects` Class

...

## The `ReactiveProperty` Class

...
