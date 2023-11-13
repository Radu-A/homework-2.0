const License = () => {
  return (
    <div className="license-div">
      <p className="license-paragraph">
        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" />
        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" />
        <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" />
      </p>
      <p className="license-paragraph">
        <a href="https://github.com/Radu-A/homework-2.0" target="blank">
          Homework{" "}
        </a>
        by
        <a href="https://github.com/Radu-A"> Víctor Outeiro </a>
      </p>
      <p className="license-paragraph">
        is licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
        >
          CC BY-NC 4.0
        </a>
      </p>
    </div>
  );
};

export default License;
