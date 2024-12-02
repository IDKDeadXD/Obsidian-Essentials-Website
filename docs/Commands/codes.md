### **Codes System**

#### Overview

The codes system allows admins to create custom codes that execute specific commands when entered by a player.

#### Available Commands

- **`!addcode [code] [command]`**  
  *Admin only*  
  Adds a custom code that associates a unique identifier (`[code]`) with a command (`[command]`). Players can then execute this command by entering the code using `!code [code]`.

  Example:  
  `!addcode greet /say Hello, welcome to the server!`  
  This will create a code `greet`, and when a player types `!code greet`, the server will say "Hello, welcome to the server!".

- **`!deletecode [code]`**  
  *Admin only*  
  Deletes an existing custom code.

  Example:  
  `!deletecode greet`  
  This removes the code `greet` from the system.

- **`!listcodes`**  
  *Admin only*  
  Lists all available custom codes and their associated commands.

  Example:  
  ```
  Available Codes:
  - Code: greet
    - Command: /say Hello, welcome to the server!
  ```

- **`!code [code]`**  
  Executes the command associated with the custom code.  
  If the code exists, the corresponding command is executed.

  Example:  
  `!code greet`  
  This will run the `/say Hello, welcome to the server!` command if `greet` is a valid code.

---