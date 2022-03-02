# portfolio
Michael Starkman's Portfolio
explanations of the technologies used
1. drop down hamburger
    I created the variable “displayDropDown” that selects ID “home-page-menu-dd” and attributes the CSS property for the class of “test-class”. When you first load the page, the display is set to none in CSS. Once it is clicked, the class is reassigned and the display is changed to grid, flex, block, etc. Then you are able to toggle between the settings by clicking.
2. accordion
    The Projects and Resume page utilizes an accordion. On the Project page, I constructed a variable "displayProjectTextOne". I had to repeat the function 3 different ways because if otherwise all the jobs would activate the accordion at the same time, as oppose to the current setting where they fall one at a time. It works similar to the hamburger menu. You select ID “project-text-one” and attributes the CSS property for the class of “test-class-project”. When you first load the page, the display is set to none in CSS. Once it is clicked, the class is reassigned and the display is changed to grid, flex, block, etc. Then you are able to toggle between the settings by clicking.
    On the Resume page, I used the same technology as the Projects page. The only difference is the class is reassigned using mouseover as oppose to click. 
the approach taken:
    The approach I took was to build my site similar to how the airbnb site was built. I took it section by section, and started in mobile form. Once I completed the homepage, I moved onto the bio, resume, project, and finally contact page. I then began adding responsive design to the individual pages to go from mobile to computer/tablet. 
    The final task I had to complete was adding jQuery to the site’s functionality. On the home page there is a hamburger menu that leads to a drop down menu. 
    I added accordions to the Resume and Projects pages. The Resume is actived using a mouseover feature, and the Projects is activated through a click. I completed the assignment by linking the sub page htmls to the hamburger menu, and copied that to every page. Now you can move from page to page, and don't have to start over at the home page.
    Hope you enjoy!
a link to your live site:   https://michaelstarkman.netlify.app/
installation instructions: none
unsolved problems, etc:
    You need to click the hamburger menu twice in order for drop down menu to appear
    getting drop down menu to appear on bio and contact pages. 
    Figuring out design issues
    On the drop down menu, I was having difficultly getting my JS function to work with addClass so I had to use attr.(ibute) to add the class that would change the CSS property display: none, and make the menu visible. 
    On Resume page, I was unable to write a function to have the text be removed using mouse out