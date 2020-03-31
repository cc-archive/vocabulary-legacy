# Build on top of a Node.js + npm image
FROM node:lts

# Create a non-root user so as to not tamper with privileges
RUN groupadd -r vocab && useradd -r -g vocab -G audio,video vocab \
    && mkdir -p /home/vocab \
    && chown -R vocab:vocab /home/vocab

# Make a codebase directory and work in it
RUN mkdir codebase
WORKDIR /codebase

# Load the package.json and package-lock.json files
COPY ./package.json ./
COPY ./package-lock.json ./

# Install packages
RUN npm install \
    && chown -R vocab:vocab ./node_modules

# Run everything after as non-privileged user
USER vocab

# Expose ports on the container
EXPOSE 8080
