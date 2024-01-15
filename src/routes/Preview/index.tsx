import { useEffect, useRef } from 'react'
import uitoolkit from '@zoom/videosdk-ui-toolkit'
import '@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css'

const Preview = () => {
  const previewContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    previewContainerRef.current && uitoolkit.openPreview(previewContainerRef.current);
  }, []);

  const closePreview = () => {
    previewContainerRef.current && uitoolkit.closePreview(previewContainerRef.current);
  };

  return (
    <main>
      <div className="d-flex justify-content-center"> 
        <div id="previewContainer" ref={previewContainerRef} className="mx-5"></div>
      </div>
      <div className="text-center">
        <button className="btn btn-danger" type="button" onClick={() => closePreview()}>Close Preview</button>
      </div>
    </main>
  )
}

export default Preview