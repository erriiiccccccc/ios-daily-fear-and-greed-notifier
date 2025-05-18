# Daily Fear & Greed Notifier (on iOS using Scriptable + Shortcuts)

This is a lightweight iOS automation that sends a daily notification with **any data you want** — in this case, it shows the **CNN Fear & Greed Index** and **Crypto Fear & Greed Index** using RapidAPI.

Built using [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) and the **Shortcuts** app, it’s fully offline after setup and customizable.

---

## 🚀 What It Does

- Fetches **real-time data** from 2 different APIs via RapidAPI
- Formats the data into a clean summary
- Triggers a local iOS notification automatically every day

> 💡 You can use this structure to automate **any data source** — just change the endpoints or logic. I used CNN and Crypto fear & greed indexes.

---

## ⚙️ Setup Instructions

### 1. Get Free API Access

Sign up at [RapidAPI](https://rapidapi.com/) and subscribe to:

- [CNN Fear & Greed API](https://rapidapi.com/portals/api/fear-and-greed-index)
- [Crypto Fear & Greed API](https://rapidapi.com/Onshobgdan-5SUbvWmtd0U/api/crypto-fear-greed-index2)

Copy your **API Key**.

---

### 2. Scriptable Script

- Install the **Scriptable** app from the App Store
- Copy `fear_and_greed.js` into Scriptable
- Paste in your RapidAPI key at the top of the script
- Run it once manually to test

---

### 3. iOS Shortcuts Automation

- Open the **Shortcuts** app → **Automation** → `+` → **Create Personal Automation**
- Choose **Time of Day** → set a time (e.g. 5:00 PM daily)
- Add Action → `Run Script` → select the Scriptable script
- Turn off **Ask Before Running**
- (Optional) Turn on **Run Immediately**

---

## 🔕 Works with Focus / Do Not Disturb

To ensure notifications still show during Focus modes:

1. **Settings → Focus → Do Not Disturb** → Add **Scriptable** under "Allowed Apps"
2. **Settings → Scriptable → Notifications** → Enable **Time Sensitive Notifications**

The script also sets the `interruptionLevel` to `"time-sensitive"` automatically.

---

## ✅ Example Notification

