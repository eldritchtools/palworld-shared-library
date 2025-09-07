## Passive Components

Provides `PassiveComponent` and `PassiveSelect` to display and select passives.

`PassiveComponent` has the following props:
- `name` - Name of the passive to display.
- `rank` - (integer) Rank of the passive (ranges from -3 to 4). Optional, finds what rank the passive actually is by default.
- `addBorder` - (boolean) Whether to include a border

`PassiveSelect` has the following props:
- `value` - State variable to attach the value of the select component to
- `onChange` - Function called whenever a passive is selected, pass a function that takes the new value as a parameter.
