const selectStyle = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#2a2a2a",
        color: "#ddd",
        borderColor: state.isFocused ? "#888" : "#555",
        boxShadow: "none",
        "&:hover": { borderColor: "#888" },
        minHeight: "32px",
        minWidth: "15rem"
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#2a2a2a",
        border: "1px solid #555"
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused
            ? "#444"
            : state.isSelected
                ? "#555"
                : "transparent",
        color: "#ddd",
        cursor: "pointer",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#ddd",
    }),
    input: (provided) => ({
        ...provided,
        color: "#ddd",
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingRight: 0,
        minWidth: 1,
        flex: 1
    }),
};

export { selectStyle };