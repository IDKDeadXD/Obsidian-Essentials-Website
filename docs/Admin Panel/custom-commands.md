# Custom Commands

This guide explains how to create, edit, and delete custom commands.

---

## Overview

Custom commands can be added as either **Player Commands** or **Admin Commands**. These commands are stored dynamically and can be executed with specific permissions.

### Command Types
1. **Player Command**: Accessible by all players.
2. **Admin Command**: Requires the user to have `admin` tags.

---

## How to Manage Custom Commands

### 1. Accessing the Command Manager
Open the Admin Panel and find custom commands

### 2. Adding a New Command
1. Open the **Custom Commands Manager**.
2. Select **Add New Command**.
3. Fill out the form:
   - **Command Name**: The name of the command (without the `!` prefix).
   - **Command Type**: Choose between `Player Command` or `Admin Command`.
   - **Description**: Provide a brief description of the command.
   - **Command to Execute**: Enter the exact command to be run.
4. Confirm your entries and save. The new command will be stored and ready to use.

### 3. Editing an Existing Command
1. Open the **Custom Commands Manager**.
2. Select the command you want to edit.
3. Modify any field (name, type, description, or command).
4. Save your changes.

### 4. Deleting a Command
1. Open the **Custom Commands Manager**.
2. Select the command you want to delete.
3. Confirm the deletion.

---

## Examples

### Example 1: Adding a Player Command
- **Name**: `hello`
- **Type**: Player Command
- **Description**: Sends a greeting to the player.
- **Command to Execute**: `say Hello, ${player.name}!`

When a player types `!hello`, the server will execute the command and send the greeting.

### Example 2: Adding an Admin Command
- **Name**: `giveDiamonds`
- **Type**: Admin Command
- **Description**: Gives 10 diamonds to the admin.
- **Command to Execute**: `give @s minecraft:diamond 10`

Only admins can execute `!giveDiamonds`.

---

## Notes
- **Validation**: The system ensures all required fields are completed and that the command name is unique.
- **Security**: Admin commands are protected and cannot be accessed by regular players.

Start enhancing your server with custom commands today!
