
# PG PERFECT

The PG Management System is a comprehensive web application designed to facilitate seamless interaction between PG owners and tenants.


## Features

### PG Owners:
- Effortlessly manage **property details** and **tenant records**.
- Track and monitor **rent payments** and **security deposits** with ease.
- Quickly respond to **tenant complaints** and **service requests**.

### Tenants:
- Conveniently submit **complaints** and **service requests** to the owner.
- Make **secure online payments** for rent and deposits.
- Access important details like **property information** and **payment history** at any time.

## Technologies Used

### Frontend:
- **React**: Frontend library for building user interfaces.
- **Redux**: Used for state management and caching with local storage.
- **Tailwind CSS** and **DaisyUI**: For styling and responsive design.
- **React-Chart**: Used to create visual graphs and charts.
- **Axios**: For making API requests and connecting to the backend.

### Backend:
- **Node.js** and **Express.js**: Backend framework for building RESTful APIs.
- **Nodemailer**: For sending emails from the server.
- **Cloudinary**: Cloud storage service for images.
- **Multer**: Middleware for handling file uploads, setting size limits, and integrating with Cloudinary.
- **Bcrypt** and **Crypto**: For password hashing and creating secure tokens.

### Database:
- **MongoDB**: NoSQL database for managing data.

### Tools:
- **Postman**: For testing and interacting with the backend API.
- **Vite**: Used for creating and optimizing the React project.
## Usage

### Flow of the Application:

1. **Landing Page**:  
   - Both PG Owners and Tenants can log in or register.

---

### For PG Owners:
2. **Dashboard**:  
   - View a dashboard displaying charts for:
     - Total Income.
     - Complaints categorized by sectors like food, cleanliness, etc.
   - Manage properties and tenants:
     - Add buildings and assign tenants to respective properties.
     - Monitor tenant details and rent status.
   - Handle Payments:
     - Accept rent and deposits from tenants through a secure payment system.

---

### For Tenants:
3. **Dashboard**:
   - Lodge Complaints:
     - Submit complaints regarding food, cleanliness, or other concerns.
   - Payments:
     - Pay rent and deposits online.
   - Search for PGs:
     - Browse and search for available PGs based on location, price, and other criteria.

---

### Application Flow Summary:

1. **User logs in**:  
   - PG Owner or Tenant chooses the appropriate login method from the landing page.

2. **PG Owner** navigates to their dashboard to:
   - Monitor complaints and income through visual charts.
   - Add new buildings or tenants.
   - Accept payments from tenants.

3. **Tenant** navigates to their dashboard to:
   - Lodge complaints.
   - Pay rent and deposits.
   - Search for available PGs.

## Demo of the project
https://github.com/user-attachments/assets/1754e816-4daa-46ad-b3a2-cb88fe36af0d
