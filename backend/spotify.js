require('dotenv').config();
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const querystring = require('querystring');

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirect_uri = 'YOUR_REDIRECT_URI'; // Set your redirect URI here

const spotifyApi = new SpotifyWebApi({
  clientId: clientID,
  clientSecret: clientSecret,
  redirectUri: redirect_uri
});

const app = express();

let accessToken = '';

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

app.get('/login', function(req, res) {
  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientID,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', async function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    try {
      const data = await spotifyApi.authorizationCodeGrant(code);
      var access_token = body.access_token;
        refresh_token = body.refresh_token;
      const refresh_token = data.body['refresh_token'];

      spotifyApi.setaccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      res.redirect('/#' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        }));
    } catch (error) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'invalid_token'
        }));
    }
  }
});

function getEmotionValenceArousal(emotion, percentage) {
  const emotions = {
    "😡 angry": { valence: 0.1, arousal: 0.9 },
    "🤮 disgusted": { valence: 0.2, arousal: 0.7 },
    "😨 fear": { valence: 0.1, arousal: 0.8 },
    "😄 happy": { valence: 0.9, arousal: 0.8 },
    "😐 neutral": { valence: 0.5, arousal: 0.5 },
    "😭 sad": { valence: 0.1, arousal: 0.3 },
    "🥰 surprised": { valence: 0.8, arousal: 0.9 }
  };

  if (!emotions[emotion]) {
    return { valence: null, arousal: null };
  }

  const { valence, arousal } = emotions[emotion];
  const scale = percentage / 100;

  return {
    valence: valence * scale,
    arousal: arousal * scale
  };
}

const numTracks = 20;
const emotion = "😄 happy";
const percentage = 80;

async function getRecommendations() {
  const { valence, arousal } = getEmotionValenceArousal(emotion, percentage);

  try {
    const response = await fetch(`https://api.spotify.com/v1/recommendations?${querystring.stringify({
      limit: numTracks,
      target_valence: valence,
      target_energy: arousal // Spotify uses 'target_energy' instead of 'target_arousal'
    })}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    
    const playlist = await response.json();
    console.log(playlist);
    return playlist;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Failed to fetch recommendations' };
  }
}

getRecommendations()

// app.get('/recommendations', async (req, res) => {
//   const recommendations = await getRecommendations();
//   res.json(recommendations);
// });

// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });
