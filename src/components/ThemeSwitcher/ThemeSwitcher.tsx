import { useEffect, useState } from "react";
import { ReactComponent as Moon } from "assets/icon-moon.svg";
import { ReactComponent as Sun } from "assets/icon-sun.svg";

import styles from "./ThemeSwitcher.module.scss";


export const ThemeSwitcher = () => {
    const [dark, setDark] = useState(false);
    const themeText = dark ? "Light" : "Dark";
    const ThemeIcon = dark ? Sun : Moon;

    useEffect(() => {
        document.body.setAttribute("data-theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className={styles.switcher} onClick={() => setDark(!dark)}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon} />
        </div>
    );
};
