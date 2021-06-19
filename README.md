# Title: MY BULLET JOURNAL(paperless ver.)
# Languages: HTML, CSS, JavaScript

> ## TABLE OF CONTENTS
### 1. About the project

### 2. Why do I start this project?

### 3. Details of project

### 4. Reference

------
## 1. About the project

This project named **MY BULLET JOURNAL** is a digital version of my customized offline bullet journal. 
Overal, this project has three pages which are welcoming a user, orgazing their schedule & 24 hours, and timer for work & study.
<img src="https://user-images.githubusercontent.com/64330888/122252847-9e72a900-cf06-11eb-8c46-add22d094c91.png"/>            

_Welcome User_

<img src="https://user-images.githubusercontent.com/64330888/122252858-a0d50300-cf06-11eb-92c4-91610f973c6c.png"/>

_Organize schedule & 24hours_

<img src="https://user-images.githubusercontent.com/64330888/122252864-a2063000-cf06-11eb-9424-5a4720a9e922.png"/>

_Timer for work & study_

## 2. Why do I start this project?

For several years, I wrote customized bullet journal. It helped me a lot to organize my schedule. 
However, someday, I thought **what if there is a digital bullet journal that I can customize for convenient**. 
Also, I started to take online courses that make a google chrome app for javascript. 
So I started to think about this project based on these online courses and finally got a blue print of this project.

## 3. Details of project

I used three languages for this project which are HTML, CSS, and JavaScript.

There are three main pages: welcome user, track todolist and 24hours, and *POMODORO* timer

*POMODORO: a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks*

User can use each function using this navigation menu.

<img src="https://user-images.githubusercontent.com/64330888/122632813-2546a200-d110-11eb-886d-a2561f97d817.png"/>

---------------------------------------

 * Welcome User

  <img src="https://user-images.githubusercontent.com/64330888/122579185-9f831200-d08f-11eb-8f21-46f1440aecd9.png"/>
  
   _Before entering user name_

  <img src="https://user-images.githubusercontent.com/64330888/122579178-9e51e500-d08f-11eb-86a6-9451543b1914.png"/>

   _After entering user name_

   First of all, there is a clock part. I use Date() object to take real time for this part. After getting real time, I set them as proper format such as Hours: Mintues: Seconds - If the number of them are less then 0, I set they need to be displayed including zero(05:02:08). Also, date part as well is worked same.
  
   Second, there is a user name part. User can enter their name via input element and the name will be stored in local storage for remembering it even though the user refresh this page. 
  
   <img src="https://user-images.githubusercontent.com/64330888/122580881-66e43800-d091-11eb-8839-91172f0d8739.png"/>
  
   Third, there is a weather part. When weindow load, it will ask user if it is okay to take their location information by using Geolocation.getCurrentPosition() method. After getting and storing information(latitude & longitude) in local storage in order to remember this information, weather information will be loaded through Weather API and by using fetch().
  
   <img src="https://user-images.githubusercontent.com/64330888/122632692-84f07d80-d10f-11eb-9477-0b36d07cddf7.png"/>

---------------------------------------
  
* Track todolist and 24hours
  
  * *To Do List*

  <img src="https://user-images.githubusercontent.com/64330888/122633011-26c49a00-d111-11eb-9b89-6300e58961e6.png"/>
  
    _Before adding plan_
  
  <img src="https://user-images.githubusercontent.com/64330888/122633061-77d48e00-d111-11eb-939e-571d9bca22c5.png"/>
  
    _After adding plan_
  
  
   User can add their plan to here. As long as they add plans through input element, those plans are stored in local storage for remembering them.
  
    <img src="https://user-images.githubusercontent.com/64330888/122633274-a4d57080-d112-11eb-9fa0-61c33893024d.png"/>
  
   When a task is done, user can check checkbox. 
  
    <img src="https://user-images.githubusercontent.com/64330888/122633117-dd287f00-d111-11eb-8d72-3a568d07928c.png"/>
  
   Also, if some tasks are not for today or uesr put by mistake, they can delete those task by clicking ❌ button.
  
    <img src="https://user-images.githubusercontent.com/64330888/122633186-1f51c080-d112-11eb-9b8b-9dd1c94dd0e9.png"/>

  ---------------------------------------
  * *Track 24 hours*
  
  <img src="https://user-images.githubusercontent.com/64330888/122633186-1f51c080-d112-11eb-9b8b-9dd1c94dd0e9.png"/>
  
   _Before adding what I did_
    
  <img src="https://user-images.githubusercontent.com/64330888/122633186-1f51c080-d112-11eb-9b8b-9dd1c94dd0e9.png"/>
  
   _After adding what I did_
   
  Next day, user can click a trash button for deleting yesterday trace which will delete all stored traces in local stroage
  
  <img src="https://user-images.githubusercontent.com/64330888/122633664-b455b900-d114-11eb-8170-29e39e8edb85.png"/>
  
  <img src="https://user-images.githubusercontent.com/64330888/122633673-bcadf400-d114-11eb-826e-090fabc10ad6.png"/>

---------------------------------------

* POMODORO timer

<img src="https://user-images.githubusercontent.com/64330888/122633741-10204200-d115-11eb-83ff-5e9c840bf631.png"/>

User can use three types of timers. 

(20 mintues + 5 minutes breaks) x 5 sets, (25 mintues + 5 minutes breaks) x 5 sets, (50 mintues + 5 minutes breaks) x 5 sets

For example, the user will use 20 min + 5 min break.

<img src="https://user-images.githubusercontent.com/64330888/122633810-6ab99e00-d115-11eb-8280-ca04ace9a760.png"/>

The timer will start with bell sound that alerts starting.

<img src="https://user-images.githubusercontent.com/64330888/122633814-6c836180-d115-11eb-8bd1-729f3905ab5b.png"/>

When a set is done, a timer for break will start with bell sound that alerts break.

<img src="https://user-images.githubusercontent.com/64330888/122634006-99844400-d116-11eb-97ab-9f513ad3d6b1.png"/>

Then a new set will start.

<img src="https://user-images.githubusercontent.com/64330888/122634134-74440580-d117-11eb-8ed8-f3b2ee73f686.png"/>


## 4. References

Vanila JS Lectures of NomadCoders: https://nomadcoders.co/javascript-for-beginners

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

Weather API: https://openweathermap.org/api

Other youtube lectures: 

https://youtu.be/a7Kt7S_4HOA






 
  
  
  
  
  
  
  
  
  
  
  
  








