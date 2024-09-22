
# **KEEN.uz Platform**

**KEEN.uz** is an innovative educational platform designed to empower teachers, students, and IT enthusiasts through task management, competitive programming, and skill-building. It focuses on improving educational systems by integrating digital tools for task assignments, student monitoring, and competition organization. The platform supports a **Software as a Service (SaaS)** model, offering subscription-based access for educational institutions, with a built-in incentive system, **KEENCOIN**, to gamify the learning experience.

---

## **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Monetization & Business Model](#monetization--business-model)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Maintainers](#maintainers)

---

## **Introduction**

KEEN.uz is an educational platform focused on:
- **Students:** Learning and improving programming skills, completing tasks, and participating in competitions.
- **Teachers:** Managing students, assigning daily tasks, monitoring performance, and organizing competitions.
- **Institutions:** Offering structured and gamified learning experiences.
- **Incentives:** Students earn **KEENCOIN** by completing tasks and winning competitions, motivating continuous learning.

This platform helps educational systems move toward a digital, competitive, and engaging programming culture, preparing students for regional and global IT challenges.

---

## **Features**

1. **User Roles:**
   - **Super Admin:** Oversees the platform, manages users and teachers.
   - **Teacher:** Manages groups of students, assigns tasks, tracks progress, and organizes competitions.
   - **Student:** Completes tasks, views ratings, and participates in competitions.
   - **User:** Accesses basic features of the platform.

2. **KEENCOIN Currency:**
   - Virtual currency to incentivize learning.
   - Students earn KEENCOIN through tasks and competitions.
   - Can be used to rank students and unlock platform features.

3. **Task Management:**
   - Teachers assign and monitor student tasks daily.
   - Students submit tasks and track their progress.

4. **Competitions and Tournaments:**
   - Teachers organize group-level or student-level competitions.
   - Ranking system allows students to see their position relative to peers.

5. **Subscription-Based Model (SaaS):**
   - **Monthly:** 100,000 soums.
   - **Quarterly:** 250,000 soums.
   - **Yearly:** 900,000 soums.

---

## **Requirements**

- **Node.js** >= 14.x
- **Angular CLI** >= 17.3.9
- **MySQL** or compatible relational database
- **Bootstrap** 5.x
- **Session Authentication** using JWT
- **Git** for version control
- **Docker** (optional for containerization)

---

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/keenuz-platform.git
   cd keenuz-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file with your database credentials and session secret keys.

4. **Database setup:**
   - Ensure your MySQL instance is running.
   - Run migrations to set up the schema:
     ```bash
     npm run db:migrate
     ```

5. **Run the development server:**
   ```bash
   ng serve
   ```

6. **Access the platform:**
   - Visit `http://localhost:4200/` in your browser.

---

## **Usage**

### **Frontend:**
- **Built with Angular and Bootstrap** for responsive and dynamic UI.
- Modify the frontend in the `src/` directory to customize components, styles, and functionality.

### **Backend:**
- **Session-based authentication** is managed via JWT tokens.
- Secure all routes and ensure role-based access (Super Admin, Teacher, Student, and User).

### **KEENCOIN Setup:**
- Modify KEENCOIN rewards in the teacher’s dashboard under the "Incentives" section.
- Manage conversion rates in the admin panel (`1 KEENCOIN = 500 soums`).

### **Competition & Task Management:**
- Teachers create groups of students and assign tasks from the dashboard.
- Competitions can be organized via the "Competitions" module, which supports individual and group tournaments.

---

## **Configuration**

1. **Frontend Configuration:**
   - Located in `src/environments/`.
   - Customize UI/UX and integration with backend API.

2. **Backend (Session Authentication):**
   - JWT configurations can be adjusted in `src/app/auth/`.
   - Modify session timeout and refresh tokens according to your security policies.

3. **Database:**
   - MySQL configuration is set in the `.env` file.
   - Use the `db:migrate` command for updating schema or applying migrations.

4. **Subscription Tiers:**
   - Modify subscription pricing and packages in `admin/settings/subscriptions`.

---

## **Monetization & Business Model**

KEEN.uz operates on a **SaaS model**, offering subscriptions for educational institutions to gain full access to the platform.

### **Subscription Plans:**
- **Monthly:** 100,000 soums.
- **Yearly:** 900,000 soums.

### **KEENCOIN System:**
- Teachers can award KEENCOIN to students for task completion or competition wins.
- **KEENCOIN** encourages students to continue learning and enhances their engagement with the platform.

### **Target Audience:**
- **Educational Systems:** Schools and universities purchasing subscriptions for teachers to use the platform.
- **Teachers:** Managing student groups, tasks, and progress.
- **Students:** Enhancing programming skills and competing with peers.

---


---

## **Troubleshooting**

1. **Database Connection Errors:**
   - Ensure MySQL is running and accessible.
   - Verify credentials in the `.env` file.

2. **Authentication Issues:**
   - Ensure that JWT secret keys are configured correctly.
   - Clear browser cookies and try logging in again.

3. **UI Not Loading:**
   - Check Angular build logs for errors.
   - Verify that the server is running on the correct port (`4200`).

---

## **FAQ**

### What is the primary role of KEENCOIN?
KEENCOIN is used to encourage students to complete tasks and participate in competitions. It also provides a rating system for ranking students.

### How does the SaaS subscription work?
Educational institutions (schools and universities) subscribe to the platform and provide access to teachers and students.

### Can users without subscriptions access the platform?
Yes, users and students can browse without subscription, but subscription is required for full access to task management and competition modules.

---

## **Maintainers**

- **Lead Developer:** Nazarbek Baltabaev (archon99@gmail.com)
- **Project Manager:** Murodjon Davronov (murodjon_davronov@gmail.com)
- **UI/UX Designer:** Olimboy Shavkatov (shavkatov_olimboy@gmail.com)

For support or any questions, please contact the project team at `https://t.me/+vTKfWco9PARjZWQy`.
