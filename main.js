document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'a' || keyName === 's' || keyName === 'd' || keyName === 'f' || keyName === 'g' || keyName === 'h' || keyName === 'j' || keyName === 'e' || keyName === 't' || keyName === 'u' || keyName === 'w' || keyName === 'y') {
        console.log(`The '${keyName}' key was pressed!`);
        let audio = document.createElement("AUDIO");
        audio.src = `Audio/${event.key.toUpperCase()}.mp3`;
        audio.play();
    } else {
        console.warn(`The '${keyName}' key is unavailable!`);
    }
}, false);