This project is designed to assist Drexel students in finding new apartments or sublets, as well as in subletting or ending the lease of their current residence(a process all students need to go through). Currently, students rely on social media and Facebook groups for these tasks, which can be a long and arduous process. 
By providing a central platform, this project will streamline the experience and make it easier for students to connect. The platform will offer enhanced matching of preferences between leasers, subletters, and tenants, helping users find the best fit based on their specific needs and criteria.


## Project Layout:

## At the moment, this project plans to break the backend into four major sections or layers:

These are the Domain, Persistence, backend-services, and api layers.

### Domain Layer
The **Domain Layer** contains core business logic pertaining to each subdomain and defines the types for each. The subdomains include Listing, User, etc...

### Persistence Layer
The **Persistence Layer** contains functions that interact directly with the database as well as type-converters that convert between the database and domain data types.

### backend-services Layer
The **backend-services Layer** orchestrates domain logic from the domain layer, and uses the persistence layer to persist changes to the database.


### General Current Project Structure
```
sublet-project/
├─ README.md
├─ .gitignore
├─ prisma/
│  ├─ schema.prisma
│  └─ migrations/
├─ public/
│  ├─ favicon.ico
│  └─ ...
├─ styles/
│  ├─ global.css
│  └─ ...
├─ components/
│  ├─react-component.tsx
│  └─ ...
├─ pages/
│  ├─ _app.tsx
│  ├─ login.tsx
│  └─ ...
│  └─ api/
│     ├─ createPost.ts
│     ├─ login.ts
│     ├─  ...
│     └─ auth/
│        └─ [...nextauth].ts
├─ helpers/
│  ├─ prisma.ts
│  ├─ jwt.ts
│  └─ providers/
│     └─ ReactQueryProvider.tsx
├─ frontend-services/
│  ├─ post.ts
│  └─ auth.ts
├─ modules/
│  ├─ domain/
│  │  └─ listing/
│  │     ├─ listing.ts
│  │     └─ listing-type.ts
│  ├─ persistence/
│  │  └─ listing/
│  │     ├─ listing-repository.ts
│  │     └─ listing-type-converter.ts
│  └─ backend-services/
│     └─ listing-services.ts
├─ lib/
│  └─ posts.ts
```