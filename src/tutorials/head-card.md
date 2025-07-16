# Building a Head Card from the Ground Up 🛠️

Ready to build a `Head Card` component from scratch? Let's dive in! (⌐■_■)

In this guide, we're gonna break down the code, styles, and layers into bite-sized pieces. The goal is to demystify our template architecture and show you how we leverage customizations to manage the template's state like a pro. Let's get cookin'! 🔥

## Step 1: The Blank Canvas 🎨
First up, we need a clean slate. Go ahead and spin up a new, totally empty template. Zero boilerplate, just pure potential. ✨

## Step 2: Scaffolding with Layers 🏗️
Now, let's build the skeleton of our component. In the `Package Layers` panel, hit that `+` button and start adding the building blocks. Think of these as the DOM nodes of our design. We're adding a few extra that we won't use right away, but this sets up a solid, reusable project structure you'll see across our platform. It's all about good architecture! 🧠
```
Photography Container (group) [visible]
  Photo (image) [visible]
  Headline Container (group) [visible]
    Headline (text) [visible]
    Subline (group) [hidden]
      Optional (group) [visible]
        Top (text) [visible]
        Bottom (text) [visible]
      Offer (text) [visible]

Logo Container (group) [visible]
  Logo Primary (group) [visible]
    Logo Image Primary (image) [visible]
  Logo Secondary (group) [hidden]
    Logo Image Secondary (image) [visible]

White Strip Container (group) [visible]
  Pack Shot Image (image) [visible]

Headline Container (group) [visible]
  Headline (text) [visible]
  Subline (group) [visible]
    Optional (group) [visible]
      Top (text) [visible]
      Bottom (text) [visible]
  Offer (text) [visible]

Legal Container (group) [visible]
  Legal Logo (image) [visible]
  Legal Text (text) [visible]

Short Legal Line (text) [visible]

Price Container (group) [visible]
  Currency Sign (text) [visible]
  Dollar Placeholder (image) [visible]
```

You should have a nice, clean layer stack ready to go. Looks good! 👍

