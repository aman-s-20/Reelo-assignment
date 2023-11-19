# Question Paper Generator

This application generates a question paper based on specified criteria such as total marks and difficulty distribution.

## Table of Contents

- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [How to Use](#how-to-use)
- [Examples](#examples)

## Project Structure

The project is organized into the following directories:

- `controllers`: Contains the logic for generating question papers.
- `models`: Defines the data model for questions.
- `routes`: Defines the API routes.
```
    |-- controllers
    |   |-- questionController.js
    |-- models
    |   |-- questionModel.js
    |-- routes
    |   |-- index.js
    |-- app.js
    |-- questionData.js
    |-- package.json
    |-- README.md
```
## File Descriptions

### controllers/questionController.js

This file contains the `QuestionController` class, which handles the generation of question papers based on specified criteria.

### models/questionModel.js

The `QuestionModel` class in this file defines the data model for questions. It includes methods to generate random questions and filter questions by difficulty.

### routes/index.js

Defines the API routes for the application, including a route to generate a question paper based on user input.


## How to Use

1. Clone the repository by `git clone git@github.com:aman-s-20/Reelo-assignment.git`
2. Install dependencies using `npm install`.
3. Run the application using `nodemon app.js`.
4. Access the API at `http://localhost:3000`.

## Examples

To generate a question paper, make a POST request to the `/` endpoint with the following JSON payload:

```json
{
  "totalMarks": 100,
  "Easy": 20,
  "Medium": 50,
  "Hard": 30
}
