wp.blocks.registerBlockType("azaber/portfolio-item", {
  title: "Portfolio Item",
  icon: "insert",
  category: "design",
  attributes: {
    title: { type: "string" },
    category: { type: "string" },
    selector: { type: "string" },
    imagePath: { type: "string" },
  },
  edit: function (props) {
    function updateTitle(event) {
      props.setAttributes({ title: event.target.value });
    }
    function updateCategory(event) {
      props.setAttributes({ category: event.target.value });
    }

    function updateSelector(event) {
      props.setAttributes({ selector: event.target.value });
    }

    function updateImage(event) {
      props.setAttributes({ imagePath: event.target.value });
    }

    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("label", null, "Title: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.title,
        onChange: updateTitle,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Category: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.category,
        onChange: updateCategory,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Selector: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.selector,
        onChange: updateSelector,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Image: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.image,
        onChange: updateImage,
      }),
      /*#__PURE__*/ React.createElement("br", null)
    );
  },
  save: function (props) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        class: `col-lg-4 col-md-6 portfolio-item wow zoomIn ${props.attributes.selector}`,
        "data-wow-delay": "0.6s",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "position-relative rounded overflow-hidden",
        },
        /*#__PURE__*/ React.createElement("img", {
          class: "img-fluid w-100",
          src: props.attributes.imagePath,
          alt: "",
        }),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            class: "portfolio-overlay",
          },
          /*#__PURE__*/ React.createElement(
            "a",
            {
              class: "btn btn-light",
              href: props.attributes.imagePath,
              "data-lightbox": "portfolio",
            },
            /*#__PURE__*/ React.createElement("i", {
              class: "fa fa-plus fa-2x text-primary",
            })
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              class: "mt-auto",
            },
            /*#__PURE__*/ React.createElement(
              "small",
              {
                class: "text-white",
              },
              /*#__PURE__*/ React.createElement("i", {
                class: "fa fa-folder me-2",
              }),
              props.attributes.category
            ),
            /*#__PURE__*/ React.createElement(
              "a",
              {
                class: "h5 d-block text-white mt-1 mb-0",
                href: "",
              },
              props.attributes.title
            )
          )
        )
      )
    );
  },
});
