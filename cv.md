## Name  
*Stanislav Tikhomirov*  

## Contacts 

  * Location  
    *Russian Federation, Moscow*  
  * GitHub  
    *@PrideByte*  
  * E-mail  
    *alpha5.2\[at\]mail.ru*  

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
  3. **Sass**  
  4. **JS**  
  5. **Gulp**  
  6. **Visual Studio Code**  
  7. **Git & GitHub**  

## Few examples  

  *Sass*
```
//********Mixins**********
@mixin openSans {
  font-family: "Open Sans", sans-serif;
}

...

//********Variables********
$fsz-logo: 32px;
$lh-logo: $fsz-logo * 1.875;

...

$clr-orange-main: #cd6326;
$clr-orange-light: #e39128;
$clr-orange-dark: #8f5613;

...

.logo {
  display: flex;
  @include Roboto;
  font-size: $fsz-logo;
  line-height: $lh-logo;
  text-transform: uppercase;

  &__img {
    width: 70px;
    height: 60px;
  }

  &__text {
    margin-left: 15px;
  }
}

...

```

  *JS*
```
const btn = document.querySelector(".submit");

btn.onclick = function () {
  const text = document.querySelector(".text");
  const result = document.querySelector(".result");
  let number = text.value;
  result.innerText = "";
  
  if (isNaN(number) || number < 1) {
    result.innerText = "Input is NaN or less than 1!";
    return;
  }

  for (let i = 1; i <= number; i++) {
    let stroke = "";
    if (i % 3 == 0) {stroke += "Fizz"}
    if (i % 5 == 0) {stroke += "Buzz"}
    if (stroke == "") {stroke += i}

    result.innerHTML += `${stroke} `;
  }
}
```

## Education  
**2005 - 2010** Moscowskiy Gosudarstvenniy College Informacionnyh Technologiy (MGKIT)  
   *Specialty* 2203 - Software of Engineering and Automated Systems

