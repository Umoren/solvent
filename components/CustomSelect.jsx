import Select from "react-select";
const colourStyles = {
    control: (styles) => {
        return {
            ...styles,

            background: "#fff",
            backgroundImage: "url('data:image/svg+xml;utf8,<svg fill='white' height='40' viewBox='0 0 24 24' width='40' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>')",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "100 %",
            backgroundPositionY: "5px",
            outline: 0,
            marginTop: " 2rem",
            color: "#000",
            padding: "1rem",
            paddingRight: "2rem",
            width: "480px",
            cursor: "pointer",
            textTransform: "uppercase",
            "@media only screen and (max-width: 768px)": {
                ...styles["@media only screen and (max-width: 768px)"],
                width: '100%',
            },
        }
    },
    option: (styles) => {
        return {
            ...styles,
            color: "#FFF",
            background: "#000",
            cursor: 'pointer',
            padding: '1.5rem',
            border: '0.5px solid rgba(255, 255, 255, 0.3)',
            "&:hover": {
                background: "#fff",
                color: "#000",
            }
        };
    }
};


let items = [
    { label: "Newspaper Publications", value: "newspaperPublication" },
    { label: "Newspaper Publication (Backdated)", value: "newspaperBackdated", },
    { label: " International Publications ", value: "international", },
    { label: "CAPTIONS GENERATION & COPYWRITE", value: "captions", },
    { label: "Google Knowledge Panel", value: "wikipedia", },
    { label: "Media Cleanup ", value: "mediaCleanup", }
];

if (typeof window !== "undefined") {

    localStorage.setItem('valueItems', { ...items })

}

export default function CustomSelect({ onChange, value, placeholder }) {

    return (
        <div>
            <Select
                defaultValue={items[value]}
                label="Single select"
                options={items}
                onChange={onChange}
                styles={colourStyles}
                value={items}
                placeholder={placeholder}
            />
        </div>
    );
}