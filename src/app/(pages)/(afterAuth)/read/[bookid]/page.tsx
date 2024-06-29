"use client";
import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Navbar from "@/components/Navbar";
import styles from "./Read.module.css";
import { useParams, useRouter } from 'next/navigation';

// Define the type for each book
interface Book {
  _id: string;
  image: string;
  title: string;
  author: string;
}

const Page = () => {
  const router = useRouter();
  const { bookid } = useParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

      useEffect(() => {
      const fetchBook = async () => {
          try {
              const response = await fetch(`http://localhost:5000/api/books/${bookid}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch book data');
              }
              const data = await response.json();
              console.log(data)
              if(data.pdf){
                let url = 'http://localhost:5000/'+data.pdf
                setPdfUrl(url)
              }
              setBook(data);
              setLoading(false);
          } catch (err) {
              console.error(err);
              setError(err.message);
              setLoading(false);
          }
      };

      fetchBook();
  }, [bookid]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {  
        return <p>{error}</p>;  
    }

  return (    
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.viewer}>
          {pdfUrl ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                theme="dark"
              />
            </Worker>
          ) : (
            <p>Loading PDF...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
