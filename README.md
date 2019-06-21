
# project-playvs

## Requirements
-Retrive and display the top 16 DOTA teams based on ELO score (or another metric if you desire). These teams will be your 1st to 16th seeds.
-Display a tournament bracket where the first match for every team is against the appropriate seed (1st seed vs. 16th seed, 2nd seed vs. 15th, etc.)
-You should be able to preview team information when hovering/clicking on a team entity. Team information should include the name of the team members (this may mean hitting another API endpoint to get this information).
-You can determine a winner for a matchup and move them to the next round.

## Getting Started
* install dependencies ```yarn install```
* run app with ```yarn start```

## Considerations
* Game outcomes are randomly generated in the ```useTeams``` hooks
* Teams are stored in central state but not players
  * Reasoning: teams is a smaller data set and is core to display/app logic, player data is large and should be fetched when needed
  * I optimized player aggregation by prefetching players that are part of the tournament
    * using hook ```usePlayers```
* Because of the size of the teams/rounds I have nested it in a scroll box, you can see all games by scrolling across the x/y axis
