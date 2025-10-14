'use client'

import { useCallback, useState } from 'react'
import { useResizeObserver } from '@wojtekmaj/react-hooks'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'css/pdf.css'

import type { PDFDocumentProxy } from 'pdfjs-dist'

// Set worker source to local file
pdfjs.GlobalWorkerOptions.workerSrc = '/static/js/pdf.worker.min.js'

// Debug: Log worker source to console
console.log('PDF.js worker source set to:', pdfjs.GlobalWorkerOptions.workerSrc)

const resizeObserverOptions = {}

// Memoize options to prevent unnecessary reloads
const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
  // Disable worker for now to test if that's the issue
  disableWorker: false,
}

export default function Resume({ filename }: { filename: string }) {
  const [numPages, setNumPages] = useState<number>()
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(400)
  const [documentHeight, setDocumentHeight] = useState<number>(400)
  const [error, setError] = useState<string | null>(null)

  function debounce(fn: (...args: number[]) => void, delay: number) {
    let timeoutId: NodeJS.Timeout
    return (...args: number[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn(...args), delay)
    }
  }

  const handleSetContainerWidth = (width: number) => {
    setContainerWidth(width)
    setDocumentHeight(Math.floor(width * (11 / 8.5)))
  }

  const debounceSetContainerWidth = debounce(handleSetContainerWidth, 100)

  const onResize = useCallback<ResizeObserverCallback>(
    (entries) => {
      const [entry] = entries
      if (entry) {
        debounceSetContainerWidth(entry.contentRect.width)
      }
    },
    [debounceSetContainerWidth]
  )

  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages)
    setError(null)
  }

  function onDocumentLoadError(error: Error): void {
    console.error('PDF load error:', error)
    setError(error.message)
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <p className="mb-4 text-red-500">Failed to load PDF: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="PDF__container">
      <div className="PDF__container__document xs:m-0" ref={setContainerRef}>
        <Document
          file={`/${filename}`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          options={options}
          loading={
            <div className="flex items-center justify-center p-8">
              <p>Loading PDF...</p>
            </div>
          }
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              height={documentHeight}
              canvasBackground={'#ffffff'}
              className={`border-primary-500 bg-primary-500 min-w-fit border`}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          ))}
        </Document>
      </div>
    </div>
  )
}
