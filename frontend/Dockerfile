# Use the official Nginx image from Docker Hub
FROM nginx:1.25-alpine

# Set worker processes to 1 in the main nginx.conf file
# This is the correct place for this directive.
RUN sed -i 's/worker_processes auto;/worker_processes 1;/' /etc/nginx/nginx.conf

# Remove the default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Set the working directory for Nginx
WORKDIR /usr/share/nginx/html

# Copy our custom site config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static files into a temporary directory
COPY ./src /tmp/

# Copy the entrypoint script and make it executable
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# The container will run this script on start
ENTRYPOINT ["/entrypoint.sh"]
