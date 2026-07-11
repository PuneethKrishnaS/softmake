# REST API Documentation

Base endpoint path prefix is `/api/`.

## Authentication Flow

### 1. User Login
- **Endpoint**: `/api/auth/login/`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "usn_or_username",
    "password": "yourpassword"
  }
  ```
- **Response**: Returns JWT `access` and `refresh` tokens.

### 2. User Profile Info
- **Endpoint**: `/api/auth/me/`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <access_token>`
- **Response**: Returns User serializer fields and nested `student_profile` if user is a student.

---

## Students Endpoints

### 1. Student Registration
- **Endpoint**: `/api/students/register/`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "full_name": "John Doe",
    "email": "john@college.edu",
    "contact_number": "9988776655",
    "usn": "1RV22CS001",
    "college_name": "RV College of Engineering",
    "branch": "CSE",
    "semester": 6,
    "password": "securepassword123"
  }
  ```

---

## Projects Endpoints

### 1. Add Student Member
- **Endpoint**: `/api/projects/<project_id>/add_student/`
- **Method**: `POST`
- **Request Body**: `{"usn": "1RV22CS001"}`

### 2. GitHub Integration Actions
- **Get Releases**: `/api/projects/<project_id>/github_releases/`
- **Get Readme**: `/api/projects/<project_id>/github_readme/`
- **Get Docs**: `/api/projects/<project_id>/github_documents/`
