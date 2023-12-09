# Hotel Booking Web Application

## Code Details:
1. **Front-end Live Site Link:** [https://hotel-booking-auth-e8380.web.app/]
2. **Client-Side GitHub Repository Link:** [https://github.com/amir811537/Hotle-booking-clientside.git]
3. **Server-Side GitHub Repository Link:** [https://github.com/amir811537/-Hotle-booking-server.git]


## Project Overview 🏨
Welcome to our Hotel Booking Web Application development project. As a team member, you will contribute to shaping the future of hotel accommodation booking, enhancing user experiences, and ensuring the success of this innovative platform.

### Updates 🚩
[If we have any updates, we will mention them here]

## Main Features 📋

### Homepage Design 🏡
1. **Stunning Imagery**
   - Utilize high-quality images  of hotel rooms and amenities.
   - Consider implementing parallax scrolling for an immersive experience.

2. **Special Offers and Promotions**
   - Showcase special offers, discounts, and promotions prominently.
   - Use eye-catching banners and call-to-action buttons.

3. **User Testimonials**
   - Display authentic user testimonials and ratings to build trust.
   - Implement a testimonial carousel for variety.

4. **Newsletter Signup**
   - Encourage users to subscribe to the newsletter for updates, deals, and exclusive offers.

5. **Featured Rooms**
   - Highlight a selection of featured rooms or suites with appealing visuals and descriptions.
   - Implement a "Book Now" button for quick access.

### User Authentication 📝
- Users can create an account with email and password.
- Users can log in using Google authentication via Firebase.

### JWT Authentication 🔑
- Create a JWT token upon login and store it on the client side.
- Send the token with the call and verify the user.
- Implement JWT on private routes.

### Navigation Bar 🧭
- Links to the "Rooms" page and "My Bookings" page.
- "My Bookings" is accessible only to authenticated users.

### Rooms Page 🛌
- Display a list of available rooms.
- Implement a filter system to filter rooms by price range.
- Users can view room review counts.
- Users can post reviews for rooms after booking.

### Room Details Page 🏡
- Display room description, price per night, room size, availability, and room images.
- Show special offers if available.
- Implement a "Book Now" button to book a room.
- Users can select a room and choose booking duration using a date picker.
- Ensure users can only book available rooms.

### Booking Cancellation 🚫
- Users can cancel a booking before 1 day from the booked date.
- Display a list of current bookings on the "My Bookings" page.
- Provide a Delete button next to each booking.

### Update Booking Date 🗓
- Users should be able to view a list of their current bookings on the "My Bookings" page.
- Provide an "Update Date" button next to each booking.
- Clicking the "Update Date" button should allow the user to select a new date for the booking, similar to the process for updating bookings in the "Rooms" section.
- Upon successful modification, update the booking details in the database and notify the user of the update using modal or toast.

### Review System 📝
- Users can post reviews for rooms only they have booked.
- Reviews should include a username, rating, comment, and timestamp.
- Reviews should be shown on the room details page for other users.

### Access Control 🔒
- Users who are not logged in cannot book a room.
- Basic room details are viewable for non-logged-in users, but they cannot post reviews.

### 404 Page 🚀
- Create a 404 page with an exciting image/gif and a "Back to home" button.

### Toast
- Show relevant toasts for all CRUD operations.

### Package
- Implement at least 2 packages:
  - Toast (react-hot-toast, sweet alert, react-toastify)
  - Update the browser tab title, meta-data (Helmet)

### Bonus Requirements 🌟

#### Commits & Readme 📝
- Minimum 20 meaningful git commits on the client-side repository.
- Minimum 10 meaningful commits on the server-side repository.
- Create a readme for the client side with at least 5 bullet points describing your project.
- Add your client-side live link to your website in the readme.

#### Reload 🔄
- Ensure protected/private routes do not redirect the user to the login page upon reloading.

#### Responsive Design 📱💻
- Make the homepage of your website mobile, tablet & desktop responsive.

#### Environment Variables 🔐
- Use environment variables to hide Firebase config keys and MongoDB credentials.

#### Animation 🎉
- Implement animations in the homepage sections.

### Optional Extra Pages Recommendations 📄
1. **About Us:**
   - Create an "About Us" page that tells the story of your hotel, its history, mission, and values. Include information about the team and management.

2. **Contact Us:**
   - Develop a "Contact Us" page with a contact form, phone numbers, email addresses, and a physical address. Ensure users can reach out easily.

3. **Events and Activities:**
   - Provide information about upcoming events, activities, and local attractions near the hotel. Include a calendar and booking options for these events.

4. **Gallery:**
   - Create a gallery page with high-resolution images of the hotel, rooms, amenities, and events. Users can explore and visualize their stay.

5. **FAQ:**
   - Compile a comprehensive FAQ page that addresses common questions and concerns users may have. Make it easy for users to find answers.

6. **Privacy Policy and Terms of Service:**
   - Add legal pages with a privacy policy, terms of service, and other legal disclaimers to ensure compliance.

7. **Testimonials:**
   - Dedicate a page solely for user testimonials. This builds trust and provides potential guests with authentic reviews.

8. **Local Area Guide:**
   - Offer an informative guide to the local area, including restaurants, attractions, and things to do.

9. **Career Opportunities:**
   - If applicable, create a page for job listings and career opportunities at your hotel.

Remember to maintain a consistent design and user experience throughout your website. Tailor these additional features and recommendations to suit the unique characteristics and goals of your hotel booking platform.

## Guidelines 📌

1. Spend 15-20 minutes deciding on the core features.
2. Do not waste much time finding the right image. You can always start with a simple idea. Make the website and then add different images.
3. Don't look at the overall task list. Just take one task at a time and do it. Once it's done, pick the next task. If you get stuck on a particular task, move on to the next task.
4. Stay calm, think before coding, and work sequentially. You will make it.
5. Be strategic about the electricity issue.
6. Use ChatGPT to generate JSON data. You can use ChatGPT for other purposes as well.
7. Initially, you can add data to the MongoDB. Then you can use the data from the fetch call. Other collections will depend on you.


## No Pain, No Gain 🌟

"The most beautiful moments in life come after going through hardships and challenges." 

Best of luck with your project! 🚀✨
