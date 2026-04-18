import { useEffect, useState } from "react";
import i18next from "i18next";
import { initI18n } from "../i18n/i18n.js";

export default function InputT({ name, type = "text", k, ...props }) {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    initI18n().then(() => {
      setPlaceholder(i18next.t(k));

      i18next.on("languageChanged", () => {
        setPlaceholder(i18next.t(k));
      });
    });
  }, []);

  return <input name={name} type={type} placeholder={placeholder} {...props} />;
}
