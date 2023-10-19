Our company (Flyle, Inc.) implemented a design system in a very short time frame of 18 business days. We will share our findings from this project.

Technical Ingenuity

- Automatically migrate as much as possible in advance using AST, and automatically add TODO comments to all parts that cannot be identified.
- Implemented ESLint custom rules to automate as much of the review as possible.
- Perform VRT to ensure that the design system is not broken.
- E2E testing with Autify

Project Management

- Focus on short term manual work to reduce task switching costs to zero
- Progress is managed numerically
- Multiple manual tests to deal with bugs
- Finally, pair-processing with designers to make minor design changes

Reflection and learning through the project

- We should have understood the detailed dependencies of components in advance (we saw cases where conflicts occurred)
- Mistakes in the migration itself

First, after sharing the above, I would like to devote time to sharing the method of program modification by AST for the first technical innovation point.
