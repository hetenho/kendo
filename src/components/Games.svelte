<script lang="ts">
  import Team from './Team.svelte';
  import type { GamesTodayResponse } from '../types/game';

  export let data: GamesTodayResponse;
</script>

<div>
  {#each data.gameWeek as gameDay}
    <div>
      <p class="game-date">{gameDay.date}</p>
      {#each gameDay.games as game}
        <div class="game-wrapper">
          <div class="game">
            <Team team={game.homeTeam} />
            <Team team={game.awayTeam} />
          </div>
          <div class="game-details">
            {game?.gameOutcome?.lastPeriodType ?? 'N/A'}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .game-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    transition: border-color 0.2s ease-in-out;
    border-radius: 0.2rem;
    width: 100%;
    max-width: 260px;
    margin-bottom: 1rem;
    background-color: white;
  }
  .game {
    width: 100%;
    max-width: 180px;
    padding: 0.5rem 1rem;
    border-right: 1px solid #eee;
  }

  .game-wrapper:hover {
    border-color: #aaa;
    cursor: pointer;
  }

  .game-details {
    border-left: 1px solid #eee;
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 60px;
    font-family: 'Graduate';
    font-size: 0.75rem;
  }
  .game-date {
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>
