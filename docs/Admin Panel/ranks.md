# Ranks

This part of the add-on allows players to manage custom ranks in Minecraft Bedrock Edition, including adding, editing, and deleting ranks, as well as formatting chat messages to display ranks. Here's how to use it:

---

## Features
1. **Rank Management:**
   - Add new ranks with customizable color and style.
   - Edit or delete existing ranks.
   - View all ranks assigned to a player.

2. **Chat Formatting:**
   - Display ranks in chat messages.
   - Customize chat formatting with ranks.


---


## Commands and Usage


---

### Managing Ranks

#### **Viewing Player Ranks**
1. Select a player from the list of online players.
2. View their assigned ranks in a submenu.

#### **Adding a Rank**
1. Select **"Add Rank"** from the player options menu.
2. Provide the rank name (e.g., "Admin"), select a color, and select a style.
3. Confirm to assign the rank.

#### **Editing or Removing a Rank**
1. Select **"Edit/Remove Rank"** from the player options menu.
2. Choose a rank to edit or remove:
   - **Edit Rank:** Modify the rank name.
   - **Delete Rank:** Remove the rank from the player.

---

### Chat Formatting
- Players' chat messages will display their ranks automatically if `ChatRanks` is enabled.
- Example:  
  ```plaintext
  [Admin] [VIP] <PlayerName>: Hello, everyone!
  ```

---

## Customization

### Tags
- Ranks are stored as player tags in the format `obsidianranks:RankName`. For example:
  ```plaintext
  obsidianranks:Admin
  ```

---

## Notes
- A maximum of **3 ranks** can be assigned to a player.
- Use the `/tag` command to manually add or remove rank tags if necessary.
- Colors and styles are applied using Minecraft's § formatting codes.

---

## Troubleshooting
1. **Chat Formatting Not Working:**
   - Ensure `ChatRanks` is set to `true`.
   - Verify players have valid rank tags.


---