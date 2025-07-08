# Quick Start <Badge type="tip" text="10 min" />

::: info 🚀 Let's Blast Off! 
Ready to launch your first ShopX template? This section will get you from zero to hero in minutes. For more inspiration, check out our examples section later! 📖
:::

## 🔓 Login to ShopX
Navigate to the ShopX platform and authenticate with your credentials. First mission: Access granted! 🎯

::: info 🔐 Pro Tip
New to the party? See our [Registration Guide](./setup/#login-n-register) to get onboarded. 👤
:::

## 🧩 Template Creation
Fire up your journey by hitting the `Template Creator` button. Initiate your first masterpiece with **Add Template** → Name it → Assign Business Unit → **Create**. Template spawned! 💥

![](https://res.cloudinary.com/coke/image/upload/v1752001008/GCM/shopx-docs/getting-started/quick-start/template-creation-01.gif)

## 🎨 Create a Tactic (Size)
Meet your creative canvas! Tactics ("Sizes") hold your layered HTML magic. Click `+` → `Create Your Own` → `Add`. Rename your tactic (we went with `Hello World` because classics never die).

![](https://res.cloudinary.com/coke/image/upload/v1752006362/GCM/shopx-docs/getting-started/quick-start/template-creation-02.gif)

## 🧱 Create Layers
Time to build! Under the `All` tab → `Layers` menu: 
1. Add a `Group` layer (your container) 
2. Nest a `Text` layer inside. Pro move: This is where your content comes alive! ✨

![](https://res.cloudinary.com/coke/image/upload/v1752006376/GCM/shopx-docs/getting-started/quick-start/template-creation-03.gif)

::: warning ⚡ Power User Note
Disable `Advanced CSS` during layer setup for smoother sailing. Trust us on this one.
:::

## 💅 Setup Package Styles
Plain layers? 😴 Let's inject some personality! Head to **Styles** and toggle between:
- `Package` (global component styles) 
- `Hello World` (your tactic-specific styles). 
Paste our 🔥 SCSS code to transform your tactic from "meh" to "WOW!" (See GIF for sauce).

![](https://res.cloudinary.com/coke/image/upload/v1752006369/GCM/shopx-docs/getting-started/quick-start/template-creation-04.gif)

```scss
/* HW Styles */
.ad-container.hw-styles {
    .main-container {
        position: absolute;
        width: 100cqw;
        height: 100cqh;
        background-image: url("https://i.pinimg.com/736x/0f/6d/b2/0f6db20951037bcfc56a1a2e9acef7c7.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;

        display: flex;
        align-items: end;
        
        .text-container {
            font-size: 25cqh;
            font-weight: bold;
            
            /* Fade-out effect from bottom to top */
            -webkit-mask-image: linear-gradient(to top, transparent 0%, black 60%);
            mask-image: linear-gradient(to top, transparent 0%, black 60%);
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
             margin-bottom: -2cqh
        }
    }
}
```

## 🎛️ Basic Customization
Unlock ShopX's superpower: Dynamic templating! We'll create a background switcher:
1. Hit `+` in Customizations 
2. Name your feature 
3. Choose `Select Input` type 
4. Add options (`One`/`Two`). 
Enable `Style Overrides` for Option Two, paste SCSS, and BOOM - dynamic backgrounds! 

```scss
.ad-container.hw-styles {
    .main-container {
        background-image: url("https://i.pinimg.com/736x/38/da/68/38da684f87239f51ecd9b6a4e21f7b4d.jpg");
    }
}
```

![](https://res.cloudinary.com/coke/image/upload/v1752006367/GCM/shopx-docs/getting-started/quick-start/template-creation-05.gif)


![](https://res.cloudinary.com/coke/image/upload/v1752006366/GCM/shopx-docs/getting-started/quick-start/template-creation-06.gif)

## 🏁 Conclusion
<div style="text-align: justify;">
You've just leveled up! 🎮 This is merely the first taste of ShopX's capabilities. Keep exploring the docs to unlock next-level templating sorcery! 🔮
</div>
