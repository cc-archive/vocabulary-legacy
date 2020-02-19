# Development instructions

## Setting up the project

**Step 0:** 
Fork the project. This will be useful if you intend to submit PRs. 

**Step 1:** Clone the project to your computer. If you chose to fork the
repository in step 1, clone the fork instead.

```
$ git clone https://github.com/creativecommmons/vue-vocabulary.git
```

**Step 2:**
Change into the project directory.

```
$ cd vue-vocabulary/
```

After this step, there are two ways to proceed. Choose the one that suits your
needs best.

### Dockerised setup (recommended)

_Requires Docker and Docker Compose to be installed._

**Step 3:**
Start the Docker containers for the project.

```
$ docker-compose up
```

### Manual setup

_Requires Node.js and npm to be installed._

**Step 3:**
Install npm dependencies.

```
$ npm install
```

**Step 4:**
Start the servers.

To start the CC Vocabulary website or documentation, run the `serve:website` or
`serve:storybook` task respectively.

```
$ npm run serve:website
$ npm run serve:storybook
```

## Requesting changes

For bugs reports and feature requests, use GitHub issues with the appropriate
labels. We can discuss the possibility of that change or new feature being
implemented and released in the future. This lets us come to an agreement about
the proposed idea before any work is done.

## Submitting changes

**Step 0:** 
Discuss on the issue. If not already being worked on, take it up. Make sure that
the changes are in alignment with the short and long term goals of the project.

**Step 1:** 
Create a branch named after the changes. Use underscores. Be descriptive.

```
$ git checkout -b branch_name
```

**Step 2:**
Resolve the issue by changing the code. Update tests if need be.

**Step 3:**

Run the `lint` and `test:unit` tasks to ensure code quality and functionality.

```
$ npm run lint
$ npm run test:unit
```

If translations are to be changed, update the `.json` files under individual 
components for component-level translations or the `.json` files in `locales/` 
for global-level translations.

New locales must be manually added to the `Locale` component.

**Step 4:**
Push the commits to your branch on the fork and submit a PR. Fill all relevant 
fields in the PR template.

```
$ git add file_name
$ git commit
$ git push --set-upstream fork branch_name
```
