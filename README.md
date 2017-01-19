Create-React-App 
ejected to add PostCss plguins support
(smart-import, precss, cssnext, lost included)
also add webpack dash

https://medium.com/@readforfreedom/configure-css-for-create-react-app-8681c6eb5f00#.yy111chtd

##Install
```
git clone https://github.com/ruanjianusa/React-Customized-Starter.git
cd React-Customized-Starter
rm -rf .git
git init
```

##Usage
Note: I recommend to use [Yarn](https://yarnpkg.com/)

Go to project root
```
yarn
```
will install all dependencies.

To run the project in normal mode (with hot loading)
```
yarn start
```
or if you prefer [Webpack Dashboar](https://github.com/FormidableLabs/webpack-dashboard)
```
yarn dash
```


##Deploy
### Simple Build (if you want to handle deployment yourself)
```
yarn build
```

###Github Pages
To Deploy to Github Pages:
head to package.json file of your project, edit
```
"homepage": "https://<github-username>.github.io/<project-repo>"
```
Replace <github-username> with your github username
        <project-repo> with your project repo name
Then,
```
yarn ghpages
```
###Surge
At project root
```
yarn surge
```
Simply follow the instruction. 
write-down the domain name.

####Note: 
1.You can change the domain name even if it gives you a random on by default

2.To Remove project from surge: 
```
surge teardown <domain name by surge>
```

