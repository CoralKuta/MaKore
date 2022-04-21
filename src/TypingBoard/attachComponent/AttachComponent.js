import './AttachComponent.css';

function AttachComponent({ setter }) {


//displays a file dialog box with the ability to send files only if the file is of image type.
    const imagesBrowseFiles = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/*";
        input.onchange = e => {
            var file = e.target.files[0];
            var url = URL.createObjectURL(file);
            // setting up the reader
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = readerEvent => {
                setter([1, url]);
                document.getElementById("attached").style.display = "none"
            }
        }
        input.click();

    }

    //displays a file dialog box with the ability to send files only if the file is of video type.
    const videosBrowseFiles = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = "video/*";
        input.onchange = e => {
            var file = e.target.files[0];
            var url = URL.createObjectURL(file);
            // setting up the reader
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = readerEvent => {
                setter([2, url]);
                document.getElementById("attached").style.display = "none"
            }
        }
        input.click();
    }

    // The record function
    const startRec = async () => {
        // open audio streamer
        const stream = await navigator.mediaDevices.getUserMedia(
            { audio: true }
        );
        const audios = [];
        const mediaRecorder = new MediaRecorder(stream);
        const audioBtn = document.querySelector('.bi-mic-fill');
        const stopBtn = document.querySelector('.bi-stop-fill');
        mediaRecorder.start();
        //When recording, use the stop button to stop the recording.
        mediaRecorder.onstart = function () {
            audioBtn.style.fill = "green";
            audioBtn.style.border = " 3px solid green";
            stopBtn.style.display = "inline";
        }
        const promise = new Promise((resolve) => {
            stopBtn.addEventListener('click', resolve);
        });
        async function waitClick() {
            return await promise
                .then((ev) => {
                    mediaRecorder.stop();
                    console.log("here")
                })
                .catch((ev) => {
                    stream.getTracks().forEach(function (track) {
                        track.stop();
                    });
                    console.log(ev)
                })
        }
        waitClick()
        mediaRecorder.onstop = function (e) {
            const fullaudio = new Blob(audios, { 'type': 'audio/ogg; codecs=opus' });
            const audioURL = URL.createObjectURL(fullaudio);
            setter([3, audioURL]);
            document.getElementById("attached").style.display = "none"
            audioBtn.style.fill = "gray";
            audioBtn.style.border = "none";
            stopBtn.style.display = "none";
            stream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        mediaRecorder.ondataavailable = function (e) {
            audios.push(e.data);
        };
    }


    return (
        <div id="attpanel" className="attach-panel">
            <svg onClick={imagesBrowseFiles} xmlns="http://www.w3.org/2000/svg" className="bi bi-camera-fill" viewBox="0 0 16 16">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg>
            <svg onClick={videosBrowseFiles} xmlns="http://www.w3.org/2000/svg" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
            </svg>
            <svg onClick={startRec} id="audioBtn" xmlns="http://www.w3.org/2000/svg" className="bi bi-mic-fill" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            </svg>
            <svg id="stopBtn" xmlns="http://www.w3.org/2000/svg" className="bi bi-stop-fill" viewBox="0 0 16 16">
                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
            </svg>
        </div>
    );
}

export default AttachComponent;