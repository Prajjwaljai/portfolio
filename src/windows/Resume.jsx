import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, pdfjs, Page } from "react-pdf";
import useWindowStore from "#store/window";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const { windows } = useWindowStore();
  const data = windows.resume?.data;

  if (!data) return null;

  const { name, href } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>{name}</h2>

        <a
          href={href}
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div className="p-4 max-h-[80vh] overflow-auto bg-gray-100 relative z-0">
        <Document file={href}>
          <Page pageNumber={1} />
        </Document>
      </div>

      {/* <div className="p-4 max-h-[80vh] overflow-auto bg-gray-100">
        <Document file={href}>
          <Page pageNumber={1} />
        </Document>
      </div> */}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default Resume;
