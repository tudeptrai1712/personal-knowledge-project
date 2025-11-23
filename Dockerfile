# Stage 1: Build stage (for future JS/TS build tools)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# No dependencies in package.json, but this is for future use
RUN npm install
COPY src/ ./src
# In the future, a build command like `RUN npm run build` would go here.

# Stage 2: Production stage (Nginx for serving)
FROM nginx:alpine
# Remove default Nginx welcome page
RUN rm /etc/nginx/conf.d/default.conf
# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/
# Copy the static website files from the build stage
COPY --from=build /app/src /usr/share/nginx/html
# Expose port 80 to the outside world
EXPOSE 80
# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
