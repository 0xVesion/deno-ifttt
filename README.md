# Deno IFTTT

This library makes triggering IFTTT webhook events with deno easy.

## Guide

IFTTT is a service that allows you to connect multiple external web services
with each other. To get more information about how to setup your own
IFTTT integration / webhook you can visit: [IFTTT Webhooks](https://ifttt.com/maker_webhooks)

## Example

```ts
import { IFTTTApi } from "https://raw.githubusercontent.com/0xVesion/deno-ifttt/master/mod.ts";

const apiKey = Deno.env.get("IFTT_API_KEY") || ""; // load iftt api key from environment
const ifttt = new IFTTTApi(apiKey);

const response = await ifttt.trigger(
    "turn_on_lights", // custom event name
    "living_room", // custom argument 1
);

console.log(response);
```
