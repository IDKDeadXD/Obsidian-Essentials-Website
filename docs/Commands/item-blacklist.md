# Item Blacklist

The Item Blacklist command allows players with appropriate permissions to manage a list of banned items within the realm. Banned items are automatically removed from non-admin players' inventories to maintain server integrity and prevent exploits.

---

## Usage

### Adding a Banned Item
To add an item to the banned list, use:
```plaintext
!itemban add [item_id] [reason]
```
- **`item_id`**: The unique identifier of the item to ban (e.g., `minecraft:bedrock`).
- **`reason`**: A brief explanation of why the item is banned.

#### Example
```plaintext
!itemban add minecraft:bedrock "Prevents exploits"
```
This bans **bedrock** with the reason: *"Prevents exploits."*

---

### Removing a Banned Item
To remove an item from the banned list, use:
```plaintext
!itemban remove [item_id]
```
- **`item_id`**: The unique identifier of the item to unban.

#### Example
```plaintext
!itemban remove minecraft:bedrock
```
This removes **bedrock** from the banned items list.

---

### Viewing the Banned Items List
To view all currently banned items, use:
```plaintext
!itemban list
```
The command returns a list of banned items along with their reasons.

---

## Permissions
- Only players with the **Admin** or **admin** tag can use the `!itemban` command.

---

## Notes
1. **Vanilla Banned Items:**
   - Items like `minecraft:bedrock` and `minecraft:command_block` are pre-banned and cannot be removed.
   - A list of these items is always active.

2. **Inventory Checks:**
   - Non-admin players with banned items in their inventory will have them automatically removed.
   - A notification is sent to players when a banned item is removed.

3. **Dynamic Storage:**
   - Custom banned items are saved persistently, even after server restarts.

---

## Examples

### Adding a Banned Item
```plaintext
!itemban add minecraft:light "Exploitable item"
```
Bans the **light** block with the reason: *"Exploitable item."*

### Removing a Banned Item
```plaintext
!itemban remove minecraft:light
```
Unbans the **light** block.

### Viewing Banned Items
```plaintext
!itemban list
```
Displays all banned items and their associated reasons.

---

Leverage the `!itemban` command to ensure a fair and balanced gameplay experience on your realm.