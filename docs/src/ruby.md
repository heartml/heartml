---
title: Component SSR in Ruby
layout: "default.webc"
---

# <template @text="title" webc:nokeep></template> {style="text-align: center"}

You can use **Heartml** entirely client-side, but if you want to be able to render web components on the server, "expand" components, use Declarative Shadow DOM (DSD), and other HTML-first techniques, you need a server-side rendering solution (SSR).

Heartml's Ruby renderer can be used inside of Bridgetown, Rails, and other Ruby web frameworks. Just add heartml to your `Gemfile`:

```sh
bundle add heartml
```

## Bridgetown

After adding the `heartml` gem, update your `config/initializers.rb` file:

```ruby
Bridgetown.configure do |config|
  # existing configuration here

  init :heartml
end
```

Then you can add component pairs in your `src/_components` folder: an `.rb` file for the Ruby component definition, and a `.heartml` file for the HTML, CSS, and JavaScript (optional).

Here's an example component which lets you define figures including an image and a caption easily in Markdown or other HTML file formats:

<code-example webc:raw>

```ruby
# src/_components/image_figure.rb

class ImageFigure < Bridgetown::Component
  include Heartml

  define "image-figure"

  attr_reader :caption

  def initialize(caption: nil, **attributes)
    @caption = caption
    @attributes = attributes
  end

  def show_caption = @caption && !@caption.empty?
end
```

```html
<!-- src/_components/image_figure.heartml -->

<figure>
  <slot></slot>
  <figcaption server-effect="$show(.show_caption); .caption"></figcaption>
</figure>

<style>
  :host {
    display: block;
    margin-block: var(--size-8);
  }

  ::slotted(img) {
    display: block;
    margin-inline: auto;
    box-shadow: 0px 10px 18px color-mix(in oklch, var(--dark-pop-color), black 55%);
  }

  figure {
    margin: 0;
    margin-inline: calc(0rem - var(--main-padding-inline));
  }
  
  figcaption {
    margin-block: var(--size-3) 0;
    padding-inline: calc(var(--main-padding-inline) / 2);
    text-align: center;
    font-size: var(--font-size-1);
    font-style: italic;
    color: var(--emphasis-color);

    :host([caption-right]) & {
      text-align: right
    }
  }
</style>
```

</code-example>

As you can see, the effects syntax on the server matches the syntax you'd use for client-side rendering. More on this below.

Bridgetown will now automatically render this component any time you include the component tag in HTML via the Heartml Ruby renderer which hooks into Bridgetown via HTML Inspectors and Nokolexbor. For example:

<code-example webc:raw>

```md
# Some Markdown File.

<image-figure caption="The caption for the image." markdown="block">
  ![An Image](/images/some-image.jpg)
</image-figure>
```

</code-example>

Which renders out to:

<code-example webc:raw>

```html
<image-figure><template shadowrootmode="open"><figure>
  <slot></slot>
  <figcaption>The caption for the image.</figcaption>
</figure><style>
/* component styles omitted for brevity */
</style></template>
  <img src="/images/some-image.jpg" alt="An Image">
</image-figure>
```

</code-example>

## Rails

docs coming TDB

## Other Frameworks

docs coming TBD

## Attributes

The attributes on the component tag are translated to keyword arguments in your class initializer.

```ruby
**attributes

@attributes = attributes
```

`server_args`

## Server Effects, Child Content, and Light/Shadow DOM

...
