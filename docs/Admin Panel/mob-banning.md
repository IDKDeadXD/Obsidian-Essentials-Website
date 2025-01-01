# Mob Banning

This document provides an overview of the **Mob Banning**.

---

## Overview

The **Mob Banning System** provides administrators with the ability to:
1. Add mobs to a ban list.
2. Remove mobs from the ban list.
3. View the current list of banned mobs.
4. Automatically prevent the spawning of banned mobs.

---

## Accessing the Mob Banning System

To manage banned mobs:
1. Open the **Admin Panel**.
2. Click the **Mob Banning** button.
3. Use the available options to manage the mob ban list.

---

## Features and Functions

### 1. Add a Banned Mob
This option allows administrators to ban specific mobs by their identifier.

- **Steps**:
  1. Enter the mob's identifier (e.g., `minecraft:zombie`).
  2. Confirm the input.
  3. If the mob is not already banned, it will be added to the ban list.

- **Note**:
  - Ensure you enter a valid mob identifier.

### 2. Remove a Banned Mob
This option allows administrators to remove mobs from the ban list.

- **Steps**:
  1. View the list of currently banned mobs.
  2. Select the mob you want to unban.
  3. Confirm the selection.

### 3. View Banned Mobs
This option displays all currently banned mobs in a simple list format.

---

## System Behavior

- When a mob spawns in the world:
  - Its identifier is checked against the banned mob list.
  - If the mob is banned, it is immediately killed, preventing it from remaining in the world.

---

## Example Commands

### Add a Banned Mob
1. Open the **Mob Ban Menu**.
2. Select **Add a Banned Mob**.
3. Enter the mob identifier:
   - Example: `minecraft:creeper`
4. Confirm to add the mob to the ban list.

### Remove a Banned Mob
1. Open the **Mob Ban Menu**.
2. Select **Remove a Banned Mob**.
3. Choose a mob from the list of banned mobs.
4. Confirm to unban the selected mob.

### View Banned Mobs
1. Open the **Mob Ban Menu**.
2. Select **View Banned Mobs**.
3. The system will display all currently banned mobs.

---
