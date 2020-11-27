# Express Typescript Non Basic Starter

Removes the hastle of setting up typescript with express, not barebone since it contains aws firebase and mysql.

Key Folder Structure

```
- api
  - get
  - post
  - corn
  - middlewares
- config
- models
- utility
- views
```

Most of it is self explanatory, if stuck just add a issue and I'll respond.

`yarn start` uses ts-node & nodemon to start developement server, this is a bit slower but typical developement setup. Needs one time config and other imports setup when compiled.
`yarn dev` compiles and watches the ts files for changes and restarts server if changes occur. Faster but needs import setup when clean building.
`prepare.sh` or `yarn start:prod` creates necessary log files, compiles and starts server. Recomended if you are not using pm2, etc to start in prod.

---

Author: Suraj Mandal
github.com/surajmandalcell
