export function GetFriends(UserID: string, AuthId: string) {
  const FollowersRequest = new Request(
    `https://api.twitter.com/2/users/${UserID}/followers`,
    {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function GetTokens(code: string) {
  const TokenRequestData = {
    code: code,
    grant_type: "authorization_code",
    client_id: process.env.ClientID,
    redirect_uri: "http://localhost:3000/callback",
    code_verifier: "challenge",
  };

  const TokenRequest = new Request("https://api.twitter.com/2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(TokenRequestData),
  });
  fetch(TokenRequest)
    .then((response) => response.json())
    .then((response) => console.log(response));
}
