# Real_Estate_Project

Tech that we are going to use: React, Next.js, Typescript, Mongodb, PrismaDB, Tailwind CSS

Team members: Zhuohong Yang - 40125950, Alimurat Dinchdonmez - 40245310, Assane Dieng - 40164595, Mann Patel - 40187056. 

Project Approach and Technology: For this Full stack web development project, we are planning to use NextJs to help us achieve the end goal. We are going to use Mongodb as our database and Tailwind CSS (bootstrap) to help us feature the website so we don't have to deal with custome CSS at all. We will also use bcrypt to secure our data password (hashing password), we will create two types of account, one is for normal users and the other one is for brokers. (But this can be change as well since we want to let users to post the property on our website as well)

![image](https://github.com/JasonYangggggggg/Real_Estate_Project/assets/109561939/47c79811-26e9-43c7-b72d-4708858022cc)
![image](https://github.com/JasonYangggggggg/Real_Estate_Project/assets/109561939/10bf7a41-4815-41fd-9c4a-ba71e198a6d9)
![image](https://github.com/JasonYangggggggg/Real_Estate_Project/assets/109561939/60a8d2c9-7f1c-4ba3-91f4-30234d2ab367)




User stories: 
  1. Homebuyer: As a homebuyer, I want to efficiently search for properties based on specific criteria, such as location, price range, number of bedrooms, and amenities. Additionally, I want the ability to save my favorite listings for future reference and comparison. To enhance my property search experience, I would like to view property locations on a map, making it easier to assess their proximity to important landmarks and neighborhoods. Lastly, I need the convenience of requesting property viewings through the system.

  2. Property Renter: As a property renter, I need a user-friendly platform that allows me to search for rental properties efficiently. I want to be able to specify my rental criteria, such as location, rental price range, number of bedrooms, and amenities, in order to find suitable rental options. Additionally, I need the ability to save rental listings I'm interested in a list of favorites for easy reference and comparison. To make informed decisions about potential rental properties, I would also like to see the location of each property on a map, helping me understand their proximity to important amenities and areas of interest. Lastly, I need the convenience of contacting property owners or managers through the system to inquire about rental details or schedule property viewings.


  3. Broker: As a real estate broker, I require a safe and effective method to make property purchase offers on my customers' behalf and monitor their progress. I want to securely log in, and submit offers that include pricing and property information. Moreover, I need to browse a list of submitted offers with clear statuses and get instant alerts when an offer changes. I'd also like to be able to organize property visits, manage property listings, find properties that meet client preferences, examine and manage homebuyer offers, and manage property visit schedules. My workflow will be streamlined, and clients will be happier.

  4. System Administrator: As a System Administrator, I need a comprehensive CRUD (Create, Read, Update, Delete) functionality for managing broker profiles efficiently.Therefore, to ensure accurate data entry,  secure the login page, view and change broker data, inactive marking of brokers and deletion of broker profiles all should be included with careful validation. Furthermore, I need to be able to generate administrative reports, maintain data integrity, search, filter, and track changes to broker profiles. 


Meeting Minutes: 

Meeting minute 1	19/09/2023  5:00pm

Attendees: Jason, Assane, Mann, Alimurat

-Objectives clarification

-tools that we’re gonna use

-Team member roles distribution

-Decided work scope

-Separate tasks for sprint 1

-Meeting Next tuesday

Meeting minute 2	20/09/2023  5:00pm

Attendees: Jason, Assane, Mann, Alimurat

-Verification of the advancement of the tasks

-clarification made about roles

Meeting minute 3	21/09/2023  4:15pm

Attendees: Jason, Assane, Mann, Alimurat, Alex

-Verifying the components of the sprint 1 evaluations 

-Organize the future details of the projects 

-Formatting previous tasks done

-Tasks distribution to each member assigned according to the Task Breakdown

Meeting minute 4	27/09/2023  6:00pm

Attendees: Assane, Mann, Alimurat, Alex

-Completion of missing elements for the submission

-effort estimation for the tasks

-sprint 2 Previsualisation



 
Plan for next sprint: 

We are expected to have the login and register model ready, and It should be connected to the backend database (Mongodb). We are also expected to have some Front-end features done. By next week before October, we are expected to have the login and register functionality working. By October 10th, we are expected to have some Main page front-end features done like listing creation. The rest of the time we are not sure yet, we need to see how the project goes.

Detail log of each member's contribution: 

Sprint 1 contribution: Zhuohong Yang - Project Approach and Technology. 
Assane - task breakdown, plan for next sprint. 
Alimurat & mann - user story. 

Task break-down

We’re going to classify the tasks from a range of 1 to 5 determining the amount of effort that it required. With 5 as tasks that takes more effort and time

Zhuohong Yang & Assane - > For Homebuyer and Property Renter (Parent Task): 

1) User Registration and Authentication (Parent task for the whole application): (3)      
   
    -Implement user registration and login functionality.

2) Property Search and Filtering (Child task for listing creation/display): (4)
   
    -Develop search functionality allowing users to search for properties based on criteria (location, price range, bedrooms, amenities).
   
    -Implement advanced filters for efficient property selection.
  
4) Property Listings Display (parent task): (3)
   
    -Create a user-friendly interface to display property listings.
   
    -Include property details, images, and descriptions.
   
    -Enable users to view property locations on a map.
   
5) Save Favorites (child task for listing creation/display): (2)
   
    -Implement the ability for users to save their favorite property listings.
   
    -Develop a comparison feature for saved listings.
   
6) Property Viewing Requests (child class for listing creation/display): (4)
   
    -Add a feature for users to request property viewings through the system.
   
    -Implement notifications for viewing requests and confirmations.
   
7) Contact Property Owners/Managers (child class for listing creation/display): (3)
   
    -Allow users to contact property owners or managers through the platform.
   
    -Implement messaging or contact forms.

Mann Patel & Alimurat Dinchdonmez & Alex Tong  -> For Broker:

1) Broker Authentication and Profile Management: (3) (parent task)

    -Develop secure login functionality for brokers.
   
    -Create broker profiles with detailed information.
   
    -Implement profile updates and password change features.
     
3) Property Offer Submission: (4) (child task for property management)
 
    -Develop a feature for brokers to submit property purchase offers.
   
    -Include fields for pricing and property details.
   
    -Ensure secure data transmission.
   
4) Offer Management: (4) (child task for property management)
   
    -Create a dashboard for brokers to view submitted offers.
    -Display offer statuses (e.g., pending, accepted, rejected).
   
    -Implement real-time notifications for offer status changes.
   
5) Property Management: (3) (parent task)
   
    -Allow brokers to manage property listings.
   
    -Add, edit, or remove property listings.
   
    -Implement features for property visits and schedules.
   
6) Client Preferences and Matching: (3) (child task for property management)
   
    -Develop a system for brokers to manage client preferences.
   
    -Enable brokers to find properties that match client criteria efficiently.
   
Together -> For System Administrator:

1)  Broker Profile CRUD: (2)
   
    -Implement comprehensive CRUD functionality for managing broker profiles.
    
    -Include validation for data entry and secure data storage.
    
3) Security and User Access Management: (4)
   
    -Secure the login page with appropriate security measures.
   
    -Implement role-based access control (RBAC) for system administrators.
   
5) Administrative Reports: (3)
   
    -Develop a reporting module for generating administrative reports.
   
    -Include data related to broker profiles and activities.


