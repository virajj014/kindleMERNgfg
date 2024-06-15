import React from 'react'
import styles from './Navbar.module.css';
import { IoSearchOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { TbArrowsSort } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <span className={styles.logo}>kindle</span>
                <div className={styles.searchBox}>
                    <IoSearchOutline className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search your Kindle"
                        className={styles.searchInput}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.menuItem}>
                    <LuSettings2 className={styles.filterIcon} />
                    <span className={styles.menuText}>Filter</span>

                </div>

                <div className={styles.menuItem}>

                    <TbArrowsSort className={styles.sortIcon} />

                    <span className={styles.menuText}>Sort by: Recent</span>
                </div>
                <div className={styles.menuItem}>

                    <BsFillGrid3X3GapFill className={styles.viewIcon} />

                    <span className={styles.menuText}>View</span>
                </div>
                <div className={styles.menuItem}>

                    <LuShoppingCart className={styles.cartIcon} />

                </div>
                <div className={styles.menuItem}>

                    <BsThreeDotsVertical className={styles.moreIcon} />

                </div>
            </div>
        </nav>
    )
}

export default Navbar