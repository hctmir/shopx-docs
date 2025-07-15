# Unleash Dynamic Power: Variables & Merge Tags 🚀

Welcome to the core of dynamic content! Variables are your secret weapon to control everything from text strings and asset **URLs** to CSS classes. Think of them as your central control panel, and Merge Tags are the magic wands that bring them to life. ✨

## Your Variable Command Center 🕹️

So, how do you create a variable? You've got two main spots: the `All` tab for global variables that apply everywhere, or right inside a specific tactic for more targeted control.

Just pop open the left menu, click the gear icon ⚙️, and select `Variables` from the dropdown. Boom! You're ready to start crafting.

![](https://res.cloudinary.com/coke/image/upload/v1752600676/GCM/shopx-docs/customizations/variables-n-merge-tags/variables-n-merge-tags-01.gif)

As you'll see, your variables live inside a JSON object. You can keep it simple with basic `key: value` pairs, or you can build out more complex, nested structures for super-organized logic.

Check out this example. We've created a `headlines` object that holds different taglines for each brand and tactic. We're also setting a default `brand` and `tactic` to help us find the right headline later. This is how you can keep all your text organized and ready to go!
```json
{
  "brand": "cctm",
  "tactic": "price-talker",
  "headlines": {
    "cctm": {
      "head-card": "一口畅爽<br>让我们乐在一起",
      "door-handle": "即刻开启畅爽",
      "price-talker": "即刻开启畅爽",
      "branded-frame": "一口畅爽 让我们乐在一起",
      "insert-type-head-card": "一口畅爽<br>让我们乐在一起"
    },
    "costa": {
      "price-talker": "来一瓶 享醇香"
    },
    "sprite": {
      "head-card": "一口透心凉<br>一路心飞扬",
      "door-handle": "一口透心凉<br>一路心飞扬",
      "price-talker": "来一瓶 透心凉",
      "branded-frame": "一口透心凉 一路心飞扬"
    },
    "chun-yue": {
      "price-talker": "来瓶<span class='char-left'>【</span>纯悦<span class='char-right'>】</span>享受纯净"
    },
    "yang-guang": {
      "price-talker": "0糖好喝 就找<span class='char-left'>【</span>阳光<span class='char-right'>】</span>"
    },
    "minute-maid": {
      "price-talker": "来一瓶 品回甘"
    },
    "chun-cha-she": {
      "price-talker": "来一瓶 品回甘"
    }
  }
}
```
Normally, you'd probably set the `tactic` variable within the specific tactic itself, and the `brand` variable would be controlled by a `Select` customization (letting users pick a brand). With that setup, the logic to grab the right headline would look something like this little snippet of genius:
```js
 return state.variables.headlines[state.variables.brand][state.variables.tactic];
```

## Meet Merge Tags: Your Magic Wand ✨

See that line of code above? That's where Merge Tags come in to play. They are special placeholders that let you pull in your variables and even run some JavaScript logic right inside your text fields, URLs, and more.

There are two flavors of Merge Tags:

**1. The Simple Grab:** For pulling a top-level variable, it's super easy.
```js
{{variables.brand}}
```

**2. The Power Move (with JS):** The simple way won't work for our slick `headlines` example. For that, you need to wrap your logic in a function. Just call on the `state` to access all your variables and write whatever JS you need.
```js
{{fn(

    return state.variables.headlines[state.variables.brand][state.variables.tactic];

)}}
```

## Fine-Tuning: Customization & Overrides 🎛️

This is where you can really empower your users. Customization variables let you dynamically change strings, styles, and more on the fly. Let's use a `Select` customization as an example. After you create it, you can start adding variables that change based on the user's selection.

![](https://res.cloudinary.com/coke/image/upload/v1752600676/GCM/shopx-docs/customizations/variables-n-merge-tags/variables-n-merge-tags-02.gif)

Notice how the JSON editor can switch between a user-friendly two-column view (`key` and `value`) and a raw JSON mode? The two-column view is perfect for simple edits, but for complex nested objects like our `headlines` example, you'll want to flip over to the raw JSON view to get the full picture. 🤓

You can also get super granular and apply an override for one specific tactic. This is perfect for those one-off situations where you need to break the rules.

![](https://res.cloudinary.com/coke/image/upload/v1752600676/GCM/shopx-docs/customizations/variables-n-merge-tags/variables-n-merge-tags-03.gif)


## Dynamic Styling with Merge Tags 🎨

With all this power, you can start doing some seriously cool things, like dynamically styling your tactics. The most common use case? Changing the entire look and feel based on the selected brand.

It's as simple as adding a Merge Tag to the `Unit Container class` field.
![](https://res.cloudinary.com/coke/image/upload/v1752601840/GCM/shopx-docs/customizations/variables-n-merge-tags/variables-n-merge-tags-04.png)

Then, in your SCSS, you just set up the corresponding classes. When the `brand` variable changes, the class on the container changes, and your new styles kick in instantly! 💅
```scss
.ad-container {
    background-color: white;
    font-size: 16px;
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
    
    // NEW FOR DUAL LOGO
    &.brandSecondary-cctm {
        --primaryDualLogo: #F40009;
    }

    &.brand-sprite {
        --primary: #00a64a;
    }

    // NEW FOR DUAL LOGO
    &.brandSecondary-sprite {
        --primaryDualLogo: #00a64a;
    }

    &.brand-fanta {
        --primary: #ef7f21;
    }

    // NEW FOR DUAL LOGO
    &.brandSecondary-fanta {
        --primaryDualLogo: #ef7f21;
    }

    &.brand-minute-maid {
        --primary: #ee741d;
    }
    
    // NEW FOR DUAL LOGO
    &.brandSecondary-minute-maid {
        --primaryDualLogo: #ee741d;
    }

}
```

## Dynamic Text & Assets 🖼️

You can use the same magic for your text layers and image `src` attributes. Need to swap out a logo or a product shot based on the brand? Just use a Merge Tag to build the URL dynamically.

![](https://res.cloudinary.com/coke/image/upload/v1752602290/GCM/shopx-docs/customizations/variables-n-merge-tags/variables-n-merge-tags-05.png)


---

This is just scratching the surface of what you can do with Variables and Merge Tags. The possibilities are endless! Feel free to make your logic as simple or as complex as you need. Now it's your turn to get creative and build something amazing! 🥳
