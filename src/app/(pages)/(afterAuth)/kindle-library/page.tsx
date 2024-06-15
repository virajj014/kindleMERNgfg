"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./KindleLibrary.module.css";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { MdBook } from "react-icons/md";
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [allBooks, setAllBooks] = useState([]);

    const getData = () => {
        let temp = [
            {
                id: 1,
                image: "https://picsum.photos/600/400",
                title: "The GFG Book",
                author: "Harshal Jain",
            },
            {
                id: 2,
                image: "https://picsum.photos/600/500",
                title: "The GFG Book",
                author: "Harshal Jain",
            },
            {
                id: 3,
                image: "https://picsum.photos/600/600",
                title: "The GFG Book",
                author: "Harshal Jain",
            },
            {
                id: 4,
                image: "https://picsum.photos/600/300",
                title: "The GFG Book",
                author: "Harshal Jain",
            },
        ];

        setAllBooks(temp);

    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.row}>
                <div className={styles.left}>
                    <div className={styles.menuMain}>
                        <FaBookOpen className={styles.bookicon} />
                        <p>Library</p>
                        {show ? (
                            <FaChevronDown
                                onClick={() => setShow(!show)}
                                className={styles.toRight}
                            />
                        ) : (
                            <FaChevronRight
                                onClick={() => setShow(!show)}
                                className={styles.toRight}
                            />
                        )}
                    </div>
                    {
                        show &&
                        <div className={styles.menuItems}>
                            <span>All Titles</span>
                            <span>Books</span>
                            <span>Comics</span>
                            <span>Samples</span>
                        </div>

                    }
                    <div className={styles.menuMain}>
                        <MdBook className={styles.bookicon2} />
                        <p>Notes & Highlights</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>Trending</h1>
                    <div className={styles.books}>
                        {allBooks.map((book: any) => (
                            <div onClick={() => {
                                router.push(`/book/${book.id}`)
                            }} key={book.id} className={styles.bookItem}>
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className={styles.bookImage}
                                />

                                <div className={styles.bookDetails}>
                                    <h3 className={styles.bookTitle}>
                                        {book.title}
                                    </h3>
                                    <p className={styles.bookAuthor}>
                                        {book.author}
                                    </p>
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page