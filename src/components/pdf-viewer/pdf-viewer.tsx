// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import workerSrc from "../../../pdf-worker";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

type PDFViewerProps = {
  file: string;
};

const PDF_SCALE_RATIO = 765;

export default function PDFViewer({ file }: PDFViewerProps) {
  const [scale, setScale] = useState(window.innerWidth / PDF_SCALE_RATIO);

  useEffect(() => {
    if (window.innerWidth < 800) {
      const handleResize = () => setScale(window.innerWidth / PDF_SCALE_RATIO);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    } else {
      setScale(1.2);
    }
  });

  return (
    <div id="pdfDocument">
      <Document file={file}>
        <Page pageNumber={1} renderAnnotationLayer={false} scale={scale}></Page>
      </Document>
    </div>
  );
}
