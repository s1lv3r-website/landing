<template>
  <div>
    <h2>Contact</h2>
    <table>
      <tbody>
        <tr>
          <td>GitHub</td>
          <td>
            <a
              :href="`https://github.com/${$globalVars.github_username}`"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $globalVars.github_username }}</a
            >
          </td>
        </tr>
        <tr>
          <td>Twitter</td>
          <td>
            <a
              :href="`https://twitter.com/${$globalVars.twitter_username}`"
              target="_blank"
              rel="noopener noreferrer"
              >@{{ $globalVars.twitter_username }}</a
            >
          </td>
        </tr>
        <tr>
          <td>Discord</td>
          <td>
            <a href="/discord" target="_blank" rel="noopener noreferrer">{{
              $globalVars.discord_username
            }}</a>
          </td>
        </tr>
        <tr>
          <td>Matrix</td>
          <td>
            <a
              :href="`https://matrix.to/#/${$globalVars.matrix_username}`"
              target="_blank"
              rel="noopener noreferrer"
              ><code>{{ $globalVars.matrix_username }}</code></a
            >
          </td>
        </tr>
        <tr>
          <td>PGP</td>
          <td>
            85FA 2FC2 D803 5859 AE77 FF6E 6366 60BB 3A5C 2F87<br />
            ( <a href="/public-keys.gpg">Full key</a> )
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
