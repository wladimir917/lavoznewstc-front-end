import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import pdfFile from '../pdfs/edition.pdf';

class Pdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
  }

  prevPage = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={pdfFile}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <button onClick={this.prevPage}>Prev Page</button>
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}

export default Pdf;
