<script lang="ts">
  import type { BaseTeam } from '../types/team';

  export let team: BaseTeam;
  let imageSize: number = 32;
</script>

<div class="team">
  <img src={team.logo} width={imageSize} height={imageSize} alt={team.placeName.default} />
  <span class="team-name">{team.placeName.default}</span>
  <span class="team-score">{team.score}</span>
</div>

<style>
  .team {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .team:nth-child(even) {
    border-top: 1px solid #eee;
  }

  .team-name,
  .team-score {
    font-family: 'Graduate';
  }

  .team-name {
    font-size: 0.8rem;
  }

  .team-score {
    font-weight: bold;
    margin-left: auto;
  }
</style>
