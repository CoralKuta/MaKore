import './AttachComponent.css';
import { useState } from 'react';




function AttachComponent({ setter }) {
    const browseFiles = function (type) {
        var input = document.createElement('input');
        input.type = 'file';
        
        input.onchange = e => { 
        
           var file = e.target.files[0]; 
           var url = URL.createObjectURL(file);
           // setting up the reader
           var reader = new FileReader();
           reader.readAsDataURL(file)
           reader.onload = readerEvent => {
              if (file.type.includes("image") && type == 1){setter([type, url]);}
              if (file.type.includes("video") && type == 2){setter([type, url]);}
           }
        }
        input.click();
}
const addimage = function(){browseFiles(1);}
const addvideo = function(){browseFiles(2);}
const addlocation = function(){
    
}




return (
    <div id="attpanel" className="attach-panel">
        <svg onClick={addimage} xmlns="http://www.w3.org/2000/svg" class="bi bi-camera-fill" viewBox="0 0 16 16">
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
        </svg>
        <svg  onClick={addvideo} xmlns="http://www.w3.org/2000/svg" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-mic-fill" viewBox="0 0 16 16">
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
    </div>

);
}

export default AttachComponent;