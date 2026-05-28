const fs = require("fs");

async function main() {
  const user = await fetch(
    "https://api.github.com/users/qianyu-08"
  ).then(res => res.json());

  const svg = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .bg {
      fill: #0d1117;
    }

    .title {
      fill: #58a6ff;
      font-size: 28px;
      font-family: monospace;
      font-weight: bold;
    }

    .text {
      fill: #c9d1d9;
      font-size: 16px;
      font-family: monospace;
    }
  </style>

  <rect class="bg" width="100%" height="100%" rx="16"/>

  <text x="30" y="50" class="title">
    qianyu-08
  </text>

  <text x="30" y="95" class="text">
    Followers: ${user.followers}
  </text>

  <text x="30" y="125" class="text">
    Public Repos: ${user.public_repos}
  </text>

  <text x="30" y="155" class="text">
    Following: ${user.following}
  </text>
</svg>
`;

  fs.writeFileSync("card.svg", svg);
}

main();
