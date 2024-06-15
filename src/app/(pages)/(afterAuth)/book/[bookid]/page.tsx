"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import styles from "./Book.module.css";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
    const { bookid } = useParams();
    const router = useRouter()

    const book = {
        id: bookid,
        image: "https://picsum.photos/600/400",
        title: "The GFG Book",
        author: "Harshal Jain",
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
        price: "$29.99",
        amazonLink: "https://www.amazon.com/dp/B09XYZ1234", // Example link
    };

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={book.image} alt={book.title} className={styles.bookImage} />
                </div>
                <div className={styles.details}>
                    <h1 className={styles.bookTitle}>{book.title}</h1>
                    <p className={styles.bookAuthor}>by {book.author}</p>
                    <div
                        className={styles.bookDescription}
                        dangerouslySetInnerHTML={{ __html: book.description }}
                    />

                    <p className={styles.bookPrice}>{book.price}</p>

                    <button className={styles.purchaseButton}
                        onClick={() => {
                            router.push(`/read/${bookid}`)
                        }}
                    >Start Reading</button>

                    {/* <button className={styles.purchaseButton}>Buy on Amazon</button> */}

                </div>
            </div>

        </div>
    )
}

export default page 