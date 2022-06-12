## Name  
*Stanislav Tikhomirov*  

## Contacts 

  * Location  
    *Russian Federation, Moscow*  
  * GitHub  
    *@PrideByte*  
  * E-mail  
    alpha5.2@mail.ru
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
  5. **Webpack**
  5. **Wordpress**
  6. **Visual Studio Code**
  7. **Git & GitHub**
  8. **Adobe Photoshop**
  9. **Figma**

## Code examples 

  *[FizzBuzz](https://www.codewars.com/kata/5300901726d12b80e8000498) task from Codewars:*
```
function fizzBuzz(length) {
  if (isNaN(length) || length < 1) {
    console.log("Input is NaN or less than 1!");
    return;
  }

  for (let i = 1; i <= length; i++) {
    console.log((((i % 3 === 0) ? "Fizz" : "") + ((i % 5 == 0) ? "Buzz" : "")) || i);
  }
}

fizzBuzz(30);
```

  *[Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038) task from Codewars:*
```
function DNAStrand(dna){
  let dictionary = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  
  let result = '';
  
  for (let i = 0; i < dna.length; i++) {
    result += dictionary[dna[i]];
  }
  
  return result;
}
```

## Completed projects (or not)
**Business Layout**  
[Link](https://pridebyte.github.io/projects/business-layout/)  
Simple landing page layout. Aside from making the website layout, was added a feature that highlights menu options as the page is scrolled, and smoothly moving the page to the chosen menu option.

Work with scroll, debounce, css-animations.

**Dragon curve**  
[Link](https://pridebyte.github.io/projects/l-system/)  
Interesting project that draw [Dragon curve](https://en.wikipedia.org/wiki/Dragon_curve) represented as [L-system](https://ru.wikipedia.org/wiki/L-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0): at the beginning it has a dictionary and some rules of how the letters in dictionary will be changed every iteration.

Every symbol in dictionary is a rule of what to do on canvas: to turn pen in some direction or to draw the line.

I don't know if it's right way to put asynchronous function inside cycle. I'm not skilled enought to evaluate if it's right or wrong, but it works.

Work with simple geometry, canvas, asynchronous functions.

## Education  
**2005 - 2010** Moscowskiy Gosudarstvenniy College Informacionnyh Technologiy (MGKIT)  
   *Specialty* 2203 - Software of Engineering and Automated Systems

## Language skills
**English**
Intermediate A2. Free reading of Technical Documentation and watching Technical Broadcasts/Videos.

**Russian**
Native language.