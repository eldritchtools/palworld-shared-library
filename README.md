## Palworld Shared Library

Just a repo for shared components for my Palworld projects.

Run `npm run build` before pushing updates to this project.

Add `"@eldritchtools/palworld-shared-library": "github:eldritchtools/palworld-shared-library"` to `dependencies` in `package.json` and run `npm install` to import this into other projects.

Provides the following:
- [pals, passives](src/data) - Data of all pals and pal passives
- [PalIcon, PalSelect](src/palComponents) - Components to display a pal's icon and to select a pal
- [PassiveComponent, PassiveSelect](src/passiveComponents) - Components to display a passive and to select a passive
- [checkIdSearchMatch, checkPalSearchMatch, sortPalIds](src) - Other useful functions for searching and sorting