const categoriesObj = [
    {
        "__typename": "Category",
        "name": "all"
    },
    {
        "__typename": "Category",
        "name": "dresses"
    },
    {
        "__typename": "Category",
        "name": "blouses"
    },
    {
        "__typename": "Category",
        "name": "jeans"
    },
    {
        "__typename": "Category",
        "name": "shoes"
    }
];


const itemsObj = [
    {
        "__typename": "Product",
        "id": "long-puff-dress",
        "name": "Long Puff Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/81-xqvTXSXL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71EzKY2k6jL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71FFlMGPg2L._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81pEvmB3uEL._AC_SY879._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 50.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 96
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 69.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 124.43
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10416.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7294.5
            }
        ],
        "description": `<p>Material: 97% Polyester</p>
        <p>3% Elastane</p>
        <p>Origin: Imported</p>
        <p>Closure: Pull On</p>
        <p>Care: Machine Wash</p>
        <p>Tips: S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18, XXL=US 20-22.</p>
        <p>SUPERIOR FABRIC: This midi dress is made of high-quality polyester fabric that is soft, lightweight, and comfortable to touch and wear. The fabric does not stretch, but the smocked design makes it stretchy, making it a beautiful option for a maternity dress as well.</p>
        <p>EYE-CATCHING DESIGNS: This dress features long puff sleeves, a floral print design, a casual square neck, a bodycon silhouette, a tight fitted style, a sexy backless design, an elegant mermaid cut, and ruffle details. It is also suitable as gender reveal or baby shower maternity dress.</p>
        <p>MATCHING STYLE: Pair this women's square neck dress with beautiful jewelry, necklaces, and earrings. Dress it up with high heels, wedges, or ankle boots for a sexy and fabulous look, or dress it down with sandals for a casual style.</p>
        <p>WOMENS ELEGANT MERMAID DRESS! The mermaid dress showcases long lantern sleeves, a square neck, a ruffle hem, and a midi length. The fitted dress perfectly highlights your body curves, accentuating your fascinating figure. The vintage floral print adds to its femininity. The midi bodycon dress is the perfect length to showcase your slender calves. Wear it to cocktail parties, weddings, dates, homecoming events, evening parties, work, or office, and let the elegant atmosphere shine.</p>
        <p>A VARIETY OF CHOICE: Choose from options such as a blue knee-length bodycon dress, blue purple puff sleeve dress for women, black orange boho floral dress, khaki casual dress for women, red semi-formal dress, green shirred dress for women, white yellow long sleeve dress, blue white bohemian dress, red floral ruffle hem dress, white purple midi dress for women, and blue leopard casual outfits for women.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Plum",
                        "displayValue": "Plum",
                        "value": "#DDA0DD¸"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Bisque",
                        "displayValue": "Bisque",
                        "value": "#FFE4C4"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Pink",
                        "displayValue": "Light Pink",
                        "value": "#FFB6C1"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "one-shoulder-cocktail-dress",
        "name": "One Shoulder Cocktail Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/61UyrpAENXL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71wZT0Q9iHL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71vJ6pJkUxL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71bVKY9AbnL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": `<p>Material: 97% Polyester</p>
        <p>3% Elastane</p>
        <p>Origin: Imported</p>
        <p>Lining: Polyester lining</p>
        <p>Closure: Pull On</p>
        <p>Care: Machine Wash</p>
        <p>Size Guide: S=US 4-6, M=US 8-10，L=US 12-14，XL=US 16-18</p>
        <p>This women's ruched bodycon dress is made of lightweight and comfortable fabric, which is friendly to the skin. It has a textured appearance and offers a pleasant wearing experience, perfect for the summer season.</p>
        <p>FASHION DESIGN: This dress features a one-shoulder design, ruched bodycon style, sleeveless midi length, sexy cutout details, asymmetrical wrap design, split hem, and a fitted silhouette. It is a trendy and fashionable choice for parties, cocktails, and summer events in 2023.</p>
        <p>TRENDY FEATURES: The midi dress showcases a one-shoulder design, accentuating your delicate shoulders. The ruched bodycon style flatters your figure and highlights your curves. The cutout style adds a touch of femininity, while the asymmetrical wrap design with a slit hem creates a slender leg look. The sleeveless fitted dress exudes elegance and class.</p>
        <p>CHIC RUCHED BODYCON DRESS! This fitted dress is available in various colors, including black for a wedding guest look, green for a homecoming dress, dark royal blue for a semi-formal occasion, wine red for a slit dress, red for an irregular hem midi dress, army green for a ruched wrap dress, navy for an evening party, dark green for a sleeveless summer dress, deep purple for a one-shoulder prom dress, and rose red for a cutout bodycon dress.</p>
        <p>ELEGANT MIDI DRESSES FOR YOU! Pair this ruched bodycon dress with high heels to create a stunning look. It is ideal for parties, daily wear, cocktails, formal events, weddings, dating, holidays, travel, prom, and more.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "summer-maxi-dress",
        "name": "Summer Maxi Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/61GVIWVvrnL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71hJSTRZp7L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/7189URm3w0L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81ldzFmxDEL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 65
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 116.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9765.78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6838.6
            }
        ],
        "description": `<p>Material: 100% Polyester</p>
        <p>Origin: Imported</p>
        <p>Closure: Pull On</p>
        <p>Care: Machine Wash</p>
        <p>MATERIAL: This beach maxi dress is made of high-quality, soft, lightweight polyester material, providing a cool and comfortable wearing experience, especially in hot summer!</p>
        <p>FEATURES: The maxi beach dress features adjustable spaghetti straps, a cami sun dress style, a shirred stretchy bodice, solid color, stretchy elastic high waist, tiered dress design, and flared ruffle flowy skirts. It is ankle-length, embodying a casual boho style.</p>
        <p>OCCASIONS: This maxi beach dress for women is perfect for beach vacations, wedding guests, parties, cocktails, clubs, holidays, and casual daily wear. Pair it with sandals, slippers, or high heels to achieve a casual or feminine look.</p>
        <p>WASH INSTRUCTION: To care for this beach maxi dress, it is machine washable with cold water recommended. Please avoid using bleach and ironing, and instead hang or line dry. For accurate sizing, please refer to our Size Chart in the provided Image or Product Description section below.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "pink-casual-dress",
        "name": "Pink Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71eWo7wh0YL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71Dfl4+myvL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71f1+qu5q3L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71dv+SAcLzL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 62.7
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 62.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 45.07
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 80.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6770.94
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4741.43
            }
        ],
        "description": `<p>Material: 97% Polyester, 3% Elastane</p>
        <p>Origin: Imported</p>
        <p>Lining: Polyester lining</p>
        <p>Closure: Pull On</p>
        <p>Care: Machine Wash</p>
        <p>Size Attention: S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18.</p>
        <p>Experience ultimate comfort with this square neck dress made of high-quality polyester fabric. It is soft, lightweight, and has the perfect thickness, ensuring a pleasant wearing experience for various occasions. Rest assured, it is not see-through.</p>
        <p>Make a statement with the eye-catching designs of this dress. It features short puffy sleeves, a square neck, and a ruched bust with an empire waist. The dress can be worn in different styles: pull it down for a sexy off-shoulder look or wear it as a casual square neck dress. The delicate ruffles and A-line silhouette enhance your body curves, adding elegance and femininity to this short dress.</p>
        <p>This versatile dress can be paired with accessories such as necklaces, handbags, heels, boots, or sandals to create a fashionable and chic look. Dress it down with flats for a casual style or elevate it with heels for a night out. You'll love wearing this dress on various occasions.</p>
        <p>Choose from a wide range of colors and styles. Options include bean green for a sexy look, black for a party, blue for homecoming, pink for casual outings, shrimp pink for a babydoll style, sky blue for beach outfits, white for graduation, and wine red for a romantic touch.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "summer-midi-puff-dress",
        "name": "Summer Midi Puff Dress",
        "brand": "Lasio",
        "gallery": [
            "https://m.media-amazon.com/images/I/61Gm5oBtjDL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/616Bs65KJ6L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/611RoAUUzJL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/7165z3tHLEL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 70.50
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 70.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 51.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 91.77
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7682.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5379.7
            }
        ],
        "description": `<p>80% Polyester and 20% Cotton composition</p>
        <p>Imported origin</p>
        <p>Lined with polyester</p>
        <p>Convenient pull-on closure</p>
        <p>Machine Washable</p>
        <p>Useful Tips: Sizing guide - S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18, XXL=US 20-22.</p>
        <p>COMFORTABLE FABRIC: Crafted from a soft and lightweight material, this shirt offers a pleasant wearing experience throughout the day. The fabric provides coverage without being see-through, and it is recommended to wear light-colored underwear with the white dress. Embrace this stunning dress as your go-to outfit for the scorching summer days.</p>
        <p>EYE-CATCHING STYLES: Explore the captivating designs of this dress, featuring puffy sleeves, short sleeves, tiered layers, and a flattering midi A-line silhouette. The dress showcases ruffle details, a square neckline, open back, and trendy cold shoulder accents.</p>
        <p>VERSATILE MATCHING: Elevate your look by pairing this midi dress with sandals, heels, flats, wedges, and accessorize it with jewelry and hats. Suitable for various occasions such as beach trips, work, parties, weddings, nightclubs, travel, vacations, and romantic dates. This dress is a beautiful addition to your wardrobe.</p>
        <p>EXUDE CHARM: This women's fit and flare dress flatters all body shapes, enhancing your neckline and bust area with its smocked square neck design. The mid-length cut adds a touch of elegance, making it suitable for petite women as well. The puffy sleeves add a cute and fashionable element, while the open back design keeps you on-trend this summer.</p>
        <p>PLETHORA OF OPTIONS: Discover a wide range of choices, including an army green summer midi dress, black short sleeve dresses for women, blue tiered dress, dark green wedding guest dresses, light blue vacation beach dress, pink party dresses, red date night dresses, and white graduation dresses.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "maxi-dress",
        "name": "Maxi Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71iiyTWa-GL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/810colaJGbL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81SMidXPIwL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71YAMbRPZNL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 54.26
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 39
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 69.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5859.47
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4103.16
            }
        ],
        "description": `<p>100% Polyester composition</p>
        <p>Imported origin</p>
        <p>Convenient pull-on closure</p>
        <p>Hand Wash Only</p>
        <p>SIZE TIPS: Sizing guide - S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18, XXL=US 20-22. This maxi dress is crafted from lightweight and comfortable polyester, ensuring a cool and cozy wearing experience. It is designed to be light and breathable, even in hot weather. The short sleeve swing dress is a perfect addition to your summer wardrobe.</p>
        <p>UNIQUE DESIGN: Explore the unique features of this printed maxi dress for women, including short sleeves, a boho-inspired ruffled hem, high waist, wrap V-neckline, tiered flowy silhouette, and a matching belt. This dress is suitable for various occasions, such as casual outings, beach trips, or as a summer dress.</p>
        <p>GRACEFUL RUFFLE MAXI DRESS! This elegant tiered boho dress is a must-have item in every woman's wardrobe. It comes in a variety of colors, including pink, light blue, yellow, wine red, black, dark blue, green, blue, and red. The dress is designed to flatter your figure and highlight your femininity.</p>
        <p>DELICATE BOHEMIAN DRESS FOR WOMEN! The maxi dress is made from soft and skin-friendly fabric, providing a pleasant touch on your skin. The chic print adds a touch of charm to the dress, and you can choose between floral and polka dot patterns. The cross V-neckline enhances your clavicle, and the A-line silhouette can be adjusted with the belt for a comfortable fit.</p>
        <p>A MUST FOR ANY OCCASIONS! The printed tiered maxi dress can be styled with high heels, boots, or sandals for a trendy look. Add a brimmed hat to complete a stylish and generous outfit. This flare bohemian dress is versatile and suitable for daily wear, dating, shopping, office, beach trips, vacations, parties, and more.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "silky-v-neck-dress",
        "name": "Silky V-Neck Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61haHwpHRwL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71WfilCS0JL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61k0x3ZRk4L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61U4KLftiSL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 91.64
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 91.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 65.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 118.21
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9895.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6929.78
            }
        ],
        "description": `<p>58% Viscose, 34% Polyamide, 8% Elastane composition</p>
        <p>Imported origin</p>
        <p>Polyester lining</p>
        <p>Pull On closure</p>
        <p>Machine Wash</p>
        <p>SIZE TIPS: Sizing guide - S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18. The ruched bodycon dress is crafted from soft and comfortable fabric that is friendly to the skin. It offers a slight stretch for the ultimate cozy wearing experience.</p>
        <p>UNIQUE FEATURES: Explore the unique features of this long sleeve bodycon dress, including a V-neckline, ruched details, draped front, solid color design, slim fit silhouette, split pencil skirt, and an asymmetrical hem. This elegant party dress is a versatile addition to your wardrobe.</p>
        <p>TRENDY DESIGN: This midi bodycon dress showcases a draped front that perfectly hides your belly. The ruched details on the pencil dress add style and class. The fitted silhouette accentuates your curves and femininity. The irregular hem design adds a touch of elegance and uniqueness. The wrap V-neckline highlights your neckline, making you look stunning and flattering.</p>
        <p>ELEGANT RUCHED BODYCON DRESS! This wrap dress is available in a variety of solid colors, including green, pink, royal blue, black, blue, brick red, wine red, and purple red. Each color option brings its own charm and style.</p>
        <p>A MUST-HAVE WRAP DRESS! The women's ruched midi bodycon dress is a versatile choice for various occasions, such as dating, parties, cocktails, work, daily wear, night outs, travel, vacations, and weddings. Pair this fitted pencil dress with high heels and a necklace to create a graceful and fashionable look.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "swing-midi-dress",
        "name": "Swing Midi Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/61DgvomHoPL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71bVsFKlZVL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71EJzQCRrSL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71ICGZCQlIL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 63.9
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 63.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 45.93
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 82.44
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6901.15
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4832.61
            }
        ],
        "description": `<p>Satin Fabric, Silky To Touch and Comfy To Wear</p>
        <p>Imported origin</p>
        <p>Polyester lining</p>
        <p>Pull On closure</p>
        <p>Machine Wash</p>
        <p>Size Guide: S=US 4-6, M=US 8-10，L=US 12-14，XL=US 16-18. The women's satin dress is made of high-quality satin fabric, which feels silky smooth and is comfortable to wear. It is more friendly and gentle on your skin. The pleated midi dress offers a pleasant wearing experience.</p>
        <p>STYLISH DESIGN: Explore the stylish design elements of this satin dress, including its pleated midi length, cutout details, A-line silhouette, short sleeves, deep V-neckline, fit and flare style, asymmetrical hem, tie front, and its versatility as a summer and party dress. It is also suitable for holiday occasions.</p>
        <p>UNIQUE FEATURES: The midi dress features a tie front design that can be styled as a pretty bow tie on the V-neck, adding an eye-catching element. The cutout details on the women's satin dress exude elegance. The pleated A-line dress is designed to flatter and enhance your curves, catering to various body types. The irregular flowy hem adds a chic and trendy touch that never goes out of fashion. The high waist swing dress with an elastic waistband ensures all-day comfort.</p>
        <p>CLASSY SATIN SUMMER DRESS! Choose from a variety of colors for this A-line dress, including black, green, dark blue, wine red, light green, red, light blue, and rose red. Each color option offers its own charm and style.</p>
        <p>WOMEN SWING MIDI DRESS! Pair this ladies satin dress with high heels, sandals, or boots to create a stunning and fashionable look. The pleated A-line dress is a great choice for daily wear, parties, cocktails, weddings, dating, travel, vacations, holidays, and evening occasions in summer.</p>`,
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "backless-black-dress",
        "name": "Backless Black Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/61cO+pSei9L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/41Q0HUB3P+L._AC_.jpg",
            "https://m.media-amazon.com/images/I/51UK2MyNOvL._AC_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 34.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 62.22
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5208.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3647.25
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "ruched-knit-dress",
        "name": "Ruched Knit Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/610pt5cGOxL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71f+YmM-LrL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71Nf3wCg6ML._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/710CwRVxtnL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "mini-taliah-dress",
        "name": "Mini Taliah Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61IPIo8kZjL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61AkHRB2s5L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61uISQr80tL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61-mtUpSKFL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61hoiW-vbmL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/618K7EMaDgL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>67% Polyester, 27% Rayon, 6% Spandex</p> <p>Zipper closure</p> <p>Dry Clean Only</p> <p>With Likely, you're most #Likelyto win best dressed, nail the group-shot, dance all night, and then do it all again next weekend. </p> <p>rom form-fitting and flowy dresses we've got you (and your wallet!) covered so you never have to worry about what you'll wear to your next RSVP.</p> <p>Likely's coveted fabric- Favorite Stretch fits to perfection everytime always slimming and hugging your body in all the right places</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "elsa-lady-dress",
        "name": "Elsa Lady Dress",
        "brand": "Natalie",
        "gallery": [
            "https://m.media-amazon.com/images/I/811BGPP2vkL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71WtudNXwZL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71GBenH+ofL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>100% Polyester</p> <p>Imported</p> <p>Zipper closure</p> <p>Hand Wash Only</p> <p>This is a beaded gown with sweetheart neckline and short flutter sleeves</p> <p>Patterned beaded mesh embellishment</p><p>Sweetheart neckline</p> <p>Short flutter sleeves</p> <p>Soft skirt silhouette</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "kamali-dress",
        "name": "Kamali Dress",
        "brand": "Natalie",
        "gallery": [
            "https://m.media-amazon.com/images/I/81qEc5d531L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81kWKHkFNWL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% Polyester, 5% Spandex</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>Stretch jersey</p> <p>3/4 length sleeves</p> <p>Off the shoulder</p><p>Fishtail hem</p> <p>Wrinkle free</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "gillian-dress",
        "name": "Gillian Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/719OV+Mm8KL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61tteboPb2L._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>67% Polyester, 27% Rayon, 6% Spandex</p> <p>Imported</p> <p>Zipper closure</p> <p>Dry Clean Only</p> <p>With Likely, you're most #Likelyto win best dressed, nail the group-shot, dance all night, and then do it all again next weekend. </p> <p>We're your partner-in-crime for any and every occasion.</p><p>From form-fitting and flowy dresses we've got you (and your wallet!) covered so you never have to worry about what you'll wear to your next RSVP.</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "backless-brown-dress",
        "name": "Backless Brown Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/51bhHAFIO0L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61d5MxHCZXL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61P7+iw+i0L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61WMo2Nx9TL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "picnic-ready-dress",
        "name": "Picnic Ready Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/81LoGS3GLHL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/812FCJqRdCL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81hVBjMga7L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71P3NsDp1PL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71-CXDtCaRL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/910eL0uWB1L._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>80% Polyester, 20% Rayon</p> <p>Imported</p> <p>HAND WASH COLD SEPARATELY, DO NOT BLEACH, LAY FLAT TO DRY, LOW IRON IF NECESSARY, OR DRY CLEAN</p> <p>The Picnic Ready Dress is a textured gingham tiered mini</p> <p>It has puff sleeves and a subtle ruffle detail at the neckline</p> <pItem Package Weight: 0.3 kilograms></p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "midi-cocktail-dress",
        "name": "Midi Cocktail Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/819HjEqtEZS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81W9ZvPB8MS._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81+C+ThLulS._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A1nUjkm-OTS._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/919VlqQUt3S._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 50.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 96
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 69.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 124.43
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10416.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7294.5
            }
        ],
        "description": "<p>97% Polyester, 3% Spandex</p> <p>Imported</p> <p>Zipper closure</p> <p>Machine Wash</p> <p>Special Size Type: Standard</p> <p>Weave Type: Woven</p>",
        "category": "dresses",
        "attributes": []
    },
    {
        "__typename": "Product",
        "id": "tank-midi-dress",
        "name": "Tank Midi Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71JWb3NiBZS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71WSsCjWS6S._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Nice Summer Dress For Many Occasions</p> <p>Made Of 100% Viscose, Lightweight Flowing Soft Fabric</p><p>With All-Over Patterned, Each Part Is Unique</p> <p>Tie-Self High Halter Neck Connect With Keyhole</p> <p>Relaxed Cut Sleeveless Aline Dress With a Fixed Elastic Band At The Waist</p> <p>With The Same Patterned Belt, Can Be Tied According To Your Needs</p> <p>Nice Summer Dress For Many Occasions</p> <p>Wide Swinging Skirt With Flounces And Ruffles</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "white-dress",
        "name": "White Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71-99KVJV-L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71zFsGpv0hL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71+-oCY83XL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71+YFIxzItL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51jD7fJ2F3L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51y2q4tnPxL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Delicate Chiffon Fabric, Soft And Lightweight</p> <p>Classic Solid Color With beautiful details</p> <p>Relaxed Fit with A-Line Shape Fit For All The Body Shape</p> <p>Above Knee Length Visually Highlight Your Long Legs</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "neon-dress",
        "name": "Neon Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/51OAQMaQ59L._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/715J4UfeimL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61qHQhsuCRL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "aerin-wrap-dress",
        "name": "Aerin Wrap Dress",
        "brand": "Lasio",
        "gallery": [
            "https://m.media-amazon.com/images/I/716WUMQGbkL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71-dysWFpoL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81fOm-dSH7L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71jpZxbF-GL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>55% Linen, 45% Cotton</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>This versatile and figure-flattering dress transitions easily from day to night</p> <p>With short sleeves</p> <p>From our hand-selected fabrics to our wide range of fits, you can rely on Goodthreads to be effortless, stylish, and crafted with care</p> <p>Imported</p> ",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "sweetheart-dress",
        "name": "Sweetheart Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71bykh41wNL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61SfkU2uGrL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71oDJHvBVNL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71qD3VqyzYL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71UtqXa3uYL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% rayon , 5% spandex</p> <p>Imported</p> <p>Wrap closure</p> <p>Machine Wash</p> <p>Fabric: 95% Rayon + 5% Spandex, Super soft, Classy high quality fabric, very flowy soft</p> <p>Features: Floor length summer floral print Maxi dress, you will look vibrant and alive, stylish and elegant in it. Cross v neck, ruffle cap sleeves, short sleeves, elastic waistband. Slim fit will show off your shapely curves well. Irregular high low hemline, as if the lotus leaf is swaying, wearing it will want to start a romantic journey.</p> <p>You can pair a High heels and Stylish bag with it, a different beautiful look will occur. Perfect dress for casual, wedding, party, vacation, streetwear, cocktail, daily life.</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "chiffon-a-line-dress",
        "name": "Chiffon A-Line Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/81WiDnudBqS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71O28lJeErS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81cz25SPiRS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81cBHIcEZDS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81Pzb-CnR3S._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/916kjDewRYS._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% Polyester, 5% Elastane</p> <p>Imported</p> <p>Machine Wash</p> <p>Staples by The Drop</p> <p>Model is 5'10`/178 cm and wearing a size S</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "flora-dress",
        "name": "Flora Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/81PYRf2EFjL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/814OaTfRy2L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91+bwz7YeTL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91gSGfxL-IL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81CZaqgtBPL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81CZaqgtBPL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% Polyester,5% Spandex</p> <p>Zipper closure</p> <p>Hand Wash Only</p> <p>This cute swing midi dress features Sleeveless, Sweetheart neck, smocked top, A-line silhouette, Concealed zipper at side, Adjustable strap</p> <p>The elastic ribbing in the back and bust, giving so much extra stretch to fit most bust. </p> <p>The A-line shape design perfectly accentuates your waist to show off your curves</p> <p>Adjustable strap design could make you feel breathable and comfortable all day</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "green-dress",
        "name": "Green Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61uNo+tr3QS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61lJ1esNJCS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/616bn88Oa2S._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61SDGztoyvS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61SDGztoyvS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61k1+R0v4iS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61KJqMh2HTS._AC_SX679._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>67% Polyester, 27% Rayon, 6% Spandex</p> <p>Zipper closure</p> <p>Dry Clean Only</p> <p>With Likely, you're most #Likelyto win best dressed, nail the group-shot, dance all night, and then do it all again next weekend. </p> <p>rom form-fitting and flowy dresses we've got you (and your wallet!) covered so you never have to worry about what you'll wear to your next RSVP.</p> <p>Likely's coveted fabric- Favorite Stretch fits to perfection everytime always slimming and hugging your body in all the right places</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "party-dress",
        "name": "Party Dress",
        "brand": "Natalie",
        "gallery": [
            "https://m.media-amazon.com/images/I/61qSdvS0g8S._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61qSdvS0g8S._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61taHatcF5S._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/6110d9iir1L._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/31KqzQ6xzjL._AC._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>100% Polyester</p> <p>Imported</p> <p>Zipper closure</p> <p>Hand Wash Only</p> <p>This is a beaded gown with sweetheart neckline and short flutter sleeves</p> <p>Patterned beaded mesh embellishment</p><p>Sweetheart neckline</p> <p>Short flutter sleeves</p> <p>Soft skirt silhouette</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "button-front-dress",
        "name": "Button Front Dress",
        "brand": "Natalie",
        "gallery": [
            "https://m.media-amazon.com/images/I/71HVNi0rJBL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71ejJQUOtcL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61+TT52J19S._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/316fVi8o0iS._AC_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% Polyester, 5% Spandex</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>Stretch jersey</p> <p>3/4 length sleeves</p> <p>Off the shoulder</p><p>Fishtail hem</p> <p>Wrinkle free</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "backless-pink-dress",
        "name": "Backless Pink Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/61HLncyO-kL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/417rfTyHIdL._AC._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/616rpWewVuL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "scrunch-dress",
        "name": "Scrunch Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/71FoAafEHwL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61gVqBAe43L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/714G5A1BNmL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/617V-eI4AYL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/41Ma5AH4rVL._AC_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>67% Polyester, 27% Rayon, 6% Spandex</p> <p>Imported</p> <p>Zipper closure</p> <p>Dry Clean Only</p> <p>With Likely, you're most #Likelyto win best dressed, nail the group-shot, dance all night, and then do it all again next weekend. </p> <p>We're your partner-in-crime for any and every occasion.</p><p>From form-fitting and flowy dresses we've got you (and your wallet!) covered so you never have to worry about what you'll wear to your next RSVP.</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "dress-with-neck-tie",
        "name": "Dress With Neck Tie",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/91rNgQs+G+L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/917rgfvwW6L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/91nUuW99rgL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/91+41RiSeIL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "nature-girl-dress",
        "name": "Nature Girl Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/81B14emrsKL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71AHsmcWPuL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81n75-yUpRL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71XH8BIbloL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81YIWVD2EzL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>80% Polyester, 20% Rayon</p> <p>Imported</p> <p>HAND WASH COLD SEPARATELY, DO NOT BLEACH, LAY FLAT TO DRY, LOW IRON IF NECESSARY, OR DRY CLEAN</p> <p>The Picnic Ready Dress is a textured gingham tiered mini</p> <p>It has puff sleeves and a subtle ruffle detail at the neckline</p> <pItem Package Weight: 0.3 kilograms></p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "greenish-dress",
        "name": "Greenish Dress",
        "brand": "Lasio",
        "gallery": [
            "https://m.media-amazon.com/images/I/71iK8S1I2bL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71LpBjMVdHL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91hbf41MGgL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81iAHKkPjCL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71uJQ+6w0lL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>55% Linen, 45% Cotton</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>This versatile and figure-flattering dress transitions easily from day to night</p> <p>With short sleeves</p> <p>From our hand-selected fabrics to our wide range of fits, you can rely on Goodthreads to be effortless, stylish, and crafted with care</p> <p>Imported</p> ",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "stripes-dress",
        "name": "Stripes Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/81lnVe2ZCFL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81XspHKB2TL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91MCRYizeuL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/A1Fk9jW11xL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/A1qFtpw0LjS._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% rayon , 5% spandex</p> <p>Imported</p> <p>Wrap closure</p> <p>Machine Wash</p> <p>Fabric: 95% Rayon + 5% Spandex, Super soft, Classy high quality fabric, very flowy soft</p> <p>Features: Floor length summer floral print Maxi dress, you will look vibrant and alive, stylish and elegant in it. Cross v neck, ruffle cap sleeves, short sleeves, elastic waistband. Slim fit will show off your shapely curves well. Irregular high low hemline, as if the lotus leaf is swaying, wearing it will want to start a romantic journey.</p> <p>You can pair a High heels and Stylish bag with it, a different beautiful look will occur. Perfect dress for casual, wedding, party, vacation, streetwear, cocktail, daily life.</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "light-red-dress",
        "name": "Light Red Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/51+r1HsavyS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51QKWwv+iUS._AC._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51Zm+3P+M6S._AC._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 61.49
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 61.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 44.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 79.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6640.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4650.25
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "rosie-dress",
        "name": "Rosie Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61JqCOT0n+L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71L78h5oH2L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71nfFJhvMIL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61rgPPfh40L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81LGuIGVmjL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71DtBMkqplL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% Polyester, 5% Elastane</p> <p>Imported</p> <p>Machine Wash</p> <p>Staples by The Drop</p> <p>Model is 5'10`/178 cm and wearing a size S</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "casual-red-dress",
        "name": "Casual Red Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/7119iaHQpSL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71z+husRrwL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91KCNdZKcEL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81bfZ6mR-eL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71NfLcqzdvL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>95% Polyester,5% Spandex</p> <p>Zipper closure</p> <p>Hand Wash Only</p> <p>This cute swing midi dress features Sleeveless, Sweetheart neck, smocked top, A-line silhouette, Concealed zipper at side, Adjustable strap</p> <p>The elastic ribbing in the back and bust, giving so much extra stretch to fit most bust. </p> <p>The A-line shape design perfectly accentuates your waist to show off your curves</p> <p>Adjustable strap design could make you feel breathable and comfortable all day</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "navy-girl-dress",
        "name": "Navy Girl Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/71ZRVauML+L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71tB3NhKYjL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91qXVSt6kRL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81si7vfDNwS._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81si7vfDNwS._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81si7vfDNwS._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>67% Polyester, 27% Rayon, 6% Spandex</p> <p>Zipper closure</p> <p>Dry Clean Only</p> <p>With Likely, you're most #Likelyto win best dressed, nail the group-shot, dance all night, and then do it all again next weekend. </p> <p>rom form-fitting and flowy dresses we've got you (and your wallet!) covered so you never have to worry about what you'll wear to your next RSVP.</p> <p>Likely's coveted fabric- Favorite Stretch fits to perfection everytime always slimming and hugging your body in all the right places</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "sugar-lips-dress",
        "name": "Sugar Lips Dress",
        "brand": "Natalie",
        "gallery": [
            "https://m.media-amazon.com/images/I/71Vx9fe2H5L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61gXYPF+P2L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71gWlSlWN0L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71A84kB3WzL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>100% Polyester</p> <p>Imported</p> <p>Zipper closure</p> <p>Hand Wash Only</p> <p>This is a beaded gown with sweetheart neckline and short flutter sleeves</p> <p>Patterned beaded mesh embellishment</p><p>Sweetheart neckline</p> <p>Short flutter sleeves</p> <p>Soft skirt silhouette</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "caribbean-dress",
        "name": "Caribbean Dress",
        "brand": "Natalie",
        "gallery": [
            "https://m.media-amazon.com/images/I/71xJW5iMmMS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71LwsuI2o2L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71-M+GyB18S._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71-M+GyB18S._AC_UX569_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 78.37
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 56.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 101.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8463.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5926.78
            }
        ],
        "description": "<p>95% Polyester, 5% Spandex</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>Stretch jersey</p> <p>3/4 length sleeves</p> <p>Off the shoulder</p><p>Fishtail hem</p> <p>Wrinkle free</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "bodycon-night-dress",
        "name": "Bodycon Night Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/71ETbc-Sa9L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61Rw5JoRMIL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71o4zA1-sUL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61IfnwL-U5L._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>67% Polyester, 27% Rayon, 6% Spandex</p> <p>Imported</p> <p>Zipper closure</p> <p>Dry Clean Only</p> <p>With Likely, you're most #Likelyto win best dressed, nail the group-shot, dance all night, and then do it all again next weekend. </p> <p>We're your partner-in-crime for any and every occasion.</p><p>From form-fitting and flowy dresses we've got you (and your wallet!) covered so you never have to worry about what you'll wear to your next RSVP.</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "sleeved-yellow-dress",
        "name": "Sleeved Yellow Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/71MFiQlLwUL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71Vv-HpEX6L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/917-Dq9FqZL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81NYnKNYW0L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71mi6iXHrBL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>80% Polyester, 20% Rayon</p> <p>Imported</p> <p>HAND WASH COLD SEPARATELY, DO NOT BLEACH, LAY FLAT TO DRY, LOW IRON IF NECESSARY, OR DRY CLEAN</p> <p>The Picnic Ready Dress is a textured gingham tiered mini</p> <p>It has puff sleeves and a subtle ruffle detail at the neckline</p> <pItem Package Weight: 0.3 kilograms></p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "white-backless-dress",
        "name": "White Backless Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/51BG0-Y8IEL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/611n7PlefgL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/7114F7ymMnL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61z+okqC42L._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.</p> <p>Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.</p> <p>Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.</p> <p>Attention: Please refer to detailed size chart info before buying</p>",
        "category": "dresses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "boho-floral-tank",
        "name": "Boho Floral Tank",
        "brand": "Noisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81ZZRYthnlL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71E5VRxQurL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71hheJ2zclL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71mrpqWh9gL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 88.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 64.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 115.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9635.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6747.42
            }
        ],
        "description": `<p>100% Polyester</p>
        <p>Imported origin</p>
        <p>Pull On closure</p>
        <p>Machine Wash</p>
        <p>Size Guide: S=US 4-6, M=US 8-10，L=US 12-14，XL=US 16-18, XXL=US 20. Dressing Tips: NO1 - It is recommended to pair light-colored items with light-colored underwear. NO2 - Please refer to our Size Chart before ordering, which can be found in the last image posted on the Product Description, rather than the Amazon Size Chart here.</p>
        <p>SOFT FABRIC: This Disty Floral Print Women's Blouse for Summer 2023 is made of soft and lightweight fabric, providing excellent permeability and a skin-friendly feeling. It offers a greatly comfortable experience. This sleeveless floral blouse is the new trendy fashion for women in summer 2023.</p>
        <p>FEATURES: Explore the features of this women's tank top, including square neck design, floral print, casual sleeveless style, shirred straps, pleated details, shirred shoulder, boho style, pleated smocked tank top, lightweight chiffon fabric, ruffle details, and versatility for casual and dressy occasions.</p>
        <p>EASY TO MATCH: This cute summer top for women can be styled in a dressy casual or a laid-back manner. It pairs well with jeans, skirts, denim shorts, and classic jeans. It can be worn as street clothing, offering a casual and fashionable look. It is suitable for teen girls, ladies, and even as a comfy maternity tank top.</p>
        <p>ADDITIONAL COLORS: In addition to the mentioned features, this collection also includes floral print black crop tops for women, white shirred sleeveless going out tops for women, green women's tank tops with a square neck, and blue tank tops for women with pleated details.</p>
        <p>2023 NEW FASHION: Embrace the latest fashion trends with red floral cute tops for women, olive green summer tops, sky blue and white flower tank tops for women, and royal blue sleeveless tops for women.</p>`,
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "women-chiffon-blouse",
        "name": "Women's Chiffon Blouse",
        "brand": "D&D",
        "gallery": [
            "https://m.media-amazon.com/images/I/71CsRK8TqsL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71LxZ15XRTL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71jmSI2pI5L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71ec6KWlnRL._AC_UY879_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 51.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 56.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 40.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 73.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6119.89
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4285.52
            }
        ],
        "description": `<p>100% Polyester</p>
        <p>Imported origin</p>
        <p>Button closure</p>
        <p>Machine Wash</p>
        <p>SIZE TIPS: S=US 4-6, M=US 8-10，L=US 12-14，XL=US 16-18, XXL=US 20-22. This Button Down Blouse is made of lightweight and breathable polyester fabric, providing a great touch and comfortable wearing experience. The solid color shirt is lined inside, eliminating concerns about see-through issues. This chiffon blouse is versatile and perfectly suits spring and fall seasons.</p>
        <p>TRENDY DESIGN: Explore the trendy design of this women's long sleeve blouse, including button-down style, solid color, collared shirts, chiffon fabric, elegant curved hem, jacquard pattern, chest pocket, tunic tops, and a beach blouse for women. It can be worn as a work shirt for the office or for various occasions.</p>
        <p>ELEGANT &amp; CHIC CHIFFON BLOUSE! This graceful tunic top is available in five solid colors: white curved hem blouse tops, yellow long sleeve shirts for women, purple jacquard chiffon tunic blouse, black stylish button-up shirt tops, and brown lightweight tops and blouse with a pocket.</p>
        <p>UNIQUE DETAILS: The long sleeves are designed with a mesh surface, adding style and uniqueness to the blouse. The blouse has an inner lining in the middle to ensure it is not see-through. The jacquard fabric provides a sense of exquisiteness and delicateness. The chiffon blouse tops feature a chest pocket, adding a touch of sophistication. The cuffs are adorned with buttons, allowing you to roll them up to your desired length.</p>
        <p>FALL ESSENTIAL BLOUSE TOPS! This classy button-up shirt is highly versatile and can be paired with jeans, skirts, skinny leggings, shorts, and more to create stylish looks. The long sleeve blouse is a great choice for daily wear, dating, work office, beach, vacation, parties, shopping, and other occasions in spring and fall.</p>`,
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "floral-ruffled-tunic",
        "name": "Floral Ruffled Tunic",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/81QUnJXe19L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71WY+z6ap9L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71FqTjPQNYL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71oPGrpP0JL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 76.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 74.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 53.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 96.44
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8073.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5653.24
            }
        ],
        "description": `<p>100% Viscose</p>
        <p>Imported origin</p>
        <p>Drawstring closure</p>
        <p>Machine Wash</p>
        <p>SIZE TIPS: S=US 4-6, M=US 8-10，L=US 12-14，XL=US 16-18. The Long Sleeve Blouse Tops are crafted from comfy and cozy viscose fabric, providing a comfortable and skin-friendly wearing experience. The tunic peplum tops are lightweight and offer the ultimate comfort. This floral blouse shirt is perfect for both spring and fall seasons.</p>
        <p>UNIQUE DESIGN: Discover the unique design of this women's long sleeve blouse, featuring a tie V-neck tunic top, ditsy floral peplum tops, ruffled babydoll tunic tops, lantern sleeves, swing blouse, workout shirts, casual loose blouse, elegant blouse, and bow-tie blouse for women. These cute babydoll tunic tops come in four colors to choose from: pink, blue, green, and black.</p>
        <p>CUTE BABYDOLL TUNIC TOPS! This graceful peplum top is a great addition to women's wardrobes. The tunic blouse shirt is available in four colors: pink long sleeve tunic blouse tops, blue tie V-neck flowy shirts, green ditsy floral blouse for women, and black cute pleated peplum tops.</p>
        <p>CLASSIC STYLE: The stylish tie V-neck is the highlight of this tunic blouse. You can create a cute and trendy style by making a bow tie. The shape of the babydoll tops gives a youthful and lovely look with a relaxed feel. The floral print adds vibrancy and colorfulness to the peplum tops, avoiding monotony. The ruffle design adds a touch of elegance and enhances the loose fit.</p>
        <p>A MUST-HAVE ITEM IN FALL! This floral blouse can be paired with jeans, shorts, skirts, leggings, and more for a fashionable look. The long sleeve tunic tops are perfect for daily wear, work, office, dates, parties, vacations, beaches, workouts, holidays, shopping, and other occasions in fall or spring.</p>`,
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "deep-v-neck-blouse",
        "name": "Deep V Neck Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/71JV6fyAaUL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81BZmz+CyoL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81z2UGhdmOL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91JBZuRO6vL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 90.00
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 99.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 71.93
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 129.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10807.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7568.05
            }
        ],
        "description": `<p>50% Viscose, 28% Nylon, 22% Polyester</p>
        <p>Imported origin</p>
        <p>Pull On closure</p>
        <p>Machine Wash</p>
        <p>MATERIAL: This long sleeve cropped sweater for women is made of lightweight knitted sweater fabric. It is stretchy, soft, and comfortable to wear. The fabric provides warmth while allowing you to show off your sexy body curve.</p>
        <p>FEATURES: The sweater features ruched details, ribbed knit tunic pullover, a chic V neck cropped design, off-shoulder knitted pullover, long sleeves, ribbed crop tops, and a lightweight construction. It is a versatile piece that can be worn as a fall sweater in 2022. Perfect for a dressy or casual look.</p>
        <p>OBSESSED with This Cute Sweater for Women: This long sleeve sweater has a sweetheart V neckline, solid color, shirred front, and ribbed cuffs and hem with elasticity. It has a slim fit and a slightly revealing belly design. The pleated design on the front chest adds a cute and elegant touch to the knit top.</p>
        <p>CUTE & ELEGANT DESIGN: This rib-knit sweater is a must-have for spring and autumn. The deep V neckline highlights the elegant lines of the collarbone. The pleated design on the chest adds to your charming taste. The slightly revealing waistline with a touch of sexiness accentuates your body curves. The high-quality knitted fabric ensures softness and maximum comfort, making you look delicate and gentle.</p>
        <p>EASY MATCHING & OCCASIONS: This V neck sweater pairs perfectly with jeans, leggings, and casual pants. It is suitable for various outdoor and indoor activities such as shopping, dating, parties, office wear, club events, staying at home, and daily life. Complete the exquisite look with a metal necklace, and you will be beautiful and charming when you wear it.</p>`,
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "satin-loose-blouse",
        "name": "Satin Loose Blouse",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/71qEKw3lP2L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71hUAnGyXkL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61TILPoaAdL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61FN7z4oG-L._AC_UY879_.jpg"

        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 65
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 116.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9765.78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6838.6
            }
        ],
        "description": `<p>95% Polyester, 5% Elastane</p>
        <p>Imported origin</p>
        <p>Pull On closure</p>
        <p>Machine Wash</p>
        <p>MATERIAL: This women's top dressy casual is made of high-quality satin silk fabric. It is super smooth, soft, and comfortable to wear. The fabric is not see-through and does not have stretch. Size guide: S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18.</p>
        <p>FEATURES: The summer top for women features satin fabric, a basic crew neckline, puff ruched sleeves, short sleeves, a loose fit tunic style, vibrant solid color options, a keyhole back, and a standard length. It is a versatile blouse that can be dressed up or down for various occasions.</p>
        <p>STYLE: This top is suitable for summer and spring wear. It can be worn as a dressy casual top for women. It is also a great choice for casual spring outfits. It falls into the category of ladies' tops and blouses. It is suitable for casual summer looks and can be worn as business casual tops for women. The tunic style adds to its versatility.</p>
        <p>MATCHES: The stylish puff sleeves and satin fabric of this women's blouse allow it to be dressed up for a professional look. The loose fit and length make it suitable for tucking in or leaving untucked for a casual look. It can be paired with jeans, pants, shorts, or skirts. It can also be layered under jackets or cardigans in summer, spring, fall, or winter.</p>
        <p>OCCASIONS: This blouse is suitable for various formal or informal occasions, such as casual outings, parties, business events, cocktails, dressy occasions, work, office wear, concerts, dates, going out, travel, holidays, and school. Its versatile design makes it suitable for a wide range of settings.</p>`,
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "round-neck-top",
        "name": "Round Neck Top",
        "brand": "Candy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61kpXaC7j+L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/7154+BJlQhL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71kJYX6Cg7L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71pKMuXmgjL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": `<p>MATERIAL: The long sleeve tops for women are crafted from lightweight, soft, draped, and wrinkle-free polyester fabric, ensuring a comfortable and smooth feel. The fabric has no stretch.</p>
        <p>FEATURES: These women's tops showcase various design elements, including a basic round neck, crew neck, solid color, ruffle trim on the cold shoulder, cut-out shoulder, and lantern sleeves with elastic cuffs. They are versatile and can be worn as long sleeve tops or blouses, off the shoulder tops, and business casual tops for women. The relaxed fit offers both a sexy and elegant look.</p>
        <p>DESIGNS: Made from lightweight and comfortable material, this women's long sleeve blouse is suitable for all seasons. The cut-out shoulder design flatters any woman and can be dressed up or down effortlessly. The ruffle trim on the cold shoulder adds a feminine and cute touch.</p>
        <p>STYLE: These ruffle sleeve tops for women are easy to style with jeans, shorts, leggings, skirts, or cardigans, creating a trendy and fashionable look. The sexy casual style is perfect for spring, hot summer, or fall.</p>
        <p>OCCASIONS: These off the shoulder tops for women are ideal for a variety of occasions, including business casual settings, daily casual wear, nights out, dates, work, office attire, street fashion, travel, holidays, leisure activities, and parties.</p>
        `,
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "melanni-top",
        "name": "Melanni Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/91Yi3vkEdUL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81mAWBHYGaL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 50.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 96
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 69.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 124.43
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10416.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7294.5
            }
        ],
        "description": "<p>100% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Hand wash or dry clean</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "pistachio-top",
        "name": "Pistachio Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81S1KAnEwfL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91ZIuv8ZzEL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 24.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 24
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 17.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 31.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 2604.21
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 1823.63
            }
        ],
        "description": "<p>51% Viscose, 49% Polyamide</p> <p>Imported</p><p>Pull On closure</p><p>Dry Clean Only</p><p>Semi-sheer floral lace.</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "yellow-modern-top",
        "name": "Yellow Modern Top",
        "brand": "Carla",
        "gallery": [
            "https://m.media-amazon.com/images/I/91sjOKYC0YL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91JKQd76j2L._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 43.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 60
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 43.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 77.77
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6510.52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4559.06
            }
        ],
        "description": "<p>100% Silk</p><p>Imported</p><p>Button closure</p><p>Dry Clean Only</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "star-top",
        "name": "Star Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/718ORlODtaL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61rRx1zjsJL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61iYF8qYe6L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71+blwSgYUL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71+blwSgYUL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 76.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 84
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 60.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 108.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9114.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6382.69
            }
        ],
        "description": "<p>82% Rayon, 18% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Dry clean only</p><p>Lined bodice</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "daily-casual-top",
        "name": "Daily Casual Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/71WOqqJSaGL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71MRS-TN37L._AC_UX679_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 55.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 55.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 39.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 71.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5989.68
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4194.34
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p><p>Button closure</p><p>Dry clean only</p><p>Fits true to size</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "star-girl-top",
        "name": "Star Girl Top",
        "brand": "Noisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/91PNHqeTupL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/A1uEo3qEd1L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/A1kPb9XN2PL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/A14YHMZdstL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91T5CdScMaL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/A1R3aP0Ss6L._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 88.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 64.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 115.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9635.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6747.42
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>The elastic around the top has ruffle detailing to add extra to the dress</p> <p>Easy top for warmer weather and pairs great with denim</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "snake-top",
        "name": "Snake Top",
        "brand": "D&D",
        "gallery": [
            "https://m.media-amazon.com/images/I/71VvqlciTHL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71RU6znOrgL._AC_SX679._SX._UX._SY._UY_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 51.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 56.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 40.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 73.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6119.89
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4285.52
            }
        ],
        "description": "<ul> <li><span> 92% Polyester, 8% Spandex  </span></li>  <li><span > Made in the USA and Imported  </span></li> <li><span > Pull On closure  </span></li> <li><span > Machine Wash  </span></li> <li><span > Soft silky knit fabric, 92% Polyester, 8% Spandex  </span></li>  <li><span > Features tulip ruffle sleeve design  </span></li>  <li><span > Update to your favorite tee shirt  </span></li></ul>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "silver-long-blouse",
        "name": "Silver Long Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/81yw-1z+l0L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71jyQbBHEEL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 34.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 62.22
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5208.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3647.25
            }
        ],
        "description": "<p>100% Polyester</p> <p>Imported</p> <p>front closure</p> <p>Dry Clean Only</p> <p>Designed to fit and flatter 5'4` and under frame</p>  <p>Mock-neck, back keyhole and button closure</p> <p>Ruffle at neckline and center front</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "georgette-blouse",
        "name": "Georgette Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/61cxhNcz0CL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71+ziujuDwL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/61AkJ56s-xL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 90.00
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 99.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 71.93
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 129.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10807.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7568.05
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p> <p>Pull On closure    </p> <p>Dry Clean Only    </p> <p>A cascading placket from the collar band accentuate the easy drape of our satin crepe long sleeve blouse.    </p> <p>Front tie closure.      </p> <p>Agoya button cuffs.      </p> <p>Fits true to size      </p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "kimono-blouse",
        "name": "Kimono Blouse",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61Me6cuyeuL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61rLOybsoAL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 65
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 116.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9765.78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6838.6
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p> <p>Pull On closure</p> <p>Hand wash cold. Line dry. Or dry clean.</p> <p>Slips on. Agoya button cuff. Back yoke.</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "easy-slip-top",
        "name": "Easy Slip Top",
        "brand": "Candy",
        "gallery": [
            "https://m.media-amazon.com/images/I/51LHrt+DKsL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/51BG5JRq8tL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>82% Rayon, 18% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Dry clean only</p> <p>Devore velvet</p> <p>Lined bodice</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "one-shoulder-satin-top",
        "name": "One Shoudler Satin Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/51o48ODiGtS._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/51MhHtldtoS._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Hand wash or dry clean</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "lily-top",
        "name": "Lily Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61BEMz3O9NL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61RKd1ITbeL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>51% Viscose, 49% Polyamide</p> <p>Imported</p><p>Pull On closure</p><p>Dry Clean Only</p><p>Semi-sheer floral lace.</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "aurora-top",
        "name": "Aurora Top",
        "brand": "Carla",
        "gallery": [
            "https://m.media-amazon.com/images/I/81S6h4Ii54S._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81ZA9-j45wS._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p><p>Imported</p><p>Button closure</p><p>Dry Clean Only</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "flora-days-top",
        "name": "Flora Days Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81N3P5JpLUL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81TZJSGxgML._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>82% Rayon, 18% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Dry clean only</p><p>Lined bodice</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "yellow-flora-top",
        "name": "Yellow Flora Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/91tJe4XdIIL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91pPPPojWwL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p><p>Button closure</p><p>Dry clean only</p><p>Fits true to size</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "lemon-top",
        "name": "Lemon Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/91jG7TYiqDS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91PZnvuToBS._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>82% Rayon, 18% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Dry clean only</p><p>Lined bodice</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "green-casual-top",
        "name": "Green Casual Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/91jGxiYI4lL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91Jjl8uLxFL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p><p>Button closure</p><p>Dry clean only</p><p>Fits true to size</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "blue-stripe-top",
        "name": "Blue Stripe Top",
        "brand": "Noisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81Kc7tVNBQL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91G2InKksHL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 88.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 64.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 115.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9635.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6747.42
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p> <p>Pull On closure</p> <p>Machine Wash</p> <p>The elastic around the top has ruffle detailing to add extra to the dress</p> <p>Easy top for warmer weather and pairs great with denim</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "sidienne-top",
        "name": "Sidienne Top",
        "brand": "D&D",
        "gallery": [
            "https://m.media-amazon.com/images/I/61FXKHKyGAS._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61BISkFvxZS._AC_UX679_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 51.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 56.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 40.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 73.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6119.89
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4285.52
            }
        ],
        "description": "<ul> <li><span> 92% Polyester, 8% Spandex  </span></li>  <li><span > Made in the USA and Imported  </span></li> <li><span > Pull On closure  </span></li> <li><span > Machine Wash  </span></li> <li><span > Soft silky knit fabric, 92% Polyester, 8% Spandex  </span></li>  <li><span > Features tulip ruffle sleeve design  </span></li>  <li><span > Update to your favorite tee shirt  </span></li></ul>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "basic-striped-long-blouse",
        "name": "Basic Striped Long Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/61Ly74WFYzL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/714AhswXoUL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61tviME+OeL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/5139KpWO3LL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61hW60xoVDL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 76.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 74.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 53.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 96.44
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8073.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5653.24
            }
        ],
        "description": "<p>100% Polyester</p> <p>Imported</p> <p>front closure</p> <p>Dry Clean Only</p> <p>Designed to fit and flatter 5'4` and under frame</p>  <p>Mock-neck, back keyhole and button closure</p> <p>Ruffle at neckline and center front</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "smocked-blouse",
        "name": "Smocked Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/81z00zbadjL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81vJ36pZ8dL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 90.00
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 99.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 71.93
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 129.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10807.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7568.05
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p> <p>Pull On closure    </p> <p>Dry Clean Only    </p> <p>A cascading placket from the collar band accentuate the easy drape of our satin crepe long sleeve blouse.    </p> <p>Front tie closure.      </p> <p>Agoya button cuffs.      </p> <p>Fits true to size      </p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Medium Purple",
                        "displayValue": "Medium Purple",
                        "value": "#9370DB"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Light Blue",
                        "displayValue": "Light Blue",
                        "value": "#87CEFA"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Deep Pink",
                        "displayValue": "Deep Pink",
                        "value": "#FF1493"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "silk-blouse",
        "name": "Silk Blouse",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/71Zb6izJgQL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71zwbghEw0L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71GAk5MiZrL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71H9VqbYYqL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81616ZhBtnL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 65
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 116.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9765.78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6838.6
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p> <p>Pull On closure</p> <p>Hand wash cold. Line dry. Or dry clean.</p> <p>Slips on. Agoya button cuff. Back yoke.</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "vintage-star-top",
        "name": "Vintage Star Top",
        "brand": "Candy",
        "gallery": [
            "https://m.media-amazon.com/images/I/715IsiUMTFL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81tez+wCaJL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/719F0HNsSAL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71gpLTxT--L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71y8wiEURAL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81te1bgReuL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>82% Rayon, 18% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Dry clean only</p> <p>Devore velvet</p> <p>Lined bodice</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "pastel-top",
        "name": "Pastel Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/61OhYAXOr5L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61rwqiBc8gL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Hand wash or dry clean</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "dark-purple-top",
        "name": "Dark Purple Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61H76m4q8qL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61uOXMfAoHL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>51% Viscose, 49% Polyamide</p> <p>Imported</p><p>Pull On closure</p><p>Dry Clean Only</p><p>Semi-sheer floral lace.</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "pastel-long-sleeve-top",
        "name": "Patel Long Sleeve Top",
        "brand": "Carla",
        "gallery": [
            "https://m.media-amazon.com/images/I/81ur1aCQ1AS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71fCwU+bbmS._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p><p>Imported</p><p>Button closure</p><p>Dry Clean Only</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p> ",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "snowy-top",
        "name": "Snowy Top",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/8118ls9w0FL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81BY5g8u5PL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>82% Rayon, 18% Silk</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Dry clean only</p><p>Lined bodice</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "black-layered-top",
        "name": "Black Layered Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/718Acvbgo6L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71+1TN5m4AL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/41I4aV4WU2L._AC_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p><p>Button closure</p><p>Dry clean only</p><p>Fits true to size</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            },
            {
                "__typename": "AttributeSet",
                "id": "Color",
                "name": "Color",
                "type": "swatch",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Creamy",
                        "displayValue": "Creamy",
                        "value": "#FAEBD7"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Dark Blue",
                        "displayValue": "Dark Blue",
                        "value": "#00008B"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Orchid",
                        "displayValue": "Orchid",
                        "value": "#DA70D6"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Black",
                        "displayValue": "Black",
                        "value": "#000000"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "White",
                        "displayValue": "White",
                        "value": "#FFFFFF"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "velvet-brown-top",
        "name": "Velvet Brown Top",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/91iVHmNpo5L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91nnq9qBgeL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Silk</p> <p>Imported</p><p>Button closure</p><p>Dry clean only</p><p>Fits true to size</p><p>Timeless and innovative</p> <p>The collection excudes discreet sexiness in the form of luxe fabrics and unexpected details found in modern silhouettes</p>",
        "category": "blouses",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "boot-cut-jeans",
        "name": "Boot Cut Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/81WqWc+lF8L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81YoIw+QqyL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81luXaDpiaL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71d8ndSHciL._AC_UY879_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 34.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 62.22
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5208.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3647.25
            }
        ],
        "description": `<p>MATERIAL: These women's jeans are made of a premium blend of 72% cotton, 26% polyester, and 2% spandex. The fabric composition ensures comfort, breathability, and stretchability. It retains its shape and color even after multiple washes.</p>
        <p>Button closure</p>
        <p>👚Note: Please check the size chart before making a purchase. You can also watch the video for more details about this product.</p>
        <p>❤️Why Us? Better Fabric: We have used high-quality cotton fabric that offers superior comfort and breathability compared to regular fabric. The added spandex provides stretch, ensuring a perfect fit. The fabric is also resistant to fading and maintains its shape over time. It is free from unpleasant odors.</p>
        <p>❤️Special Cutting: Our jeans feature a special curvy mid-rise waist design that eliminates any gap at the waist. The back design hugs your curves nicely and enhances your booty. The leg shape widens from the knee to the bottom, providing great coverage and creating a straight and elongated leg look. The retro flared style adds a fashionable and stylish touch.</p>
        <p>👖Features: These women's totally shaping curvy bootcut jeans come with a classic five-pocket design and can be tumble dried. They are imported and available in different inseam lengths: Short=29.5", Medium=31.5", Long=33.5".</p>
        <p>💣Best Service: We are committed to providing the best customer service. If you are not satisfied with the women's jeans within 90 days, we offer a hassle-free exchange or refund policy. Your satisfaction is our top priority. Feel free to contact us through Amazon for any assistance you may need.</p>
        `,
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "ankle-skinny-jeans",
        "name": "Ankle Skinny Jeans",
        "brand": "Bonnie",
        "gallery": [
            "https://m.media-amazon.com/images/I/51v4Mq1e-DL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/51lfsTn9BVL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/51myadJjc7L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/61Jy3eOhquL._AC_UX679_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 43.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 60
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 43.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 77.77
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 6510.52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4559.06
            }
        ],
        "description": `<p>MATERIAL: These jeans are crafted from a blend of 92% cotton, 6% polyester, and 2% elastane. The fabric offers a mid stretch, ensuring a comfortable fit while retaining its shape. It combines the natural feel of cotton with the added durability and flexibility of polyester and elastane.</p>
        <p>Imported</p>
        <p>Zipper closure</p>
        <p>Machine Wash</p>
        <p>DESIGN: These jeans feature a skinny leg and a slim fit through the hip and thigh, creating a flattering silhouette. With a high-rise waist, they sit above the waistline for a stylish look.</p>
        <p>Inseam: 27"</p>
        <p>Front Rise: 10"; Back Rise: 14"</p>
        `,
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "denim-joggers",
        "name": "Denim Joggers",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/61v+d3RsdbL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61hhZRIiufL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/51xoqC-rs7L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61p7du-0KYL._AC_UX679_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 76.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 84
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 60.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 108.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9114.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6382.69
            }
        ],
        "description": `<p>Imported</p>
        <p>Drawstring closure</p>
        <p>MATERIAL: These denim joggers for women are made of a blend of 73% cotton, 11% polyester, 2% spandex, and 14% rayon. This polycotton blend offers a comfortable and stretchy fabric that combines the softness of cotton with the durability and flexibility of polyester, spandex, and rayon.</p>
        <p>Denim joggers for women with Basic five pockets</p>
        <p>It is perfect to wear these women's denim jogger pants with most blouses and tops, creating versatile outfit options.</p>
        <p>Women jean joggers and Loose Denim Pants show a fashionable casual look, providing both comfort and style.</p>
        <p>This drawstring jeans for women feature good elasticity, ensuring a comfortable fit and easy adjustment with the drawstring closure.</p>
        `,
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "blake-jeans",
        "name": "Blake Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/91VaNYk9CaL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/91duz6tVtwL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/91+NsMcX1qL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/910yDd7aDDL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/91dUEV0NwcL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A1qNIqoNB2L._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 54.26
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 39
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 69.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5859.47
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4103.16
            }
        ],
        "description": "<p>99% cotton, 1% spandex</p> <p>Imported</p> <p>Dry Clean Only</p><p>Mid-weight stretch denim</p><p>Raw cuffs</p><p>Rise: 11in / 28cm</p><p>Inseam: 26.5in / 67cm</p><p>Leg opening: 15.75in / 40cm</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "skinny-gray-jeans",
        "name": "Skinny Gray Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/81ppgDwXMsL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/814CuyR1X7L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71B-KexLKWL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 97.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 97.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 70.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 125.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10547.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7385.69
            }
        ],
        "description": "<p>70% Cotton, 28% Polyester, 2% Elastane</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Mid rise, slim through hip and thigh with a super skinny leg</p><p>Zip fly and button closure, 5-pockets + belt loops</p><p>Updated j-stitch constructio</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "light-blue-jeans",
        "name": "Light Blue Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/61K5KPwwrBL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71fIhpI4YxL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71YLhRDvY1L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71TFCHnf8HL._AC_UX569_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 50.64
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 50.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 36.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 65.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5468.84
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3829.61
            }
        ],
        "description": "<p>98% Cotton, 2% Spandex</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Environmental friendly washing procedures with biodegradable fabric content to protect our planet.</p><p>Fashionable designer jeans that makes you look and feels amazing.</p><p>Soft and comfortable high quality hand feel.</p><p>Fashionable destruction and wash designs with professional workmanship.</p> ",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "skinny-brown-jeans",
        "name": "Skinny Brown Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/81M9ooEemWL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81x6dYRgW3L._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 34.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 62.22
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5208.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3647.25
            }
        ],
        "description": "<p>58% Cotton, 20.2% Rayon, 13.4% Modal, 6% T400, 2.4% Lycra</p> <p>Imported</p> <p>Snap closure</p><p>28` Inseam, Mid-rise</p>9-1/2` Front rise, 9-3/4` Leg opening for size <p></p><p>UV Protection</p><p>Set-in waistband with loops</p><p>Faux zipper with working button</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "cropped-jeans",
        "name": "Cropped Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/810Uht2h5XL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81ow5KhuDfL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 78.37
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 56.33
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 101.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8463.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5926.78
            }
        ],
        "description": "<p>93% COTTON , 5% POLYESTER , 2% SPANDEX</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>paige vintage</p><p>high rise</p><p>wide leg</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "straight-jeans",
        "name": "Straight Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/91SiZT4HRJL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81vp8lvK+HL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 70.50
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 70.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 51.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 91.77
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7682.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5379.7
            }
        ],
        "description": "<p>100% Cotton</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Machine Wash</p>   <p>Slim through hip and thigh</p> <p>Perfect rise</p> <p>Boot cut</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "darkwash-skinny-jeans",
        "name": "Darkwash Skinny Jeans",
        "brand": "GreenLine",
        "gallery": [
            "https://m.media-amazon.com/images/I/61ITXJBpQ7L._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71mnbTH86nL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71CV1TJTnfL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61p6lXP+lIL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Button closure</p> <p>68% Cotton/23% Polyester/8% Viscose/1% Elastane</p> <p>Imported</p> <p>Wash And Dry Inside Out With Like Colors, Liquid Detergent Is Recommended</p>   <p>Midrise skinny jean with five-pocket styling and button closure</p> <p>Slim through hip and thigh</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "white-denim-joggers",
        "name": "White Denim Joggers",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/51zBqMiWXzL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51-MdWfYTFL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51-MdWfYTFL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51z8ryYsNXL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51z8ryYsNXL._AC_SX569._SX._UX._SY._UY_.jpgs",
            "https://m.media-amazon.com/images/I/51F+UEZPCuL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 34.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 62.22
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5208.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3647.25
            }
        ],
        "description": "<p>Drawstring closure</p> <p>Machine Wash</p> <p>CLOSURE TYPE: Elastic, Drawstring</p> <p>FIT: Athletic, RISE: Low Rise, INSEAM: 27` Inches</p>   <p>2 Front Slip Pockets, 2 Back Slip Pockets</p> <p>75% Cotton, 22% Polyester, 3% Rayon</p> <p>Machine Wash, Tumble Dry</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "torn-lightblue-jeans",
        "name": "Torn Lightblue Jeans",
        "brand": "Bonnie",
        "gallery": [
            "https://m.media-amazon.com/images/I/71DeJoEz5HS._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81i2x63HC6S._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81i2x63HC6S._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71CUseqUGwS._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81LEBe5Sj0S._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81b-nwqN1AS._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71JuCPhl-7S._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 72.34
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 72
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 93.32
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7812.62
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5470.88
            }
        ],
        "description": "<p>99% cotton, 1% spandex</p> <p>Imported</p> <p>Dry Clean Only</p><p>Mid-weight stretch denim</p><p>Raw cuffs</p><p>Rise: 11in / 28cm</p><p>Inseam: 26.5in / 67cm</p><p>Leg opening: 15.75in / 40cm</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "spandex-jeans",
        "name": "Spandex Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/71vaqyuHNaL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71QKUorQvSL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71C7ZdgssgL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 60.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 47.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 85.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7161.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5014.97
            }
        ],
        "description": "<p>70% Cotton, 28% Polyester, 2% Elastane</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Mid rise, slim through hip and thigh with a super skinny leg</p><p>Zip fly and button closure, 5-pockets + belt loops</p><p>Updated j-stitch constructio</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "dark-blue-jeans",
        "name": "Dark Blue Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/71nNJYgb-rS._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/712qX1lyzbS._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/813BIjYiqqS._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/7174jzZBk7S._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 102.49
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 102
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 73.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 132.21
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 11067.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7750.41
            }
        ],
        "description": "<p>98% Cotton, 2% Spandex</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Environmental friendly washing procedures with biodegradable fabric content to protect our planet.</p><p>Fashionable designer jeans that makes you look and feels amazing.</p><p>Soft and comfortable high quality hand feel.</p><p>Fashionable destruction and wash designs with professional workmanship.</p> ",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "skinny-skylight-jeans",
        "name": "Skinny Skylight Jeans",
        "brand": "GreenLine",
        "gallery": [
            "https://m.media-amazon.com/images/I/71sOeCUbSYL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71uonTxmmnL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71uonTxmmnL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91G2d+J-ZAL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 53.05
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 52.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 38.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 68.44
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5729.26
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4011.98
            }
        ],
        "description": "<p>58% Cotton, 20.2% Rayon, 13.4% Modal, 6% T400, 2.4% Lycra</p> <p>Imported</p> <p>Snap closure</p><p>28` Inseam, Mid-rise</p>9-1/2` Front rise, 9-3/4` Leg opening for size <p></p><p>UV Protection</p><p>Set-in waistband with loops</p><p>Faux zipper with working button</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "rush-blue-jeans",
        "name": "Rush Blue Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/61DKSn38RTL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71+vJevvpNL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61MOQWbNPqL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71A0uNQq6OL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91ARjLdPQiL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 34.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 62.22
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5208.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3647.25
            }
        ],
        "description": "<p>93% COTTON , 5% POLYESTER , 2% SPANDEX</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>paige vintage</p><p>high rise</p><p>wide leg</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "root-bear-jeans",
        "name": "Root Bear Jeans",
        "brand": "Bonnie",
        "gallery": [
            "https://m.media-amazon.com/images/I/61aQpRvBUsL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51PGjXKc+PL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51EiGpuEmyL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51nuQC1BxPL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61ixntt48ML._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Cotton</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Machine Wash</p>   <p>Slim through hip and thigh</p> <p>Perfect rise</p> <p>Boot cut</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "coconut-skinny-jeans",
        "name": "Coconut Skinny Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/51vT9tM4mKL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/513nLRIH5jL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51yFIpiXVYL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51XXMZoRBbL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51TzRQACyWL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 102.49
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 102
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 73.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 132.21
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 11067.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7750.41
            }
        ],
        "description": "<p>Button closure</p> <p>68% Cotton/23% Polyester/8% Viscose/1% Elastane</p> <p>Imported</p> <p>Wash And Dry Inside Out With Like Colors, Liquid Detergent Is Recommended</p>   <p>Midrise skinny jean with five-pocket styling and button closure</p> <p>Slim through hip and thigh</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "denim-lightwash-jeans",
        "name": "Denim Lightwash Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/71fYMOX8zUL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71i6D4krS2L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71u-NgmPc8L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71CfD4fBJvL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71cuUJxE92L._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Drawstring closure</p> <p>Machine Wash</p> <p>CLOSURE TYPE: Elastic, Drawstring</p> <p>FIT: Athletic, RISE: Low Rise, INSEAM: 27` Inches</p>   <p>2 Front Slip Pockets, 2 Back Slip Pockets</p> <p>75% Cotton, 22% Polyester, 3% Rayon</p> <p>Machine Wash, Tumble Dry</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "ultimate-gray-jeans",
        "name": "Ultimate Gray Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/511lWgDq82L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61exWjdVEJL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61H0gEf8WVL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61NdRCi8YZL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/611zJxQphEL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 102.49
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 102
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 73.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 132.21
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 11067.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7750.41
            }
        ],
        "description": "<p>99% cotton, 1% spandex</p> <p>Imported</p> <p>Dry Clean Only</p><p>Mid-weight stretch denim</p><p>Raw cuffs</p><p>Rise: 11in / 28cm</p><p>Inseam: 26.5in / 67cm</p><p>Leg opening: 15.75in / 40cm</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "skinny-blue-jeans",
        "name": "Skinny Blue Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/71nJn9LWbAL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71oPlIjs01L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71D45vr7AlL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71D45vr7AlL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81Jhtlmdt3L._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>70% Cotton, 28% Polyester, 2% Elastane</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Mid rise, slim through hip and thigh with a super skinny leg</p><p>Zip fly and button closure, 5-pockets + belt loops</p><p>Updated j-stitch constructio</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "virgo-jeans",
        "name": "Virgo Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/81KAiPvMPSL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81DmUh33e1L._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>98% Cotton, 2% Spandex</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Environmental friendly washing procedures with biodegradable fabric content to protect our planet.</p><p>Fashionable designer jeans that makes you look and feels amazing.</p><p>Soft and comfortable high quality hand feel.</p><p>Fashionable destruction and wash designs with professional workmanship.</p> ",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "skinny-cotton-jeans",
        "name": "Skinny Cotton Jeans",
        "brand": "GreenLine",
        "gallery": [
            "https://m.media-amazon.com/images/I/81OPNvlZ8EL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81vOEiuYdhL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p> <p>Snap closure</p><p>28` Inseam, Mid-rise</p>9-1/2` Front rise, 9-3/4` Leg opening for size <p></p><p>UV Protection</p><p>Set-in waistband with loops</p><p>Faux zipper with working button</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "bay-jeans",
        "name": "Bay Jeans",
        "brand": "Bonnie",
        "gallery": [
            "https://m.media-amazon.com/images/I/A1PazzxAETL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/A1KSGpK3FVL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A1dxVve749L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A1zv3OZLobL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/C1kZGHFasiS._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.89
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 77.52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 55.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 100.48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8411.59
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5890.31
            }
        ],
        "description": "<p>93% COTTON , 5% POLYESTER , 2% SPANDEX</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>paige vintage</p><p>high rise</p><p>wide leg</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "destructed-cut-jeans",
        "name": "Destructed Cut Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/A1gxqnFB6SL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/A15vQPvIA2L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A1OBw-H3CFL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A11Wk4+Ba4L._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Cotton</p> <p>Made in the USA and imported</p> <p>Button closure</p> <p>Machine Wash</p>   <p>Slim through hip and thigh</p> <p>Perfect rise</p> <p>Boot cut</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "portrayal-skinny-jeans",
        "name": "Portrayal Skinny Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/81WfajUC5lL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81-Mg9PmnqL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Button closure</p> <p>68% Cotton/23% Polyester/8% Viscose/1% Elastane</p> <p>Imported</p> <p>Wash And Dry Inside Out With Like Colors, Liquid Detergent Is Recommended</p>   <p>Midrise skinny jean with five-pocket styling and button closure</p> <p>Slim through hip and thigh</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "juneau-jeans",
        "name": "Juneau Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/816Q8kww6tL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81j1ZcO88qL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Drawstring closure</p> <p>Machine Wash</p> <p>CLOSURE TYPE: Elastic, Drawstring</p> <p>FIT: Athletic, RISE: Low Rise, INSEAM: 27` Inches</p>   <p>2 Front Slip Pockets, 2 Back Slip Pockets</p> <p>75% Cotton, 22% Polyester, 3% Rayon</p> <p>Machine Wash, Tumble Dry</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "folk-distressed-jeans",
        "name": " Folk Distressed Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/71az3CxSukL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71qvNtvxnGL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81qxKbKJHYL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71bspXXBPRL._AC_UY741_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>99% cotton, 1% spandex</p> <p>Imported</p> <p>Dry Clean Only</p><p>Mid-weight stretch denim</p><p>Raw cuffs</p><p>Rise: 11in / 28cm</p><p>Inseam: 26.5in / 67cm</p><p>Leg opening: 15.75in / 40cm</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "crisp-white-jeans",
        "name": "Crisp White Jeans",
        "brand": "Bonnie",
        "gallery": [
            "https://m.media-amazon.com/images/I/61JHOWLI4JL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61nHN9-7chL._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.89
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 77.52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 55.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 100.48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8411.59
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5890.31
            }
        ],
        "description": "<p>70% Cotton, 28% Polyester, 2% Elastane</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Mid rise, slim through hip and thigh with a super skinny leg</p><p>Zip fly and button closure, 5-pockets + belt loops</p><p>Updated j-stitch constructio</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "utopia-blue-jeans",
        "name": "Utopia Blue Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/81yCiYxRItS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81jYPO3XhiS._AC_UX569_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>98% Cotton, 2% Spandex</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>Environmental friendly washing procedures with biodegradable fabric content to protect our planet.</p><p>Fashionable designer jeans that makes you look and feels amazing.</p><p>Soft and comfortable high quality hand feel.</p><p>Fashionable destruction and wash designs with professional workmanship.</p> ",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "starbust-jeans",
        "name": "Starbust Jeans",
        "brand": "Arian",
        "gallery": [
            "https://m.media-amazon.com/images/I/910A4NBsmFL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91Birvy4sZL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91y8e9No31L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91zETa1KDxL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>58% Cotton, 20.2% Rayon, 13.4% Modal, 6% T400, 2.4% Lycra</p> <p>Imported</p> <p>Snap closure</p><p>28` Inseam, Mid-rise</p>9-1/2` Front rise, 9-3/4` Leg opening for size <p></p><p>UV Protection</p><p>Set-in waistband with loops</p><p>Faux zipper with working button</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "bonita-jeans",
        "name": "Bonita Jeans",
        "brand": "GreenLine",
        "gallery": [
            "https://m.media-amazon.com/images/I/81lfkZ8jlUL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71Hqfn1h1dL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81g+LYkDtyL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71WUQr-JIOL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71W3g-rrQdL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81MPM2811lL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>93% COTTON , 5% POLYESTER , 2% SPANDEX</p> <p>Imported</p> <p>Zipper closure</p><p>Machine Wash</p><p>paige vintage</p><p>high rise</p><p>wide leg</p>",
        "category": "jeans",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "Small",
                        "displayValue": "Small",
                        "value": "S"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Medium",
                        "displayValue": "Medium",
                        "value": "M"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Large",
                        "displayValue": "Large",
                        "value": "L"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "Extra Large",
                        "displayValue": "Extra Large",
                        "value": "XL"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "hracey-heeled-sandal",
        "name": "Gracey Heeled Sandal",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61bnci+Q1cS._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/51eapABr3-S._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51MRk0nfsHS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/514iSGFbaVS._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61aKuF76JFS._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 65.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 64.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 46.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 83.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7031.36
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4923.79
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "cognac-heeled-sandal",
        "name": "Cognac Heeled Sandal",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/61UWYa19iVS._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61zow61apFS._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61s960y+rUS._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61kCH7cqLQS._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71wSmL0EajS._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 55.46
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 55.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 39.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 71.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5989.68
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4194.34
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "chunky-heels",
        "name": "Chunky Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/51RxUn0alsL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61ZHpedWnvL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51RxUn0alsL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/51uMKzF1jQL._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 67.52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 67.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 48.53
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 87.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7291.78
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5106.15
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "metallic-pointed-heels",
        "name": "Metallic Pointed Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61C86TPa-kL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61JFCG-lrLL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61GSYR40KuL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61THKb4wjxL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71LAcaBUw1L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71A3cx35dXL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 77.89
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 77.52
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 55.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 100.48
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8411.59
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5890.31
            }
        ],
        "description": "<p>Imported</p> <p>Synthetic sole</p>  <p>Heel measures approximately 3.9` inches</p>  <p>Synthetic Material</p>  <p>Pump - Evening</p>  <p>Buckle Closure</p> ",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "wedge-sandal",
        "name": "Wedge Sandal",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/910qTsJzaCS._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61qHk0HPqbL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/717aonPMAdL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/71+sTYAnkyL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71QKdMo17wL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 47.02
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 46.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 33.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 60.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 5078.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 3556.07
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Man Made sole</p>  <p>Platform measures approximately 0.5 inches inches inches</p>  <p>Vegan</p>  <p>Canvas Sock Liner</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "kenley-heeled-sandal",
        "name": "Kenley Heeled Sandal",
        "brand": "Kendal",
        "gallery": [
            "https://m.media-amazon.com/images/I/61bxTwHyk3S._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/614zCHXN5LS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/614zCHXN5LS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51tjrd1RYCS._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61LKSVztPeS._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61pAx0C7BdS._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 76.80
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 84
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 60.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 108.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9114.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6382.69
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p>  <p>Thermoplastic Rubber sole</p>  <p>Heel measures approximately 4.5`</p>  <p>Chunky braided straps</p>  <p>Embellished straps</p>  <p>Slip on Style</p>  <p>Square Open Toe</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "floral-slip-on-dress-sandals",
        "name": "Floral Slip On Dress Sandals",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/719QmCRBnBL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71H7k03bLeL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/612GRRfB1jL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/616UI9qiW4L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71Rg3RkPqEL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/81HQANH0A2L._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 65.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 64.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 46.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 83.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7031.36
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4923.79
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "pastel-light-heels",
        "name": "Pastel Light Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61TDECv5tsL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61J9yAO5ezL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51pRx5tDfuL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61qQ3+WGXBL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61eWMjMJ2QL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Imported</p> <p>Thermoplastic Rubber sole</p>  <p>Heeled Slide Sandal</p>  <p>Thin Double Toe Straps</p>  <p>Square Open Toe</p>  <p>Angled Block Heel</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "transparent-green-heels",
        "name": "Transparent Green Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/612a2-8xVyL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61Q9vAdyRGL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61iNPrUEIRL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61Gr9F8sKrL._AC_SY695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 711.38
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 708
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 511.34
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 917.69
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 76824.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 53796.97
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "supreme-microsuede-heels",
        "name": "Supreme Microsuede Heels",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/81QGjWPFJrL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61xFKJDj2iL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/610GhXdBc-L._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71sOwM4NilL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81QGjWPFJrL._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 81.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 81.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 58.93
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 105.77
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 8854.3
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6200.33
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "astonish-heels",
        "name": "Astonish Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61fpN-3FobL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51FVg9oIJlL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61kfbrtxlEL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51JUCjqohmL._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 73.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 73.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 52.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 94.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7942.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5562.06
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "rainbow-heels",
        "name": "Rainbow Heels",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/61QDekHTMNL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61fN+YkM2OL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61KRy0A8YuL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/51gNDCjJvmL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61mRpwXAV6L._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "brown-camel-heels",
        "name": "Brown Camel Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/715pXs2+wDL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/611-j-RnWOL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/618+dLOGjLL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71+O+ftHhML._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71Pyq7xQbGL._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 94.05
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 93.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 67.6
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 121.32
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 10156.41
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 7112.14
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "orange-pointed-heels",
        "name": "Orange Pointed Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/716gaJHOI0L._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61b00vF7g2L._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/616fo0MteAL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71XLkJrfl7L._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71XLkJrfl7L._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 65.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 64.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 46.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 83.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7031.36
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4923.79
            }
        ],
        "description": "<p>Imported</p> <p>Synthetic sole</p>  <p>Heel measures approximately 3.9` inches</p>  <p>Synthetic Material</p>  <p>Pump - Evening</p>  <p>Buckle Closure</p> ",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "rose-gold-heels",
        "name": "Rose Gold Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/61X4MlFL+8L._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61JoqAHuV9L._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/613Ec2zXzrL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51DOaDRlV5L._AC_SX695._SX._UX._SY._UY_.jpgs",
            "https://m.media-amazon.com/images/I/61KURWly4CL._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Man Made sole</p>  <p>Platform measures approximately 0.5 inches inches inches</p>  <p>Vegan</p>  <p>Canvas Sock Liner</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "green-modern-heels",
        "name": "Green Modern Heels",
        "brand": "Kendal",
        "gallery": [
            "https://m.media-amazon.com/images/I/61GrI4Hra+L._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61xywuRniaL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61OoZmsQ+jL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61OoZmsQ+jL._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p>  <p>Thermoplastic Rubber sole</p>  <p>Heel measures approximately 4.5`</p>  <p>Chunky braided straps</p>  <p>Embellished straps</p>  <p>Slip on Style</p>  <p>Square Open Toe</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "champagne-heels",
        "name": "Champagne Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/71ANodQAwrL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71slhNcu9jL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/81DyOCq6QuL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/8171xSThRgL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/81lagkXhSmL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 80.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 88.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 64.13
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 115.1
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 9635.57
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 6747.42
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "pistachio-heels",
        "name": "Pistachio Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/91yCPbhQ-ZL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/716DrQIwR8L._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81L8BsqPkNL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81nZxAGqmrL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91yCPbhQ-ZL._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 73.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 73.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 52.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 94.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7942.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5562.06
            }
        ],
        "description": "<p>Imported</p> <p>Thermoplastic Rubber sole</p>  <p>Heeled Slide Sandal</p>  <p>Thin Double Toe Straps</p>  <p>Square Open Toe</p>  <p>Angled Block Heel</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "creme-heels",
        "name": "Creme Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61zTurqmT8L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/51rXJVx14hL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51wStuPpykL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61OFzMQ24ML._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61w7ApwlabL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "rose-pink-heels",
        "name": "Rose Pink Heels",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/71w33NUxWPL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/613ox-KitaL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71KbykvvOsL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71PRdTzW2ZL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71WTn9JH26L._AC_SX679._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "black-heels",
        "name": "Black Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/91osfEjv02L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/81dxBtyPocL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61jgdhBHVZL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/810+bN-KWHL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/91WSG+-QekL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "block-heeled-sandal",
        "name": "Block Heeled Sandal",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/614pVFoVNyL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/51ZzYtQIw2L._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51WFwbwsG-L._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61AV7aO9IzL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61SCuyXaZ5L._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "lesa-heels",
        "name": "Lesa Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/813KUbI1h-S._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71H9MMng+LS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/715MPzOtSrS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/81lfgEW94fS._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/81lfgEW94fS._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 65.11
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 64.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 46.8
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 83.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7031.36
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 4923.79
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "cambredge-pump-heels",
        "name": "Cambredge Pump Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/51lSLFGOTIS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61rw7sbWmFS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61VgYUIKJJL._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Imported</p> <p>Synthetic sole</p>  <p>Heel measures approximately 3.9` inches</p>  <p>Synthetic Material</p>  <p>Pump - Evening</p>  <p>Buckle Closure</p> ",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "lipstick-cambredge-pump-heels",
        "name": "Lipstick Cambredge Pump Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/71MiR0OuneL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61JL3zGpgcL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61nLwBi2LpL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71hi3pPDY+L._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71hi3pPDY+L._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Man Made sole</p>  <p>Platform measures approximately 0.5 inches inches inches</p>  <p>Vegan</p>  <p>Canvas Sock Liner</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "woven-heeled-sandal",
        "name": "Woven Heeled Sandal",
        "brand": "Kendal",
        "gallery": [
            "https://m.media-amazon.com/images/I/61ZGci0gshL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61WRSSt3bSL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51hwD18KbvL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61sNSm2e21L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61D8AhvJXmL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 68.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 68.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 49.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 88.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7421.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5197.33
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p>  <p>Thermoplastic Rubber sole</p>  <p>Heel measures approximately 4.5`</p>  <p>Chunky braided straps</p>  <p>Embellished straps</p>  <p>Slip on Style</p>  <p>Square Open Toe</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "blue-uplift-sandals",
        "name": "Blue Uplift Sandals",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/61D8AhvJXmL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61hxCFOoL9L._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61UmXz2spBL._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "acrylic-high-heels",
        "name": "Acrylic High Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/51JxP2NbezL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51i4nJnx7gL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61jpCDPYjjL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51F01uv6e-L._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 73.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 73.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 52.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 94.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7942.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5562.06
            }
        ],
        "description": "<p>Imported</p> <p>Thermoplastic Rubber sole</p>  <p>Heeled Slide Sandal</p>  <p>Thin Double Toe Straps</p>  <p>Square Open Toe</p>  <p>Angled Block Heel</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "miami-pink-heels",
        "name": "Miami Pink Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61l8YarWQnL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51H8Mf7OjcL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51Wq4vzTvHL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/613IwgAnBLL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/613IwgAnBLL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 68.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 68.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 49.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 88.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7421.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5197.33
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "platform-sandals",
        "name": "Platform Sandals",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/51DzSY+d6+L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/41gC6f+46DL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/41dVBtha10L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/510LbNKE6oL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "square-open-toe-heels",
        "name": "Square Open Toe Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/51p1GEFRxRS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/710amr0hObS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/6152xJlgBvS._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51ypkCemTzS._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "slingback-heeled-sandal",
        "name": "Slingback Heeled Sandal",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/614-aYQEVAL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/61TB4r89oGL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61wwQvlprEL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/71cCPbYqQ7L._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71rtDGrV06L._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Leather sole</p>  <p>Heeled Sandal</p>  <p>Stilleto Heel</p>  <p>Square Toe</p>  <p>Thin Strappy Upper</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "bright-purple-heels",
        "name": "Bright Purple Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/61dmuj8QKUL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51mNM+9PiRL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/81AQSAKj13L._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/71JzelDOsZL._AC_UY695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 68.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 68.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 49.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 88.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7421.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5197.33
            }
        ],
        "description": "<p>Made in USA and Imported</p> <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.  </p><p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>  <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear. </p>  <p>Classic design that is sure to compliment every modern woman's wardrobe</p>  <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "transparent-pointed-heels",
        "name": "Transparent Pointed Heels",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/71XA7SEzl6L._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/71Xjph9DTyL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/712-6THTECL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/71YpmCEzziL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71YpmCEzziL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Imported</p> <p>Synthetic sole</p>  <p>Heel measures approximately 3.9` inches</p>  <p>Synthetic Material</p>  <p>Pump - Evening</p>  <p>Buckle Closure</p> ",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "starie-sandal",
        "name": "Starie Sandals",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/710EDruU6YL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/71YAawOORvL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/61ym66G1DeL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/71ZnqgeuAGL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 68.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 68.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 49.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 88.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7421.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5197.33
            }
        ],
        "description": "<p>100% Synthetic</p> <p>Imported</p>  <p>Man Made sole</p>  <p>Platform measures approximately 0.5 inches inches inches</p>  <p>Vegan</p>  <p>Canvas Sock Liner</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "tan-fine-suede-heeled-sandal",
        "name": "Tan Fine Suede Heeled Sandal",
        "brand": "Kendal",
        "gallery": [
            "https://m.media-amazon.com/images/I/51wFh7g+sxL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/511a4kYK6PL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/518ektnbPvL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51CsPL0wwZL._AC_SY695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 73.55
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 73.2
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 52.87
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 94.88
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7942.83
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5562.06
            }
        ],
        "description": "<p>100% Cotton</p> <p>Imported</p>  <p>Thermoplastic Rubber sole</p>  <p>Heel measures approximately 4.5`</p>  <p>Chunky braided straps</p>  <p>Embellished straps</p>  <p>Slip on Style</p>  <p>Square Open Toe</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "leopard-heels",
        "name": "Leopard Heels",
        "brand": "Bonita",
        "gallery": [
            "https://m.media-amazon.com/images/I/71IB8QDupdL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/7161MncphbL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71vBp3myHHL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81uhIOqnGBL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81uhIOqnGBL._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": false,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Faux Suede</p> <p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "cruella-slide-sandal",
        "name": "Cruella Slide Sandal",
        "brand": "Camilia",
        "gallery": [
            "https://m.media-amazon.com/images/I/51HcwSBMdIL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/41HlmhPu8JL._AC_UY695_.jpg",
            "https://m.media-amazon.com/images/I/51Olv3YkeCL._AC_UX695_.jpg",
            "https://m.media-amazon.com/images/I/51XEZa6FgvL._AC_UX695_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Imported</p> <p>Thermoplastic Rubber sole</p>  <p>Heeled Slide Sandal</p>  <p>Thin Double Toe Straps</p>  <p>Square Open Toe</p>  <p>Angled Block Heel</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "ankle-strap-heels",
        "name": " Ankle Strap Heels",
        "brand": "Stacy",
        "gallery": [
            "https://m.media-amazon.com/images/I/61bDFV0U2LS._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/615KE2RK+nS._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/417in3E3hVS._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51hZACPwe3S._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51rLVLO59CS._AC_SY695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 68.73
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 68.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 49.4
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 88.66
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 7421.99
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 5197.33
            }
        ],
        "description": "<p>Made in USA and Imported</p>\n      <p>Lightweight and lifted. Perfect boost in height and these are wearable all day long.</p>\n      <p>Ultra lightweight design featuring a buckle enclosure to perfectly hug your feet.</p>\n      <p>Featuring a cute strap that hug your ankle for custom support and provides a comfort throughout wear.</p>\n      <p>Classic design that is sure to compliment every modern woman's wardrobe</p>\n      <p>Heel 2.75”. Runs true to size</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    },
    {
        "__typename": "Product",
        "id": "silver-glitter-heels",
        "name": "Silver Glitter Heels",
        "brand": "Underground",
        "gallery": [
            "https://m.media-amazon.com/images/I/61QsY3khENL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61mdULtPgoL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61uqzK9vaoL._AC_SY695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71gVYECZULL._AC_SX695._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71J2Vw9Y77L._AC_SX695._SX._UX._SY._UY_.jpg"
        ],
        "inStock": true,
        "prices": [
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "USD",
                    "symbol": "$"
                },
                "amount": 110.90
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "EUR",
                    "symbol": "€"
                },
                "amount": 120
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "GBP",
                    "symbol": "£"
                },
                "amount": 86.67
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "AUD",
                    "symbol": "A$"
                },
                "amount": 155.54
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "JPY",
                    "symbol": "¥"
                },
                "amount": 13021.04
            },
            {
                "__typename": "Price",
                "currency": {
                    "__typename": "Currency",
                    "label": "RUB",
                    "symbol": "₽"
                },
                "amount": 9118.13
            }
        ],
        "description": "<p>Faux Suede</p><p>Imported</p>  <p>Suede sole</p>  <p>Heel measures approximately 3.91 inches</p>  <p>Faux Suede Material</p>  <p>Sandal - Heeled</p>  <p>Elastic Closure</p>",
        "category": "shoes",
        "attributes": [
            {
                "__typename": "AttributeSet",
                "id": "Size",
                "name": "Size",
                "type": "text",
                "items": [
                    {
                        "__typename": "Attribute",
                        "id": "39",
                        "displayValue": "39",
                        "value": "39"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "40",
                        "displayValue": "40",
                        "value": "40"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "41",
                        "displayValue": "41",
                        "value": "41"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "42",
                        "displayValue": "42",
                        "value": "42"
                    },
                    {
                        "__typename": "Attribute",
                        "id": "43",
                        "displayValue": "43",
                        "value": "43"
                    }
                ]
            }
        ]
    }
]


const currenciesObj = [
    {
        "__typename": "Currency",
        "label": "USD",
        "symbol": "$"
    },
    {
        "__typename": "Currency",
        "label": "EUR",
        "symbol": "€"
    },
    {
        "__typename": "Currency",
        "label": "GBP",
        "symbol": "£"
    },
    {
        "__typename": "Currency",
        "label": "AUD",
        "symbol": "A$"
    },
    {
        "__typename": "Currency",
        "label": "JPY",
        "symbol": "¥"
    },
    {
        "__typename": "Currency",
        "label": "RUB",
        "symbol": "₽"
    }
];


export { currenciesObj, itemsObj, categoriesObj };