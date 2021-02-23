# Test General rules

* Every pupil should create a remote branch on NFU git project following this naming convention and from master branch: YOUR_COMPLETE_NAME_test_2ndterm

* After every push you should notify the teacher

* Just after completing every single task assigned you should commit your changes and push to your branch. Only one commit per task. In the commit comment must point out “EASY|MEDIUM|LARGE” and the task number completed

* If you finish your assignments you can attempt to do supplementary tasks in order to improve your final marks. Nevertheless  you can do it only If you have done at least 7 points of your assigned tasks.

* Tasks not finished in the first 3 hours only be marked 50% of their value.

* Pupils can deliver any push until 6am of next day after beginning the test

* Choose 5 easy tasks, 1 medium and 1 large. Communicate your election to the teacher. You can’t comment with the rest of your partners your selection. 


# Test activities tasks


## Easy

1.  In login screen when we fill the form we must be able to submit clicking login button or pressing enter key once password field has been filled (1 point)

2. When we are browsing anonymously and we want to view the details of an event currently we are forwarded to the login page. We should let users get into the details and only redirect them when they try to fire a forbidden action to an anonymous user like write a comment, join an event, try to create an event …. (1 point)

3. Same as 2. but in sport’s facilities screen (instalaciones) When we are browsing anonymously and we want to view the details of a facility currently we are forwarded to the login page. We should let users get into the details and only redirect them when they try to fire a forbidden action to an anonymous user like try to create an event associated with the facility…. (1 point)

4. In login page we should put a link to let an anonymous user to come back to home page If they refuse to log in  (1 point)

5. In the facilities screen there is the city where it is located. When we click in the location icon close to the name a google map should appear with the proper location (1 point)

6. Clear filters option. Currently when we apply a filter using any field we can’t delete setted option (1 point) 

7. BUG: I’m in profile screen and I click in ‘Matches’ and I want to be redirected to ‘My matches’ not ‘recent games’ or ‘favorites’ (1 point)

8. BUG when I’m in profile->settings->about APP crash . Header disappears, I’m redirected to the welcome screen … Fix it  (1 point) 

9. When editing profile personal data information there is a button below “Edit profile” that should be changed to “Save” and when someone saves then should be disabled once clicked. Only should be enabled again when some of the form fields change (component state change) (1 point)

10. BUG. Profile user born  date should show a calendar widget with “dd MM YYYY” format and not currently “MM dd YY”  (1 point)   

11. When I click an empty profile image automatically a local file dialog should appear to put an image. I don’t need to specify I want to edit the photo to be enabled to do that action  (1 point)


## Medium

1. In sports facilities screen (instalaciones) there is not a list preview of what kind of sports I can practice there. I have to get deeper into the detail to be aware of (2 points) 

2. In initial welcome slider screens, It should be nice to put arrows in the browser version in order to navigate forward and backwards across the slides. Touch gesture for dragging slides is only intuitive in mobile version (2 points)

3. Compile and generate android .apk version.  User should change the login page to put his name on there as a proof has been compiled by him.(2 points)

4. Events list should be ordered from newest to oldest  in home screen either in ‘Your games’ and ‘Recent games’ segments  (2 points)

5. When we add an event category, the modal form should show all feasible esports: tennis, football, paddle … and not “Gaming” and “Esport”. Moreover Image event should be optional and we will show by default an image associated with chosen previous category (2 points)



## Large activities


1. Easter Egg.  In the login screen there is a central image with three balls: basket, football and golf ball. If user clicks 22 times over image a modal page with a rewarding code should appear on screen (3 points)

2. Notifications screen now is not doing something useful. As we track every action we do over the general state using a reducer and we are able to track it put on a localStorage entry that information in a pretty way in order to list on notification screen (3 points) 

3. Create a new theme (spring theme, winter theme) with different colors to light and dark version (theme/variables.css) and let the user change to them from profile screen (3 points). As we know pages and components JSX has not been properly used as ionic suggests this theme changing is not going to be perfect.  

4. BUG when profile Image is too large we get an exception and APP crash. Take into account localStorage can save only 5mb at maximum. So check mime/type (image jpeg png)  before upload is really an image and is less than 2Mb otherwise don’t let user change profile (3 points)

5. When we create an event “country”, “city” and “postal code” are irrelevant. I want to replace this with a chosen facility. Every facility is localized so we can get that information from this association (3 points) 
