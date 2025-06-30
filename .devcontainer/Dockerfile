FROM python:3.11

# Instala dependencias básicas y Node.js (para React)
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    libpq-dev \
    ca-certificates

# Node 18 LTS
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Confirma instalación
RUN node -v && npm -v

WORKDIR /workspace
