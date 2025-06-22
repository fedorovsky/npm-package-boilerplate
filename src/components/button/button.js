import { jsx as _jsx } from "react/jsx-runtime";
import styles from './button.module.css';
export const Button = () => {
    return _jsx("button", { className: styles.button, children: "Click me!" });
};
