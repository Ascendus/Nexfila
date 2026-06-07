#!/bin/bash
cd /opt/Nexfila/nexfila-frontend && git pull
cd /opt/Nexfila/nexfila-backend && git pull
cd /opt/Nexfila/nexfila-backend && docker compose down && docker compose up -d --build