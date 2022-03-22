# vidometer-viewer v1.0.0

![https://bettar.life/viewer/assets/vidometer-viewer.jpg](https://bettar.life/viewer/assets/vidometer-viewer.jpg)

**vidometer-viewer** is a lightweight library for Augmented Reality based on the World Tracking feature of **bettar-vidometry** library.

This library is created to simplify using AR world tracking experience on the web.
In a few lines of the code, you can integrate AR reality experience in your web application to provide an exciting AR experience for the users.

## vidometer-viewer-demo

![https://bettar.life/viewer/assets/vidometer-viewer.gif](https://bettar.life/viewer/assets/vidometer-viewer.gif)

This example project shows how to integrate **vidometer-viewer** into your web application.

You can check [live example](https://bettar.life/viewer/).

### Installation

Execute the following command in order to install dependencies:

```tsx
npm i
```

or

```tsx
yarn install
```

### Building application

Execute following command in order to build:

```tsx
npm run build
```

or

```tsx
yarn build
```

### Development

Execute the following command in order to run the application in development mode:

```tsx
npm run start
```

or

```tsx
yarn start
```

Run the following URL on your mobile device:

```tsx
https://localhost:8080
```

# vidometer-viewer integration

In order to add vidometer-viewer on your site you need the following actions:

1. Add the following JS script in the **head** section:

```tsx
<head>
	...
	<script src="https://bettar.life/vidometry/vidometer-viewer.1.0.0.js"></script>
	...
</head>
```

1. Add the following attributes to the initial button:
    1. **vidometer-viewer** - it indicates that this element is a trigger for launching the viewer. vidometer-viewer.js code is searching all elements with vidometer-viewer attributes and adding **onclick** event;
    2. **viewer-src** - it’s the source path to the 3D **GLB** file which you want to show.

```tsx
<div vidometer-viewer 
	viewer-src="https://bettar.life/viewer/assets/astro.glb">

	View in your space

</div>
```

1. Optionally you can add Google Analytics to the vidometer-viewer. In order to add this you need to add following attributes:
    1. **viewer-gid** - Google Analytics Tracking ID;
    2. **viewer-gpage** - name of page (optionally);
    3. **viewer-glabel** - event label (optionally).

```tsx
<div vidometer-viewer 
	viewer-src="https://bettar.life/viewer/assets/astro.glb" 
	viewer-gid="UA-XXXXXXXX-X" 
	viewer-gpage="astro"
  glabel='{"category": "product", "label": "sku01"}'>

	View in your space

</div>
```

1. You can align your model programmatically. You can open your experience on desktop browser. There are 3 axes: x - red, y - green, z - blue.
    1. **viewer-position** - “x y z” shifting model by x, y, z axes (meters);
    2. **viewer-scale** -  “s” scaling model;
    3. **viewer-rotation** - “x y z” rotation model by x, y, z axes (degrees).

```tsx
<div vidometer-viewer 
	viewer-src="https://bettar.life/viewer/assets/astro.glb" 
	viewer-gid="UA-XXXXXXXX-X" 
	viewer-gpage="astro"
  glabel='{"category": "product", "label": "sku01"}'
	viewer-position="0.2"
	viewer-scale="0.5"
	viewer-rotation="0 90 0">

	View in your space

</div>
```

![https://bettar.life/viewer/assets/desktop.jpg](https://bettar.life/viewer/assets/desktop.jpg)

**Complete example:**

```tsx
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vidometer Viewer Demo</title>
  <script src="https://bettar.life/vidometry/vidometer-viewer.1.0.0.js"></script>
</head>

<body>
  <div style="position: absolute; left: 2vh; right: 2vh; top: 2vh; height: 40vh; background: #CCC; border-radius: 5px;">

    <div
      style="background-image: url(https://bettar.life/viewer/assets/tree.png); background-repeat: no-repeat; background-size: contain; width: 100%; height: 100%;">
    </div>

		<div vidometer-viewer 
			viewer-src="https://bettar.life/viewer/assets/astro.glb" 
			viewer-gid="UA-XXXXXXXX-X" 
			viewer-gpage="astro"
		  glabel='{"category": "product", "label": "sku01"}'
			viewer-position="0.2"
			viewer-scale="0.5"
			viewer-rotation="0 90 0"
			style="position: absolute; right: 10px; top: 10px; border: 1px solid #444; border-radius: 10px; padding: 8px; background-color: #ffffffcc;">
		
			View in your space
		
		</div>

  </div>

  <div
    style="position: absolute; left: 2vh; right: 2vh; top: 50vh; height: 40vh; background: #CCC; border-radius: 5px;">

    <div
      style="background-image: url(https://bettar.life/viewer/assets/astro.png); background-repeat: no-repeat; background-size: contain; width: 100%; height: 100%;">
    </div>

    <div vidometer-viewer 
			viewer-src="https://bettar.life/viewer/assets/astro.glb" 
			viewer-gid="UA-XXXXXXXX-X" 
			viewer-gpage="astro"
      viewer-glabel='{"category": "product", "label": "sku02"}'
      style="position: absolute; right: 10px; top: 10px; border: 1px solid #444; border-radius: 10px; padding: 8px; background-color: #ffffffcc;">

      View in your space

    </div>

  </div>
</body>

</html>
```

## Troubleshooting, community

**You can find a help on the [vidometer-viewer repositories issues](https://github.com/MogulAR-BettAR/demo-vidometer-viewer/issues). Please search on open/closed issues, you may find useful information.**

### Issues

If you are having configuration or setup problems, please post a question to [StackOverflow](https://stackoverflow.com/search?q=vidometer-viewer).

You can also [Email Us](mailto:mogulardev@gmail.com) your questions.