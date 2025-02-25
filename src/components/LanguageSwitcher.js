const LanguageSwitcher = () => {
  const changeLanguage = (langCode) => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      selectField.value = langCode;
      selectField.dispatchEvent(new Event("change"));
    }
    // if (langCode == "ar") {
    //   document.documentElement.dir = "rtl";
    // } else {
    //   document.documentElement.dir = "ltr";
    // }
  };
  const reloud = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };
  return (
    <div className="p-2" onClick={reloud}>
      <button
        className="btn btn-success btn-sm d-block mb-2"
        onClick={() => changeLanguage("ar")}
      >
        arabic
      </button>
      <button
        className="btn btn-success btn-sm d-block mb-2"
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className="btn btn-success btn-sm d-block"
        onClick={() => changeLanguage("fr")}
      >
        frunch
      </button>
    </div>
  );
};

export default LanguageSwitcher;
