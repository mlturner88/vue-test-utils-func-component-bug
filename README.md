# Functional Component Props Bug

In this scenario there is a functional component being unit tested that does not seem to receive any prop data when mounted via `mount()` function.
Even mounting this component and later changing the props does not appear to update the props for the functional component either.
I have confirmed via debugging that the prop appears to always be null and indeed the functional component is properly being re-rendered upon the prop data being modified.

The component in question being tested is `src/components/GroupedSection.js` in the `src/components/__tests__/GroupedSection.test.js` file.

## Run Tests

```bash
npm install
npm run test
```

## Related Information

- `@vue/test-utils` version: 2.0.0-rc.21
- `Vue` version: 3.2.33
- `node` version: 16.15.0
- `npm` version: 8.5.5
