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
        "id": "bodycon-dress",
        "name": "Bodycon Dress",
        "brand": "Gracie",
        "gallery": [
            "https://m.media-amazon.com/images/I/61TWz0yJnOL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/616wnVzFxjL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61GEW3qKVZL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61cy1VPYMqS._AC_SX569._SX._UX._SY._UY_.jpg"
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
                "amount": 96.46
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
        "id": "teal-silk-dress",
        "name": "Teal Silk Dress",
        "brand": "Caty",
        "gallery": [
            "https://m.media-amazon.com/images/I/51zWVtdUbSS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/41s0MQMGbQS._AC._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/51Nepe2juBS._AC._SX._UX._SY._UY_.jpg"
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
                "amount": 66.32
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
        "id": "relaxed-dress",
        "name": "Relaxed Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71oGZQ8Uz5L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71UD0caWruL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/817AYYmIIHL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81sGgUYUQUL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81TXKrza+ZL._AC_UY741_.jpg"
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
                "amount": 90.43
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
        "name": "Pink Casual Dress",
        "brand": "Guppi",
        "gallery": [
            "https://m.media-amazon.com/images/I/71eIBJPwb7L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71+7daxyWvL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91vYh6yLbIL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91vYh6yLbIL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61ctKppNaYL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81Wvl78GfOL._AC_SY741._SX._UX._SY._UY_.jpg"
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
        "id": "neck-tiered-dress",
        "name": "Neck Tiered Dress",
        "brand": "Lasio",
        "gallery": [
            "https://m.media-amazon.com/images/I/81VHA1oRgCS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81bvrae6d1S._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/91fAmqJZ9YS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81eVAufhAdS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/A1KgjH-OiqS._AC_UY741_.jpg"
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
                "amount": 71.14
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
            "https://m.media-amazon.com/images/I/91c4PZcpTGL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/813dw4g0pLL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81fo0dE9UmL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81eWqNrdsIL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81H4XuXFD+L._AC_UY741_.jpg"
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
        "brand": "Gracie",
        "gallery": [
            "https://m.media-amazon.com/images/I/71f-dYQ2lcL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/719-KClPYGL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/91uiqSfKe2L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71lTA41475L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71MHKEbqVtL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71+HQ0prccL._AC_UY741_.jpg"
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
            "https://m.media-amazon.com/images/I/61LshhuLcvL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/6172jvSgYYL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81-ecThLtyL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71y3zGU4bpL._AC_UY741_.jpg"
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
                "amount": 48.23
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 96.46
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
        "brand": "Gracie",
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
                "amount": 66.32
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
                "amount": 66.32
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
        "id": "strap-top",
        "name": "Strap Top",
        "brand": "Noisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81SnSIRLCuL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/817W21M16cL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81KnP2OMtrL._AC_UY741_.jpg"
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
                "amount": 89.22
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
        "id": "tulip-sleeve-casual-top",
        "name": "Tulip Sleeve Casual Top",
        "brand": "D&D",
        "gallery": [
            "https://m.media-amazon.com/images/I/91bp3rhKK8L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81O6PHz2MlL._AC_UX569_.jpg"
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
                "amount": 56.67
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
        "id": "sleeveless-blouse",
        "name": "Sleeveless Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/51IEXtTMwtL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/51YoKQOK-GL._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/61iQI6eNiKL._AC_UX569_.jpg"
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
                "amount": 74.76
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
        "id": "long-sleeve-white-blouse",
        "name": "Long Sleeve White Blouse",
        "brand": "Petite",
        "gallery": [
            "https://m.media-amazon.com/images/I/51jfpd0FzJL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/51Fk4ia0WdL._AC_UX569_.jpg"
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
                "amount": 100.08
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
        "id": "floral-blouse",
        "name": "Floral Blouse",
        "brand": "Daisy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81bqNwbjTmL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/916pQoRXi-L._AC_UX569_.jpg"
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
                "amount": 90.43
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
        "id": "obsession-top",
        "name": "Obsession Top",
        "brand": "Candy",
        "gallery": [
            "https://m.media-amazon.com/images/I/81EK-f-CV6L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81dbiI0n0ML._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/812mNGxKW5L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71AF7gW7UbL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/91d9Dng1ddL._AC_UY741_.jpg"
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
                "amount": 120.57
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
                "amount": 96.46
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
                "amount": 60.29
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
                "amount": 84.4
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
                "amount": 89.22
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
                "amount": 56.67
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
                "amount": 48.23
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
                "amount": 100.08
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
                "amount": 90.43
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 89.22
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
                "amount": 56.67
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
                "amount": 74.76
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
                "amount": 100.08
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
                "amount": 90.43
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
            "https://m.media-amazon.com/images/I/71TM45pZkOL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/71aOovHJIaL._AC_UX679_.jpg"
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
                "amount": 48.23
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
            "https://m.media-amazon.com/images/I/71OlvIHA2bL._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/716b1pRRARL._AC_UX679_.jpg"
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
                "amount": 60.29
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
            "https://m.media-amazon.com/images/I/5135OuYRbrL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/51426JTjUEL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/51nclohjxcL._AC_UY741_.jpg"
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
                "amount": 84.4
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
                "amount": 48.23
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
                "amount": 71.14
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
                "amount": 120.57
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
                "amount": 48.23
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
                "amount": 66.32
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
                "amount": 48.23
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 84.4
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 89.22
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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
                "amount": 120.57
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