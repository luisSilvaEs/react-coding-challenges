# README

Simple site created using React to host my implementation from following [React code challenges](https://blog.imocha.io/react-coding-challenges)

Requirements for the app are:

- Home page with links as cards to the different code [challenges](https://blog.imocha.io/react-coding-challenges)
- When click on each card, I should be redirected to its own sub-route
- Use typescript
- Storage code in GitHub
- Site will be hosted in S3
- Site will be deployed using a GitHub action
- Use Amazon Route 53 to buy cheapest domain for the page maybe (check to avoid over billing)
- Use files:

* .env.development.local
* .env.production.local

## How to deploy app

The built version of this app is stored in S3 is linked to the domain (http://luissilvacoding.com/)[http://luissilvacoding.com/]
through Amazon Route 53.

### Manually deploy the app to S3

- Generate deployable files (these live in the build folder) by running: `npm run build`
- Deploy to S3: `npm run sync`

### Deploy trough GitHub actions

Simply create a Pull Request to main branch

### References

- [Top 15 React Coding Challenges to Hire React Developers](https://blog.imocha.io/react-coding-challenges)
- [Landing Page Tutorial React Js](https://www.youtube.com/watch?v=GVjIflROwJ4)
