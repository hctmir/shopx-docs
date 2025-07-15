# 🌟 Best Practices

## 🖼️ Base Layer: Your Canvas

Every project starts on the **ad-container**—think of it as your creative canvas. 🎨 All your layers live inside this base layer. You can’t change how it works, but you *can* style it however you like to match your vibe!

## 🌍 General Layers vs. Tactic-Specific Layers

ShopX lets you mix & match:
- **General Layers**: These apply across ALL tactics in your template—super useful for consistent design!
- **Tactic-Specific Layers**: Only show up in one tactic, perfect for those special cases or unique moments.

Pro tip: Stick to general layers for most things, and use tactic-specific ones only when you need that extra flair! ✨


## 📱 Responsiveness: Design for Every Screen

Keep responsiveness top-of-mind from the start! Your layout should flex and adapt to different tactics and container setups. Here’s how:

- Use *absolute* positioning (like `transform`, `right`, `left`) for main components when needed.
- Inside containers, go responsive with tools like **flexbox**, **grid**, or other modern CSS layouts. Avoid using margins/paddings for spacing—they’re not your friends for true responsiveness!
- Want more pro tips? Check out our [Styling section](#) for all the details.


## 🧩 Components Design Definition

Modern web dev = reusable components! 🔁 Before you dive into building, check out the design **POIs** (Points of Interest) and spot repeating sections. Set up your general layers to cover these shared elements, then sprinkle in tactic-specific layers only where you need something unique.

### 🛠️ Component Definition Example

Let’s break it down with a real-life example. Imagine you’ve got a set of tactic POIs delivered as Illustrator files. Open up every variation, spot the repeating patterns, and box them out with colors to see what’s common and what’s unique.

Here are some sample components/layers we might find:
- **Image Container** (🟨): Holds images, sometimes headlines too.
- **Headline Container** (🟪): Can be solo or nested inside the image container.
- **Legal Container** (🟧): Moves around; holds legal text + Coke logo.
- **Short Legal** (🟦): Just a quick string.
- **Logo Container** (:purse:): One or two logos here.
- **Portfolio Container** (🟩): Shows off product images.
- **Price Container** (🟫): Price sign + number images.

![](https://res.cloudinary.com/coke/image/upload/v1752260895/GCM/shopx-docs/layers/best-practices/best-practices-02.png)

Once you’ve mapped it all out, your **ShopX** structure might look like this:

![](https://res.cloudinary.com/coke/image/upload/v1752261093/GCM/shopx-docs/layers/best-practices/best-practices-01.gif)


Stay curious, experiment boldly, and keep your designs clean & reusable. 🚀🔥
