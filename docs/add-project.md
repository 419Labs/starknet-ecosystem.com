# Add a new project

## Steps

1. **Generate a UUID** for your project: [uuidgenerator.net/version4](https://www.uuidgenerator.net/version4)

2. **Add your logo** to `public/logos/` (PNG or JPG, square, min 200x200px)

3. **Add your project** to `data/ecosystem.ts` — append a new entry to the `allProjects` array:

```typescript
{
  id: "8f447c09-41a4-4427-900d-fbb82e90befd",
  name: "Cypherock",
  shortName: "Cypherock",
  description: "Cypherock X1 is the World's safest hardware wallet with non-custodial inheritance, audited by Keylabs",
  tags: ["wallet"],           // use existing tags from data/tag.ts
  image: "your-logo.png",  // filename in public/logos/
  network: {
    website: "https://yourproject.com",
    github: "https://github.com/cypherock",
    twitter: "https://x.com/CypherockWallet",
    medium: "",
    discord: "",
    telegram: "https://t.me/cypherock",
  },
  isLive: true,             // true if live on mainnet
  isTestnetLive: false,     // true if live on testnet
}
```

4. **Check available tags** in `data/tag.ts` — use existing tag values (e.g. `"defi"`, `"gaming"`, `"nft"`, `"infrastructure"`, `"wallet"`, etc.)

5. **Run the linter** to make sure everything is clean:

```bash
yarn lint
```

6. **Create a Pull Request** with the title: `✨ Introducing YourProjectName`

Your project will go live automatically once the PR is merged.

## Questions?

Join the community Telegram: https://t.me/starknet_ecosystem
