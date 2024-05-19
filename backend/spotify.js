require('dotenv').config();
const express = require('express');


const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

    var code = req.query.code || null;
    var state = req.query.state || null;
  
    if (state === null) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      };
    }
  });

async function getAccessToken(clientId, clientSecret) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  const data = await response.json();
  return data.access_token;
}

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

  async function searchTracksByEmotionAndPreferences(emotion, percentage, accessToken) {
    
    const {valence, arousal} = getEmotionalValenceArousal(emotion, percentage)
  
    const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${genre}&limit=20`, {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });
    const data = await response.json();
    return data.tracks;
  }
  numTracks = 20
  emotion = "😄 happy"
  percentage = 80

  async function main() {
  
    
    const { valence, arousal } = getEmotionalValenceArousal(emotion, percentage);
  
    try {
      const accessToken = await getAccessToken(clientId, clientSecret);
      const playlist = await getSpotifyRecommendations(numTracks, arousal, valence, accessToken);
      console.log(playlist);
    } catch (error) {
      console.error('Error:', error);
    }
  }