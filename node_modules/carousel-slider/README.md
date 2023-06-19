# carousel-slider
[![Known Vulnerabilities](https://snyk.io/test/github/brentoncozby/carousel-slider/badge.svg?targetFile=package.json)](https://snyk.io/test/github/brentoncozby/carousel-slider?targetFile=package.json)

### Supported Features
- Multiple carousels on the same page
- AutoSlide, with ability to change the time interval
- Looks good on all screen sizes
  * Option to break slides out of carousel-slider and stack them on top of each other (useful for small screens)

### Get Started
```
npm install --save carousel-slider
```
```html
<!-- CDN. The CSS and JS files are both required. -->

<link rel="stylesheet" href="https://cdn.rawgit.com/BrentonCozby/carousel-slider/4052c74e/dist/carousel.min.css">

<script src="https://cdn.rawgit.com/BrentonCozby/carousel-slider/4052c74e/dist/carousel.js"></script>
```

### Requirements
- jQuery

### Easy setup
1. Link ```carousel.min.css``` in the Head
2. Place ```carousel.js``` in a script tag at the bottom of the body
3. Copy the HTML code below and insert your content in the carousel-items

### Usage
Copy following HTML and insert your content into each carousel-item.
```html
<div class="carousel">
    <div id="left-btn" class="left-btn">‹</div>
    <div id="right-btn" class="right-btn">›</div>
    <div class="dots"></div>
    <div class="carousel-item">
        <!-- Your content goes here -->
    </div>
    <div class="carousel-item">
        <!-- Your content goes here -->
    </div>
    <div class="carousel-item">
        <!-- Your content goes here -->
    </div>
    <div class="carousel-item">
        <!-- Your content goes here -->
    </div>
</div>
```

### Example: background image with content
```html
<!-- Add your background image in the style tag -->
<div class="carousel-item" style="background-image: url('some-image.jpg')">
    <h1>Click this button</h1>
    <button>Button</button>
</div>
```
```css
#myCarousel {
    padding-bottom: 40%: /* sets carousel height */
}
```

### JavaScript Options
Each carousel automatically slides to its next carousl-item every 5 seconds. To change this time, use the ```waitTime()``` function and pass it a number in milliseconds.
```javascript
$('#myCarousel')[0].waitTime(5000)
```
To stop a carousel from automatically sliding:
```javascript
$('#myCarousel')[0].stopAutoSlide()
```
Stack each slide on top of each other (good for phone screens):
```javascript
if($(window).width() < 768) {
    $('#myCarousel')[0].stackSlides()
}
```
