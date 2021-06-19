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
<img src="https://user-images.githubusercontent.com/64330888/122252847-9e72a900-cf06-11eb-8c46-add22d094c91.png" width="800" height="300"/>            

_Welcome User_

<img src="https://user-images.githubusercontent.com/64330888/122252858-a0d50300-cf06-11eb-92c4-91610f973c6c.png" width="800" height="300"/>

_Organize schedule & 24hours_

<img src="https://user-images.githubusercontent.com/64330888/122252864-a2063000-cf06-11eb-9424-5a4720a9e922.png" width="800" height="300"/>

_Timer for work & study_

## 2. Why do I start this project?

For several years, I wrote customized bullet journal. It helped me a lot to organize my schedule. 
However, someday, I thought **what if there is a digital bullet journal that I can customize for convenient**. 
So I started to think about this project and finally I got a blue print of this project.

(노타보여주기)


## 3. Details of project

I used three languages for this project which are HTML, CSS, and JavaScript.

There are three main pages: welcome user, track todolist and 24hours, and *POMODORO* timer

*POMODORO: a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks*

User can use each function using this navigation menu.

<img src="https://user-images.githubusercontent.com/64330888/122632813-2546a200-d110-11eb-886d-a2561f97d817.png" width="800" height="500"/>

---------------------------------------

 * Welcome User

  <img src="https://user-images.githubusercontent.com/64330888/122579185-9f831200-d08f-11eb-8f21-46f1440aecd9.png" width="800" height="500"/>
  
   -Before entering user name-

  <img src="https://user-images.githubusercontent.com/64330888/122579178-9e51e500-d08f-11eb-86a6-9451543b1914.png" width="800" height="500"/>

   -After entering user name-

   First of all, there is a clock part. I use Date() object to take real time for this part. After getting real time, I set them as proper format such as Hours: Mintues: Seconds - If the number of them are less then 0, I set they need to be displayed including zero(05:02:08). Also, date part as well is worked same.
  
   Second, there is a user name part. User can enter their name via input element and the name will be stored in local storage for remembering it even though the user refresh this page. 
  
   <img src="https://user-images.githubusercontent.com/64330888/122580881-66e43800-d091-11eb-8839-91172f0d8739.png" width="400" height="800"/>
  
   Third, there is a weather part. When weindow load, it will ask user if it is okay to take their location information by using Geolocation.getCurrentPosition() method. After getting and storing information(latitude & longitude) in local storage in order to remember this information, weather information will be loaded through Weather API and by using fetch().
  
   <img src="https://user-images.githubusercontent.com/64330888/122632692-84f07d80-d10f-11eb-9477-0b36d07cddf7.png" width="800" height="900"/>

---------------------------------------
  
* Track todolist and 24hours
  
  * *To Do List*

  <img src="https://user-images.githubusercontent.com/64330888/122633011-26c49a00-d111-11eb-9b89-6300e58961e6.png" width="800" height="500"/>
  
    -Before adding plan-
  
  <img src="https://user-images.githubusercontent.com/64330888/122633061-77d48e00-d111-11eb-939e-571d9bca22c5.png" width="800" height="500"/>
  
    -After adding plan-
  
  
   User can add their plan to here. As long as they add plans through input element, those plans are stored in local storage for remembering them.
  
    <img src="https://user-images.githubusercontent.com/64330888/122633274-a4d57080-d112-11eb-9fa0-61c33893024d.png"/>
  
   When a task is done, user can check checkbox. 
  
    <img src="https://user-images.githubusercontent.com/64330888/122633117-dd287f00-d111-11eb-8d72-3a568d07928c.png"/>
  
   Also, if some tasks are not for today or uesr put by mistake, they can delete those task by clicking ❌ button.
  
    <img src="https://user-images.githubusercontent.com/64330888/122633186-1f51c080-d112-11eb-9b8b-9dd1c94dd0e9.png"/>

  ---------------------------------------
  * *Track 24 hours*
  
  <img src="https://user-images.githubusercontent.com/64330888/122633186-1f51c080-d112-11eb-9b8b-9dd1c94dd0e9.png"/>
  
   -Before adding what I did-
    
  <img src="https://user-images.githubusercontent.com/64330888/122633186-1f51c080-d112-11eb-9b8b-9dd1c94dd0e9.png"/>
  
   -After adding what I did-
   
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
 
  
  
  
  
  
  
  
  
  
  
  
  








