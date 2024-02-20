Hi guys,

First of all, thanks for giving me this opportunity.

I have enjoyed implementing the Fever Pets V1, I think it was a nice challenge and allowed the candidate to demonstrate various technical skills.

In my opinion, the challenge is very complete, although the time might not be sufficient depending on the approach.

For the MVP - I have taken several technical decisions, for simplicity, I have added them to my commit messages and PR descriptions.

For the proposed considerations, I will elaborate on each, with my thoughts about the future versions.

**Considerations**

- More pets and pets' type can be added in the future

I have considered this case, although in the case that the pet's type increases, the IPet interface, especially the parameter type, can be more specific, declaring the types in a string literal type.

In any case, the logic is prepared to handle the addition of more types.

---

- We could have millions of pets registered in the near future and we need to take into account performance

To implement this feature I would consider implementing an infinite scroll and lazy-loading images, using the Intersection Observer API, I was thinking of a pagination strategy but for the kind of product, this approach could be considered more dynamic.

Considering the endpoint provides the capability of request page number and limit.
We can use the intersection observer to trigger an action to update a state that handles the endpoint call incrementing the `page` parameter.

`?page={incrementPage}&limit=10`

At the same time, I would implement an image lazy loading approach, triggered as well by the intersection observer to help us not load an image until it scrolls into view.

The intersection would be related to a `bottom page boundary element`, this is the element that will be observed and trigger the 2 events, to call the API for more pets and to lazy load the images until they get into view.

---

- Fever Pets can have users in different countries

I have implemented a language selector component and the corresponding logic based on local translations, ideally, we can call an endpoint and receive the translations to populate the app. And have a splash component while the app is loading the translations.

#### Conclusions

Overall, I have tried to apply good practices (those that I am aware of) into the app implementation and also tried to collaborate with every commit to a better code understanding and cover the utilities with unit tests.

There is for sure, room to improve and I will be keen to discuss it if you give me the opportunity.

As for the UI, the app is open to theming using CSS variables.
I have tried to organize the project to be scalable.

The APP is responsive, and CSS is what I enjoyed working with the most but I did not have time to give the app more love, unfortunately.

**PS: ** `npm i && npm run dev`
