# namu_darbai

Test plan for https://telesoftas.com/contacts/
 
One hour to test something is a pretty small time window, so the first thing i would do is prioritize. 

1. Decide on the scope and most critical parts of the page, so if we run out of time, the most important things are covered and tested. Since this is a contact page, i would assume that contacting telesoftas is the most important feature here. 

   a) Theres a "Lets talk" CTA, which takes a huge part of the screen so we need to make sure it works correctly.
   
   b) Checking and making sure all the contact details are correct(emails, phone numbers, social media links, should there be  thesame contact email for all the offices?).
   
   c) Documenting the test cases/scenarios of what was tested and what was the outcome. 
   
2. So the main function of the contact page is tested and working, so we can move to less critical parts like the design. Assuming that we have a list of popular browsers/devices that are being used to visit this page, we can prioritize on what devices to test it.
3. 
   a) Testing different devices/browsers
   
   b) checking responsive design
   
   c) Documenting the test cases/scenarios of what was tested and what was the outcome. 
   
3. Since this is a pretty basic page and it probably doesnt have high traffic(this should be determined pre-release) we could assume that there should not be any performance issues. Just to be sure we are alerted when the page is down, we could write a fast script, which runs once an hour, and check if the page is loaded. If possible we could reuse one of the documented cases from the previous steps, for example checking if one of the email links is shown. 


4. After all this is done, if we have time left, we should make a smoke and regression test suite, and add test scenarios to those suites. After we know what goes into smoke/regression suites, we can start to automate those cases, so we dont have to check them manually everytime changes are done to the page. As this is a really simple page, automated tests would be super easy to write.
