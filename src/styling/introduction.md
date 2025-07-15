# 🎨 Introduction to Layer Styling

Styling is where your layers come alive! ✨ It’s how you give meaning, personality, and serious vibes to everything you build in ShopX.


## 💻 SCSS: The Power Behind the Style

ShopX uses `scss` for all its HTML and layer styling. Why? Because SCSS is next-level awesome:
- Write cleaner, more organized code 🧹
- Use variables for colors, fonts, and more 🎨
- Nest selectors for better structure 🌲
- Mixins & functions = reusable magic ✨
- Easy maintenance as your project grows 🚀

SCSS helps you keep your styles sharp, scalable, and super readable—perfect for grouping related layers and building a real design system!


## 📦 Package Styles vs. 🎯 Tactic Styles

With ShopX, you get total control over where your styles live:
- **Package Styles**: For general, global styles that apply across ALL tactics. You can even create multiple style sheets here for different aspect ratios or tactic types!
- **Tactic Styles**: Go granular! These are for one-off, unique looks that only apply to a specific tactic.

We’ll dive deeper into both soon—stay tuned!


## 🏁 Base Styles: Your Starting Point

When you spin up a fresh template, you’ll find some starter styles under the `All` tab. This is where you set your foundation:
- Define your color palette 🎨
- Set up base fonts & text styles 🅰️
- Lock in any global look-and-feel elements
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
    --primary-color: #000;
}

.ad-container {
    /* Global Defaults */
    color: inherit;
    font-size: 16px; /* Default font size for 1em */
    line-height: 1;

    div {
        font-family: Arial, sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p {
        display: block;
    }

    /* Utility Classes */
    .hidden {
        display: none;
    }
}

```

At this starter styles, we must define general aspects, like color palettes; define fonts or colors for some viable styles, etc.

::: tip Pro Tip!
Keep your base styles clean—don’t cram everything into one sheet! Separate your styles into different sheets for different purposes (like themes, components, or responsive tweaks).
:::

---

Here’s a sneak peek at what a more advanced `Design System Main` style sheet might look like:
::: details More Complex Example
```scss
/* Design System */
/* Main */
body,
.render-item,
.ad-container {
    container-type: size;
    container-name: main;
    /* Debug */
    --debug-display: none;
    /* Colors */
        //--primary: #F40009; // Old shade from Batch 2
    --primary: #E1051C; // Correct color from the AI files
    --primarySecondary: #E1051C;
    /* Logo Variables */
    --logo-proportion: 40cqw;
    --logo-container-width: var(--logo-proportion);
    --logo-container-height: calc(var(--logo-container-width) * .75);
    --logo-height: calc(var(--logo-container-width) * .33);
    /* White Strip */
    --white-strip-width: calc(100cqw - var(--logo-container-width));
    --white-strip-height: var(--logo-container-height);
    //--white-strip-padding: calc(var(--logo-container-width) * .1);
    --white-strip-padding: calc(var(--logo-container-height) * .05);
    /* Headline */
    --headline-span-display: block;
    --headline-padding: calc(var(--logo-proportion) * .125);
    --headline-font-size: calc(var(--logo-container-width) * .208) !important;
    /* Legal */
    --legal-padding: calc((100cqh - var(--logo-container-height)) / 50);
}

.ad-container {
    background-color: white;
    font-size: 1rem;
    color: white;
    line-height: 1;

    div {
        font-family: "方正正大黑简体";
    }

    &.fixed-headline {
        .headline {
            line-height: 1 !important;
        }
    }

    &.brand-sprite {
        --primary: #00a64a;
    }

    &.brand-costa {
        //--primary: #80232C; - OLD - Joze
        --primary: #861C28;
    }

    &.brand-minute-maid {
        --primary: #ee741d;
    }

    &.brand-yang-guang {
        --primary: #497B41;
        --secondary: #DED03B;
        .logo-primary {
            background-color: var(--secondary);
        }

        .logo-container {
            background-color: var(--secondary);
        }

    }

    &.brand-chun-yue {
        --primary: #4E276F;
    }

    &.brand-chun-cha-she {
        --primary: #224D3C;
    }

    // Secondary Colors
    &.brandSecondary-sprite {
        --primarySecondary: #00a64a;
    }

    &.brandSecondary-costa {
        //--primarySecondary: #80232C; - OLD - Joze
        --primarySecondary: #861C28;
    }

    &.brandSecondary-minute-maid {
        --primarySecondary: #ffad01;
    }

    &.brandSecondary-yang-guang {
        --primarySecondary: #497B41;
        --secondarySecondary: #DED03B;
        
        .logo-container {
            background-color: var(--secondarySecondary);
        }

    }

    &.brandSecondary-chun-yue {
        --primarySecondary: #4E276F;
    }

    &.brandSecondary-chun-cha-she {
        --primarySecondary: #224D3C;
    }

}


```
:::
