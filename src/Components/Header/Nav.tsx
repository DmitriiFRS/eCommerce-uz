import { nav } from "./Header.data";
import styles from "./Header.module.scss";
import Link from "next/link";

function Nav() {
   return (
      <nav className={styles.header__nav}>
         <ul className={styles.header__navlist}>
            {nav.map((el) => {
               return (
                  <li className={styles.header__navItem} key={el.id}>
                     <Link href={el.href} style={{ color: "inherit" }}>
                        {el.title}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
export default Nav;
