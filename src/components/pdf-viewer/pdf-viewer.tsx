// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import workerSrc from "../../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

type PDFViewerProps = {
  file: string;
};

export default function PDFViewer({ file }: PDFViewerProps) {
  return (
    <Document file={file}>
      <Page pageNumber={1} renderAnnotationLayer={false}></Page>
    </Document>
  );
}
