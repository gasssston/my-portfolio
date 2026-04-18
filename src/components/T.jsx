import { useEffect, useState } from "react";
import i18next from "i18next";
import { initI18n } from "../i18n/i18n.js";

export default function T({ k }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    initI18n().then(() => {
      setValue(i18next.t(k));

      i18next.on("languageChanged", () => {
        setValue(i18next.t(k));
      });
    });
  }, []);

  return value;
}
