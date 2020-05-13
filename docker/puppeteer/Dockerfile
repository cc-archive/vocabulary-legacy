# Ref: https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker
# Build on top of a Node.js + npm image
FROM node:lts

# Create a non-root user so as to not tamper with privileges
RUN groupadd -r pptr && useradd -r -g pptr -G audio,video pptr \
    && mkdir -p /home/pptr \
    && chown -R pptr:pptr /home/pptr

# Install all necessary dependencies to run Chromium in the container
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Prevent Chromium redownload
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Make a codebase directory and work in it
RUN mkdir codebase
WORKDIR /codebase

# Load the package.json and package-lock.json files
COPY ./package.json ./
COPY ./package-lock.json ./

# Install packages
RUN npm install \
    && chown -R pptr:pptr ./node_modules

# Run everything after as non-privileged user
USER pptr

# Expose ports on the container
EXPOSE 8080
