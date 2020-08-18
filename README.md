# React-BoilerPlate-Quovantis
This is a custom react project created without any tool or pre-defined projects having many features.

# Features!

  - Webpack
  - Webpack dev server
  - Reload feature in dev
  - Webpack configs for dev and prod
  - Minification of js in prod
  - Minification of css in prod
  - Custom environment in-built(dev,qa,prod,test)
  - Test setup done with test env
  - Prettier enabled
  - Linting enabled
  - Themed Provider at root so you can define global colors or fonts
  - Redux 
  - Redux thunk
  - Logging and Fetch abstracted to upper level
  - Css modules enabled
  - Routing enabled
  - Es6 enabled
  - Code splitting enabled with loadable components
  - Support for images (png,svg,jpg,gif)
  - Easy local port change


# Style

  - Css support
  - Css modules support
  - Styled Components enabled
  - Theme Provider enabled

# Environments
  - dev
  - qa
  - test
  - prod
  - local
>> More env could easily be added if required

### Scripts 
For local
Note:- To change the port edit the start:dev command in package.json
```
$ npm install
$ npm run start:dev
```

For production
Note:- Automatic Linting and fixing is enabled on prod build , you can disable that if required
```
$ npm run build:prod
```
For any other environment(dev,qa)

```
$ npm run build:[env]
```


### Test


```sh
$ npm run test
```

