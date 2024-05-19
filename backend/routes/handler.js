const express = require('express');
const router = express.Router();
// const { insertData } = require('../mongo');

router.post('/mood', (req, res) => {
    const { p } = req.body;
    if (typeof p === 'string') {
        const parts = p.split(' ');
        const emotion = parts[1].toLowerCase();

        let embedUrl = '';

        if (emotion === 'happy' || emotion === 'glorious') {
            const happyPlaylists = [
                'https://open.spotify.com/embed/playlist/7GhawGpb43Ctkq3PRP1fOL',
                'https://open.spotify.com/embed/playlist/0PzKm1C0ti5msFNWcHvXV1',
                'https://open.spotify.com/embed/playlist/79MeBbqPWNCAguj54wIJcR',
                'https://open.spotify.com/embed/playlist/3js3hpQgKTaVtxqSuU3sLg',
                'https://open.spotify.com/embed/playlist/2ANXhp0oiutWHFh765dR7Q',
                'https://open.spotify.com/embed/playlist/79QRwz97ZME65XdEp1eqQm',
                'https://open.spotify.com/embed/playlist/10mGYytzgkdo1nzUJKp2rE',
                'https://open.spotify.com/embed/playlist/2u6XF125qLChkbpjvg09l4',
                'https://open.spotify.com/embed/playlist/3HqMTsjQ7zFjuP0IzwhkoH',
                'https://open.spotify.com/embed/playlist/3jOiXdIwGY5Kf6wdyOjVNq',
                'https://open.spotify.com/embed/playlist/6UabMep3eVQgXqCLeP0nhn',
                'https://open.spotify.com/embed/playlist/0KAN6KPWNnrhVC9SwZFRrt',
                'https://open.spotify.com/embed/playlist/4TG1uJ6I3JQHHRnS2hgNGl'
            ];
            embedUrl = happyPlaylists[Math.floor(Math.random() * happyPlaylists.length)];
        } else if (emotion === 'angry') {
            const angryPlaylists = [
                'https://open.spotify.com/embed/playlist/2F6JtyDh4aHd77mfcxrz4R',
                'https://open.spotify.com/embed/playlist/63mYyvMhYhJPYYJ86iTYeX',
                'https://open.spotify.com/embed/playlist/4wrkUhohpvfNEIBgGtGeEK',
                'https://open.spotify.com/embed/playlist/3F9IPuUMTuCnNMvT2CjVXT',
                'https://open.spotify.com/embed/playlist/2Dz0qDKYwq7AS38EOm6wts',
                'https://open.spotify.com/embed/playlist/6lhMmCCI3lY2PkAMjsI6Ka',
                'https://open.spotify.com/embed/playlist/609gQW5ztNwAkKnoZplkao',
                'https://open.spotify.com/embed/playlist/4jgRBnvLtYF1MFinUEmowH',
                'https://open.spotify.com/embed/playlist/6Twtullm379J957wfskhS6'
            ];
            embedUrl = angryPlaylists[Math.floor(Math.random() * angryPlaylists.length)];
        } else if (emotion === 'sad') {
            const sadPlaylists = [
                'https://open.spotify.com/embed/playlist/60d30i9AHwd6j9Vorwzaku',
                'https://open.spotify.com/embed/playlist/5irzXdNeeKc0Dg3UK4Ww6n',
                'https://open.spotify.com/embed/playlist/4rFp8l9vekheKOpeJLVkar',
                'https://open.spotify.com/embed/playlist/2ZnAWYy4AOs8tpRUCGF6Py',
                'https://open.spotify.com/embed/playlist/2cFlGTv8fN7TjxBadLC4FK',
                'https://open.spotify.com/embed/playlist/1MoFZQZ8R141gExjfFk2xt',
                'https://open.spotify.com/embed/playlist/7pEEZ5OKnroclGDcDxBMD0',
                'https://open.spotify.com/embed/playlist/3IewCYrnu88jogOLetM98l',
                'https://open.spotify.com/embed/playlist/1hARj4J40iucb2kQhytKSJ',
                'https://open.spotify.com/embed/playlist/1FSCFGXFC2WYk3ibz15yop'
            ];
            embedUrl = sadPlaylists[Math.floor(Math.random() * sadPlaylists.length)];
        } else if (emotion === 'nonchalant') {
            const nonchalantPlaylists = [
                'https://open.spotify.com/embed/playlist/4PyBu7ruL74ERJ0NTg0sYD',
                'https://open.spotify.com/embed/playlist/6IkVPs5B0aZpjduO9WYgQ9',
                'https://open.spotify.com/embed/playlist/5c8nvfSL61qGkzlHzsecc2',
                'https://open.spotify.com/embed/playlist/5c8nvfSL61qGkzlHzsecc2',
                'https://open.spotify.com/embed/playlist/6eyNx8zc0FNAD8OklhGF7t',
                'https://open.spotify.com/embed/playlist/7lJCNoizyC5nId24JgvQvu',
                'https://open.spotify.com/embed/playlist/7lJCNoizyC5nId24JgvQvu',
                'https://open.spotify.com/embed/playlist/18lXFHSL0i4tRUoWG2mqa6',
                'https://open.spotify.com/embed/playlist/1mHDHxEVN5WOqcDSBOZh2S',
                'https://open.spotify.com/embed/playlist/7LcaMWQxenwOG3bkMP8Ibm'
            ];
            embedUrl = nonchalantPlaylists[Math.floor(Math.random() * nonchalantPlaylists.length)];
        }

        if (embedUrl) {
            res.json(`
                <iframe style="border-radius:12px" src="${embedUrl}" width="600rem" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            `);
        } else {
            res.status(400).send('Emotion not recognized');
        }
    } else {
        res.status(400).send('Invalid request');
    }
});

module.exports = router;
