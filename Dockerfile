# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install
COPY . .
EXPOSE 3000

# Run the Angular app
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--disable-host-check", "--no-open"]