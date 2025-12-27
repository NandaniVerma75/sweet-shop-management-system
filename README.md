Sweet Shop Management System
Overview

The Sweet Shop Management System is a full-stack application designed to manage sweets inventory efficiently.
The backend is built using Java with Spring Boot, while the frontend is developed using ReactJS.
The project follows a Test-Driven Development (TDD) approach, ensuring reliability, correctness, and clean code through well-structured test cases.

Key Features

Add, view, and delete sweets

Search sweets by name, category, or price range

Sort sweets by price or quantity (ascending & descending)

Purchase and restock sweets with proper stock validation

Centralized exception handling using custom exceptions

Responsive, clean, and user-friendly UI built with Bootstrap

Inventory managed using an in-memory data structure (no external database)

Project Structure
/Backend
 ├── src
 │   ├── main
 │   │   └── java
 │   │       └── com.incubyte.sweetshop
 │   │            ├── controller
 │   │            ├── service
 │   │            ├── model
 │   │            └── customExceptions
 │   └── test
 │       └── java
 │           └── com.incubyte.sweetshop.service
 └── pom.xml

/Frontend
 ├── src
 └── package.json

README.md

TDD Journey Highlights

Followed Red → Green → Refactor methodology

Wrote failing test cases before implementing business logic

Implemented minimal code to pass tests, then refactored for clarity

Achieved high test coverage using JUnit 5

Covered edge cases with custom exception-based tests

Maintained meaningful and incremental Git commits throughout development

API Highlights

Add Sweet
POST /sweetshop/api/sweet/add

Get All Sweets
GET /sweetshop/api/sweet/getAllSweets

Additional APIs for searching, sorting, purchasing, and restocking sweets are fully implemented and tested.

Technologies Used
Backend

Java 21

Spring Boot 3.5.3

JUnit 5

Maven

Custom Exception Handling

Service-based Architecture

Frontend

ReactJS

Axios (API communication)

Bootstrap 5

React Hot Toast (user notifications)

How to Run the Project
Backend
cd Backend
mvn clean install
mvn spring-boot:run


Backend runs on:
👉 http://localhost:8080

Frontend
cd Frontend
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

Notes

The application uses an in-memory data structure for managing sweets inventory.

The focus of this project is on API design, business logic, and TDD practices, rather than database integration.

Conclusion

This project demonstrates a clean full-stack implementation with strong emphasis on test-driven development, maintainable code, and clear separation of concerns between backend and frontend layers.
![SearchByCategory](https://github.com/user-attachments/assets/a6c65040-e587-42c2-8cf9-a0933040f040)
![SearchByName](https://github.com/user-attachments/assets/f6983604-a245-4fcb-a14f-b3bc1734ccc5)
![SearchByPriceRange](https://github.com/user-attachments/assets/9bfe6f1d-1be9-411d-8e15-17e29480f8a2)

Rest of the Screenshots are attached in screenshots folder

