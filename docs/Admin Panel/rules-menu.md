# Rules Management

This guide explains how to set up, configure, and display server rules using the **Admin Panel**.

---

## Accessing the Admin Menu

1. Open the **Admin Panel** in-game.
2. The **Rules Admin Menu** will appear with the following options:

- **Setup Rules**: Configure server rules if they are not already set up.
- **Display Rules**: Show the server rules menu to review the rules.
- **Disable Rules Menu**: Disable the rules display temporarily.

---

## Setting Up Rules

1. **Setup Rules**:
   - If rules are not configured, click on **Setup Rules**.
   - Input the **Server Name** (e.g., "My Awesome Server").
   - Select the **Number of Rules** (1–20) you want to configure.

2. **Input Rules**:
   - After selecting the number of rules, you will be prompted to enter each rule.
   - Example:
     ```
     Rule 1: No griefing.
     Rule 2: Be respectful to others.
     Rule 3: No cheating.
     ```

3. Once all rules are entered, click **Confirm** to save the configuration.

---

## Player Rules Menu

When a player joins for the first time:

- The rules menu will automatically display if rules are configured and the player hasn't accepted them.
- Players will see a formatted list of rules along with the following options:
  - **I Accept**: Accept the rules and continue playing.
  - **I Deny**: Deny the rules and get kicked from the server.

---

## Kicking for Rule Denial

If a player denies the rules:
- The server will issue a kick command with the message:
  ```
  You must accept server rules to play.
  ```

---

## Testing Rules Menu for Players

Admins can manually show the rules menu to players for testing purposes using:
```plaintext
/scriptevent realm:rules player.test
```

---

## Summary

- Access **Admin Panel** → **Rules Admin Menu**.
- Use **Setup Rules** to configure rules.
- Use **Display Rules** to review rules.
- Players must **accept** rules to continue playing.

For further customization or troubleshooting, review the server configuration and scripts.

--- 
