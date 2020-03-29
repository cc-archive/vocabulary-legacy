FROM node:12.16.1-alpine

# Make a codebase directory and work in it
RUN mkdir codebase
WORKDIR /codebase

# Load the package.json and package-lock.json files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy source and test files
COPY src ./src
COPY tests ./tests
COPY .storybook ./.storybook

# Copy lint configuration
COPY .eslintrc.js .

# Run lint
RUN npm run lint

# Run test
RUN npm run test

# Copy build configuration
COPY webpack.config.js .

# Run build
RUN npm run build
