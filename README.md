
# Quick Ask - Project Idea

I want to implement a REST API for question asking management system. Several special options will be available. All of the question and answer made by users are accessible publicly. User must be logged in to their accounts in order to ask a question or answer. Each user has control over their own Question and Answer. Everything needs to be managed by the admin. The user can add custom error image to the Question example.

# SRS - Software Requirement Specification

**\_Project Name: \***quick-ask**\*\_**

### 1. Introduction:

The Quick-ask Rest API is collection of public api endpoints that enables users to ask question, manage and interact with a single author application. The backend application provides authentication functionality, allows user to post question and view all question, answer to any question, and upload question related image(problem/error). This article outline the functional and non-functional requirements for the development of the quick-ask REST API Application.

### 2. System Overview:

The REST API application aims to provide a seamless user experience while ensuring the security and integrity of user data. It allows users to browse questions without authentication but authentication is require for post question and answer any question. Admin must be control any question or answer form a single admin dashboard
Function Requirements:

### 3. Authentication:

Users should be able to register for an account by providing their email address, name and a secure password.
Users Should be able to log in securely using their email address and password.
Administrators should be able to login securely using their credentials.

### 4. User Management

    - [x] Admin can create new users
    - [x] Admin can see a  list of all user
    - [x] Admin can update or delete users
    - [x] Admin can change password any user
    - [x] Authenticated user can update their name, change password and delete Their account
    - [x] User Photo Management:
    - [x] Authenticated user should be upload their user image.
    - [x] Only one photo upload user for avatar image.

### 5. Question Management

    - [x] Authenticated user can post their Question, edit and delete.
    - [x] Question should contain a question title, body and error/problem related photo(optional)
    - [x] Every unauthenticated user should be able to view a list of all question and question related answer.
    - [x] Admin can manage and verified question

### 6. Answer Management

    - [x] Authenticated users should be able to post question
    - [x] Answer should include the any author’s name and answer text or solution
    - [x] Any unauthorized and authenticated user should be able to view answer associated with a question.
    - [x] Admin can manage all answers.

### 7. Error/Problem Related Photo Management

    - [x] Authenticated users should be able to upload and update a problem related photo.
    - [x] The system should support various image formats and validate uploaded error photos.

## Non-Functional Requirement

#### 1. Security

User password must be securely stored using appropriate hashing and salting techniques.
ApI endpoints handling sensitive information should be protected using secure protocol (HTTPS).
Authentication tokens should be securely generated and validated to prevent unauthorized access.

#### 2. Performance

The API should be able to handle a high volume of concurrent request efficiently.
Response time should be optimized to ensure a responsive user experience.

#### 3. Scalability.

The application should be designed a to accommodate future growth and increasing user demands.
The architecture should allow for horizontal scalability , such as load balancing and distributed process.

#### 4. Reliability

The API should be highly available, minimizing downtime and ensuring data integrity.
Error handling and logging should be implemented to facilitate troubleshooting and maintenance.

## Constraints

This REST API Application should be implemented using a specific programming language or framework.
The API may depend on external service of libraries for certain functionalities8
User Interface
Quick-Ask Rest API Application does not include a user interface. It solely provides a back-end API for integration with front-end application or clients.
