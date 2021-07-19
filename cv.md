## Name  
*Stanislav Tikhomirov*  

## Contacts 

  * Location  
    *Russian Federation, Moscow*  
  * GitHub  
    *@PrideByte*  
  * Discord  
    *Grandosss#0882*  

## About  
Junior Web-developer with few month of experience. I like to learn web technologies, 
because every time when i make something with my own hands 
makes me feel like a **God** that creating a new world.  
I'm trying to stick to this *helpfull* and *usefull* [Roadmap](https://github.com/kamranahmedse/developer-roadmap), 
but sometimes i can be distracted to study new interesting technologies like **SVG-animations (SMIL)**, 
**CSS-animations**, **Canvas** or usefull dev tools like **Gulp** etc.  
My "final" target is to learn *Frontend* and *Backend Development* 
and merge **HTML**, **CSS**, **JS** and **WebGL** technologies in amount sufficient to be able to make amazing and creative websites.  

## Used Tools and Technologies  
  1. **HTML5**
  2. **CSS3**
  3. **SCSS**
  4. **JS**
  5. **Gulp**
  6. **Visual Studio Code**
  7. **Git & GitHub**
  8. **Adobe Photoshop**
  9. **Figma**

## Few examples  

  *Sass*
```
//******Variables******
$base: 4px;

$size-1000: 1045px;

...

$clr-orange-main: #cd6326;
$clr-orange-light: #e39128;
$clr-orange-dark: #8f5613;

...

//******Fonts******
@font-face {
  font-family: "Icomoon";
  src: url("../fonts/icomoon.eot?cmych7");
  src: url("../fonts/icomoon.eot?cmych7#iefix") format("embedded-opentype"),
    url("../fonts/icomoon.ttf?cmych7") format("truetype"),
    url("../fonts/icomoon.woff?cmych7") format("woff"),
    url("../fonts/icomoon.svg?cmych7#icomoon") format("svg");
  font-display: swap;
}

@mixin Icomoon {
  font-family: "Icomoon", sans-serif;
}

...

//******Fonts - Fluid Typography******
:root {
  --fsz-xxsmall: 16px;

  ...

  --fsz-multiplier: 0.6;
}

@mixin fsz-xxsmall {
  font-size: var(--fsz-xxsmall);

  @media screen and (max-width: $size-1000) {
    font-size: clamp(
      calc(var(--fsz-xxsmall) * var(--fsz-multiplier)),
      calc((var(--fsz-xxsmall) * var(--fsz-multiplier)) + 1vw),
      var(--fsz-xxsmall)
    );
  }
}

...

.dashed {
  &__title {
    @include fsz-large;
  }

  &__text {
    position: relative;
    @include fsz-xsmall;
    font-weight: $fw-light;
    padding-bottom: $base * 4;
    margin-bottom: $base * 10.5;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: $base * 12.5;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-top: $base solid $clr-gray-800;
    }
  }
}
```

  *JS*
```
function fizzBuzz(length) {
  if (isNaN(length) || length < 1) {
    console.log("Input is NaN or less than 1!");
  }

  for (let i = 1; i <= length; i++) {
    console.log((((i % 3 === 0) ? "Fizz" : "") + ((i % 5 == 0) ? "Buzz" : "")) || i);
  }
}

fizzBuzz(30);
```

## Education  
**2005 - 2010** Moscowskiy Gosudarstvenniy College Informacionnyh Technologiy (MGKIT)  
   *Specialty* 2203 - Software of Engineering and Automated Systems

## English level
Intermediate A2. Free reading of Technical Documentation and watching Technical Broadcasts/Videos.
