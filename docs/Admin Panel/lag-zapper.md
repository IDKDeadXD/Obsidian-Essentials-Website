# Lag Zapper

The **Lag Zapper** is a utility designed to help players maintain a smooth gameplay experience by automatically removing ground items that may cause lag. This tool includes customizable settings, such as clearing intervals and countdown notifications.

---

## Features

1. **Lag Clearing:**
   - Automatically removes all ground items in the overworld.
   - Helps reduce server lag caused by excessive dropped items.

2. **Customizable Interval:**
   - Players can set the time interval for automatic lag clearing.

3. **Countdown Notification:**
   - A 10-second countdown warns players before clearing items.
   - Notifications include alerts at 3, 2, and 1 seconds.

4. **Enable/Disable Functionality:**
   - Players can toggle the Lag Zapper on or off as needed.

---

## How to Use

### Accessing the Lag Zapper Menu
1. Go to the admin menu and select `Lag Zapper`
2. The **Lag Zapper Configuration Menu** will open.

---

### Configuring the Lag Zapper

#### **1. Setting the Lag Clear Interval**
- Enter the time interval for clearing lag in the format:
  - `30s` for 30 seconds.
  - `1m` for 1 minute.
  - `1m 30s` for 1 minute and 30 seconds.
- Example input:  
  ```plaintext
  2m
  ```
  This sets the lag clearing interval to 2 minutes.

#### **2. Enabling or Disabling**
- Use the toggle option in the menu to enable or disable the Lag Zapper.
- When disabled, the Lag Zapper will not clear any items.

#### **3. Saving Changes**
- Once you configure the settings, press "Confirm" to save changes.
- You’ll receive a message summarizing the new settings.

---

### Notifications and Countdown
- When the configured interval is reached, a **10-second countdown** begins:
  - Example messages:
    - `§eClearing lag in 10 seconds...`
    - `§e3... 2... 1...`
- After the countdown, all ground items are removed, and the message `§cLag cleared! All ground items removed.` is broadcast to all players.

---

### Notes
1. **Items Affected:**
   - Only ground items in the **overworld** are removed.
   - Items in inventories or chests are **not affected**.

2. **Ensure Safety:**
   - Pick up any important items before the countdown completes to avoid losing them.

3. **Default Settings:**
   - Interval: 60 seconds.
   - Status: Disabled by default.

4. **Time Formats:**
   - Use valid formats such as `1m`, `30s`, or `2m 15s`. Incorrect formats will not be accepted.

---

## Enjoy a lag-free experience with the Lag Zapper! 🌟