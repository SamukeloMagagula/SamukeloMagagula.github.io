window.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-recognition');
    const stopButton = document.getElementById('stop-recognition');
    const notesList = document.getElementById('notes-list');

    let recognition;

    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            if (finalTranscript) {
                const listItem = document.createElement('li');
                listItem.textContent = finalTranscript;
                notesList.appendChild(listItem);
            }
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event);
        };

        recognition.onend = () => {
            console.log('Speech recognition ended');
        };
    }

    startButton.addEventListener('click', () => {
        if (recognition) {
            recognition.start();
            startButton.disabled = true;
            stopButton.disabled = false;
        }
    });

    stopButton.addEventListener('click', () => {
        if (recognition) {
            recognition.stop();
            startButton.disabled = false;
            stopButton.disabled = true;
        }
    });
});
