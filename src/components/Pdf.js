import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

// import { Document, Page } from 'react-pdf/dist/entry.parcel';
// import 'react-pdf/dist/Page/AnnotationLayer.css';

// import pdfFile from '../pdfs/edition.pdf';


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class Pdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    let numPages = this.state.numPages;
    let pageNumber = this.state.pageNumber;
    pageNumber++;
    if(pageNumber > numPages)
      pageNumber = 1;
    this.setState({
        pageNumber: pageNumber
      });
  }

  prevPage = () => {
    let numPages = this.state.numPages;
    let pageNumber = this.state.pageNumber;
    pageNumber--;
    if(pageNumber === 0)
      pageNumber = numPages;
    this.setState({
        pageNumber: pageNumber
      });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <>
      <div className="Example__container__document">
        <Document
          // file={"http://www.lavoznewstc.com/IMG/backpdf/090619-SMALL.pdf"}
          file={"../img/backpdf/090619-SMALL.pdf"}
          onLoadSuccess={this.onDocumentLoadSuccess}
          options={options}
        >
          {/* {
            Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              ),
            )
          } */}
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="container-center">
        <button onClick={this.prevPage}>Prev Page</button>
        <div>
          <div>Page {pageNumber} of {numPages}</div>
        </div>
        <button onClick={this.nextPage}>Next Page</button>         
      </div>
    </>
    );
  }
}

export default Pdf;
