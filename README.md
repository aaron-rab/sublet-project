## Goals
This project aims to assist Drexel students who need to find apartments or sublets, as well as students who are subletting or ending the lease of their current residence. 

**Currently**, students rely on social media and Facebook groups for these tasks, which can be a long and arduous process. 
**This project** will simplify this experience and make it easier for students to connect by providing a central platform that aids in the matching of preferences between leasers, subletters, and tenants, helping students find the best fit based on their specific needs and criteria.

## Project Layout:

The backend of this project currently organized into 4 main packages:
```
src/
├── modules/          # backend logic grouped here
│   ├── domain/       # Business types & rules (Listing, User, etc...)
│   ├── persistence/  # MongoDB save/load data
│   └── services/     # Coordinates domain rules and persistence to complete actions like "create a listing"
└── pages/
    └── api/          # Next.js API routes (calls services)
```

<img width="477" height="597" alt="image" src="https://github.com/user-attachments/assets/7b46e1a6-8bde-4410-bc17-393920de07d3" />

