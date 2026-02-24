# Starknet Ecosystem v2

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ![version](https://img.shields.io/badge/version-2.0.0-blue) ![Vercel Deployment](https://img.shields.io/github/deployments/419Labs/starknet-ecosystem.com/production?label=vercel)

Your entrypoint into Starknet. Explore 300+ projects, live metrics, grants, jobs, learning resources, and everything building on Starknet.

**[starknet-ecosystem.com](https://starknet-ecosystem.com)**

## What's new in v2

Complete rebuild with a new bold design system, improved navigation, and new sections:

- **Projects** -- Browse and filter 300+ ecosystem projects with live data from [starknet-db.com](https://starknet-db.com)
- **Metrics** -- TVL, DEX volume, staking stats, validator data powered by DefiLlama, Endur, and avnu
- **Grants** -- Starknet Foundation seed/growth grants, Propulsion, X-Founders, and more
- **Tokens** -- Live token data via avnu API with CoinGecko and Voyager links
- **Academy** -- Curated learning paths, SDKs, tooling, and community resources
- **Jobs** -- Aggregated job boards from Starknet Foundation, StarkWare, and the ecosystem

### Tech stack

Next.js 16 | React 18 | Chakra UI v2 | TypeScript | Vercel

## Development

```bash
yarn install
yarn dev        # localhost:3000
yarn build      # production build
yarn lint       # eslint
yarn test:ci    # jest
yarn knip       # dead code detection
```

## Contribute

Every contribution is welcome.

- [List a project](docs/add-project.md)
- [Update a project](docs/update-project.md)
- [List a job](docs/add-job.md)
- [Update a job](docs/update-job.md)
- [Add/improve translations](docs/translations.md)

Join our [Telegram](https://t.me/starknet_ecosystem) for PR coordination and ecosystem updates.

## License

Apache 2.0

---

Built with craft by [avnu](https://x.com/avnu_fi) and the Starknet community.
