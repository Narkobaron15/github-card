# Use the official node image as the base image
FROM node:latest

# Define the environment variable
ARG PORT=8080

# Set the environment variable
ENV PORT=$PORT

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

EXPOSE $PORT

# Command to start the Vite preview
CMD ["npm", "start"]
