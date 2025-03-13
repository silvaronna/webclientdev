# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package.json package-lock.json ./

RUN npm install
