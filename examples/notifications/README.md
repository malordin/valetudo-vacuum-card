# Notification Automation Examples

This folder contains Home Assistant automation examples for vacuum event notifications, translated into all supported languages.

| File | Language |
|------|----------|
| [automations_en.yaml](automations_en.yaml) | English |
| [automations_ru.yaml](automations_ru.yaml) | Русский (Russian) |
| [automations_de.yaml](automations_de.yaml) | Deutsch (German) |
| [automations_zh.yaml](automations_zh.yaml) | 中文 (Chinese) |
| [automations_es.yaml](automations_es.yaml) | Español (Spanish) |
| [automations_nl.yaml](automations_nl.yaml) | Nederlands (Dutch) |
| [automations_it.yaml](automations_it.yaml) | Italiano (Italian) |
| [automations_pl.yaml](automations_pl.yaml) | Polski (Polish) |

## Covered events

Each file contains automations for the following events:

- **Cleaning started** — robot enters `cleaning` state
- **Cleaning finished** — robot transitions from `returning` to `docked` (includes area & time stats)
- **Returned to dock** — robot enters `docked` state
- **Error** — robot enters `error` state (includes status message)
- **Mop still attached** — robot docked while mop sensor is active
- **Consumable low** — brush/filter/sensor below warning threshold
- **Consumable depleted** — brush/filter/sensor at zero

## Usage

1. Replace `valetudo_yourrobot` with your robot's entity prefix (e.g. `valetudo_harshsillypigeon`)
2. Copy the content into your `automations.yaml` (or use HA UI → Settings → Automations → Import)
3. Adjust `notify.notify` to your preferred notification service (e.g. `notify.mobile_app_yourphone`)
