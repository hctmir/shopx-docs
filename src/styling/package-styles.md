# 📦 Package Styles

As we mentioned earlier, **Package Styles** is your go-to spot for all things *global styling*. 🌍 If you’ve got a set of tactics—like “Price Talker”—that share the same look and aspect ratio, just whip up a dedicated style `Sheet` here. Later, you can import these classes into any `Tactic Styles` you want, keeping everything consistent and on-brand. One source of truth, endless possibilities! 💡


## 🛠️ Sample: Styling a Shelf Strip

Let’s walk through an example using a tactic called `Shelf Strip`. Ready? Let’s do this:

1. **Copy the Structure:**  
Grab the base structure for `Shelf Strip` and drop it into your template. This sets up all the general layers you’ll need.

::: details
```json
{
  "id": "6b92956d-86a8-4fe8-a8c7-8c488b673530",
  "name": "Styles Docs",
  "description": null,
  "categories": {},
  "region": null,
  "status": "draft",
  "tags": null,
  "customizations": [],
  "creativeUnits": [],
  "layers": [
    {
      "id": "1720799376342",
      "type": "group",
      "label": "Photography Container",
      "layers": [
        {
          "id": "1720799388449",
          "type": "image",
          "label": "Photo",
          "hidden": false,
          "locked": true,
          "classes": "photo",
          "mergeTags": {
            "assetPath": null,
            "optimizations": null
          }
        },
        {
          "id": "1730120818321",
          "type": "group",
          "label": "Headline Container",
          "layers": [
            {
              "id": "1730120818320-headline",
              "text": {
                "content": "{{fn(return state.variables.headlines[state.variables.brand][state.variables.tactic])}}",
                "autoSize": {
                  "wrap": true,
                  "maxWidth": "99%",
                  "maxHeight": "99%",
                  "multiLine": false
                }
              },
              "type": "text",
              "label": "Headline",
              "locked": true,
              "classes": "headline",
              "mergeTags": {
                "text.content": [
                  {
                    "id": "1741971618164-0",
                    "label": "{{fn(return state.variables.headlines[state.variables.brand][state.variables.tactic])}}",
                    "value": "{{fn(return state.variables.headlines[state.variables.brand][state.variables.tactic])}}",
                    "isChip": true
                  }
                ],
                "visibilityConditions": null
              }
            },
            {
              "id": "1744136328850",
              "type": "group",
              "label": "Subline",
              "style": null,
              "layers": [
                {
                  "id": "1744136393867",
                  "type": "group",
                  "label": "Optional",
                  "style": null,
                  "layers": [
                    {
                      "id": "1744136407321",
                      "text": {
                        "content": "Text"
                      },
                      "type": "text",
                      "label": "Top",
                      "style": null,
                      "locked": true,
                      "classes": "top"
                    },
                    {
                      "id": "1744136419497",
                      "text": {
                        "content": "Text"
                      },
                      "type": "text",
                      "label": "Bottom",
                      "style": null,
                      "locked": true,
                      "classes": "bottom"
                    }
                  ],
                  "locked": true,
                  "classes": "optional"
                },
                {
                  "id": "1744137709335",
                  "text": {
                    "content": "立省<span class'font-moranga'>{{variables.promo1}}</span>元"
                  },
                  "type": "text",
                  "label": "Offer",
                  "style": null,
                  "locked": true,
                  "classes": "offer",
                  "mergeTags": {
                    "text.content": [
                      {
                        "id": "1744137725003-0",
                        "label": null,
                        "value": "立省<span class'font-moranga'>",
                        "isChip": false
                      },
                      {
                        "id": "1744137725003-1",
                        "label": "{{variables.promo1}}",
                        "value": "{{variables.promo1}}",
                        "isChip": true
                      },
                      {
                        "id": "1744137725003-2",
                        "label": null,
                        "value": "</span>元",
                        "isChip": false
                      }
                    ]
                  }
                }
              ],
              "locked": true,
              "classes": "subline"
            }
          ],
          "locked": true,
          "classes": "headline-container",
          "mergeTags": {
            "visibilityConditions": null
          }
        }
      ],
      "locked": true,
      "classes": "photography-container"
    },
    {
      "id": "1720799400559",
      "type": "group",
      "label": "Logo Container",
      "layers": [
        {
          "id": "1743455374554",
          "type": "group",
          "label": "Logo Primary",
          "style": null,
          "layers": [
            {
              "id": "1743455401194",
              "type": "image",
              "image": {
                "assetPath": "https://placehold.co/600x600?text=Image%20Placeholder"
              },
              "label": "Logo Image Primary",
              "style": {
                "objectFit": "cover"
              },
              "locked": true,
              "classes": "logo-image-primary,logo",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1737563779/GCM/Logos/{{variables.brand}}/{{variables.logoPath}}.svg?ver=1.02 ",
              "mergeTags": {
                "classes": null,
                "assetPath": [
                  {
                    "id": "1743455726379-0",
                    "label": null,
                    "value": "https://res.cloudinary.com/coke/image/upload/v1737563779/GCM/Logos/",
                    "isChip": false
                  },
                  {
                    "id": "1743455726380-1",
                    "label": "{{variables.brand}}",
                    "value": "{{variables.brand}}",
                    "isChip": true
                  },
                  {
                    "id": "1743455726380-2",
                    "label": null,
                    "value": "/",
                    "isChip": false
                  },
                  {
                    "id": "1743455726380-3",
                    "label": "{{variables.logoPath}}",
                    "value": "{{variables.logoPath}}",
                    "isChip": true
                  },
                  {
                    "id": "1745867723116-0",
                    "label": null,
                    "value": ".svg?ver=1.02 ",
                    "isChip": false
                  }
                ]
              }
            }
          ],
          "locked": true,
          "classes": "logo-primary"
        },
        {
          "id": "1743455435771",
          "type": "group",
          "label": "Logo Secondary",
          "style": null,
          "layers": [
            {
              "id": "1743455461033",
              "type": "image",
              "image": {
                "assetPath": "https://placehold.co/600x600?text=Image%20Placeholder"
              },
              "label": "Logo Image Secondary",
              "style": {
                "objectFit": "cover"
              },
              "locked": true,
              "classes": "logo-image-secondary,logo",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1737563779/GCM/Logos/{{variables.brand}}/{{variables.logoPath}}.svg?ver=1.02 ",
              "mergeTags": {
                "classes": null,
                "assetPath": [
                  {
                    "id": "1743455745076-0",
                    "label": null,
                    "value": "https://res.cloudinary.com/coke/image/upload/v1737563779/GCM/Logos/",
                    "isChip": false
                  },
                  {
                    "id": "1743455745076-1",
                    "label": "{{variables.brand}}",
                    "value": "{{variables.brand}}",
                    "isChip": true
                  },
                  {
                    "id": "1743455745076-2",
                    "label": null,
                    "value": "/",
                    "isChip": false
                  },
                  {
                    "id": "1743455745076-3",
                    "label": "{{variables.logoPath}}",
                    "value": "{{variables.logoPath}}",
                    "isChip": true
                  },
                  {
                    "id": "1745867729732-0",
                    "label": null,
                    "value": ".svg?ver=1.02 ",
                    "isChip": false
                  }
                ]
              }
            }
          ],
          "locked": true,
          "classes": "logo-secondary"
        }
      ],
      "locked": true,
      "classes": "logo-container"
    },
    {
      "id": "1730120858598",
      "type": "group",
      "label": "White Strip Container",
      "layers": [
        {
          "id": "1730120858597-pack-shot-container",
          "type": "group",
          "label": "Pack Shot Container",
          "layers": [
            {
              "id": "1730120858597-pack-shot-1",
              "type": "image",
              "label": "Pack Shot 1",
              "locked": true,
              "classes": "pack-shot-1",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1722952281/GCM/Coke%20Meals/Products/sleek-can.png"
            },
            {
              "id": "1730120858597-pack-shot-2",
              "type": "image",
              "label": "Pack Shot 2",
              "locked": true,
              "classes": "pack-shot-2",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1722952281/GCM/Coke%20Meals/Products/sleek-can.png"
            },
            {
              "id": "1730120858598-pack-shot-3",
              "type": "image",
              "label": "Pack Shot 3",
              "locked": true,
              "classes": "pack-shot-3",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1722952281/GCM/Coke%20Meals/Products/sleek-can.png"
            },
            {
              "id": "1730120858598-pack-shot-4",
              "type": "image",
              "label": "Pack Shot 4",
              "locked": true,
              "classes": "pack-shot-4",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1722952281/GCM/Coke%20Meals/Products/sleek-can.png"
            },
            {
              "id": "1730120858598-pack-shot-5",
              "type": "image",
              "label": "Pack Shot 5",
              "locked": true,
              "classes": "pack-shot-5",
              "assetPath": "https://res.cloudinary.com/coke/image/upload/v1722952281/GCM/Coke%20Meals/Products/sleek-can.png"
            }
          ],
          "locked": true,
          "classes": "pack-shot-container",
          "visibilityConditions": [
            {
              "path": "path.to.value",
              "value": "test-value",
              "relation": "eq"
            }
          ]
        },
        {
          "id": "1730120858598-pack-shot-image",
          "type": "image",
          "label": "Pack Shot Image",
          "locked": true,
          "classes": "pack-shot-image",
          "assetPath": "{{fn(\n \n  var myFunc = function(\n    inputLayout,\n    products,\n    config\n) {\n    const self = this;\n    if(!config) {\n        config = {};\n    }\n    \n    self.previewMode = config.previewMode || false;\n    self.background = config.background;\n    self.debug = config.debug || false;\n    self.log = function(...input) {\n        if(self.debug) {\n            console.log(...input);\n        }\n    }\n \n    self.products = products;\n    // The base offset for each row.\n    // Represents a percentage of the (unknown) \"canvas\" width.\n    self.rowOffsetConst = 0.09;\n    // The amount of \"contract\" between products.\n    self.contract = config.contract || 0.9;\n    // A tiny nudge to make things slightly more spread out.\n    self.nudge = (config.extraSpacingGlobal) ? Number(config.extraSpacingGlobal) : 0;\n    // The vertical offset between each row.\n    // Represents a percentage of the (unknown) \"canvas\" height.\n    self.rowOffsetVertical = 0.04;\n    // Describes how much smaller each successive row should be.\n    self.rowScale = [\n        1.0,\n        .85,\n        .70,\n        .55\n    ];\n    // self.rowScale = [\n    //  1.0,\n    //  1.0,\n    //  1.0,\n    //  1.0,\n    // ];\n    // The width of the reference product.\n    // This is used to adjust spacing for \"large\" products (in terms of width).\n    self.referenceWidth = 6.4;\n \n    // Optimization.\n    self.scaleCache = {};\n \n    self.calculateLayout = function(layout) {\n        let newLayout = [];\n        rows: for(let i = 0; i < layout.length; i++) {\n            if(!newLayout[i]) {\n                newLayout[i] = [];\n            }\n \n            const row = layout[i];\n            columns: for(let j = 0; j < row.length; j++) {\n                const name = row[j];\n                console.log(name);\n                if(!name || !self.products[name]) {\n                    if(name) {\n                        self.log(`No product name found at row ${i}, column ${j}`);\n                    }\n                    continue columns;\n                }\n                const product = self.products[name];\n                const scaleY = self.rowScale[i];\n    \n                let offsetX = 0;\n                let offsetY = 0;\n                const previousCol = layout[i - 1]?.[j] ? j : j - 1;\n                const previousName = layout[i - 1]?.[previousCol];\n                self.log('\\n');\n                self.log(`Current:`, name, `Previous:`, previousName);\n                if(previousName) {\n                    const previousProduct = self.products[previousName];\n                    // Used to determine which direction a product should offeset on the X axis.\n                    const sign = j === 0 ? -1 : 1;\n                    \n                    // The offset of the most relevant product in the previous row.\n                    const previousOffsetX = (Number(newLayout[i - 1][previousCol]?.offsetX) || 0);\n \n                    let additionalLayoutSpacing = 0;\n                    if(config.extraSpacingLayout && config.extraSpacingLayout[i] && config.extraSpacingLayout[i][j]) {\n                        additionalLayoutSpacing = Number(config.extraSpacingLayout[i][j]);\n                        self.log(`Additional Layout Spacing:`, additionalLayoutSpacing);\n                    }\n                    \n                    // The standard size comparisons for the current and previous products.\n                    const previousProductQuotient = (previousProduct.width / self.referenceWidth) * self.rowScale[i - 1];\n                    const productQuotient = (product.width / self.referenceWidth) * self.rowScale[i];\n                    const quotientDifference = productQuotient - previousProductQuotient;\n \n                    // The size comparisons for the current and previous products, inverted.\n                    const previousProductQuotient2 = (self.referenceWidth / previousProduct.width) / self.rowScale[i - 1];\n                    const productQuotient2 = (Math.min(previousProduct.width, self.referenceWidth) / product.width) / self.rowScale[i];\n                    const quotientDifference2 = productQuotient2 - previousProductQuotient2;\n \n                    // Deal with the case where the previous product is larger than the current product\n                    const previousProductQuotient3 = (Math.min(product.width, self.referenceWidth) / previousProduct.width) / self.rowScale[i - 1];\n                    const productQuotient3 = (Math.max(previousProduct.width, self.referenceWidth) / product.width) * self.rowScale[i];\n                    const quotientDifference3 = productQuotient3 - previousProductQuotient3;\n \n                    offsetY = self.rowOffsetVertical * i;\n                    offsetX = ((self.rowOffsetConst * productQuotient * sign) + previousOffsetX);\n \n                    let sizeAdjustment = 0;\n                    if(product.width >= self.referenceWidth) {\n                        // sizeAdjustment = (((self.rowOffsetConst * quotientDifference2) / 2) * sign);\n                        sizeAdjustment = (((self.rowOffsetConst * quotientDifference) / 2) * sign);\n                    } else if (product.width < self.referenceWidth && previousProduct.width > self.referenceWidth) {\n                        // If the product width is less than the reference width, adjust the size to account for the difference between the previous product and the current product\n                        sizeAdjustment = (((self.rowOffsetConst * quotientDifference3) / 2) * -sign);\n                        // self.log('\\tProduct is smaller than reference width, but previous product is larger.');\n                        // self.log('Quotient difference: ', quotientDifference3)\n                    } else {\n                        // If the product width is less than the reference width, adjust the size to account for the difference between the previous product and the current product\n                        sizeAdjustment = (((self.rowOffsetConst * quotientDifference2) / 2) * -sign);\n                        // self.log('\\tProduct is smaller than reference width.');\n                        // self.log('Quotient difference: ', quotientDifference2)\n                    }\n                    self.log('Adjustment: ', sizeAdjustment);\n \n                    self.log('RawX:', offsetX);\n                    //self.log(sizeAdjustment, offsetX - sizeAdjustment);\n                    offsetX = offsetX - sizeAdjustment;\n                        \n \n \n                    // If the offset is not 0, the product needs to fold behind the previous product by 10-15% of the width of the reference product.\n                    if(offsetX < 0) {\n                        offsetX = offsetX + (sign * offsetX * (1 - contract));\n                        self.log('OffsetX:', offsetX);\n                    } else if (offsetX > 0) {\n                        offsetX = offsetX - (sign * offsetX * (1 - contract));\n                        self.log('OffsetX:', offsetX);\n                    }\n \n \n                    offsetX = offsetX + (self.nudge * sign) + (additionalLayoutSpacing * sign);\n \n                    \n                    self.log(`OffsetX:`, offsetX);\n                    //self.log(`OffsetY:`, offsetY);\n                }\n                \n                newLayout[i][j] = {\n                    cloudinaryPath: product.cloudinaryPath,\n                    scaleY: (scaleY === 1) ? '1.0' : scaleY.toFixed(4),\n                    offsetX: offsetX,\n                    offsetY: offsetY\n                };\n            }\n        }\n \n        return newLayout;\n    }\n \n    self.compileUrl = function(res) {\n        let url = `https://res.cloudinary.com/coke/image/upload/`;\n        for(let i = 0; i < res.length; i++) {\n            const row = res[i];\n            let layerPFX = 'u_';\n            if(i === 0) {\n                layerPFX = 'l_';\n            }\n \n            for(let j = 0; j < row.length; j++) {\n                const product = row[j];\n                if(!product) {\n                    continue;\n                }\n                url += `${layerPFX}${product.cloudinaryPath}/`;\n                let params = [\n                    `fl_layer_apply,fl_no_overflow,g_center,fl_relative`\n                    //`fl_layer_apply,g_center,fl_relative`\n                ];\n                if(product.scaleY) {\n                    params.push(`h_${product.scaleY}`);\n                }\n                if(product.offsetX) {\n                    params.push(`x_${product.offsetX.toFixed(3)}`);\n                }\n                if(product.offsetY) {\n                    params.push(`y_${product.offsetY.toFixed(3)}`);\n                }\n                url += params.join(',') + '/';\n            }\n        }\n \n        let extraSettings = '';\n        if (self.background) {\n            extraSettings = 'b_rgb:' + self.background + '/';\n        }\n \n        if(!self.previewMode) {\n            return url += extraSettings + 'e_trim/GCM/COKE%20Meals/Products/can-space.jpg';\n        } else {\n            return url += extraSettings + 'e_trim/GCM/COKE%20Meals/Products/can-space-preview.jpg';\n        }\n    }\n    \n    self.parseLayout = function(l) {\n        let layout = [];\n        for(let i = 0; i < l.length; i++) {\n            if(i === 0) {\n                layout.push(l[i]);\n                continue;\n            }\n            let row = l[i];\n            if(row.length === 1) {\n                layout.push([null, row[0]]);\n                continue;\n            } else if(row.length === 2) {\n                layout.push(row);\n                continue;\n            }\n        }\n        console.log(layout);\n        return layout;\n    }\n \n    return self.compileUrl(\n        self.calculateLayout(\n            self.parseLayout(inputLayout)\n        )\n    );\n};\n \nconst products = {\n    'CCNS-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'CCNS-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'CCNS-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'CCNS-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'CCOT-200ml-RGB-_ACL-printing-bottle': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-200ml-RGB-_ACL-printing-bottle',\n        height: 18.8,\n        width: 6.4\n    },\n    'CCOT-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'CCOT-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'CCOT-2L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-2L-PET',\n        height: 33.8,\n        width: 10.7\n    },\n    'CCOT-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'CCOT-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'COSTA-300ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:COSTA-300ml-PET',\n        height: 17.5,\n        width: 5.3\n    },\n    'CY-Baseline-Water-550ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Baseline-Water-550ml-PET',\n        height: 22.8,\n        width: 6.6\n    },\n    'CY-Lemon-Soda-Ph9.0-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Lemon-Soda-Ph9.0-450ml-PET',\n        height: 21,\n        width: 6\n    },\n    'CY-Peach-Soda-Ph9.0-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Peach-Soda-Ph9.0-450ml-PET',\n        height: 21,\n        width: 6\n    },\n    'CY-Soda-Acid-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Soda-Acid-450ml-PET',\n        height: 21,\n        width: 6\n    },\n    'Fanta-200ml-RGB-_ACL-printing-bottle': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-200ml-RGB-_ACL-printing-bottle',\n        height: 18.8,\n        width: 6.4\n    },\n    'Fanta-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'Fanta-Classic-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-Classic-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'Fanta-Classic-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-Classic-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'Fanta-Classic-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-Classic-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'MM-Orange-1.25L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-1.25L-PET',\n        height: 27.5,\n        width: 8.3\n    },\n    'MM-Orange-1.8L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-1.8L-PET',\n        height: 33.5,\n        width: 9.6\n    },\n    'MM-Orange-310ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-310ml-Sleek-Can',\n        height: 15,\n        width: 5.3\n    },\n    'MM-Orange-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-450ml-PET',\n        height: 20.8,\n        width: 6.6\n    },\n    'Sprite-200ml-RGB-_ACL-printing-bottle': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-200ml-RGB-_ACL-printing-bottle',\n        height: 18.8,\n        width: 6.4\n    },\n    'Sprite-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'Sprite-Classic-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'Sprite-Classic-2L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-2L-PET',\n        height: 33.8,\n        width: 10.7\n    },\n    'Sprite-Classic-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'Sprite-Classic-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'YG-NS-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:YG-NS-500ml-PET',\n        height: 22,\n        width: 6.5\n    },\n    'ATH-480ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:ATH-480ml-PET',\n        height: 20.8,\n        width: 5.8\n    }\n};\n \nconst testConfig = {\n    debug: false,\n    previewMode: state.previewMode,\n    // extraSpacingGlobal: 0.02,\n    // extraSpacingLayout: [\n    //  [0],\n    //  [0, 0],\n    //  [0, 0]\n    // ]\n};\n \n// Adjust spacing slightly based on size\nswitch(state.variables.productSize) {\n    case 'Sleek':\n        testConfig.extraSpacingGlobal = 0.01\n    break;\n    case 'PET':\n        testConfig.extraSpacingGlobal = 0.01\n    break;\n    \n}\n \nif (state.variables.productImageOverride) {\n    return state.variables.productImageOverride.replace('/upload/', '/upload/e_trim/');\n}\n \nif (state.variables.productBackground) {\n    testConfig.background = state.variables.productBackground;\n}\n \nconsole.log('Test Config', testConfig, state)\n \nif (state.variables.productsNum === 3) {\n    return  myFunc([\n        [state.variables.product1],\n        [state.variables.product2, state.variables.product3]\n    ], products, testConfig);\n} else if (state.variables.productsNum === 4) {\n    return  myFunc([\n        [state.variables.product1],\n        [state.variables.product2, state.variables.product3],\n        [state.variables.product4]\n    ], products, testConfig);\n} else {\n    return  myFunc([\n        [state.variables.product1],\n        [state.variables.product2, state.variables.product3],\n        [state.variables.product4, state.variables.product5],\n    ], products, testConfig);\n}\n \n \n \n)}}\n ",
          "mergeTags": {
            "assetPath": [
              {
                "id": "1743638129016",
                "label": null,
                "value": "",
                "isChip": false
              },
              {
                "id": "1743638128428-0",
                "label": "Dynamic Product",
                "value": "{{fn(\n \n  var myFunc = function(\n    inputLayout,\n    products,\n    config\n) {\n    const self = this;\n    if(!config) {\n        config = {};\n    }\n    \n    self.previewMode = config.previewMode || false;\n    self.background = config.background;\n    self.debug = config.debug || false;\n    self.log = function(...input) {\n        if(self.debug) {\n            console.log(...input);\n        }\n    }\n \n    self.products = products;\n    // The base offset for each row.\n    // Represents a percentage of the (unknown) \"canvas\" width.\n    self.rowOffsetConst = 0.09;\n    // The amount of \"contract\" between products.\n    self.contract = config.contract || 0.9;\n    // A tiny nudge to make things slightly more spread out.\n    self.nudge = (config.extraSpacingGlobal) ? Number(config.extraSpacingGlobal) : 0;\n    // The vertical offset between each row.\n    // Represents a percentage of the (unknown) \"canvas\" height.\n    self.rowOffsetVertical = 0.04;\n    // Describes how much smaller each successive row should be.\n    self.rowScale = [\n        1.0,\n        .85,\n        .70,\n        .55\n    ];\n    // self.rowScale = [\n    //  1.0,\n    //  1.0,\n    //  1.0,\n    //  1.0,\n    // ];\n    // The width of the reference product.\n    // This is used to adjust spacing for \"large\" products (in terms of width).\n    self.referenceWidth = 6.4;\n \n    // Optimization.\n    self.scaleCache = {};\n \n    self.calculateLayout = function(layout) {\n        let newLayout = [];\n        rows: for(let i = 0; i < layout.length; i++) {\n            if(!newLayout[i]) {\n                newLayout[i] = [];\n            }\n \n            const row = layout[i];\n            columns: for(let j = 0; j < row.length; j++) {\n                const name = row[j];\n                console.log(name);\n                if(!name || !self.products[name]) {\n                    if(name) {\n                        self.log(`No product name found at row ${i}, column ${j}`);\n                    }\n                    continue columns;\n                }\n                const product = self.products[name];\n                const scaleY = self.rowScale[i];\n    \n                let offsetX = 0;\n                let offsetY = 0;\n                const previousCol = layout[i - 1]?.[j] ? j : j - 1;\n                const previousName = layout[i - 1]?.[previousCol];\n                self.log('\\n');\n                self.log(`Current:`, name, `Previous:`, previousName);\n                if(previousName) {\n                    const previousProduct = self.products[previousName];\n                    // Used to determine which direction a product should offeset on the X axis.\n                    const sign = j === 0 ? -1 : 1;\n                    \n                    // The offset of the most relevant product in the previous row.\n                    const previousOffsetX = (Number(newLayout[i - 1][previousCol]?.offsetX) || 0);\n \n                    let additionalLayoutSpacing = 0;\n                    if(config.extraSpacingLayout && config.extraSpacingLayout[i] && config.extraSpacingLayout[i][j]) {\n                        additionalLayoutSpacing = Number(config.extraSpacingLayout[i][j]);\n                        self.log(`Additional Layout Spacing:`, additionalLayoutSpacing);\n                    }\n                    \n                    // The standard size comparisons for the current and previous products.\n                    const previousProductQuotient = (previousProduct.width / self.referenceWidth) * self.rowScale[i - 1];\n                    const productQuotient = (product.width / self.referenceWidth) * self.rowScale[i];\n                    const quotientDifference = productQuotient - previousProductQuotient;\n \n                    // The size comparisons for the current and previous products, inverted.\n                    const previousProductQuotient2 = (self.referenceWidth / previousProduct.width) / self.rowScale[i - 1];\n                    const productQuotient2 = (Math.min(previousProduct.width, self.referenceWidth) / product.width) / self.rowScale[i];\n                    const quotientDifference2 = productQuotient2 - previousProductQuotient2;\n \n                    // Deal with the case where the previous product is larger than the current product\n                    const previousProductQuotient3 = (Math.min(product.width, self.referenceWidth) / previousProduct.width) / self.rowScale[i - 1];\n                    const productQuotient3 = (Math.max(previousProduct.width, self.referenceWidth) / product.width) * self.rowScale[i];\n                    const quotientDifference3 = productQuotient3 - previousProductQuotient3;\n \n                    offsetY = self.rowOffsetVertical * i;\n                    offsetX = ((self.rowOffsetConst * productQuotient * sign) + previousOffsetX);\n \n                    let sizeAdjustment = 0;\n                    if(product.width >= self.referenceWidth) {\n                        // sizeAdjustment = (((self.rowOffsetConst * quotientDifference2) / 2) * sign);\n                        sizeAdjustment = (((self.rowOffsetConst * quotientDifference) / 2) * sign);\n                    } else if (product.width < self.referenceWidth && previousProduct.width > self.referenceWidth) {\n                        // If the product width is less than the reference width, adjust the size to account for the difference between the previous product and the current product\n                        sizeAdjustment = (((self.rowOffsetConst * quotientDifference3) / 2) * -sign);\n                        // self.log('\\tProduct is smaller than reference width, but previous product is larger.');\n                        // self.log('Quotient difference: ', quotientDifference3)\n                    } else {\n                        // If the product width is less than the reference width, adjust the size to account for the difference between the previous product and the current product\n                        sizeAdjustment = (((self.rowOffsetConst * quotientDifference2) / 2) * -sign);\n                        // self.log('\\tProduct is smaller than reference width.');\n                        // self.log('Quotient difference: ', quotientDifference2)\n                    }\n                    self.log('Adjustment: ', sizeAdjustment);\n \n                    self.log('RawX:', offsetX);\n                    //self.log(sizeAdjustment, offsetX - sizeAdjustment);\n                    offsetX = offsetX - sizeAdjustment;\n                        \n \n \n                    // If the offset is not 0, the product needs to fold behind the previous product by 10-15% of the width of the reference product.\n                    if(offsetX < 0) {\n                        offsetX = offsetX + (sign * offsetX * (1 - contract));\n                        self.log('OffsetX:', offsetX);\n                    } else if (offsetX > 0) {\n                        offsetX = offsetX - (sign * offsetX * (1 - contract));\n                        self.log('OffsetX:', offsetX);\n                    }\n \n \n                    offsetX = offsetX + (self.nudge * sign) + (additionalLayoutSpacing * sign);\n \n                    \n                    self.log(`OffsetX:`, offsetX);\n                    //self.log(`OffsetY:`, offsetY);\n                }\n                \n                newLayout[i][j] = {\n                    cloudinaryPath: product.cloudinaryPath,\n                    scaleY: (scaleY === 1) ? '1.0' : scaleY.toFixed(4),\n                    offsetX: offsetX,\n                    offsetY: offsetY\n                };\n            }\n        }\n \n        return newLayout;\n    }\n \n    self.compileUrl = function(res) {\n        let url = `https://res.cloudinary.com/coke/image/upload/`;\n        for(let i = 0; i < res.length; i++) {\n            const row = res[i];\n            let layerPFX = 'u_';\n            if(i === 0) {\n                layerPFX = 'l_';\n            }\n \n            for(let j = 0; j < row.length; j++) {\n                const product = row[j];\n                if(!product) {\n                    continue;\n                }\n                url += `${layerPFX}${product.cloudinaryPath}/`;\n                let params = [\n                    `fl_layer_apply,fl_no_overflow,g_center,fl_relative`\n                    //`fl_layer_apply,g_center,fl_relative`\n                ];\n                if(product.scaleY) {\n                    params.push(`h_${product.scaleY}`);\n                }\n                if(product.offsetX) {\n                    params.push(`x_${product.offsetX.toFixed(3)}`);\n                }\n                if(product.offsetY) {\n                    params.push(`y_${product.offsetY.toFixed(3)}`);\n                }\n                url += params.join(',') + '/';\n            }\n        }\n \n        let extraSettings = '';\n        if (self.background) {\n            extraSettings = 'b_rgb:' + self.background + '/';\n        }\n \n        if(!self.previewMode) {\n            return url += extraSettings + 'e_trim/GCM/COKE%20Meals/Products/can-space.jpg';\n        } else {\n            return url += extraSettings + 'e_trim/GCM/COKE%20Meals/Products/can-space-preview.jpg';\n        }\n    }\n    \n    self.parseLayout = function(l) {\n        let layout = [];\n        for(let i = 0; i < l.length; i++) {\n            if(i === 0) {\n                layout.push(l[i]);\n                continue;\n            }\n            let row = l[i];\n            if(row.length === 1) {\n                layout.push([null, row[0]]);\n                continue;\n            } else if(row.length === 2) {\n                layout.push(row);\n                continue;\n            }\n        }\n        console.log(layout);\n        return layout;\n    }\n \n    return self.compileUrl(\n        self.calculateLayout(\n            self.parseLayout(inputLayout)\n        )\n    );\n};\n \nconst products = {\n    'CCNS-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'CCNS-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'CCNS-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'CCNS-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCNS-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'CCOT-200ml-RGB-_ACL-printing-bottle': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-200ml-RGB-_ACL-printing-bottle',\n        height: 18.8,\n        width: 6.4\n    },\n    'CCOT-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'CCOT-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'CCOT-2L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-2L-PET',\n        height: 33.8,\n        width: 10.7\n    },\n    'CCOT-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'CCOT-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CCOT-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'COSTA-300ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:COSTA-300ml-PET',\n        height: 17.5,\n        width: 5.3\n    },\n    'CY-Baseline-Water-550ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Baseline-Water-550ml-PET',\n        height: 22.8,\n        width: 6.6\n    },\n    'CY-Lemon-Soda-Ph9.0-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Lemon-Soda-Ph9.0-450ml-PET',\n        height: 21,\n        width: 6\n    },\n    'CY-Peach-Soda-Ph9.0-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Peach-Soda-Ph9.0-450ml-PET',\n        height: 21,\n        width: 6\n    },\n    'CY-Soda-Acid-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:CY-Soda-Acid-450ml-PET',\n        height: 21,\n        width: 6\n    },\n    'Fanta-200ml-RGB-_ACL-printing-bottle': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-200ml-RGB-_ACL-printing-bottle',\n        height: 18.8,\n        width: 6.4\n    },\n    'Fanta-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'Fanta-Classic-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-Classic-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'Fanta-Classic-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-Classic-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'Fanta-Classic-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Fanta-Classic-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'MM-Orange-1.25L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-1.25L-PET',\n        height: 27.5,\n        width: 8.3\n    },\n    'MM-Orange-1.8L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-1.8L-PET',\n        height: 33.5,\n        width: 9.6\n    },\n    'MM-Orange-310ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-310ml-Sleek-Can',\n        height: 15,\n        width: 5.3\n    },\n    'MM-Orange-450ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:MM-Orange-450ml-PET',\n        height: 20.8,\n        width: 6.6\n    },\n    'Sprite-200ml-RGB-_ACL-printing-bottle': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-200ml-RGB-_ACL-printing-bottle',\n        height: 18.8,\n        width: 6.4\n    },\n    'Sprite-200ml-RGB_Paper-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-200ml-RGB_Paper-Label',\n        height: 18.8,\n        width: 6.4\n    },\n    'Sprite-Classic-275ml-RGB-_Laser-Label': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-275ml-RGB-_Laser-Label',\n        height: 20.8,\n        width: 6.3\n    },\n    'Sprite-Classic-2L-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-2L-PET',\n        height: 33.8,\n        width: 10.7\n    },\n    'Sprite-Classic-330ml-Sleek-Can': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-330ml-Sleek-Can',\n        height: 15.0,\n        width: 5.3\n    },\n    'Sprite-Classic-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:Sprite-Classic-500ml-PET',\n        height: 24.8,\n        width: 6.4\n    },\n    'YG-NS-500ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:YG-NS-500ml-PET',\n        height: 22,\n        width: 6.5\n    },\n    'ATH-480ml-PET': {\n        cloudinaryPath: 'GCM:Portfolio:Dynamic:ATH-480ml-PET',\n        height: 20.8,\n        width: 5.8\n    }\n};\n \nconst testConfig = {\n    debug: false,\n    previewMode: state.previewMode,\n    // extraSpacingGlobal: 0.02,\n    // extraSpacingLayout: [\n    //  [0],\n    //  [0, 0],\n    //  [0, 0]\n    // ]\n};\n \n// Adjust spacing slightly based on size\nswitch(state.variables.productSize) {\n    case 'Sleek':\n        testConfig.extraSpacingGlobal = 0.01\n    break;\n    case 'PET':\n        testConfig.extraSpacingGlobal = 0.01\n    break;\n    \n}\n \nif (state.variables.productImageOverride) {\n    return state.variables.productImageOverride.replace('/upload/', '/upload/e_trim/');\n}\n \nif (state.variables.productBackground) {\n    testConfig.background = state.variables.productBackground;\n}\n \nconsole.log('Test Config', testConfig, state)\n \nif (state.variables.productsNum === 3) {\n    return  myFunc([\n        [state.variables.product1],\n        [state.variables.product2, state.variables.product3]\n    ], products, testConfig);\n} else if (state.variables.productsNum === 4) {\n    return  myFunc([\n        [state.variables.product1],\n        [state.variables.product2, state.variables.product3],\n        [state.variables.product4]\n    ], products, testConfig);\n} else {\n    return  myFunc([\n        [state.variables.product1],\n        [state.variables.product2, state.variables.product3],\n        [state.variables.product4, state.variables.product5],\n    ], products, testConfig);\n}\n \n \n \n)}}\n ",
                "isChip": true
              }
            ],
            "optimizations": null
          }
        }
      ],
      "locked": true,
      "classes": "white-strip-container"
    },
    {
      "id": "1720819722567",
      "type": "group",
      "label": "Headline Container",
      "layers": [
        {
          "id": "1720819732831",
          "text": {
            "content": "{{fn(return state.variables.headlines[state.variables.brand][state.variables.tactic])}}",
            "autoSize": {
              "wrap": true,
              "maxWidth": "99.9%",
              "maxHeight": "80"
            }
          },
          "type": "text",
          "label": "Headline",
          "locked": true,
          "classes": "headline",
          "mergeTags": {
            "text.content": [
              {
                "id": "1741971626938-0",
                "label": "{{fn(return state.variables.headlines[state.variables.brand][state.variables.tactic])}}",
                "value": "{{fn(return state.variables.headlines[state.variables.brand][state.variables.tactic])}}",
                "isChip": true
              }
            ],
            "hideFromExport": null,
            "hideFromPreview": null,
            "visibilityConditions": null,
            "text.autoSize.maxHeight": null
          },
          "hideFromExport": false,
          "hideFromPreview": false
        },
        {
          "id": "1741965949609",
          "type": "group",
          "label": "Subline",
          "style": null,
          "layers": [
            {
              "id": "1741965949609-1",
              "type": "group",
              "label": "Optional",
              "layers": [
                {
                  "id": "1741965949609-11",
                  "text": {
                    "content": "Text"
                  },
                  "type": "text",
                  "label": "Top",
                  "locked": true,
                  "classes": "top",
                  "mergeTags": {
                    "style": null
                  }
                },
                {
                  "id": "1741965949609-12",
                  "text": {
                    "content": "炸鸡汉堡「可口可乐」套餐"
                  },
                  "type": "text",
                  "label": "Bottom",
                  "locked": true,
                  "classes": "bottom",
                  "mergeTags": {
                    "style": null,
                    "text.content": [
                      {
                        "id": "1738752624237-0",
                        "label": null,
                        "value": "炸鸡汉堡「可口可乐」套餐",
                        "isChip": false
                      }
                    ]
                  }
                }
              ],
              "locked": true,
              "classes": "optional",
              "mergeTags": {
                "style": null
              }
            }
          ],
          "locked": true,
          "classes": "subline,subline",
          "mergeTags": {
            "style": null
          }
        },
        {
          "id": "1744134950679",
          "text": {
            "content": "Text"
          },
          "type": "text",
          "label": "Offer",
          "style": null,
          "hidden": false,
          "locked": true,
          "classes": "offer"
        }
      ],
      "locked": true,
      "classes": "headline-container",
      "mergeTags": {
        "hideFromExport": null,
        "hideFromPreview": null,
        "visibilityConditions": null
      },
      "hideFromExport": true,
      "hideFromPreview": true,
      "visibilityConditions": [
        {
          "type": "OR",
          "conditions": [
            {
              "path": "variables.tactic",
              "value": "price-talker",
              "relation": "eq"
            },
            {
              "path": "variables.tactic",
              "value": "door-handle",
              "relation": "eq"
            }
          ]
        }
      ]
    },
    {
      "id": "1722886638375",
      "type": "group",
      "label": "Legal Container",
      "layers": [
        {
          "id": "1722887486427",
          "type": "image",
          "label": "Legal Logo",
          "locked": true,
          "classes": "legal-logo",
          "assetPath": "https://res.cloudinary.com/coke/image/upload/v1722887354/GCM/Coke%20Meals/legal-logo.svg"
        },
        {
          "id": "1722887515965",
          "text": {
            "content": "{{fn(\n    const globalList = [\n      {\n        \"Chinese name\": \"可乐\",\n        \"id\": \"1\",\n        \"English name\": \"Coca-Cola\",\n        \"Product official full name\": \"【可口可乐】汽水\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【可口可乐】\",\n        \"Product brand (extra note)\": \"【畅爽】\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"零度可乐\",\n        \"id\": \"2\",\n        \"English name\": \"Coca-Cola Zero Sugar\",\n        \"Product official full name\": \"【可口可乐零度】汽水\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【零度可口可乐】、【可口可乐零度】\",\n        \"Product brand (extra note)\": \"【畅爽】\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"玻璃瓶\",\n        \"id\": \"3\",\n        \"English name\": \"RGB\",\n        \"Product official full name\": \"\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"\",\n        \"Product brand (extra note)\": \"玻璃瓶弧形瓶\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"弧形杯\",\n        \"id\": \"4\",\n        \"English name\": \"Glass\",\n        \"Product official full name\": \"\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"\",\n        \"Product brand (extra note)\": \"弧形杯\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"雪碧\",\n        \"id\": \"5\",\n        \"English name\": \"Sprite\",\n        \"Product official full name\": \"【雪碧】柠檬味汽水\",\n        \"Extra note\": \"【雪碧】不含柠檬果肉和果汁。\",\n        \"Product brand\": \"【雪碧】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"芬达\",\n        \"id\": \"6\",\n        \"English name\": \"Fanta\",\n        \"Product official full name\": \"【芬达】橙味汽水\",\n        \"Extra note\": \"【芬达】不含橙子果肉或果汁。\",\n        \"Product brand\": \"【芬达】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"美汁源\",\n        \"id\": \"7\",\n        \"English name\": \"Minute Maid\",\n        \"Product official full name\": \"【美汁源】【果粒橙】橙汁饮料\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【美汁源】、【果粒橙】及“Minute Maid”\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"阳光\",\n        \"id\": \"8\",\n        \"English name\": \"Yang Guang\",\n        \"Product official full name\": \"【阳光】无糖柠檬味茶饮料\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【阳光】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"淳茶社\",\n        \"id\": \"9\",\n        \"English name\": \"Chun Cha She\",\n        \"Product official full name\": \"【淳茶舍】茉莉花茶 原味茶饮料\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【淳茶舍】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"纯悦\",\n        \"id\": \"10\",\n        \"English name\": \"Chun Yue\",\n        \"Product official full name\": \"【纯悦】包装饮用水\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【纯悦】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      }\n    ];\n\n    /*****************************************************\n     * 2) A map for which fields we need to print\n     *    (2..6 in the original logic => these specific keys)\n     *****************************************************/\n    const fieldMap = {\n      2: \"Product official full name\",  // was i=2\n      3: \"Extra note\",                  // was i=3\n      4: \"Product brand\",               // was i=4\n      5: \"Product brand (extra note)\",  // was i=5\n      6: \"Other note\"                   // was i=6\n    };\n\n    /*****************************************************\n     * 3) The function that returns the legal lines as a string\n     *****************************************************/\n    function getLegalLines(ids) {\n      let result = \"\";\n\n      // Iterate over the 'i' values that map to your special print logic\n      for (let i = 2; i <= 6; i++) {\n        // Gather non-empty fields from each chosen product\n        let lineParts = [];\n\n        for (const id of ids) {\n          // Find the product object with matching 'id'\n          const product = globalList.find(item => item.id === id);\n          if (!product) continue; // skip if not found\n          \n          const val = product[fieldMap[i]] || \"\";\n          if (val !== \"\") {\n            lineParts.push(val);\n          }\n        }\n\n        // Now apply the same logic as your original code\n        if (i === 2) {\n          // \"Product official full name\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"、\") + \"。<br>\";\n          }\n          result += \"图片仅供参考，产品以实物为准。\";\n\n        } else if (i === 3) {\n          // \"Extra note\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"\") + \"<br>\";\n          }\n\n        } else if (i === 4) {\n          // \"Product brand\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"、\");\n          }\n\n        } else if (i === 5) {\n          // \"Product brand (extra note)\"\n          if (lineParts.length > 0) {\n            // If both Coke (\"1\") and Coke Zero (\"2\") are present, remove \"【畅爽】\" once\n            if (ids.includes(\"1\") && ids.includes(\"2\")) {\n              const idx = lineParts.indexOf(\"【畅爽】\");\n              if (idx !== -1) {\n                lineParts.splice(idx, 1);\n              }\n            }\n            let output = lineParts.join(\"、\");\n            // If user selected product id 1 or 2\n            if (ids.includes(\"1\") || ids.includes(\"2\")) {\n              output = \"、\" + output + \"及波浪形飘带图案是可口可乐公司的商标。\";\n            } else if(!ids.includes(\"1\")&& !ids.includes(\"2\")&&(ids.includes(\"3\")||ids.includes(\"4\"))){\n              //Added by Leo\n               output = \"、\" + output + \"是可口可乐公司的商标。\"\n            } else {\n              output = output + \"是可口可乐公司的商标。\";\n            }\n            result += output + \"<br>\";\n          } else {\n            // No brand extra note\n            if (ids.includes(\"1\") || ids.includes(\"2\")) {\n              result += \"及波浪形飘带图案是可口可乐公司的商标。<br>\";\n            } else {\n              result += \"是可口可乐公司的商标。<br>\";\n            }\n          }\n\n        } else {\n          // i === 6 => \"Other note\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"、\") + \"<br>\";\n          }\n        }\n      }\n\n      // Trim final newline if present\n      return result.trim();\n    }\n\n    /*****************************************************\n     * 4) Example usage: retrieve lines for the first ID (=\"1\")\n     *    and log them out\n     *****************************************************/\n    // Suppose we only want the legal lines for the product with id=\"1\"\n    let brands = [\n        state.variables.product1Brand,\n        state.variables.product2Brand,\n        state.variables.product3Brand,\n        state.variables.product4Brand,\n        state.variables.product5Brand\n    ];\n\n    // Remove unique entries and empty entries\n    brands = brands.filter(brand => brand !== \"\")\n    brands = [...new Set(brands)];\n\n    if (state.variables.productContainsRGB) {\n        brands.push('RGB');\n    }\n\n    if (state.variables.productContainsGlass) {\n        brands.push('Glass');\n    }\n\n\n    console.log('Brands', brands);\n    // Iterate through the globalList to turn these brand English names to their corresponding IDs.\n    let brandIds = brands.map(brand => globalList.find(item => item['English name'] === brand)?.id).filter(id => id !== undefined);\n\n\n    console.log('BrandIds', brandIds);\n    return getLegalLines(brandIds);\n)}}"
          },
          "type": "text",
          "label": "Legal Text",
          "locked": true,
          "classes": "legal-text",
          "mergeTags": {
            "text.content": [
              {
                "id": "1740013623301",
                "label": null,
                "value": "",
                "isChip": false
              },
              {
                "id": "1740013622779-0",
                "label": "Legal Script Logic",
                "value": "{{fn(\n    const globalList = [\n      {\n        \"Chinese name\": \"可乐\",\n        \"id\": \"1\",\n        \"English name\": \"Coca-Cola\",\n        \"Product official full name\": \"【可口可乐】汽水\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【可口可乐】\",\n        \"Product brand (extra note)\": \"【畅爽】\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"零度可乐\",\n        \"id\": \"2\",\n        \"English name\": \"Coca-Cola Zero Sugar\",\n        \"Product official full name\": \"【可口可乐零度】汽水\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【零度可口可乐】、【可口可乐零度】\",\n        \"Product brand (extra note)\": \"【畅爽】\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"玻璃瓶\",\n        \"id\": \"3\",\n        \"English name\": \"RGB\",\n        \"Product official full name\": \"\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"\",\n        \"Product brand (extra note)\": \"玻璃瓶弧形瓶\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"弧形杯\",\n        \"id\": \"4\",\n        \"English name\": \"Glass\",\n        \"Product official full name\": \"\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"\",\n        \"Product brand (extra note)\": \"弧形杯\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"雪碧\",\n        \"id\": \"5\",\n        \"English name\": \"Sprite\",\n        \"Product official full name\": \"【雪碧】柠檬味汽水\",\n        \"Extra note\": \"【雪碧】不含柠檬果肉和果汁。\",\n        \"Product brand\": \"【雪碧】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"芬达\",\n        \"id\": \"6\",\n        \"English name\": \"Fanta\",\n        \"Product official full name\": \"【芬达】橙味汽水\",\n        \"Extra note\": \"【芬达】不含橙子果肉或果汁。\",\n        \"Product brand\": \"【芬达】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"美汁源\",\n        \"id\": \"7\",\n        \"English name\": \"Minute Maid\",\n        \"Product official full name\": \"【美汁源】【果粒橙】橙汁饮料\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【美汁源】、【果粒橙】及“Minute Maid”\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"阳光\",\n        \"id\": \"8\",\n        \"English name\": \"Yang Guang\",\n        \"Product official full name\": \"【阳光】无糖柠檬味茶饮料\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【阳光】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"淳茶社\",\n        \"id\": \"9\",\n        \"English name\": \"Chun Cha She\",\n        \"Product official full name\": \"【淳茶舍】茉莉花茶 原味茶饮料\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【淳茶舍】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      },\n      {\n        \"Chinese name\": \"纯悦\",\n        \"id\": \"10\",\n        \"English name\": \"Chun Yue\",\n        \"Product official full name\": \"【纯悦】包装饮用水\",\n        \"Extra note\": \"\",\n        \"Product brand\": \"【纯悦】\",\n        \"Product brand (extra note)\": \"\",\n        \"Other note\": \"\"\n      }\n    ];\n\n    /*****************************************************\n     * 2) A map for which fields we need to print\n     *    (2..6 in the original logic => these specific keys)\n     *****************************************************/\n    const fieldMap = {\n      2: \"Product official full name\",  // was i=2\n      3: \"Extra note\",                  // was i=3\n      4: \"Product brand\",               // was i=4\n      5: \"Product brand (extra note)\",  // was i=5\n      6: \"Other note\"                   // was i=6\n    };\n\n    /*****************************************************\n     * 3) The function that returns the legal lines as a string\n     *****************************************************/\n    function getLegalLines(ids) {\n      let result = \"\";\n\n      // Iterate over the 'i' values that map to your special print logic\n      for (let i = 2; i <= 6; i++) {\n        // Gather non-empty fields from each chosen product\n        let lineParts = [];\n\n        for (const id of ids) {\n          // Find the product object with matching 'id'\n          const product = globalList.find(item => item.id === id);\n          if (!product) continue; // skip if not found\n          \n          const val = product[fieldMap[i]] || \"\";\n          if (val !== \"\") {\n            lineParts.push(val);\n          }\n        }\n\n        // Now apply the same logic as your original code\n        if (i === 2) {\n          // \"Product official full name\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"、\") + \"。<br>\";\n          }\n          result += \"图片仅供参考，产品以实物为准。\";\n\n        } else if (i === 3) {\n          // \"Extra note\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"\") + \"<br>\";\n          }\n\n        } else if (i === 4) {\n          // \"Product brand\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"、\");\n          }\n\n        } else if (i === 5) {\n          // \"Product brand (extra note)\"\n          if (lineParts.length > 0) {\n            // If both Coke (\"1\") and Coke Zero (\"2\") are present, remove \"【畅爽】\" once\n            if (ids.includes(\"1\") && ids.includes(\"2\")) {\n              const idx = lineParts.indexOf(\"【畅爽】\");\n              if (idx !== -1) {\n                lineParts.splice(idx, 1);\n              }\n            }\n            let output = lineParts.join(\"、\");\n            // If user selected product id 1 or 2\n            if (ids.includes(\"1\") || ids.includes(\"2\")) {\n              output = \"、\" + output + \"及波浪形飘带图案是可口可乐公司的商标。\";\n            } else if(!ids.includes(\"1\")&& !ids.includes(\"2\")&&(ids.includes(\"3\")||ids.includes(\"4\"))){\n              //Added by Leo\n               output = \"、\" + output + \"是可口可乐公司的商标。\"\n            } else {\n              output = output + \"是可口可乐公司的商标。\";\n            }\n            result += output + \"<br>\";\n          } else {\n            // No brand extra note\n            if (ids.includes(\"1\") || ids.includes(\"2\")) {\n              result += \"及波浪形飘带图案是可口可乐公司的商标。<br>\";\n            } else {\n              result += \"是可口可乐公司的商标。<br>\";\n            }\n          }\n\n        } else {\n          // i === 6 => \"Other note\"\n          if (lineParts.length > 0) {\n            result += lineParts.join(\"、\") + \"<br>\";\n          }\n        }\n      }\n\n      // Trim final newline if present\n      return result.trim();\n    }\n\n    /*****************************************************\n     * 4) Example usage: retrieve lines for the first ID (=\"1\")\n     *    and log them out\n     *****************************************************/\n    // Suppose we only want the legal lines for the product with id=\"1\"\n    let brands = [\n        state.variables.product1Brand,\n        state.variables.product2Brand,\n        state.variables.product3Brand,\n        state.variables.product4Brand,\n        state.variables.product5Brand\n    ];\n\n    // Remove unique entries and empty entries\n    brands = brands.filter(brand => brand !== \"\")\n    brands = [...new Set(brands)];\n\n    if (state.variables.productContainsRGB) {\n        brands.push('RGB');\n    }\n\n    if (state.variables.productContainsGlass) {\n        brands.push('Glass');\n    }\n\n\n    console.log('Brands', brands);\n    // Iterate through the globalList to turn these brand English names to their corresponding IDs.\n    let brandIds = brands.map(brand => globalList.find(item => item['English name'] === brand)?.id).filter(id => id !== undefined);\n\n\n    console.log('BrandIds', brandIds);\n    return getLegalLines(brandIds);\n)}}",
                "isChip": true
              }
            ]
          }
        }
      ],
      "locked": true,
      "classes": "legal-container"
    },
    {
      "id": "1722891309454",
      "text": {
        "content": "广告"
      },
      "type": "text",
      "label": "Short Legal Line",
      "locked": true,
      "classes": "short-legal-line"
    },
    {
      "id": "1740561553861",
      "type": "group",
      "label": "Price Container",
      "style": null,
      "layers": [
        {
          "id": "1740561553861-1",
          "text": {
            "content": "¥"
          },
          "type": "text",
          "label": "Currency Sign",
          "locked": true,
          "classes": "currency-sign"
        },
        {
          "id": "1740561553861-2",
          "type": "image",
          "label": "Dollar Placeholder",
          "locked": true,
          "classes": "dollar-placeholder",
          "assetPath": "https://res.cloudinary.com/coke/image/upload/v1723650254/GCM/Coke%20Meals/numbers.svg"
        }
      ],
      "locked": true,
      "classes": "price-container,price-container",
      "mergeTags": {
        "style": null
      }
    }
  ],
  "containerClasses": null,
  "styles": [
    {
      "id": "1752273507022",
      "name": "Main",
      "styles": "/* Main */\n\nbody,\n.render-item,\n.ad-container {\n    container-type: size;\n    container-name: main;\n    /* Debug */\n    --debug-display: none;\n    /* Colors */\n    //--primary: #F40009; // Old shade from Batch 2\n    --primary: #E1051C; // Correct color from the AI files\n    /* Logo Variables */\n    --logo-proportion: 40cqw;\n    --logo-container-width: var(--logo-proportion);\n    --logo-container-height: calc(var(--logo-container-width) * .75);\n    --logo-height: calc(var(--logo-container-width) * .33);\n    --logoSecondary-height: calc(var(--logo-container-width)* .33); // NEW FOR DUAL LOGO\n    /* White Strip */\n    --white-strip-width: calc(100cqw - var(--logo-container-width));\n    --white-strip-height: var(--logo-container-height);\n    //--white-strip-padding: calc(var(--logo-container-width) * .1);\n    --white-strip-padding: calc(var(--logo-container-height) * .05);\n    /* Headline */\n    --headline-span-display: block;\n    --headline-padding: calc(var(--logo-proportion) * .125);\n    --headline-font-size: calc(var(--logo-container-width) * .208) !important;\n    /* Legal */\n    --legal-padding: calc((100cqh - var(--logo-container-height)) / 50);\n}\n\n.ad-container {\n    background-color: white;\n    font-size: 16px;\n    color: white;\n    line-height: 1;\n\n    div {\n        font-family: \"方正正大黑简体\";\n    }\n\n    &.fixed-headline {\n        .headline {\n            line-height: 1 !important;\n        }\n    }\n    \n    // NEW FOR DUAL LOGO\n    &.brandSecondary-cctm {\n        --primaryDualLogo: #F40009;\n    }\n\n    &.brand-sprite {\n        --primary: #00a64a;\n    }\n\n    // NEW FOR DUAL LOGO\n    &.brandSecondary-sprite {\n        --primaryDualLogo: #00a64a;\n    }\n\n    &.brand-fanta {\n        --primary: #ef7f21;\n    }\n\n    // NEW FOR DUAL LOGO\n    &.brandSecondary-fanta {\n        --primaryDualLogo: #ef7f21;\n    }\n\n    &.brand-minute-maid {\n        --primary: #ee741d;\n    }\n    \n    // NEW FOR DUAL LOGO\n    &.brandSecondary-minute-maid {\n        --primaryDualLogo: #ee741d;\n    }\n\n    &.brand-yang-guang {\n        --primary: #497B41;\n        --secondary: #DED03B;\n        \n        .logo-container {\n            background-color: var(--secondary);\n        }\n\n    }\n    \n    // NEW FOR DUAL LOGO\n    &.brandSecondary-yang-guang {\n        --primaryDualLogo: #497B41;\n    }\n\n    &.brand-chun-yue {\n        --primary: #4E276F;\n    }\n    \n    // NEW FOR DUAL LOGO\n    &.brandSecondary-chun-yue {\n        --primaryDualLogo: #4E276F;\n    }\n\n    &.brand-chun-cha-she {\n        --primary: #224D3C;\n    }\n    \n    // NEW FOR DUAL LOGO\n    &.brandSecondary-chun-cha-she {\n        --primaryDualLogo: #224D3C;\n    }\n\n    &.brand-costa {\n        //--primary: #80232C;\n        --primary: #861C28;\n    }\n    \n    // NEW FOR DUAL LOGO\n    &.brandSecondary-costa {\n        //--primaryDualLogo: #80232C;\n        --primaryDualLogo: #861C28;\n    }\n\n}\n\n.photography-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--primary);\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n}\n\n.logo-container {\n    position: absolute;\n    width: var(--logo-container-width);\n    height: var(--logo-container-height);\n    background-color: var(--primary);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .logo {\n        height: var(--logo-height);\n    }\n}\n\n.white-strip-container {\n    position: absolute;\n    background: white;\n    width: var(--white-strip-width);\n    height: var(--white-strip-height);\n}\n\n.headline-container {\n    position: absolute;\n    margin: var(--headline-padding);\n    top: 0;\n    left: 0;\n    height: calc(var(--logo-container-height) * .416);\n    width: calc(100% - (var(--headline-padding) * 2));\n\n    span {\n        display: var(--headline-span-display);\n        line-height: 1.15;\n    }\n}\n\n.legal-container {\n    position: absolute;\n    left: 0;\n    bottom: var(--logo-container-height);\n    padding: var(--legal-padding);\n    font-size: calc(0.417em + (var(--legal-padding)) * .4);\n    line-height: 1;\n\n    .legal-logo {\n        height: calc(var(--legal-padding) * 1);\n        display: block;\n        margin-bottom: calc(var(--legal-padding) * .25);\n    }\n}\n\n.short-legal-line {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: var(--legal-padding);\n    font-size: calc(0.583em + (var(--legal-padding)) * .6);\n}\n\n.pack-shot-image {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    padding: var(--white-strip-padding);\n}\n\n.price-container {\n    position: absolute;\n    top: 0cqh;\n    left: 0;\n    height: 30cqh;\n    width: 50cqw;\n    display: flex;\n    z-index: 999;\n    container-type: size;\n    display: none;\n\n    .currency-sign {\n        font-size: 40cqh;\n        margin-right: 6cqh;\n        margin-top: -7cqh;\n        font-family: \"Unity-Regular\", Arial;\n        color: var(--primary);\n    }\n\n    .dollar-placeholder {\n        height: 100%;\n    }\n}\n\n.debug-aspect-overlay {\n    display: var(--debug-display);\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    border: 1cqmin white solid;\n    pointer-events: none;\n    z-index: 999999;\n}"
    }
  ],
  "variables": {},
  "animation": {},
  "animationConfig": {
    "loop": null,
    "autoPlay": null,
    "totalDuration": null,
    "hideMarkersForUser": null
  },
  "printConfig": null,
  "thumbnail": null,
  "startUpWizard": {
    "config": null,
    "enabled": null
  },
  "theme": {
    "customFonts": null
  },
  "interactivity": null,
  "publishedAt": null,
  "exportTypes": [
    "static"
  ],
  "creativeUnitListingSettings": null,
  "advancedConfig": {
    "disableCustomSizes": true
  },
  "modified": "2025-07-11T21:56:17.658Z",
  "locale": null,
  "originalVersionId": null,
  "isVersion": false,
  "versionComment": null,
  "versions": [],
  "creativePackageBusinessIds": [],
  "validationErrors": {},
  "createdByUser": {
    "fullName": "Héctor Miranda García"
  }
}
```
:::

![](https://res.cloudinary.com/coke/image/upload/v1752276548/GCM/shopx-docs/styles/package-styles/package-styles-01.gif)


2. **Create a New Tactic:**  
Fire up a new tactic and paste in the advanced configuration to get started.
::: details 
```json
{
  "id": "1752275323536",
  "name": "Shelf Strip",
  "dimensions": {
    "width": 6000,
    "height": 990,
    "ppi": 300,
    "defaultDisplayUnit": "cm"
  },
  "layers": [
    {
      "id": "1720799376342",
      "type": "group",
      "label": "Photography Container",
      "layers": [
        {
          "id": "1720799388449",
          "label": "Photo",
          "type": "image"
        },
        {
          "id": "1730120818321",
          "label": "Headline Container",
          "type": "group",
          "layers": [
            {
              "id": "1730120818320-headline",
              "label": "Headline",
              "type": "text"
            },
            {
              "id": "1744136328850",
              "label": "Subline",
              "type": "group",
              "layers": [
                {
                  "id": "1744136393867",
                  "label": "Optional",
                  "type": "group",
                  "layers": [
                    {
                      "id": "1744136407321",
                      "label": "Top",
                      "type": "text"
                    },
                    {
                      "id": "1744136419497",
                      "label": "Bottom",
                      "type": "text"
                    }
                  ]
                },
                {
                  "id": "1744137709335",
                  "label": "Offer",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "hidden": true
    },
    {
      "id": "1720799400559",
      "type": "group",
      "label": "Logo Container",
      "layers": [
        {
          "id": "1743455374554",
          "label": "Logo Primary",
          "type": "group",
          "layers": [
            {
              "id": "1743455401194",
              "label": "Logo Image Primary",
              "type": "image",
              "assetPath": "https://ap-east-1.cluster.tasker.vmlsites.com/asset/px/path/https://res.cloudinary.com/coke/image/upload/v1737563779/GCM/Logos/cctm/cctm-logo-with-text.svg?ver=1.02",
              "mergeTags": {
                "assetPath": [
                  {
                    "id": "1752275453270-0",
                    "label": null,
                    "value": "https://ap-east-1.cluster.tasker.vmlsites.com/asset/px/path/https://res.cloudinary.com/coke/image/upload/v1737563779/GCM/Logos/cctm/cctm-logo-with-text.svg?ver=1.02",
                    "isChip": false
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "1743455435771",
          "label": "Logo Secondary",
          "type": "group",
          "layers": [
            {
              "id": "1743455461033",
              "label": "Logo Image Secondary",
              "type": "image"
            }
          ],
          "hidden": true
        }
      ]
    },
    {
      "id": "1730120858598",
      "type": "group",
      "label": "White Strip Container",
      "layers": [
        {
          "id": "1730120858597-pack-shot-container",
          "label": "Pack Shot Container",
          "type": "group",
          "layers": [
            {
              "id": "1730120858597-pack-shot-1",
              "label": "Pack Shot 1",
              "type": "image"
            },
            {
              "id": "1730120858597-pack-shot-2",
              "label": "Pack Shot 2",
              "type": "image"
            },
            {
              "id": "1730120858598-pack-shot-3",
              "label": "Pack Shot 3",
              "type": "image"
            },
            {
              "id": "1730120858598-pack-shot-4",
              "label": "Pack Shot 4",
              "type": "image"
            },
            {
              "id": "1730120858598-pack-shot-5",
              "label": "Pack Shot 5",
              "type": "image"
            }
          ]
        },
        {
          "id": "1730120858598-pack-shot-image",
          "label": "Pack Shot Image",
          "type": "image"
        }
      ],
      "hidden": true
    },
    {
      "id": "1720819722567",
      "type": "group",
      "label": "Headline Container",
      "layers": [
        {
          "id": "1720819732831",
          "label": "Headline",
          "type": "text"
        },
        {
          "id": "1741965949609",
          "label": "Subline",
          "type": "group",
          "layers": [
            {
              "id": "1741965949609-1",
              "label": "Optional",
              "type": "group",
              "layers": [
                {
                  "id": "1741965949609-11",
                  "label": "Top",
                  "type": "text"
                },
                {
                  "id": "1741965949609-12",
                  "label": "Bottom",
                  "type": "text"
                }
              ]
            }
          ]
        },
        {
          "id": "1744134950679",
          "label": "Offer",
          "type": "text"
        }
      ],
      "hidden": true
    },
    {
      "id": "1722886638375",
      "type": "group",
      "label": "Legal Container",
      "layers": [
        {
          "id": "1722887486427",
          "label": "Legal Logo",
          "type": "image"
        },
        {
          "id": "1722887515965",
          "label": "Legal Text",
          "type": "text"
        }
      ]
    },
    {
      "id": "1722891309454",
      "type": "text",
      "label": "Short Legal Line"
    },
    {
      "id": "1740561553861",
      "type": "group",
      "label": "Price Container",
      "style": null,
      "layers": [
        {
          "id": "1740561553861-1",
          "label": "Currency Sign",
          "type": "text"
        },
        {
          "id": "1740561553861-2",
          "label": "Dollar Placeholder",
          "type": "image"
        }
      ]
    }
  ],
  "packageId": "6b92956d-86a8-4fe8-a8c7-8c488b673530",
  "listingId": "custom",
  "metadata": {
    "category": "Custom"
  },
  "templateCreativeUnit": "Create Your Own",
  "locale": {},
  "containerClasses": null,
  "exportTypes": [
    "static",
    "video"
  ],
  "animationConfig": {
    "totalDuration": null
  },
  "styles": "/* Shelf Strip - Main */\n/* Create Your Own - Main */\n",
  "validationErrors": {},
  "variableOverrides": null,
  "thumbnail": null,
  "description": null,
  "isDefault": null,
  "hidden": null
}
```
:::
![](https://res.cloudinary.com/coke/image/upload/v1752276548/GCM/shopx-docs/styles/package-styles/package-styles-02.gif)

3. **Add Tactic-Specific Styles:**  
Now, bring in the styles that are unique to this tactic.
::: details 
```scss
/* Shelf Strip */
.ad-container.shelf-strip {
    --legal-padding: 4cqh;
    --logo-height: calc(var(--logo-container-height) * 0.8);
    --logo-container-height: 100cqh;
    --logo-container-width: 100cqw;
    --price-container-height: 100cqh;
    --price-container-padding: 10cqh;
    --price-container-gap: 8cqh;
    --currency-sign-margin-top: -3cqh;

    // ####################
    // WITH PRICE

    &.with-price {
        --logo-container-width: 63.5cqw;

        .price-container {
            background-color: #231916;
            container-name: price-container;
            container-type: size;
            display: flex !important;
        }

    }

    // ####################
    // LAYOUT

    .price-container,
    .photography-container,
    .headline-container,
    .photography-container .photo,
    .white-strip-container {
        display: none !important;
    }

    .price-container {
        box-sizing: border-box;
        gap: var(--price-container-gap);
        left: var(--logo-container-width);
        padding: var(--price-container-padding);
        height: var(--price-container-height);
        width: calc(100cqw - var(--logo-container-width));
        justify-content: center;

        .currency-sign {
            color: white;
            margin-top: var(--currency-sign-margin-top);
            margin-right: 0;
            font-size: 15cqw;
            width: auto;
            max-width: 100%;
        }

        .dollar-placeholder {
            height:95%;
            width: auto;
            min-width: 0;
            max-width: 100%;
        }

    }

    .logo-container {
        display: flex;
        right: unset;
        top: unset;

        .logo {
            height: var(--logo-height);
        }

    }

    // ##############
    // LEGAL
    
    .short-legal-line {
        font-size: calc(0.583em + (var(--legal-padding)) * 0.4);
        padding-top: var(--legal-padding);
        top: 0;
        left: 0;
        right: auto;
    }

    .legal-container {
        font-size: calc(0.3em + (var(--legal-padding)) * 0.2);
        bottom: 0;
        
        .legal-logo {
            height: calc(var(--legal-padding) * 0.7);
        }

        .legal-text {
            line-height: 1.2;
        }

    }

    // ####################
    // BRANDS

    &.brand-sprite {
    }

    &.brand-minute-maid {
        //@extend .text-black;
        
        .logo {
            translate: 3% 0;
        }

    }

    &.brand-yang-guang {
    }

    &.brand-chun-yue {
    }

    &.brand-chun-cha-she {
    }

}
```
:::
![](https://res.cloudinary.com/coke/image/upload/v1752276548/GCM/shopx-docs/styles/package-styles/package-styles-03.gif)

4. **Apply Classes:**  
Attach the right classes to your tactic-specific styles—just like this:
![](https://res.cloudinary.com/coke/image/upload/v1752276548/GCM/shopx-docs/styles/package-styles/package-styles-04.png)

::: tip
As you can see, `with-text` controls de tactic style variation. This can be controlled using merge tags and variables.
:::

---
And that’s it! 🎉 You now have multiple `Shelf Strip` tactics, all rocking the same style and aspect ratio—easy, scalable, and totally on point.

Stay stylish and keep building! 🚀✨
