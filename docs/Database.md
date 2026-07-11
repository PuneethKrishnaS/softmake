# Database Schema Documentation

Our system uses **PostgreSQL** (hosted via Neon in cloud staging/production) with local SQLite fallback.

## Models Schema

### 1. accounts.User
- Extends standard Django `AbstractUser`
- Fields:
  - `role`: CharField (SUPERADMIN, ADMIN, STUDENT, DEVELOPER)
  - `groups`: M2M relation to django group models
  - `user_permissions`: M2M relation to django permission models

### 2. students.Student
- Represents profile for USN registrations
- Relations:
  - `user`: OneToOneField(User, related_name='student_profile')
- Fields:
  - `usn`: CharField (Unique index)
  - `college_name`: CharField
  - `department`: CharField
  - `semester`: IntegerField
  - `phone`: CharField

### 3. projects.Project
- Represents client/student projects
- Relations:
  - `leader`: ForeignKey(students.Student, null=True, blank=True)
  - `students`: ManyToManyField(students.Student)
  - `assigned_developer`: ForeignKey(accounts.User, null=True, blank=True)
- Fields:
  - `title`, `description`, `technology`, `category`
  - `github_repo`: CharField (Format: `owner/repo`)
  - `status`: Stage choices (REQUIREMENT, TOPIC, DESIGN, FRONTEND, BACKEND, DATABASE, TESTING, REPORT, DEPLOYMENT, DELIVERED)
  - `progress_percentage`, `total_price`, `advance_payment`

### 4. tickets.Ticket
- Support tickets raised for projects
- Relations:
  - `student`: ForeignKey(students.Student)
  - `project`: ForeignKey(projects.Project)
- Fields:
  - `title`, `description`
  - `priority`: Choices (LOW, MEDIUM, HIGH)
  - `status`: Choices (OPEN, IN_PROGRESS, PENDING, COMPLETED, REJECTED)
  - `created_at`, `resolved_at`

### 5. tickets.TicketMessage
- Chat log rows for technical support channels
- Relations:
  - `ticket`: ForeignKey(tickets.Ticket, related_name='messages')
  - `sender`: ForeignKey(accounts.User)
- Fields:
  - `message`: TextField
  - `is_read`: BooleanField
  - `created_at`

### 6. payments.Payment
- Tracks client billing milestones
- Relations:
  - `project`: ForeignKey(projects.Project, related_name='payments')
- Fields:
  - `amount`, `description`
  - `status`: Choices (PENDING, PAID, OVERDUE, FAILED)
  - `due_date`, `paid_date`, `transaction_id`, `created_at`
