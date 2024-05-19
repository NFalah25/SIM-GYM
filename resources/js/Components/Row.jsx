function Row({ children, orientation = "vertical" }) {
    return (
        <div
            className={`mb-5 flex ${orientation === "vertical" ? "flex-col gap-7" : "items-center justify-between"}`}
        >
            {children}
        </div>
    );
}

export default Row;
