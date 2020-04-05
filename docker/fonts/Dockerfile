# Build on top of a Node.js + npm image
FROM node:lts

# Create a non-root user so as to not tamper with privileges
RUN groupadd -r fonts && useradd -r -g fonts -G audio,video fonts \
    && mkdir -p /home/fonts \
    && chown -R fonts:fonts /home/fonts

# Make a codebase directory and work in it
RUN mkdir codebase
WORKDIR /codebase

# Load the package.json and package-lock.json files
COPY ./package.json ./
COPY ./package-lock.json ./

# Install packages
RUN npm install \
    && chown -R fonts:fonts ./node_modules

# Run everything after as non-privileged user
USER fonts

# Expose ports on the container
EXPOSE 8080
