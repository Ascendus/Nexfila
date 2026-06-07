#!/bin/bash
cd /opt/Nexfila && git pull
cd /opt/Nexfila/nexfila-backend && docker compose down && docker compose up -d --build