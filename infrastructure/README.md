# Infrastructure Configurations

This directory manages the deployment containers, gateways, proxy configurations, and server provisioning details.

## Directories Layout

```text
infrastructure/
├── docker/             # Docker orchestration
│   └── docker-compose.yml
├── nginx/              # Gateway reverse-proxy mappings
│   └── nginx.conf
├── terraform/          # IaC templates (AWS, VPC, RDS)
├── kubernetes/         # K8s YAML deployment manifests
└── github-actions/     # Base environments configs
```

## Running Locally via Docker

1. Move to `infrastructure/docker/` directory.
2. Run `docker-compose up --build`.
3. Open `http://localhost` to view the Marketing Landing page, or access specific subdomains using local hosts mappings (`127.0.0.1 student.softmake.in`).
