# Multiplayer Game Web App - Comprehensive Summary

## Core Concept
A flexible, mobile-first web application allowing friends and family to play a variety of games together, whether physically present or connected via video call. The platform provides all necessary tools and interfaces for each game without requiring login or permanent data storage.

## Key Features

### Game Selection & Setup
- **Homepage Features**:
  - "Input game code" textbox for joining existing games
  - Search bar for finding specific games
  - Filter system with combinatorial AND filtering (word games AND 10-minute duration AND 6-8 players, etc.)
  - Expandable game cards showing synopsis, player count, duration, genre, difficulty
  - Games displayed in random order, refined through filters

- **Game Settings**:
  - Host selects a game and adjusts game-specific settings
  - AI-powered content selection system allowing multi-level filtering (ex: TV/Movies > Sitcoms > 90s Sitcoms > Friends > Season 2)
  - Option to select multiple niches/categories (up to 5)

### Game Room Management
- **Room Creation**:
  - Letter-based unique 4-character room codes
  - System checks for code duplicates before creating a room
  - Temporary session data storage with no long-term persistence
  - Automatic room deletion after 15 minutes of inactivity or when all players leave

- **Player Management**:
  - Players enter nickname when joining
  - Player list updates in real-time as people join/leave
  - Players can rejoin using the same code if disconnected
  - "Leave game" button to exit voluntarily
  - If a player leaves without clicking "leave game," they can rejoin with their original name
  - If a player clicks "leave game," they must enter a new name to rejoin

- **Host Controls**:
  - Ability to remove players from the game
  - Host privileges transfer to another player if host leaves
  - Control over starting the game when all players are ready
  - Ability to adjust turn time limits (game-specific)

### Teams & Players
- **Team Formation**:
  - Support for up to 4 teams depending on the game
  - Completely flexible team sizes (even highly unbalanced like 11 vs 1 if desired)
  - No automatic balancing - player choice prevails

- **Player Status**:
  - Handling of disconnected players (skip their turn, continue game)
  - Players counted as "ready" if they're in the game room
  - Option for team members to skip an inactive player's turn

### Gameplay Elements
- **Game-Specific Interfaces**:
  - Each game provides unique interfaces on player devices
  - Players only see the information relevant to their role
  - Example: In Charades, "it" player sees the word, opposing team has buzzer button
  - High engagement design with minimal downtime

- **Game Flow**:
  - No mid-game joining - players can only join at start
  - Time limits for turns (customizable per game)
  - Option to play again with same settings or start a new game
  - Team switching between rounds when playing again

### Technical Considerations
- **Device & Browser Support**:
  - Mobile-first design, playable on desktop/tablet
  - Portrait mode only for mobile
  - Standard web functionality expected to work across browsers

- **Session Handling**:
  - Local storage/cookies for maintaining state through refreshes
  - Multiple tabs treated as separate players
  - No anti-cheat mechanisms - social enforcement assumed

- **Content Generation**:
  - External APIs (Claude or other AI) for content generation
  - Game-specific implementations for each unique game

## Implementation Structure
- Each game added individually as its own file (likely JSON)
- Custom implementation for each game's mechanics and interface
- No standard framework across games to maintain flexibility
- Potential for game templates for similar game types (future enhancement)

## Future Enhancements (V2)
- Accessibility features
- Spectator mode
- Advanced analytics and feedback systems
- More sophisticated game discovery features

## Non-Features
- No login system
- No permanent data storage
- No chat functionality (relies on in-person or video call for communication)
- No restrictions on team balance or "fairness"
