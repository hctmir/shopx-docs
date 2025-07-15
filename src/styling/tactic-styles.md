# 🎯 Tactic Styles

As we mentioned before, **Tactic Styles** let you *fine-tune* your package styles for each specific tactic. Need to break the mold or add some unique flair? This is where you do it! Perfect for those one-off tweaks that make your tactic stand out from the crowd. 🌟


## 🛠️ Sample: Fine-Tuning the Shelf Strip

Let’s say you want to give your `Shelf Strip` a bold Coca-Cola Zero vibe—with black as the primary color. 🖤 There are a couple of ways to make this happen:

1. **Change the background of the `logo-container`:**
- Just update the background-color property directly!
```scss
/* Shelf Strip - Main */
.ad-container.shelf-strip {
    .logo-container {
        background-color: black;
    }
}
```
2. **Update the `--primary` variable:**
- Set `--primary` to black and watch everything using that variable switch up instantly.
```scss
/* Shelf Strip - Main */
.ad-container.shelf-strip {
    --primary: black;
}
```


Here’s what your new look could be:
![](https://res.cloudinary.com/coke/image/upload/v1752278755/GCM/shopx-docs/styles/tactic-styles/tactic-styles-01.png)

---

With Tactic Styles, you can override and personalize any style you want—making each tactic uniquely yours. Go wild, experiment, and own your design! 🚀🎨
