## Pal Components

Provides `PalIcon` and `PalSelect` to display a pal's icon and to select pals.

`PalIcon` has the following props:
- `id`, `pal` - The id of the pal or the pal object to determine what pal to display. `pal` is prioritized over `id` if both are provided.
- `circle` - (boolean) Whether to show the icon as a circle or a square.
- `size`, `scale` - (number) Size of the icon to display. Default is 80x80 px. Size (in pixels) is prioritized if provided. Scale is a multiplier for the icon's original size of 512x512 px.
- `showName` - (boolean) Whether to display the name of the pal below it
- `wrapName` - (boolean) Whether to apply word wrap to the name
- `showPalNumber` - (boolean) Whether to display the pal's palpedia number on the upper left of the icon
- `highlighgted` - (boolean) Whether to apply a highlight to the icon when the pal is selected

`PalSelect` has the following props:
- `value` - State variable to attach the value of the select component to
- `onChange` - Function called whenever a pal is selected, pass a function that takes the new value as a parameter.
- `optionsOverride` - Optional list of pal objects to change the selection list to. All pals are available to select by default.
