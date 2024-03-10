import React, { useEffect, useState } from 'react'
import { useFileDispatch } from '../context/FileContext';

const TextFileUpload = () => {
  const [, textFile,,selectTextFileHandler] = useFileDispatch();
  const [textFiles, setTextFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState({
    name: "",
    file: ""
  });

  const addFileHandler = (event) => {
    const file = event.target.files[0];
    
    if(file) {
        const updatedFiles = [ ...textFiles, { id: textFiles.length + 1, file: file}];
        setTextFiles(updatedFiles);
    }

    event.target.value = null;
  }

  const fileHandler = (file) => {
      const selectedObj = textFiles.find((f) => f.id === file.id);
      console.log(selectedObj);

      const reader = new FileReader();
      
      let textContent = "";
      reader.onload = function(event) {
        const textFromFile = event.target.result;
        textContent += '\n' + textFromFile;
        // sendRequest(audioFile, textContent);
        selectTextFileHandler({name: selectedObj.file.name, file: textContent});
      };

      reader.readAsText(selectedObj.file);
      
  }

  const deleteFileHandler = (file) => {
    let fileIndex;
    
    console.log(textFiles);

    for(let i = 0; i<textFiles.length; i++) {
        if(file.id === textFiles[i].id) {
            fileIndex = i;

            const oldFiles = [ ...textFiles ];

            oldFiles.splice(fileIndex, 1);

            setTextFiles(oldFiles);

            if(textFile.name === file.file.name) {
                selectTextFileHandler("");
            }

            break;
        }
    }
  }

  useEffect(() => {
    setSelectedFile(textFile);
  }, [textFile]);

  return (
    <div class="">
        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload Text File
        </label>

        <div class="">
          <input type="file" id='text' class="sr-only" accept='.txt' onChange={addFileHandler} />
          <label
            htmlFor='text'
            class="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>

        <div>
          <ul>
            {textFiles && textFiles.length > 0 && textFiles.map((file) => (
              <div key={file.id} class="mt-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                <div class="flex items-center justify-between">
                  <div>
                    <input type='radio' name='textFile' value={file.id} checked={selectedFile.name === file.file.name} onChange={() => fileHandler(file)} />
                    <span class="truncate pr-3 text-base font-medium text-[#07074D] ml-2">
                      {file.file.name}
                    </span>
                  </div>
                  <button class="text-[#07074D]" onClick={() => deleteFileHandler(file)}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default TextFileUpload;