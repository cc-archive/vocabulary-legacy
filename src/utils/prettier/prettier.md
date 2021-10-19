## Installation


It is absolutely important to install prettier as a dev dependency for this project

First, install Prettier locally:

*with npm*
```bash
 npm install --save-dev --save-exact prettier
```

*with yarn*
```bash
 yarn:   yarn add --dev --exact prettier
```


Instailling with `npm` is lightweight, tweakable and much more performant as the code runs very close to the operating system. 

#### Formatting with Prettier

Now, you can go ahead and format all files with Prettier:

```bash
npx prettier --write .
```

If you want to format just a particular directory,  You may run 

```bash
prettier --write src/footer 
```
or if you want to format a particular file

```bash
prettier --write src/components/buttons/button.scss
```


## Ignoring Files

Create a .prettierignore file to let the Prettier CLI and editors know which files to not format. 
You can base your .prettierignore on the existing .gitignore file
