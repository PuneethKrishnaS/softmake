# Services Integration Catalog

This directory hosts SaaS integration adapters and third-party modules. Each subdirectory serves as a plug-and-play adapter layer for our core business modules.

## Standard Integrations Layout

```text
services/
├── email/            # AWS SES / SendGrid Transactional Emails
├── storage/          # AWS S3 / Cloudinary Assets Upload
├── sms/              # Twilio OTP & Critical Alerts
├── payments/         # Razorpay / Stripe Payment Processing
├── ai/               # OpenAI Assistant & Neural Pipelines
├── notifications/    # WebSocket Push Updates & Registry
├── pdf/              # React-PDF / Weasyprint Statement Builders
└── deployment/       # Terraform/K8s/Docker Orchestration
```

---

## 1. AI Integration (`services/ai/`)
Connects views and database tasks to OpenAI or local models:
- **Models**: `gpt-4o-mini`, `claude-3-5-sonnet`
- **Use cases**: Automatic code summaries, developer assignment recommendations, ticket auto-replies.

## 2. Storage Integration (`services/storage/`)
Uploads contract and ticket attachments directly to Cloudinary or AWS S3:
- **Use cases**: PDF storage, file attachment proxies, student avatars.

## 3. Payments Integration (`services/payments/`)
Generates Razorpay orders and verifies webhook signatures.
- **Use cases**: Project advance collections, college payments, subscription bills.