![](https://res.cloudinary.com/coke/image/upload/v1752705746/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-01.png)

## Step 3: Define the Tactic 🎯
Let's create our new tactic. Give it the slick name `Head Card` and follow the GIF flow.

![](https://res.cloudinary.com/coke/image/upload/v1752705797/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-02.gif)

::: tip **Pro-tip!** 💡
Nailing the dimensions and aspect ratio here is key! Make sure they match the specs. 👇
![](https://res.cloudinary.com/coke/image/upload/v1752705749/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-03.png)
:::


## Step 4: The Core Styling Engine (Main.scss) ⚙️
Time to inject some style! `Package Styles` are the global CSS rules that power our components. Navigate to the `Main` sheet and drop in this SCSS. This sets up our container queries, CSS variables (hello, `--primary` color! 👋), and default styles for a solid foundation.
:::details `Main` Styles
```scss
/* Main */

/* Global Style settings */
body,
.render-item,
.ad-container {
    /* Set up for using container queries */
    container-type: size;
    container-name: main;

    /* Variables */
    --primary: #E1051C;
}

.ad-container {
    background-color: white;
    /* Global Defaults */
    color: inherit;
    font-size: 16px; /* Default font size for 1em */
    line-height: 1;

    div {
        font-family: "方正正大黑简体";
    }

    h1, h2, h3, h4, h5, h6, p {
        display: block;
    }

    &.brand-cctm {
        --primary: #E1051C;
    }
    &.brand-sprite {
        --primary: #00a64a;
    }

    /* Utility Classes */
    .hidden {
        display: none;
    }
}


.photography-container {
    position: absolute;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .headline-container {
        position: absolute;
    }
}

.white-strip-container {
    position: absolute;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    .pack-shot-image {
        width: 80%;
    }
}

.logo-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    .logo-primary {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo-image-primary {
            width: 80%;
            height: auto;
        }
    }

}
.legal-container {
    position: absolute;
    .legal-logo {
        padding-bottom: 0.5cqh;
    }
}
.short-legal-line {
    position: absolute;
    margin: 1cqw;
}
```
:::

![](https://res.cloudinary.com/coke/image/upload/v1752705773/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-04.gif)

## Step 5: Responsive Magic with Zone Overrides ✨
This is where the layout logic gets really cool. Create a new sheet named `DS: Zone Overrides`. We'll add a special class here to handle the `Head Card` layout. Using container queries (`@container`), we can make our component's layout adapt based on its own size, not just the viewport's. Super powerful stuff! 💪
:::details `DS: Zone Overrides` Styles
```scss
/* DS: Zone Overrides */

/* Landscape: Greater than 2:1 Aspect Ratio and up to 3:1 */
/*@container (min-aspect-ratio: 3/2) and (max-aspect-ratio: 3/1) {*/
.min-ar-3by2 {
    --logo-proportion: 41.5cqh;
    --logo-container-height: var(--logo-proportion);
    --logo-container-width: calc(var(--logo-container-height) / .75);
    /* White Strip Container */
    --white-strip-container-height: calc(100cqh - var(--logo-container-height));
    --white-strip-container-width: var(--logo-container-width);
    /* Photographhy Container */
    --photography-container-width: calc(100cqw - var(--white-strip-container-width));
    
    .photography-container {
        left: 0;
        top: 0;
        width: var(--photography-container-width);
        height: 100cqh;
        .headline-container {
            left: 50%;
            text-align: right;
            transform: translateX(-50%);
            bottom: 10%;
            width: 90%;
            height: 20%;
        }
    }
    .logo-container {
        right: 0;
        top: 0;
        height: var(--logo-container-height);
        width: var(--logo-container-width);
    }
    .white-strip-container {
        right: 0;
        bottom: 0;
        width: var(--white-strip-container-width);
        height: var(--white-strip-container-height);
    }
    .legal-container {
        bottom: 1.5cqw;
        left: 1.5cqw;
        .legal-logo {
            height: 2.5cqh;
        }
    }
    .short-legal-line {
        right: 0;
    }
}
```
:::

![](https://res.cloudinary.com/coke/image/upload/v1752705773/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-05.gif)

## Step 6: Extending Styles for Our Component 🔌
We don't want to repeat code, right? DRY principle for the win! (Don't Repeat Yourself). We'll create our specific `aspect-ratio-head-card` class and simply `@extend` the layout logic we just built. Clean, modular, and easy to maintain. B-)
:::info `Head Card` styles
```scss
/* Head Card */
.aspect-ratio-head-card {
    @extend .min-ar-3by2 !optional;
}
```
:::
![](https://res.cloudinary.com/coke/image/upload/v1752705773/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-06.gif)

## Step 7: Activating the Styles ⚡
Okay, we've written the style class, but now we need to tell our tactic to actually *use* it. Just pop the `aspect-ratio-head-card` class into the `Container Classes` input. This links our component to the styles we just created.
![](https://res.cloudinary.com/coke/image/upload/v1752705752/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-07.png)

## Step 8: Visual Checkpoint! 🖼️
Things are a bit abstract right now. Let's add the main photo so we can actually see our layout taking shape. It's always good to have visual feedback as you build. ^_^
![](https://res.cloudinary.com/coke/image/upload/v1752705768/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-08.png)

## Step 9: Powering Up with Variables 🔋
Static content is boring! Let's make our component dynamic. We'll use variables to manage our headlines and brand-specific info. This is where the real template magic begins.

### General Variables
First, let's add our general data blob. This JSON object will hold all the possible headlines and legal text.
```json
{
  "brand": "cctm",
  "headlines": {
    "cctm": {
      "head-card": "一口畅爽<br>让我们乐在一起"
    },
    "sprite": {
      "head-card": "一口透心凉<br> 一路心飞扬"
    }
  },
  "legalText": "【可口可乐】汽水、【雪碧】柠檬味汽水、【淳茶舍】茉莉花茶 原味茶饮料、<br>【纯悦】包装饮用水、【可口可乐零度】汽水。<br>图片仅供参考，产品以实物为准。<br>【雪碧】不含柠檬果肉和果汁。<br>【可口可乐】、【雪碧】、【淳茶舍】、【纯悦】、【畅爽】、【可口可乐零度】、<br>【零度可口可乐】及波浪形飘带图案是可口可乐公司的商标。"
}
```
![](https://res.cloudinary.com/coke/image/upload/v1752705783/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-09.gif)

### Tactic Name Variable
Next, a variable to identify our current tactic. This helps us pull the right content from our data object.
```json
{
  "tactic": "head-card"
}
```
![](https://res.cloudinary.com/coke/image/upload/v1752705776/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-10.gif)

## Step 10: Dialing in the Typography ✍️
Seeing some funky default font? Yeah, let's fix that. Time to import the correct font (`方正正大黑简体`) to make our headlines look sharp and on-brand. A good font makes all the difference! ✨

![](https://res.cloudinary.com/coke/image/upload/v1752705818/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-11.gif)

## Step 11: Wiring Up the Legal Text ⚖️
Let's get that legal copy showing up correctly. We just need to make sure the text layer is correctly mapped to our `legalText` variable. Easy peasy.
![](https://res.cloudinary.com/coke/image/upload/v1752705760/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-12.png)

## Step 12: Dynamic Logos & Customizations 🎨
The logo is the heart of the brand, but it's missing! Let's fix that. We'll use Merge Tags in the URL to build the logo path dynamically.
```
https://res.cloudinary.com/coke/image/upload/v1738320458/GCM/Logos/{{variables.brand}}/{{variables.logoName}}.svg?ver=1.02
```
![](https://res.cloudinary.com/coke/image/upload/v1752706784/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-19.png)

As you can see from the URL, our component needs to know the `brand` and `logoName`. We'll use the `Customizations` feature to create a user-friendly dropdown for this. This empowers users to switch brands without ever touching the code! 🤯

Head over to the Customizations menu and set up a `Select` control called `Brand`.

![](https://res.cloudinary.com/coke/image/upload/v1752705800/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-13.gif)

Then, add the options for `Coke` and `Sprite`, and define the variables (`brand` and `logoName`) for each option. This is how we map a simple dropdown selection to powerful changes in the template.

![](https://res.cloudinary.com/coke/image/upload/v1752705803/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-14.gif)
![](https://res.cloudinary.com/coke/image/upload/v1752705756/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-15.png)
![](https://res.cloudinary.com/coke/image/upload/v1752705756/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-16.png)

:::tip ✅ **Checkpoint!**
You've hit a major milestone! You should now be able to toggle between brands and see the logo, colors, and headlines update in real-time. How cool is that?! Give yourself a high-five. 🙌
:::
![](https://res.cloudinary.com/coke/image/upload/v1752705792/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-17.gif)

## Step 13: Adding the Finishing Touches ✨
See that empty space where the product portfolio should be? Let's fill it in. Drop this URL into the `Pack Shot Image` layer to complete the picture.
```
https://ap-east-1.cluster.tasker.vmlsites.com/asset/px/path/https://res.cloudinary.com/coke/image/upload/l_GCM:Portfolio:Dynamic:CCOT-500ml-PET/fl_layer_apply,fl_no_overflow,g_center,fl_relative,h_1.0/u_GCM:Portfolio:Dynamic:Sprite-Classic-500ml-PET/fl_layer_apply,fl_no_overflow,g_center,fl_relative,h_0.8500,x_-0.085,y_0.040/u_GCM:Portfolio:Dynamic:CCNS-500ml-PET/fl_layer_apply,fl_no_overflow,g_center,fl_relative,h_0.8500,x_0.085,y_0.040/u_GCM:Portfolio:Dynamic:CY-Baseline-Water-550ml-PET/fl_layer_apply,fl_no_overflow,g_center,fl_relative,h_0.7000,x_-0.150,y_0.080/u_GCM:Portfolio:Dynamic:ATH-480ml-PET/fl_layer_apply,fl_no_overflow,g_center,fl_relative,h_0.7000,x_0.154,y_0.080/e_trim/GCM/COKE%20Meals/Products/can-space-preview.jpg
```

## And... We Have Liftoff! 🚀
Check out the final result. A fully dynamic, customizable, and slick-looking `Head Card` component. You built this! ¯\\\_(ツ)\_/¯

![](https://res.cloudinary.com/coke/image/upload/v1752705792/GCM/shopx-docs/tutorials/head-card/head-card-tutorial-18.gif)

---

And that's a wrap! This was a quick sprint through our template creation workflow. While this was a foundational example, the core principles—structured layers, dynamic variables, and powerful customizations—are the same ones we use to build even the most complex components.

**Happy building!** 💻🎉
