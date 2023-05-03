# Project: NOOR Coffee Website

### Date: Sep - 2020

### Functions

- Homepage
- List of products
- Display store in Maps
- Scan QR Code to delivery on Grab & Loship
- Membership form
- Feedback form
- About us (coming soon)
- Blog (coming soon)

### Screenshot

<img src="https://i.imgur.com/VxRqALz.png" alt="noor-coffee-website"/>

### Next Steps:

- can't use navbar on IOS `./components/navbar`
- Layout broken on IOS `pages/homepage`
- Change smaller star icon for IOS devices `pages/feedback`
- Add information on `page/about`
- Add `pages/blog`

### Directory Structure

```
.
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── deploy-firebase
├── .firebaserc
├── firebase.json
├── public
└── src
    ├── assets
        └── img
    ├── components
        ├── Footer
        ├── InfoSecFeedback
        ├── InfoSecRegisterMember
        ├── InfoSection
        ├── InfoSectionFull
        ├── Navbar
        ├── Products
            └── ProductList
                └── Product
        ├── StoreMaps
            └── Maps
        ├── UI
            ├── Spinner
            ├── NotFound
            └── index.js
        ├── ScrollToTop.jsx
        └── index.js
    ├── lib
        └── firebase.js
    ├── pages
        ├── About
        ├── Blog
        ├── Feedback
        ├── Grab
        ├── HomePage
        ├── Loship
        ├── Membership
        ├── Products
        └── Stores
    ├── App.js
    ├── GlobalStyles.js
    ├── utils.js
    └── index.js
```

For the project to build, these must exist with exact filenames:

- `public/index.html` is the page template
- `src/index.js` is the entry point
- `src/GlobalStyles.js` is the Global Styles
- `src/App.js` is the Router

## Installation Guide

### Tech-Stack

- React Hooks
- react-router-dom
- styled-components
- Firebase
- react-icons
- leaflet
- react-leaflet
- react-lazy-load-image-component
- react-sticky-box
- react-rating-stars-component
- img design from https://undraw.co/

### Production

- Clone this project

```
git clone https://github.com/tinspham209/noor-coffee
```

- Install dependencies

```
npm install
```

- Start the server

```
npm start
```

### Development

- Clone this project
- Install dependencies

```
npm install
```

- Start packager

```
npm start
```

### Components function:

- **InfoSection**
- **InfoSectionFull** : is InfoSection, Full height & children in center
- **StoreMaps**: is InfoSection, and have custom Maps
- **Maps**: OpenStreetMaps custom Maps component
- **Products**: bem Layout to Left Right
- **ProductList**: List of Products
- **Product**: product information

### How to name a folder and a file

- Folder name: - Ex: `InfoSection`
- Component file name: should be -- Ex: `InfoSection.jsx`
- Style component file name: should be -- Ex: `InfoSection.elements.js`

### How to import and export module?

- Import:

```js
//import every thing
import * as React from "react";
import * as ReactDOM from "react-dom";

//for default export
import InfoSection from "./InfoSection";

//for named export
import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to style for each component?

- Create a styled-component file. Ex: `InfoSection.elements.js`
- Import to `jsx` file

```js
// InfoSection.jsx

import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to update new product

```js
// src/pages/Products/Data.js

export const products = {
	lightBg: false,
	lightText: true,
	lightTextCard: false,
	buttonLabel: "Chi tiết",
	productList: [
		{
			id: "special", // need to update
			headlineName: "Nổi bật", // need to update

			products: [
				{
					cardTitle: "Cà phê Noor", // need to update
					img: require("../../assets/img/products/cf-que.jpg"), // need to update
					description: "25.000Đ", // need to update

					urlLinkBtn: "/products",
					newProduct: true, // need to update
					trend: true, // need to update
				},
			],
		},
	],
};
```

- `id`: ID for onScrollToView
- `headlineName`: name of productList
- `cardTitle`: name of product
- `img`: url link image of product
- `description`: price of product
- `newProduct`: an Label tag for new product
- `trend`: an Label tag for Best Seller product

### How to update Marker, Popup, Tooltip on Maps

- Contact me !

### How to update InfoSection

- Contact me !

### How to update InfoSectionFull

- Contact me !

### How to update InfoSecFeedback

- Contact me !

### How to update InfoSecRegisterMember

- Contact me !

### How to deploy to firebase hosting

- Contact me !

### How to get firebaseConfig

- Contact me !

### How to POST data to Firestore

- Contact me !

### How to export data from Firestore to Google Sheets

- Contact me !
