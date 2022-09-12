# Rocket Report documentation

## UI

- Header with app name
- Blank page with loading indicator while data queried
- 2 column layout
- card elements on left column showing overview
    - Name
    - Provider - vehicle
    - Date
- On card click, right column shows all details for given launch in single card
- Data refreshed on page refresh
- No further buttons aside from launch cards

## App structure

### Components

- Header - static UI element, buttons could be added in future
- Launches - parent component, holds list and details
    - Launch-list - Events: click, Queries service and generates according launch components
        - Launch-item - Inputs: id, queries service and populates with launch details
    - Launch-details - Inputs: id, queries service and displays detailed launch info

### Models

- Launch - Details for given launch, layered by category

### Services

- Launch - Queries web API and stores launches

### Interfacing

- Router links used to store app state
- / for default state, no details shown
- /:id holds param of selected route, used for launch details state.
