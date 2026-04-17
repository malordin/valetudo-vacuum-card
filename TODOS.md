# TODO — dreame-vacuum-map-card

## Features

### Mapping mode (in progress)
- [x] Add "Mapping" mode button to the Cleaning Mode modal (alongside Vacuum / Mop / Vac+Mop)
- [x] Hide suction power, water level, mop washing frequency and route selectors when Mapping is selected
- [ ] Start a dedicated mapping-only flow triggered from the card header / main actions

### Map editing
- [ ] Room split — draw a line to split one room into two
- [ ] Room join — merge two adjacent rooms into one
- [ ] Room delete — remove a room from the map
- [ ] Rename rooms inline
- [ ] Trigger "save map" after editing (requires Valetudo REST API or MQTT)

### "I am here" (Find robot)
- [ ] Add a button in the Settings panel Device section that triggers the locate/beep command
- [ ] Entity: `button.valetudo_yourrobot_locate` (or equivalent HA service call)

### Valetudo UI shortcut
- [x] Add a clickable link in the Device section of the Settings panel that opens the Valetudo web UI
- [ ] Config option `valetudo_url` already used for REST save — reuse for the link

## UX improvements

### Notification automation examples
- [x] Per-language YAML files in `examples/notifications/`

### Cleaning Mode modal
- [x] Fix invisible blocking element at the bottom of the modal (removed double scroll container)
