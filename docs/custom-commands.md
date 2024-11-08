# Help Command

## Overview
The `help` command (`!h` or `!help`) provides players with a list of all available commands based on their current permissions and roles (Admin and general players). It dynamically adjusts the displayed commands depending on the player's tags and world settings.

## Usage
```plaintext
!h
!help
```

## Permissions
The output of the `help` command varies based on the following:
- **Admin**: Must have the `Admin` tag (`Admin` or `admin`).
- **General Player**: No special tags required.

## Command Output
The help command displays sections based on the player's permissions and available features:

### Admin Commands
Displayed if the player has the `Admin` tag.

- `!cc` or `!clearchat`: Clears the chat of all messages.
- `!lc` or `!lockchat`: Locks the chat so only admins can speak.
- `!kick [username] [reason]`: Kicks a player with a specified reason.
- `!broadcast [message]` or `!bc [message]`: Sends a message to the entire server.
- `!savekit [kit name] [price]`: Saves a custom kit (if kits are enabled).
- `!deletekit [kit name]`: Deletes a custom kit (if kits are enabled).
- `!addlore [lore text]`: Adds lore to the item in hand.
- `!removelore`: Removes lore from the item in hand.

### Player Commands
Available to all players.

- `!h` or `!help`: Displays the list of available commands.
- `!b` or `!book`: Gives the Community Panel book.
- `!chat [username]`: Initiates a private chat with another player.
- `!endchat`: Ends the current private chat.
- `!tpa [username]`: Sends a teleport request to a specified player.

### Home Commands
Displayed if the `HomesEnabled` dynamic property is `true`.

- `!home [home name]`: Teleports the player to a specified home.
- `!addhome [home name]`: Creates a new home with the given name.
- `!deletehome [home name]`: Deletes the specified home.
- `!listhomes`: Lists all saved homes.

### Kit Commands
Displayed if the `KitsEnabled` dynamic property is `true`.

- `!kit [kit name]`: Purchases a custom kit.
- `!listkits`: Lists all available kits.

### Information Command
Displayed if the `InfoEnabled` dynamic property is `true` (or undefined).

- `!info`: Provides information about the add-on.

---
