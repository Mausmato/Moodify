require('dotenv').config();
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const querystring = require('querystring');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = 'http://localhost:4000/callback';
const app = express()
let myToken;
	
const tracksUri = [
  'spotify:track:4QZMBVrBLAvBryj8ZJIIY2','spotify:track:2y4lAQpi5VTNLu2ldeTdUH','spotify:track:1bkvGbgK4HU8B7Ue4k7O7I','spotify:track:0vCTQcxSGAgjHaiAsIANKn','spotify:track:3HUDCgZgaY3ZVWohToy4LJ','spotify:track:4cNyHp6DzvKM3qm1UZHDGD','spotify:track:1kPpge9JDLpcj15qgrPbYX','spotify:track:5xvUgoVED1F4mBu8FL0HaW','spotify:track:7ovUcF5uHTBRzUpB6ZOmvt','spotify:track:5cqjXHVSyVz2LP9r6K304N'
];
app.get('/login', function(req, res) {
  let state = "wofneimrkehoislq";
  let scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
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
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };
    
    request.post(authOptions, async function(error, response, body) {
      if (error){
        console.log(error);
      }
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
            refresh_token = body.refresh_token;
        const playlistOptions = {
          url: 'https://api.spotify.com/v1/me/playlists',
          headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
          },
          json: {
            'name': 'My Moodify Playlist',
            'description': 'This is a playlist created using the Moodify App',
            'public': false
          }
        };
        request.post(playlistOptions, function(error, response, body) {
          if (!error && response.statusCode === 201) {
            console.log('Playlist created successfully:', body);
            const playlistId = body.id;
            const addTracksOptions = {
              url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
              },
              json: {
                'uris': tracksUri
              }
            };
            request.post(addTracksOptions, function(error, response, body) {
              if (!error && response.statusCode === 201) {
                console.log('Tracks added to the playlist successfully:', body);
              } else {
                console.error('Error adding tracks to the playlist:', error || body);
              }
            });
          } else {
            console.error('Error creating playlist:', error || body);
          }
        });
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
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
    const data = await fetch('https://api.spotify.com/v1/recommendations', {
      headers: {
      Authorization: `Bearer ${myToken}`,
    },
      limit: {numTracks},
      target_valence: valence,
      target_energy: arousal // Spotify uses 'target_energy' instead of 'target_arousal'
    });
    console.log(data.songs);
    return data.body;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Failed to fetch recommendations' };
  }
}

getRecommendations()


app.get('/recommendations', async (req, res) => {
  const recommendations = await getRecommendations();
  res.json(recommendations);
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});
