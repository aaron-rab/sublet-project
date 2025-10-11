## Goals
This project aims to assist Drexel students who need to find apartments or sublets, as well as students who are subletting or ending the lease of their current residence. 

**Currently**, students rely on social media and Facebook groups for these tasks, which can be a long and arduous process. 
**This project** will simplify this dreaded experience and make it easier for students to connect by providing a central platform that aids in the matching of preferences between leasers, subletters, and tenants, helping students find the best fit based on their specific needs and criteria.

## Project Layout:

The backend of this project currently contains four major sections or layers:

These are the *Domain*, *Persistence*, *backend-services*, and *api* layers.

### Domain Layer
The *Domain Layer* contains core business logic pertaining to each subdomain and defines the types for each. The subdomains include Listing, User, etc...

### Persistence Layer
The *Persistence Layer* contains functions that interact directly with the database as well as type-converters that convert between the database and domain data types.

### backend-services Layer
The *backend-services Layer* orchestrates domain logic from the domain layer, and uses the persistence layer to persist changes to the database.

### api Layer
The *api* layer calls the backend-services.

### General Current Project Structure
```
sublet-project/
├─ README.md
├─ .gitignore
├─ prisma/
│  ├─ schema.prisma
│  └─ migrations/
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
├─ helpers/
│  ├─ prisma.ts
│  ├─ jwt.ts
│  └─ providers/
│     └─ ReactQueryProvider.tsx
├─ frontend-services/
│  ├─ post.ts
│  └─ auth.ts
├─ lib/
│  └─ posts.ts
```